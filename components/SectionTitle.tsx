import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  onDark?: boolean
}

export function SectionTitle({ eyebrow, title, description, align = 'center', onDark = false }: Props) {
  return (
    <div className={cn('mb-10 md:mb-12', align === 'center' ? 'text-center' : 'text-left')}> 
      {eyebrow && (
        <p className={cn('text-xs uppercase tracking-wider', onDark ? 'text-white/70' : 'text-brand')}>{eyebrow}</p>
      )}
      <h2 className={cn('mt-2 text-2xl font-bold tracking-tight md:text-3xl', onDark ? 'text-white' : undefined)}>{title}</h2>
      {description && (
        <p className={cn('mx-auto mt-3 max-w-2xl', onDark ? 'text-white/80' : 'text-slate-600')}>{description}</p>
      )}
    </div>
  )
}


