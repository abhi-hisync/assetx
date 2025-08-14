"use client"
import { SectionTitle } from '@/components/SectionTitle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import * as React from 'react'

export function ConsultationForm() {
  const [submitted, setSubmitted] = React.useState(false)
  const [interest, setInterest] = React.useState('AssetX Platform')
  return (
    <section id="contact-form" className="section scroll-mt-24">
      <div className="container">
        <SectionTitle title="Schedule Your Free Consultation" description="Tell us a bit about your needs and we’ll reach out shortly." />
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget as HTMLFormElement
            const formData = new FormData(form)
            await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                company: formData.get('company'),
                interest: formData.get('interest'),
                message: formData.get('message'),
              }),
            })
            setSubmitted(true)
            form.reset()
            setTimeout(() => setSubmitted(false), 2500)
          }}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div>
            <Label className="mb-1 block">Name</Label>
            <Input name="name" required placeholder="Jane Doe" />
          </div>
          <div>
            <Label className="mb-1 block">Email</Label>
            <Input name="email" required type="email" placeholder="jane@company.com" />
          </div>
          <div>
            <Label className="mb-1 block">Company</Label>
            <Input name="company" placeholder="Acme Inc." />
          </div>
          <div>
            <Label className="mb-1 block">Product Interest</Label>
            <Select value={interest} onValueChange={setInterest}>
              <SelectTrigger>
                <SelectValue placeholder="AssetX Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AssetX Platform">AssetX Platform</SelectItem>
                <SelectItem value="Mobile App">Mobile App</SelectItem>
                <SelectItem value="Integrations">Integrations</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="interest" value={interest} />
          </div>
          <div className="md:col-span-2">
            <Label className="mb-1 block">Message</Label>
            <textarea name="message" className="h-28 w-full rounded-md border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Tell us about your requirements" />
          </div>
          <div className="md:col-span-2">
            <Button className="w-full md:w-auto" type="submit">{submitted ? 'Submitted!' : 'Submit Request'}</Button>
          </div>
        </form>
      </div>
    </section>
  )
}


