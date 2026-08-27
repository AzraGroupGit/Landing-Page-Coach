import { Check } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import { waLink, WA_MESSAGES } from "../lib/config.js";

const fitFor = [
  "Membutuhkan second opinion dalam mengambil keputusan bisnis.",
  "Ingin memperbaiki bisnis secara menyeluruh.",
  "Membutuhkan pendampingan langsung untuk owner dan tim.",
  "Memiliki target pertumbuhan yang ingin dicapai secara lebih terarah.",
  "Ingin menyelaraskan strategi, sistem, tim, dan nilai spiritual dalam perusahaan.",
];

export default function Private() {
  return (
    <section id="privat" className="px-6 py-32 md:py-48">
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
              Pendampingan Bisnis Privat
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
              Pendampingan yang Lebih Intensif dan Disesuaikan dengan Bisnis
              Anda
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-mist">
              Setiap bisnis memiliki tantangan, karakter tim, dan tahapan
              pertumbuhan yang berbeda. Karena itu, pendampingan privat
              dirancang secara lebih personal berdasarkan kondisi nyata
              perusahaan Anda.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[40ch] border-l-2 border-gold/40 pl-5 font-display text-xl italic leading-snug text-cream/90">
              Pendampingan privat bukan sekadar memberikan saran, tetapi
              menemani proses perubahan sampai lebih siap dijalankan oleh tim.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href={waLink(WA_MESSAGES.private)} variant="gold">
                Ajukan Sesi Konsultasi Privat
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="rounded-[2rem] bg-char p-2 ring-1 ring-line">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)]">
                <img
                  src="/coach/coach.webp"
                  alt="Joko Wardiyanto"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 font-display text-xl italic text-cream">
                  Pendampingan yang menemani, bukan sekadar menasihati.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mt-12 font-display text-2xl font-medium tracking-tight text-cream">
              Program Ini Cocok untuk Owner yang:
            </h3>
            <ul className="mt-6 space-y-3">
              {fitFor.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-4 rounded-2xl bg-char p-5 ring-1 ring-line"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                    <Check size={13} weight="light" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-cream/85">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
