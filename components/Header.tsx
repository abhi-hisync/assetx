"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 font-extrabold text-brand">
          <span>AssetX</span>
        </Link>

        {/* Center navigation (desktop) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="#" className="nav-link">Home</Link>
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#pricing" className="nav-link">Pricing</Link>
          <Link href="#tech" className="nav-link">Technology</Link>
          <Link href="#about" className="nav-link">About</Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Button className="hidden md:inline-flex">Start Free Trial</Button>
          <button aria-label="Open menu" className="inline-flex items-center rounded-md p-2 text-slate-700 md:hidden" onClick={() => setOpen((v) => !v)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container py-3">
            <div className="grid gap-3 text-sm">
              <Link href="#" className="nav-link" onClick={() => setOpen(false)}>Home</Link>
              <Link href="#features" className="nav-link" onClick={() => setOpen(false)}>Features</Link>
              <Link href="#pricing" className="nav-link" onClick={() => setOpen(false)}>Pricing</Link>
              <Link href="#tech" className="nav-link" onClick={() => setOpen(false)}>Technology</Link>
              <Link href="#about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
              <Button className="mt-2 w-full" onClick={() => setOpen(false)}>Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


