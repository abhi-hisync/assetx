"use client"
import useSWR from 'swr'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function AdminPage() {
  const [key, setKey] = useState('')
  const { data, error, isLoading, mutate } = useSWR(key ? `/api/contact?key=${encodeURIComponent(key)}` : null, fetcher)

  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-bold">Admin • Contact Submissions</h1>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Input value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter admin key (default: admin123)" className="w-72" />
        <Button onClick={() => mutate()}>Load</Button>
      </div>
      {isLoading && <p>Loading…</p>}
      {error && <p className="text-red-600">Failed to load</p>}
      {data && (
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left">Created</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Email</th>
                <th className="px-3 py-2 text-left">Company</th>
                <th className="px-3 py-2 text-left">Interest</th>
                <th className="px-3 py-2 text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {data.items?.map((row: any) => (
                <tr key={row.id} className="border-t">
                  <td className="px-3 py-2 whitespace-nowrap">{new Date(row.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{row.name}</td>
                  <td className="px-3 py-2">{row.email}</td>
                  <td className="px-3 py-2">{row.company || '-'}</td>
                  <td className="px-3 py-2">{row.interest || '-'}</td>
                  <td className="px-3 py-2 max-w-[400px]">{row.message || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}


