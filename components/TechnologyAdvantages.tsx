import { SectionTitle } from '@/components/SectionTitle'
import { Card, CardContent } from '@/components/ui/card'
import { Cloud, SmartphoneNfc, PlugZap, Shield, Brain, MapPin } from 'lucide-react'
import Image from 'next/image'

const items = [
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    desc: 'Leverage flexible, scalable, and secure cloud infrastructure with zero maintenance.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: SmartphoneNfc,
    title: 'Mobile App with Offline Capabilities',
    desc: 'Scan and update assets on the go. Fully functional in low-connectivity environments.',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: PlugZap,
    title: 'Robust Integration Options',
    desc: 'Connect ERP, CRM, and data warehouses using flexible APIs and webhooks.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Shield,
    title: 'Advanced Security Features',
    desc: 'Encryption, SSO, multi-factor authentication, and comprehensive audit logs.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Brain,
    title: 'AI‑Powered Predictive Maintenance',
    desc: 'Predict failures, reduce downtime, and extend asset life with machine learning.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: MapPin,
    title: 'GPS and RFID Tracking',
    desc: 'Real‑time location visibility and geofencing with integrated GPS/RFID.',
    img: 'https://images.unsplash.com/photo-1502920917128-1aa500764b84?q=80&w=800&auto=format&fit=crop',
  },
]

export function TechnologyAdvantages() {
  return (
    <section id="tech" className="section">
      <div className="container">
        <SectionTitle title="Technology Advantages" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, img }) => (
            <Card key={title} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-brand/10 p-2 text-brand"><Icon className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-slate-600">{desc}</p>
                  </div>
                </div>
                <div className="mt-4 overflow-hidden rounded-lg bg-slate-50">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={img} alt={title} fill className="object-cover" />
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


