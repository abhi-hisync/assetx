import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand text-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} AssetX. All rights reserved.</p>
        <nav className="flex gap-6 text-sm">
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="#why" className="hover:underline">Why</Link>
          <Link href="#tech" className="hover:underline">Technology</Link>
          <Link href="#pricing" className="hover:underline">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="GitHub" className="opacity-80 hover:opacity-100"><Github className="h-5 w-5" /></Link>
          <Link href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100"><Twitter className="h-5 w-5" /></Link>
          <Link href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><Linkedin className="h-5 w-5" /></Link>
        </div>
      </div>
    </footer>
  )
}


