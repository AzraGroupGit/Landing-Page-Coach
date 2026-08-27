import { ArrowUpRight } from '@phosphor-icons/react'

const base =
  'group inline-flex items-center justify-between gap-6 rounded-full pl-6 pr-2 py-2 text-sm font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]'

const shell = {
  solid: 'bg-cream text-night hover:bg-gold',
  gold: 'bg-gold text-night hover:bg-cream',
  ghost: 'bg-transparent text-cream ring-1 ring-line hover:ring-gold/60',
  outline: 'bg-transparent text-cream ring-1 ring-gold/40 hover:ring-gold',
}

const circle = {
  solid: 'bg-night/10 text-night ring-1 ring-night/10',
  gold: 'bg-night/10 text-night ring-1 ring-night/10',
  ghost: 'bg-gold/15 text-gold ring-1 ring-gold/30',
  outline: 'bg-gold/15 text-gold ring-1 ring-gold/30',
}

export default function Button({
  href = '#',
  children,
  variant = 'solid',
  className = '',
  ...props
}) {
  return (
    <a
      href={href}
      className={`${base} ${shell[variant]} ${className}`}
      {...props}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${circle[variant]}`}
      >
        <ArrowUpRight size={15} weight="light" />
      </span>
    </a>
  )
}
