# Design System Master File

> **LOGIC:** Ketika membangun page, cek `design-system/pages/[page-name].md` dulu.
> Jika ada, rules-nya **override** file Master ini. Jika tidak, ikuti rules di bawah.
> **Sumber otoritas visual:** `BRAND.md` di root + implementasi `src/` (yang sudah ter-ship).
> File ini menyatukan temuan katalog UI UX Pro Max dengan sistem yang sudah ter-commit.

---

**Project:** Coach Joko Wardiyanto
**Generated:** 2026-08-27 (via `ui-ux-pro-max` design-system generator)
**Category (katalog):** Consulting Firm / Personal Brand → *Trust & Authority*
**Style (katalog):** Dark Mode (OLED) + Exaggerated Minimalism
**Dunia visual:** Dark Cinematic Luxury (komitmen, bukan toggle)

---

## Global Rules

### Color Palette (token = `src/index.css`)

| Role | Hex | Token | CSS Variable |
|------|-----|-------|--------------|
| Background | `#0C0A08` | `night` | `--color-night` |
| Surface | `#14110E` | `char` | `--color-char` |
| Elevated | `#1B1713` | `ash` | `--color-ash` |
| Text primer | `#F4EFE6` | `cream` | `--color-cream` |
| Text sekunder | `#A49B8E` | `mist` | `--color-mist` |
| Accent (satu-satunya) | `#C9A96A` | `gold` | `--color-gold` |
| Hairline | `rgba(244,239,230,0.12)` | `line` | `--color-line` |

**Color Notes:** Satu aksen emas champagne di atas near-black hangat. Hierarki lewat opacity
(`cream/70`, `cream/60`), bukan warna tambahan. Kontras teks ≥ 4.5:1.

### Typography

- **Heading/Display:** Cormorant Garamond (400, 500 + italic)
- **Body/UI:** Outfit (400, 500, 600)
- **Mood:** elegant, luxury, sophisticated, editorial, premium
- Emphasis display memakai **italic** + `gold`, bukan bold.
- Headline: `tracking-tight`, `text-wrap: balance`, max 2–3 baris.
- Body: max ~65ch, `text-wrap: pretty`.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-sm` | `8px` | Icon gaps, inline spacing |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `24px` | Card padding |
| `--space-2xl` | `48px` | Section margins |
| Section | `py-32 md:py-48` | Jarak antar section |
| Container | `max-w-6xl` | Lebar konten |

### Radius & Depth

- Interaktif (button/pill): `rounded-full`.
- Kartu: `rounded-2xl`–`rounded-3xl`.
- Depth pakai hairline `ring-line` + gradient gelap, bukan shadow hitam pekat.

---

## Komponen (implementasi = `src/components/`)

| Komponen | File | Catatan |
|----------|------|---------|
| Button (button-in-button arrow) | `Button.jsx` | variant: solid/gold/light/ghost |
| Logo (clarity point) | `Logo.jsx` | emblem "A" + titik emas |
| Reveal (scroll fade-up) | `Reveal.jsx` | GSAP, hormati reduced-motion |
| Nav (floating pill) | `Nav.jsx` | focus-trap mobile menu |
| Hero (mask reveal) | `Hero.jsx` | full-bleed + vignette token |
| Programs (horizontal accordion) | `Programs.jsx` | hover expand |
| Private (split-pin) | `Private.jsx` | sticky + scale-fade |
| Speaker (parallax) | `Speaker.jsx` | topik h3, tanpa penomoran |
| Clients (marquee) | `Clients.jsx` | infinite marquee |
| Testimonials (card stack) | `Testimonials.jsx` | GSAP pin |
| Footer (CTA + legal) | `Footer.jsx` | sosial + privasi/syarat |

---

## Style Guidelines

**Style:** Dark Cinematic Luxury (Editorial Luxury + Dark Mode OLED)

**Keywords:** warm near-black, champagne gold, serif display, film-grain, cinematic vignette,
generous whitespace, editorial grid, single accent

**Key Effects:** mask reveal (hero), scrubbing text (about), split-pin (privat), parallax (speaker),
card-stack (testimoni), marquee (klien), hover physics (button-in-button).

**Motion:** GSAP scroll-driven, transform + opacity saja, easing
`cubic-bezier(0.32, 0.72, 0, 1)`, hormati `prefers-reduced-motion`.

**Page Pattern:** AIDA — Hero (attention) > About (interest) > Programs (interest) > Private/Speaker
(desire) > Clients/Testimonials (proof) > Kontak (action).

---

## Anti-Patterns (Do NOT Use)

- ❌ AI purple/pink gradients
- ❌ Lebih dari satu accent color
- ❌ Emojis sebagai ikon (pakai SVG: Phosphor)
- ❌ Serif default LLM (Fraunces, Instrument Serif)
- ❌ Kicker/eyebrow di atas heading (section numbers 01/02/03)
- ❌ Shadow hitam pekat / hard-offset
- ❌ Teks placeholder generik ("Acme", "John Doe")
- ❌ Layout 3-kolom simetris seragam

---

## Pre-Delivery Checklist

- [ ] Satu accent (gold) konsisten di seluruh halaman
- [ ] Kontras teks ≥ 4.5:1 (besar ≥ 3:1)
- [ ] `prefers-reduced-motion` dihormati
- [ ] Focus states visible (keyboard nav)
- [ ] Touch target ≥ 44px
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] Tanpa horizontal scroll di mobile
- [ ] Semantic HTML (nav/main/section/figure/dl)
- [ ] Alt text bermakna pada gambar
- [ ] `text-wrap: balance` pada heading
