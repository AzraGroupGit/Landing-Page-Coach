import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { waLink, WA_MESSAGES } from '../lib/config.js'

const kegiatan = [
  'Seminar',
  'Workshop',
  'Pelatihan bisnis',
  'Kelas komunitas',
  'In-house training perusahaan',
  'Program lembaga pendidikan',
  'Kegiatan instansi pemerintah maupun organisasi',
]

const themes = [
  'Business Road Map dan strategi scale up',
  'Branding, marketing, dan selling',
  'Membangun superteam',
  'Leadership dan pengelolaan SDM',
  'SOP, operasional, dan produktivitas',
  'Eksekusi target bisnis',
  'Spiritual Enterprise',
]

export default function Speaker() {
  return (
    <section id="pembicara" className="relative overflow-hidden px-6 py-32 md:py-48">
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            Undang Coach Joko Sebagai Pembicara
          </p>
          <h2 className="mt-4 max-w-[20ch] font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
            Hadirkan Materi Bisnis yang Praktis, Relevan, dan Mudah Diterapkan
          </h2>
          <p className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-mist">
            Coach Joko Wardiyanto menerima undangan sebagai pembicara, trainer,
            maupun fasilitator untuk berbagai kegiatan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-2xl font-medium tracking-tight text-cream">
              Jenis Kegiatan
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {kegiatan.map((k) => (
                <li
                  key={k}
                  className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-[13px] font-medium text-cream/85"
                >
                  {k}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl font-medium tracking-tight text-cream">
              Pilihan Tema
            </h3>
            <ul className="mt-6 space-y-3">
              {themes.map((t) => (
                <li key={t} className="flex items-start gap-3 border-t border-line pt-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-[15px] leading-relaxed text-cream/85">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl bg-char p-8 ring-1 ring-line">
            <p className="max-w-[60ch] text-[15px] leading-relaxed text-mist">
              Materi dapat disesuaikan dengan profil peserta, tujuan kegiatan,
              serta tantangan yang sedang dihadapi organisasi.
            </p>
            <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-cream/80">
              Coach Joko telah berbagi dalam berbagai forum profesional,
              komunitas, lembaga pendidikan, dan instansi — termasuk{' '}
              <span className="text-gold">Universitas Islam Indonesia</span>,{' '}
              <span className="text-gold">Universitas Airlangga</span>,{' '}
              <span className="text-gold">Direktorat Jenderal Pajak</span>,{' '}
              <span className="text-gold">Kementerian Koperasi dan UKM</span>,{' '}
              <span className="text-gold">Dinas Koperasi UKM DIY</span>, serta{' '}
              <span className="text-gold">Dinas Koperasi Kabupaten Blitar</span>.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button href={waLink(WA_MESSAGES.speaker)} variant="gold">
              Undang Coach Joko
            </Button>
            <Button href={waLink(WA_MESSAGES.speaker)} variant="outline">
              Konsultasikan Tema Acara
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
