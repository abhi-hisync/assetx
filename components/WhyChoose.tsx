import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/SectionTitle'
import { Rocket, CheckCircle2, Smartphone, Cloud, Zap, Lock } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Fast Onboarding', desc: 'Start quickly with intuitive setup and guided imports.' },
  { icon: CheckCircle2, title: 'Compliance Ready', desc: 'Standards-aligned processes out of the box.' },
  { icon: Smartphone, title: 'Mobile-First', desc: 'Scan, update, and approve on the go.' },
  { icon: Cloud, title: 'Scalable Cloud', desc: 'Secure, scalable, and globally available.' },
  { icon: Zap, title: 'Automation', desc: 'Streamline recurring tasks and save hours weekly.' },
  { icon: Lock, title: 'Enterprise Security', desc: 'Role-based access, SSO, and audit trails.' },
]

export function WhyChoose() {
  return (
    <section id="why" className="section">
      <div className="container">
        <SectionTitle title="Why Choose AssetX?" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-brand/10 p-2 text-brand"><Icon className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-slate-600">{desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


