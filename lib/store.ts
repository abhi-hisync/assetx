import { promises as fs } from 'fs'
import path from 'path'

export type Contact = {
  id: string
  name: string
  email: string
  company?: string
  interest?: string
  message?: string
  createdAt: string
}

const DATA_DIR = path.join(process.cwd(), 'data')
const CONTACTS_PATH = path.join(DATA_DIR, 'contacts.json')

async function ensureStore() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
    await fs.access(CONTACTS_PATH)
  } catch {
    await fs.writeFile(CONTACTS_PATH, JSON.stringify([]), 'utf8')
  }
}

export async function getContacts(): Promise<Contact[]> {
  await ensureStore()
  const raw = await fs.readFile(CONTACTS_PATH, 'utf8')
  try {
    const data = JSON.parse(raw)
    return Array.isArray(data) ? (data as Contact[]) : []
  } catch {
    return []
  }
}

export async function addContact(contact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact> {
  await ensureStore()
  const all = await getContacts()
  const entry: Contact = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...contact,
  }
  all.unshift(entry)
  await fs.writeFile(CONTACTS_PATH, JSON.stringify(all, null, 2), 'utf8')
  return entry
}


