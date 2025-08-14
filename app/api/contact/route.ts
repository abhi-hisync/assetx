import { NextRequest, NextResponse } from 'next/server'
import { addContact, getContacts } from '@/lib/store'

export async function GET(req: NextRequest) {
  // simple basic auth via ?key= or header
  const url = new URL(req.url)
  const key = url.searchParams.get('key') || req.headers.get('x-admin-key')
  if ((process.env.ADMIN_KEY || 'admin123') !== (key || '')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const items = await getContacts()
  return NextResponse.json({ items })
}

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => null as any)
  if (!data || !data.name || !data.email) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }
  const entry = await addContact({
    name: data.name,
    email: data.email,
    company: data.company,
    interest: data.interest || undefined,
    message: data.message,
  })
  return NextResponse.json({ ok: true, entry })
}


