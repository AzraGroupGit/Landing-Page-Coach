import { ArrowUpRight } from '@phosphor-icons/react'
import Reveal from './Reveal.jsx'

const options = [
  {
    title: 'Ingin Belajar Bisnis Secara Terstruktur?',
    desc: 'Ikuti Scale Up Masterclass dan pelajari lima pilar utama yang dibutuhkan untuk membawa bisnis ke level berikutnya.',
    cta: 'Lihat Scale Up Masterclass',
    href: '#masterclass',
  },
  {
    title: 'Membutuhkan Pendampingan Lebih Mendalam?',
    desc: 'Dapatkan pendampingan privat yang lebih intensif, personal, dan disesuaikan dengan kondisi bisnis Anda.',
    cta: 'Ajukan Pendampingan Privat',
    href: '#privat',
  },
  {
    title: 'Ingin Mengundang Coach Joko sebagai narasumber acara?',
    desc: 'Hadirkan materi bisnis yang aplikatif untuk komunitas, perusahaan, lembaga pendidikan, maupun instansi Anda.',
    cta: 'Undang Sebagai Pembicara',
    href: '#pembicara',
  },
]

export default function Programs() {
  return (
    <section id="program" className="px-6 py-32 md:py-48">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            Pilih Pendampingan Sesuai Kebutuhan Anda
          </p>
          <h2 className="mt-4 max-w-[22ch] font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
            Apa yang Sedang Bisnis Anda Butuhkan?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {options.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href={p.href}
                className="group flex h-full flex-col rounded-3xl bg-char p-8 ring-1 ring-line transition-colors duration-500 hover:ring-gold/40"
              >
                <span className="font-display text-6xl font-medium leading-none text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-cream">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                  {p.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold">
                  {p.cta}
                  <ArrowUpRight
                    size={16}
                    weight="light"
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
