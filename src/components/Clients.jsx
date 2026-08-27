import Reveal from './Reveal.jsx'

const clients = [
  { name: 'Cawang Medical', logo: 'cawang-medical' },
  { name: 'Lentera Laptop', logo: 'lentera-medical' },
  { name: 'Little Jenna', logo: 'little-jenna' },
  { name: 'Semangkok Boci', logo: 'semangkok-boci' },
  { name: 'Savitri Gift', logo: 'savitri' },
  { name: 'Kanida Kerudung', logo: 'kanida' },
  { name: 'Kampung Inggris Solo', logo: 'kampung-inggris-solo' },
  { name: 'Herba Natura', logo: 'herba-natura' },
  { name: 'Soto Sumringah', logo: 'soto-sumringah' },
  { name: 'Gembala Kambing Jogja', logo: 'gembala-kambing-jogja' },
  { name: 'Sporti ID', logo: 'sporti-id' },
  { name: 'Beanbag Sultan', logo: 'beanbag-sultan' },
  { name: 'Abata Jogja', logo: 'abata-jogja' },
  { name: 'Bagaskara Jaya Abadi', logo: 'bagaskara-jaya-abadi' },
  { name: 'UD Serba Herbal', logo: 'serba-herbal' },
]

export default function Clients() {
  return (
    <section id="klien" className="px-6 py-32 md:py-48">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            Klien dan Brand yang Pernah Didampingi
          </p>
          <h2 className="mt-4 max-w-[22ch] font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
            Bertumbuh Bersama Bisnis dari Berbagai Bidang
          </h2>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-mist">
            Coach Joko dan tim telah dipercaya mendampingi berbagai bisnis dari
            bidang kesehatan, pendidikan, fashion, kuliner, retail, jasa, dan
            produk herbal.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((c) => (
              <li
                key={c.name}
                className="flex items-center justify-center rounded-2xl bg-cream p-7 ring-1 ring-line transition-colors duration-300 hover:ring-gold/50"
              >
                <img
                  src={`/brand/${c.logo}.png`}
                  alt={c.name}
                  loading="lazy"
                  className="h-24 w-full object-contain sm:h-28"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
