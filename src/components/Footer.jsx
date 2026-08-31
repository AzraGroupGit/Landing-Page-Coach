import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  WhatsappLogo,
  MapPin,
} from '@phosphor-icons/react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import Logo from './Logo.jsx'
import { waLink, WA_MESSAGES, SOCIALS } from '../lib/config.js'

const socialList = [
  { ...SOCIALS.instagram, Icon: InstagramLogo },
  { ...SOCIALS.facebook, Icon: FacebookLogo },
  { ...SOCIALS.tiktok, Icon: TiktokLogo },
]

const legal = [
  { label: 'Kebijakan Privasi', href: '#privasi' },
  { label: 'Syarat & Ketentuan', href: '#syarat' },
]

export default function Footer() {
  return (
    <>
      <section
        id="kontak"
        className="relative overflow-hidden px-6 py-32 text-center md:py-48"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />

        <div className="relative mx-auto w-full max-w-4xl">
          <Reveal>
            <h2 className="font-display text-[clamp(3rem,6vw,6rem)] font-medium leading-[1.02] tracking-tight text-cream">
              Bisnis Tidak Harus Dibangun{' '}
              <span className="italic text-gold">Sendirian</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-[48ch] text-[15px] leading-relaxed text-mist">
              Setiap bisnis memiliki tantangan dan kebutuhan yang berbeda.
              Ceritakan kondisi bisnis Anda, lalu temukan bentuk pembelajaran
              atau pendampingan yang paling sesuai.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-[44ch] font-display text-lg italic text-gold">
              Mulai dari kelas intensif, pendampingan privat, atau hadirkan
              Coach Joko dalam kegiatan Anda.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <Button href={waLink(WA_MESSAGES.general)} variant="gold">
                Konsultasikan Kebutuhan Saya
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 pb-10">
        <div className="mx-auto w-full max-w-6xl border-t border-line pt-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xs">
              <a href="#top" className="flex items-center gap-3">
                <Logo className="h-9 w-9 text-cream" />
                <span className="font-display text-xl font-medium tracking-tight text-cream">
                  Coach Joko
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-mist">
                Menumbuhkan Bisnis. Menguatkan Sistem. Membangun Superteam.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2.5 text-[13px] font-semibold text-gold ring-1 ring-gold/30 transition-colors duration-300 hover:bg-gold hover:text-night"
              >
                <WhatsappLogo size={16} weight="light" />
                Chat WhatsApp
              </a>

              <ul className="flex items-center gap-3">
                {socialList.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-line text-cream/70 transition-colors duration-300 hover:bg-gold hover:text-night hover:ring-gold"
                    >
                      <Icon size={18} weight="light" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-cream/70">
                <MapPin size={16} weight="light" />
                <span className="text-sm">Yogyakarta, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-[13px] text-mist sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Joko Wardiyanto. Seluruh hak cipta dilindungi.</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
