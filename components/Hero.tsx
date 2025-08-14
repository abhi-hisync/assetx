"use client"
import { Button } from '@/components/ui/button'
import { Clock3, BarChart3, Smartphone, RefreshCw, ChevronRight, Play } from 'lucide-react'

const features = [
  { icon: Clock3, text: '70% Time Reduction' },
  { icon: BarChart3, text: 'Automated Verification' },
  { icon: Smartphone, text: 'Mobile & Web Ready' },
  { icon: RefreshCw, text: 'Real-time Updates' },
]

export function Hero() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand text-white">
      {/* decorative lighting */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold md:text-5xl">
            Introducing <span className="text-brand-light">AssetX</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/90 leading-relaxed">
            Powered by <strong>20+ years</strong> of consulting and IT innovation<br />
            — now supercharged with AI.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="hover-lift-sm flex items-center gap-3 rounded-lg bg-white/95 px-4 py-3 text-slate-700 shadow-sm">
                <Icon className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="flex items-center gap-2 px-6 py-3 shadow-lg">
              <a href="#contact-form">
                Start Free Trial
              <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="secondary" className="bg-white/90 px-6 py-3 text-brand hover:bg-white">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="relative mx-auto aspect-[9/19] w-64 rounded-[2.5rem] border-8 border-white/10 bg-white shadow-2xl md:w-80">
            {/* Top badge */}
            <div className="absolute -top-4 left-8 rounded-lg bg-emerald-500/95 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
              70%<br />
              <span className="text-[10px] font-medium">Time Saved</span>
            </div>
            
            {/* Screen content */}
            <div className="absolute inset-3 rounded-[2rem] bg-slate-50 p-6">
              {/* Status bar / notch */}
              <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-slate-300" />
              
              {/* App content */}
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">HISYNC</h3>
                <p className="text-xs text-slate-500">Next-Gen Asset Control</p>
              </div>
              
              {/* Info card */}
              <div className="mt-6 rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-brand">
                  20+ years of<br />
                  consulting and IT<br />
                  innovation — now<br />
                  supercharged<br />
                  with AI.
                </p>
              </div>
              
              {/* CTA Button */}
              <button className="mt-4 w-full rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-sm">
                Let's Get Started
              </button>
            </div>
            
            {/* Bottom badge */}
            <div className="absolute -bottom-4 right-8 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-brand shadow-lg">
              AI<br />
              <span className="text-[10px] font-medium">Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


