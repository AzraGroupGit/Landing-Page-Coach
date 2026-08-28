import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { waLink, WA_MESSAGES } from '../lib/config.js'
import {
  MapTrifold,
  Megaphone,
  UsersThree,
  Crown,
  GearSix,
  Target,
  Sparkle,
} from '@phosphor-icons/react'

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
  {
    icon: MapTrifold,
    title: 'Business Road Map',
    desc: 'Arah, target, prioritas, dan strategi scale up yang jelas untuk bisnis Anda.',
  },
  {
    icon: Megaphone,
    title: 'Branding, Marketing & Selling',
    desc: 'Strategi agar bisnis lebih dikenal, dipercaya, dan menghasilkan penjualan.',
  },
  {
    icon: UsersThree,
    title: 'Membangun Superteam',
    desc: 'Menyusun tim yang solid, saling melengkapi, dan produktif.',
  },
  {
    icon: Crown,
    title: 'Leadership & Pengelolaan SDM',
    desc: 'Kepemimpinan dan pengelolaan sumber daya manusia yang efektif.',
  },
  {
    icon: GearSix,
    title: 'SOP, Operasional & Produktivitas',
    desc: 'Merapikan proses kerja agar efisien, terukur, dan konsisten.',
  },
  {
    icon: Target,
    title: 'Eksekusi Target Bisnis',
    desc: 'Menerjemahkan target menjadi eksekusi dan hasil yang nyata.',
  },
  {
    icon: Sparkle,
    title: 'Spiritual Enterprise',
    desc: 'Menyelaraskan nilai spiritual dengan praktik bisnis sehari-hari.',
  },
]

const institutions = [
  { name: 'Universitas Islam Indonesia', logo: 'uii' },
  { name: 'Universitas Airlangga', logo: 'unair' },
  { name: 'Direktorat Jenderal Pajak', logo: 'djp' },
  { name: 'Kementerian Koperasi dan UKM', logo: 'kemenkp-ukm' },
  { name: 'Dinas Koperasi UKM DIY', logo: 'dinkop-ukm-diy' },
  { name: 'Dinas Koperasi UKM Kab. Blitar', logo: 'dinkop-ukm-blitar' },
  { name: 'Kampus Manager', logo: 'kmapus-manager' },
  { name: 'OJC Auto Course', logo: 'ojc' },
  { name: 'Pesantren Masyarakat Merapi Merbabu', logo: 'pmmm' },
  { name: 'Sukses Berkah Community', logo: 'sbc' },
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

        <Reveal>
          <h3 className="mt-16 font-display text-2xl font-medium tracking-tight text-cream">
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
          <h3 className="mt-16 font-display text-2xl font-medium tracking-tight text-cream">
            Pilihan Tema
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t, i) => (
              <div
                key={t.title}
                className={`flex flex-col justify-between rounded-2xl ring-1 transition-colors duration-300 ${
                  i === 0
                    ? 'bg-ash p-8 ring-gold/20 sm:col-span-2 lg:col-span-2 lg:row-span-2'
                    : 'bg-char p-6 ring-line hover:ring-gold/40'
                }`}
              >
                <span
                  className={`grid place-items-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/25 ${
                    i === 0 ? 'h-12 w-12' : 'h-11 w-11'
                  }`}
                >
                  <t.icon size={i === 0 ? 26 : 22} weight="light" />
                </span>
                <div className={i === 0 ? 'mt-10' : 'mt-6'}>
                  <h4
                    className={`font-display font-medium tracking-tight text-cream ${
                      i === 0 ? 'text-2xl' : 'text-xl'
                    }`}
                  >
                    {t.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-mist">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex flex-col justify-center gap-6 rounded-2xl bg-char p-8 ring-1 ring-line sm:col-span-2 lg:col-span-2">
              <p className="font-display text-2xl font-medium leading-snug text-cream">
                Butuh tema khusus untuk acara Anda?
              </p>
              <div>
                <Button href={waLink(WA_MESSAGES.speaker)} variant="gold">
                  Konsultasikan Tema Acara
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl bg-char p-8 ring-1 ring-line">
            <p className="max-w-[60ch] text-[15px] leading-relaxed text-mist">
              Materi dapat disesuaikan dengan profil peserta, tujuan kegiatan,
              serta tantangan yang sedang dihadapi organisasi.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="mt-16 border-l-2 border-gold/40 pl-8">
            <p className="max-w-[44ch] font-display text-2xl italic leading-snug text-cream/90 sm:text-3xl">
              "Materi yang baik bukan yang paling banyak disampaikan, tetapi
              yang paling mudah diterapkan peserta begitu kembali ke bisnis
              masing-masing."
            </p>
            <footer className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
              Coach Joko Wardiyanto
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16">
            <h3 className="font-display text-2xl font-medium tracking-tight text-cream">
              Telah Berbagi di
            </h3>
            <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-mist">
              Sebagian forum, lembaga pendidikan, dan instansi yang pernah
              mengundang Coach Joko sebagai pembicara.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {institutions.map((i) => (
                <li
                  key={i.name}
                  className="flex items-center justify-center rounded-2xl bg-cream p-6 ring-1 ring-line transition-colors duration-300 hover:ring-gold/50"
                >
                  <img
                    src={`/riwayat-mengajar/${i.logo}.png`}
                    alt={i.name}
                    loading="lazy"
                    className="h-20 w-full object-contain sm:h-24"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16">
            <h3 className="font-display text-2xl font-medium tracking-tight text-cream">
              Jangkauan Mengajar
            </h3>
            <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-mist">
              Peta sebaran lokasi Coach Joko berbagi materi di berbagai wilayah.
            </p>
            <div className="mt-8 overflow-hidden rounded-[2rem] ring-1 ring-line">
              <img
                src="/riwayat-mengajar/peta-mengajar.webp"
                alt="Peta jangkauan mengajar Coach Joko Wardiyanto"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
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
