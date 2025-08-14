"use client"
import { SectionTitle } from '@/components/SectionTitle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

type Plan = {
  name: string
  monthly: string
  annually: string
  blurb: string
  features: string[]
  highlight?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: '$29',
    annually: '$24',
    blurb: 'Up to 1,000 active rows, ideal for individuals or small teams.',
    features: ['Asset Lifecycle Management', 'Basic Reporting & Analytics', 'Mobile App Access', 'Standard Support'],
  },
  {
    name: 'Growth',
    monthly: '$79',
    annually: '$65',
    blurb: 'Up to 5,000 active rows, for growing businesses with expanding asset portfolios.',
    features: ['All Starter features', 'Budget & Project Management', 'Advanced Reporting & Analytics', 'Workflow & Approvals', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    monthly: '$149',
    annually: '$125',
    blurb: 'Up to 10,000 active rows, engineered for complex organizations and teams.',
    features: ['All Growth features', 'Finance Management', 'Procurement Module', 'Inventory Management', 'Dedicated Account Manager'],
    highlight: true,
  },
  {
    name: 'Custom',
    monthly: 'Custom',
    annually: 'Custom',
    blurb: '10,000+ active rows, tailored solutions for enterprise requirements.',
    features: ['Unlimited active rows', 'All Enterprise features', 'Custom Integrations', 'On-premise Deployment Options', 'Advanced Security Features', '24/7 Premium Support', 'Dedicated Development Team'],
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly')
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <section id="pricing" className="section bg-slate-50">
      <div className="container">
        <div className="text-center">
          <SectionTitle title="Flexible Pricing for Every Scale" description="Choose the perfect AssetX plan that fits your data volume and business needs, with transparent pricing and powerful features designed for efficient asset management." />
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 text-sm">
            <button onClick={() => setBilling('monthly')} className={`rounded-full px-4 py-1.5 ${billing==='monthly' ? 'bg-brand text-white' : 'text-slate-700'}`}>Monthly</button>
            <button onClick={() => setBilling('annually')} className={`rounded-full px-4 py-1.5 ${billing==='annually' ? 'bg-brand text-white' : 'text-slate-700'}`}>Annually</button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4" role="radiogroup" aria-label="Pricing plans">
          {plans.map((p) => {
            const isSelected = selected === p.name
            return (
              <Card
                key={p.name}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelected(p.name)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelected(p.name)
                  }
                }}
                className={`flex h-full cursor-pointer flex-col transition-all duration-200 ${
                  isSelected
                    ? 'border-2 border-brand shadow-lg shadow-brand/10 scale-[1.01]'
                    : 'card-hover'
                }`}
              >
              <CardHeader className="pb-4">
                <h3 className="text-sm font-semibold text-slate-600">{p.name}</h3>
                <CardTitle className="mt-1 flex items-end gap-2">
                  <span className={`text-3xl font-extrabold ${isSelected ? 'text-brand' : 'text-slate-900'}`}>
                    {billing === 'monthly' ? p.monthly : p.annually}
                  </span>
                  {p.monthly !== 'Custom' && <span className="text-sm font-medium text-slate-500">/month</span>}
                </CardTitle>
                <p className="mt-1 text-sm text-slate-600">{p.blurb}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-0">
                <Button
                  className="w-full h-10"
                  variant={isSelected ? 'default' : 'secondary'}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected(p.name)
                  }}
                >
                  {p.name === 'Custom' ? 'Contact Sales' : 'Choose Plan'}
                </Button>
              </CardFooter>
            </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


