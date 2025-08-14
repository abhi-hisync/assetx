"use client"
import { motion } from 'framer-motion'
import { Smartphone, Monitor, Sparkles, TrendingUp, BarChart3, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProductHero() {
  return (
    <section className="relative min-h-screen items-center bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100 px-4 pt-[72px] lg:flex">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <motion.div animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-1/4 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/40 to-indigo-200/40 blur-3xl" />
        <motion.div animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 0.9, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-20 left-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-slate-200/50 to-blue-200/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="relative space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center rounded-full bg-white/40 px-6 py-3 text-sm font-medium text-slate-700 shadow-md backdrop-blur-sm"> <Sparkles className="mr-2 h-4 w-4 text-blue-600" /> Make Investment Decisions</span>
            </div>
            <h1 className="text-5xl font-bold leading-[0.9] tracking-tight text-slate-800 md:text-6xl lg:text-7xl">
              Introducing
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">AssetX</span>
            </h1>
            <div className="space-y-6">
              <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-slate-600 md:text-2xl lg:mx-0">
                Powered by <span className="font-semibold text-blue-700">20+ years</span> of consulting and IT innovation — now supercharged with AI.
              </p>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0">
                {[
                  { icon: <TrendingUp className="h-5 w-5" />, text: '70% Time Reduction' },
                  { icon: <BarChart3 className="h-5 w-5" />, text: 'Automated Verification' },
                  { icon: <Smartphone className="h-5 w-5" />, text: 'Mobile & Web Ready' },
                  { icon: <Monitor className="h-5 w-5" />, text: 'Real-time Updates' },
                ].map((item, i) => (
                  <div key={i} className="group flex items-center space-x-3 rounded-lg border-0 bg-white/30 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/40 hover:shadow-md">
                    <div className="text-blue-600 transition-colors group-hover:text-blue-700">{item.icon}</div>
                    <span className="text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-6 sm:flex-row lg:justify-start">
              <Button asChild className="px-8 py-4 text-base">
                <a href="#contact-form" className="flex items-center gap-2">Start Free Trial<ArrowRight className="h-5 w-5" /></a>
              </Button>
              <Button variant="secondary" className="px-8 py-4 text-base">Watch Demo</Button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle glow effect behind phone */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-300/20 to-slate-300/20 blur-2xl scale-105"></div>

              {/* Phone mockup */}
              <div className="relative h-[600px] w-80 rounded-[3rem] border border-slate-300/20 bg-gradient-to-br from-slate-800 to-slate-900 p-3 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50">
                  {/* Phone screen content */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="space-y-6 text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl">
                        <BarChart3 className="h-10 w-10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-slate-800">HISYNC</h3>
                        <p className="text-sm text-blue-600">Next-Gen Asset Control</p>
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-xl border border-slate-200/50 bg-white/60 p-4 text-slate-700 shadow-lg backdrop-blur-sm">
                          <div className="mb-1 text-sm text-blue-600">Powered by</div>
                          <div className="text-lg font-bold text-slate-800">20+ years of</div>
                          <div className="text-base text-slate-600">Consulting and IT</div>
                          <div className="text-base text-slate-600">innovation</div>
                          <div className="mt-2 text-sm text-blue-600">—</div>
                          <div className="text-lg font-bold text-blue-700">now</div>
                          <div className="text-lg font-bold text-blue-700">supercharge</div>
                          <div className="text-lg font-bold text-blue-700">d with AI.</div>
                        </div>
                        <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-indigo-700">
                          Let's Get Started
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phone notch */}
                  <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 transform rounded-b-2xl bg-slate-900"></div>
                </div>
              </div>

              {/* Enhanced floating elements around phone */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-8 -top-8 rounded-2xl border border-emerald-200/50 bg-gradient-to-br from-emerald-100/80 to-teal-100/80 p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-emerald-600">70%</div>
                <div className="text-xs text-emerald-500">Time Saved</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-100/80 to-cyan-100/80 p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-blue-600">AI</div>
                <div className="text-xs text-blue-500">Powered</div>
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/4 -right-16 h-12 w-12 rounded-full border-2 border-blue-300/40"
              ></motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-1/4 -left-16 h-8 w-8 rotate-45 rounded-lg bg-gradient-to-r from-purple-200/60 to-indigo-200/60"
              ></motion.div>

              {/* Additional bouncing elements */}
              <motion.div
                animate={{ x: [0, 15, 0], y: [0, -15, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 -left-20 h-6 w-6 rounded-full bg-gradient-to-r from-pink-200/60 to-rose-200/60 shadow-lg"
              ></motion.div>

              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-1/3 -right-20 h-16 w-4 rounded-full bg-gradient-to-b from-cyan-200/50 to-blue-200/50 shadow-lg"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


