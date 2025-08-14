import { NextRequest, NextResponse } from 'next/server'
import { addContact, getContacts } from '@/lib/store'

// Ensure Node.js runtime (required for fs-based storage) and disable caching
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

// Admin key configuration: required in production
const ADMIN_KEY = process.env.ADMIN_KEY || (process.env.NODE_ENV !== 'production' ? 'admin123' : undefined)

// Very small in-memory rate limiter for POSTs (per-process)
type RateBucket = { count: number; resetAt: number }
const RATE_WINDOW_MS = 60_000
const RATE_LIMIT = 20
const rateMap = new Map<string, RateBucket>()

function allowRequestForIp(ip: string): boolean {
  const now = Date.now()
  const bucket = rateMap.get(ip)
  if (!bucket || now > bucket.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return true
  }
  if (bucket.count >= RATE_LIMIT) return false
  bucket.count += 1
  return true
}

export async function GET(req: NextRequest) {
  if (!ADMIN_KEY) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }
  // simple basic auth via ?key= or header
  const url = new URL(req.url)
  const key = url.searchParams.get('key') || req.headers.get('x-admin-key')
  if (ADMIN_KEY !== (key || '')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const items = await getContacts()
  return NextResponse.json(
    { items },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  )
}

export async function POST(req: NextRequest) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
  if (!allowRequestForIp(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const data = (await req.json().catch(() => null as any)) as any
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

  const name = (data?.name || '').toString().trim()
  const email = (data?.email || '').toString().trim().toLowerCase()
  const company = data?.company ? data.company.toString().trim() : undefined
  const interest = data?.interest ? data.interest.toString().trim() : undefined
  const message = data?.message ? data.message.toString().trim() : undefined

  if (!name || name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: 'Invalid name' }, { status: 400 })
  }
  if (!email || !emailPattern.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }
  if (message && message.length > 2000) {
    return NextResponse.json({ error: 'Message too long' }, { status: 400 })
  }

  const entry = await addContact({
    name,
    email,
    company,
    interest,
    message,
  })
  return NextResponse.json({ ok: true, entry })
}

// Optional: respond to CORS preflight if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-admin-key',
      'Access-Control-Max-Age': '86400',
    },
  })
}


