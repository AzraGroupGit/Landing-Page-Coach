import { useEffect, useRef, useState } from 'react'
import Logo from './Logo.jsx'
import { gsap } from '../lib/gsap.js'

const links = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Masterclass', href: '#masterclass' },
  { label: 'Privat', href: '#privat' },
  { label: 'Pembicara', href: '#pembicara' },
  { label: 'Klien', href: '#klien' },
]

const sectionIds = ['top', 'tentang', 'masterclass', 'privat', 'pembicara', 'klien']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')
  const menuRef = useRef(null)
  const triggerRef = useRef(null)
  const prevOpen = useRef(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 32)

      const delta = y - lastY.current
      if (y <= 160 || delta < -8) {
        setHidden(false)
      } else if (delta > 8) {
        setHidden(true)
      }
      lastY.current = y

      let current = 'top'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y + 160) {
          current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!headerRef.current) return
    gsap.to(headerRef.current, {
      yPercent: hidden ? -110 : 0,
      autoAlpha: hidden ? 0 : 1,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }, [hidden])

  useEffect(() => {
    if (prevOpen.current && !open) {
      triggerRef.current?.focus()
    }
    prevOpen.current = open

    document.body.style.overflow = open ? 'hidden' : ''

    if (!open) return

    const menu = menuRef.current
    const items = menu
      ? Array.from(menu.querySelectorAll('a[href], button'))
      : []
    const first = items[0]
    const last = items[items.length - 1]
    first?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || items.length === 0) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        ref={headerRef}
        inert={hidden && !open}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5"
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? 'bg-char/70 ring-1 ring-line shadow-[0_8px_40px_-12px_rgba(201,169,106,0.12)] backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-3 pl-2">
            <Logo className="h-9 w-9 text-cream" />
            <span className="hidden font-display text-xl font-medium tracking-tight text-cream sm:block">
              Coach Joko
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    active === l.href.slice(1)
                      ? 'text-cream'
                      : 'text-cream/70 hover:bg-white/5 hover:text-cream'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px bg-gold transition-opacity duration-300 ${
                      active === l.href.slice(1) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#kontak"
              className="inline-flex items-center rounded-full bg-cream px-5 py-3 text-[13px] font-semibold text-night transition-colors duration-300 hover:bg-gold"
            >
              Jadwalkan Konsultasi
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            ref={triggerRef}
            className="relative grid h-11 w-11 place-items-center rounded-full ring-1 ring-line lg:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-cream transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-[4px]'
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-cream transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-[4px]'
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        inert={!open}
        ref={menuRef}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-night/95 backdrop-blur-2xl transition-opacity duration-500 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="px-10">
          <ul className="space-y-2">
            {links.map((l, i) => (
              <li
                key={l.href}
                style={{ transitionDelay: open ? `${0.08 + i * 0.06}s` : '0s' }}
                className={`transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-4xl font-medium tracking-tight text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? '0.45s' : '0s' }}
            className={`mt-10 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-night transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Jadwalkan Konsultasi
          </a>
        </nav>
      </div>
    </>
  )
}
