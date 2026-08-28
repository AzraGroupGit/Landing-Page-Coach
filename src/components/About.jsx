import { Check } from '@phosphor-icons/react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { SOCIALS } from '../lib/config.js'

const roles = [
  'Presiden Sukses Berkah Community periode 2025–2027',
  'Pembina Yayasan Riyadhul Jannah Indonesia',
  'Penulis buku Super Team Super Productivity',
]

const brands = [
  { name: 'Kotagede Jewellery', logo: 'kotagede-jewellery' },
  { name: 'Hijaz Moslem Jewelry', logo: 'hijaz' },
  { name: 'Safar Gold', logo: 'safar' },
  { name: 'Lentera Bisnis Academy', logo: 'lentera-bisnis-academy' },
]

const education = [
  'Magister Sains Universitas Gadjah Mada',
  'ESQ 3.0 Coach by ESQ Coaching Academy',
  'Pendamping UMKM tersertifikasi BNSP',
  'Human Capital Manager tersertifikasi BNSP',
  'Business Road Map Mentor by Sinergi Business Solution',
  'Hypnotherapy Certified by IBH',
]

export default function About() {
  return (
    <section id="tentang" className="px-6 py-32 md:py-48">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            Tentang Coach Joko
          </p>
          <h2 className="mt-4 max-w-[24ch] font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
            Berangkat dari Praktik, Dibagikan untuk Membantu Bisnis Bertumbuh
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:order-2">
            <Reveal>
              <p className="max-w-[58ch] text-[15px] leading-relaxed text-mist">
                Saya <span className="text-cream">Joko Wardiyanto, S.E., M.Sc.</span>,
                seorang pengusaha, professional coach, dan mentor bisnis. Telah
                mengajar ribuan peserta dari berbagai wilayah Indonesia serta
                mendampingi lebih dari 1.000 UMKM. Pendekatan yang saya gunakan
                bersifat praktis dan sistematis agar ilmu tidak berhenti sebagai
                teori, tetapi dapat diterapkan menjadi langkah nyata bersama tim.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-10 font-display text-2xl font-medium tracking-tight text-cream">
                Selain aktif mengembangkan beberapa bisnis, saya juga dipercaya
                sebagai:
              </h3>
              <ul className="mt-6 space-y-3">
                {roles.map((role) => (
                  <li key={role} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-[15px] leading-relaxed text-cream/80">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:order-1">
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] border border-gold/20" />
                <div className="relative rounded-[2rem] bg-char p-2 ring-1 ring-line">
                  <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)]">
                    <img
                      src="/coach/photo.png"
                      alt="Joko Wardiyanto"
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                    <p className="absolute bottom-5 left-6 font-display text-xl italic text-cream">
                      Joko Wardiyanto — Business Coach
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-medium tracking-tight text-cream">
              Dampak Sosial
            </h3>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-mist">
              Sebagai Pembina Yayasan Riyadhul Jannah Indonesia, Coach Joko turut
              menyalurkan dampak bagi masyarakat sekitar.
            </p>
            <div className="mt-8 overflow-hidden rounded-[2rem] ring-1 ring-line">
              <img
                src="/yayasan.webp"
                alt="Infografis Yayasan Riyadhul Jannah Indonesia"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-medium tracking-tight text-cream">
              Bisnis yang Dikelola Coach Joko
            </h3>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-mist">
              Beberapa bisnis yang saya dirikan dan kembangkan langsung bersama
              tim.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {brands.map((b) => (
                <li
                  key={b.name}
                  className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-char p-7 ring-1 ring-gold/20 transition-colors duration-300 hover:ring-gold/50"
                >
                  <img
                    src={`/brand-bisnis/${b.logo}.png`}
                    alt={b.name}
                    loading="lazy"
                    className="h-24 w-full object-contain sm:h-28"
                  />
                  <span className="text-center text-[13px] font-semibold leading-snug text-cream">
                    {b.name}
                  </span>
                </li>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden rounded-[2rem] ring-1 ring-line">
                <img
                  src="/superteam.webp"
                  alt="Superteam PT Kotagede Jewellery Group"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex flex-wrap items-center justify-between gap-3 bg-char px-6 py-4 ring-1 ring-line">
                  <p className="font-display text-lg italic text-cream">
                    Superteam Kotagede Jewellery Group
                  </p>
                  <p className="text-[13px] text-mist">
                    Tim solid di balik bisnis yang dikelola
                  </p>
                </div>
              </div>
            </Reveal>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-medium tracking-tight text-cream">
              Pendidikan dan Sertifikasi
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {education.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-3 rounded-2xl bg-char p-4 ring-1 ring-line"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                    <Check size={13} weight="light" />
                  </span>
                  <span className="text-[14px] leading-relaxed text-cream/85">
                    {e}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Button href={SOCIALS.instagram.href} variant="outline">
              Kenal Lebih Dekat dengan Coach Joko
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
