"use client"
import Image from 'next/image'
import { Play } from 'lucide-react'
import { SectionTitle } from '@/components/SectionTitle'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'

export function VideoSection() {
  const [open, setOpen] = useState(false)
  return (
    <section className="section bg-brand text-white">
      <div className="container">
        <SectionTitle
          title="See AssetX in Action: A Comprehensive Overview"
          description="Discover how AssetX revolutionizes asset management, from acquisition to disposal, with intuitive features, real‑time tracking, and powerful analytics to minimize downtime."
          onDark
        />
        <div className="mx-auto max-w-3xl">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl hover-lift-sm">
                <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Video" fill className="object-cover opacity-90" />
                <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-brand shadow-lg">
                  <Play className="ml-1 h-8 w-8" />
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader className="p-4">
                <DialogTitle>AssetX Product Overview</DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full overflow-hidden rounded-b-xl">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=${open ? 1 : 0}&rel=0`}
                  title="AssetX Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}


