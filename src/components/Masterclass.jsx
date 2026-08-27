import { Check } from '@phosphor-icons/react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { waLink, WA_MESSAGES } from '../lib/config.js'

const pillars = [
  {
    title: 'Business Blueprint',
    desc: 'Menentukan arah, target, prioritas, dan peta pertumbuhan bisnis.',
  },
  {
    title: 'Branding, Marketing & Selling',
    desc: 'Membangun strategi agar bisnis lebih dikenal, dipercaya, dan menghasilkan penjualan.',
  },
  {
    title: 'Operational & Production',
    desc: 'Merapikan proses kerja, SOP, kualitas, kapasitas, dan efisiensi operasional.',
  },
  {
    title: 'Finance, Accounting & Tax',
    desc: 'Membangun pencatatan, kontrol keuangan, cashflow, serta dasar pengelolaan pajak yang lebih sehat.',
  },
  {
    title: 'Human Capital & General Affairs',
    desc: 'Membangun struktur organisasi, pembagian peran, budaya kerja, dan performa tim.',
  },
]

const fitFor = [
  'Ingin membawa bisnis ke level berikutnya.',
  'Sudah memiliki tim, tetapi sistem kerjanya belum tertata.',
  'Merasa bisnis masih terlalu bergantung pada owner.',
  'Membutuhkan arah dan prioritas bisnis yang lebih jelas.',
  'Ingin membangun bisnis yang bertumbuh secara sehat dan berkelanjutan.',
]

export default function Masterclass() {
  return (
    <section id="masterclass" className="bg-char px-6 py-32 md:py-48">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            Scale Up Masterclass
          </p>
          <h2 className="mt-4 max-w-[24ch] font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
            Bisnis Sulit Naik Kelas Jika Semuanya Masih Bergantung pada Owner
          </h2>
          <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-mist">
            Scale Up Masterclass adalah program kelas dan pendampingan bisnis
            intensif untuk membantu owner membangun bisnis yang lebih terarah,
            terukur, dan mampu berjalan bersama tim.
          </p>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-mist">
            Di kelas ini, peserta tidak hanya mempelajari konsep, tetapi juga
            diarahkan untuk menerapkannya sesuai dengan kondisi bisnis
            masing-masing.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mt-16 font-display text-2xl font-medium tracking-tight text-cream">
            Lima Pilar Utama yang Dipelajari
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`rounded-2xl bg-night p-8 ring-1 ring-line ${
                  i === pillars.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="font-display text-4xl font-medium leading-none text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-5 font-display text-xl font-medium tracking-tight text-cream">
                  {p.title}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-mist">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mt-16 font-display text-2xl font-medium tracking-tight text-cream">
            Scale Up Masterclass Cocok untuk Anda yang:
          </h3>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {fitFor.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-2xl bg-night p-4 ring-1 ring-line"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                  <Check size={13} weight="light" />
                </span>
                <span className="text-[14px] leading-relaxed text-cream/85">
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-[46ch] font-display text-2xl font-medium leading-snug text-cream sm:text-3xl">
            Jangan hanya sibuk menjalankan bisnis. Mulailah membangun bisnis
            yang memiliki <span className="italic text-gold">arah, sistem, dan tim</span> yang kuat.
          </p>
          <div className="mt-8">
            <Button href={waLink(WA_MESSAGES.masterclass)} variant="gold">
              Konsultasi Scale Up Masterclass
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
