import { gsap, useGSAP } from '../lib/gsap.js'
import usePrefersReducedMotion from '../lib/usePrefersReducedMotion.js'
import Button from './Button.jsx'
import { waLink, WA_MESSAGES } from '../lib/config.js'

const stats = [
  { value: '1.000+', label: 'UMKM didampingi' },
  { value: 'Ribuan', label: 'Peserta belajar' },
  { value: 'Berbagai wilayah', label: 'di Indonesia' },
]

export default function Hero() {
  const reduced = usePrefersReducedMotion()

  useGSAP(() => {
    if (reduced) return
    gsap
      .timeline({ defaults: { ease: 'power4.out' } })
      .fromTo(
        '.hero-media',
        { autoAlpha: 0, scale: 1.06 },
        { autoAlpha: 1, scale: 1, duration: 1.3, ease: 'power3.out' },
        0.2,
      )
      .fromTo(
        '.hero-eyebrow',
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        0.3,
      )
      .fromTo(
        '.hero-line > span',
        { yPercent: 112 },
        { yPercent: 0, stagger: 0.14, duration: 1.1 },
        0.4,
      )
      .fromTo(
        '.hero-sub',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        0.85,
      )
      .fromTo(
        '.hero-tagline',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        0.95,
      )
      .fromTo(
        '.hero-cta',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        1.05,
      )
      .fromTo(
        '.hero-stat',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.7 },
        1.2,
      )
  }, [])

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-10 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="diagonal-lines absolute inset-0" />
        <div className="absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-gold/[0.07] blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-gold/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="hero-eyebrow inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            Professional Business Coach &amp; Mentor
          </p>

          <h1 className="mt-7 font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-[4rem]">
            <span className="hero-line block overflow-hidden">
              <span className="block">Bangun Bisnis yang</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="block">Bertumbuh, Tertata, dan</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="block pb-2 italic text-gold">
                Tidak Bergantung Penuh pada Owner.
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-6 max-w-[46ch] text-base leading-relaxed text-cream/65">
            Saya membantu pelaku UMKM memperjelas arah bisnis, memperkuat
            sistem, dan membangun superteam melalui kelas intensif,
            pendampingan privat, serta pelatihan yang aplikatif.
          </p>

          <p className="hero-tagline mt-4 font-display text-lg italic text-gold">
            Menumbuhkan Bisnis · Menguatkan Sistem · Membangun Superteam
          </p>

          <div className="hero-cta mt-9 flex flex-wrap items-center gap-4">
            <Button href="#program" variant="gold">
              Temukan Program yang Tepat
            </Button>
            <Button href={waLink(WA_MESSAGES.general)} variant="outline">
              Konsultasikan Bisnis Saya
            </Button>
          </div>
        </div>

        <div className="hero-media relative">
          <div className="absolute -inset-3 rounded-[2.5rem] border border-gold/20" />
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-gold/30">
            <img
              src="/coach/photo.png"
              alt="Joko Wardiyanto"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-2xl font-medium text-cream">
                Joko Wardiyanto, S.E., M.Sc.
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                Business Coach &amp; Mentor
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-6xl md:mt-20">
        <p className="text-center font-display text-lg italic text-gold">
          Telah Dipercaya untuk Bertumbuh Bersama
        </p>
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="hero-stat rounded-2xl bg-char p-6 ring-1 ring-line"
            >
              <dd className="font-display text-3xl font-medium tracking-tight text-gold sm:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-2 text-[13px] leading-snug text-mist">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
