import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/SectionTitle'
import { Boxes, ShieldCheck, Wrench, Bell, BarChart3, Building2, Wallet, GitBranch, ShoppingCart, ArrowLeftRight, Trash2, ClipboardCheck } from 'lucide-react'

const items = [
  { icon: ClipboardCheck, title: 'Asset Lifecycle Management', desc: 'Track assets from acquisition to disposal for optimal utilization and compliance.' },
  { icon: Wallet, title: 'Budget & Project Management', desc: 'Oversee financial allocations and project progress related to asset deployment.' },
  { icon: Wallet, title: 'Finance Management', desc: 'Integrate asset values with financial reports and depreciation schedules.' },
  { icon: GitBranch, title: 'Workflow & Approvals', desc: 'Automate and streamline asset-related requests and approvals.' },
  { icon: ShoppingCart, title: 'Procurement', desc: 'Manage purchasing across vendors from selection to delivery.' },
  { icon: Boxes, title: 'Inventory Management', desc: 'Maintain accurate records of all assets across sites and storage.' },
  { icon: ArrowLeftRight, title: 'Asset Movement', desc: 'Monitor physical relocation of assets between sites or departments.' },
  { icon: Wrench, title: 'Maintenance', desc: 'Schedule, track, and manage preventive and reactive maintenance.' },
  { icon: Trash2, title: 'Disposal', desc: 'Handle secure end-of-life processes including decommissioning and sale.' },
  { icon: ShieldCheck, title: 'Asset Verification', desc: 'Conduct audits to confirm asset existence and condition.' },
]

export function KeyCapabilities() {
  return (
    <section id="features" className="section bg-slate-50">
      <div className="container">
        <SectionTitle title="Key Capabilities of AssetX" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-brand/10 p-2 text-brand"><Icon className="h-5 w-5" /></div>
                  <CardTitle>{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


