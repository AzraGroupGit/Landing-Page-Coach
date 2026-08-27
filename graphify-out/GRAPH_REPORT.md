# Graph Report - landing-page-CEO  (2026-08-27)

## Corpus Check
- 66 files · ~346,141 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 198 nodes · 279 edges · 28 communities (17 shown, 11 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.85)
- Token cost: 57,482 input · 3,890 output

## Community Hubs (Navigation)
- UI/UX Search Core
- Frontend Dependencies
- Build Tooling
- Design System Generator
- Brand Identity
- App Sections
- Footer & Config
- BM25 Search
- Speaker & Private
- Lint Rules
- About & Button
- Hero & Motion
- Nav & Logo
- Coach Profile
- Partner Organizations
- Masterclass
- Teaching Map
- Safar Brand
- Icon Set
- Dinkop UKM Blitar
- Dinkop UKM DIY
- DJP Logo
- Kemenkop UKM
- KMapus Manager
- OJC Logo
- PMMM Logo
- SBC Logo

## God Nodes (most connected - your core abstractions)
1. `DesignSystemGenerator` - 11 edges
2. `waLink()` - 11 edges
3. `search()` - 9 edges
4. `Reveal()` - 9 edges
5. `BM25` - 7 edges
6. `generate_design_system()` - 7 edges
7. `Button()` - 7 edges
8. `Brand Guidelines` - 7 edges
9. `_search_csv()` - 6 edges
10. `persist_design_system()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Brand Guidelines Web View` --semantically_similar_to--> `Brand Guidelines`  [INFERRED] [semantically similar]
  public/brand.html → BRAND.md
- `Abata Jogja Logo` --participate_in--> `Design System Master`  [INFERRED]
  public/brand/abata-jogja.png → design-system/aryo-wicaksono/MASTER.md
- `KotaGede Jewellery Logo` --participate_in--> `Design System Master`  [INFERRED]
  public/brand-bisnis/kotagede-jewellery.png → design-system/aryo-wicaksono/MASTER.md
- `Logo Design` --references--> `Brand Emblem SVG`  [EXTRACTED]
  BRAND.md → public/brand/emblem.svg
- `Logo Design` --references--> `Favicon SVG`  [EXTRACTED]
  BRAND.md → public/favicon.svg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Visual Identity System** — brand_colors, brand_typography, brand_logo, public_icons [EXTRACTED 0.95]
- **Teaching History Institutions** — public_riwayat_mengajar_dinkop_ukm_blitar, public_riwayat_mengajar_dinkop_ukm_diy, public_riwayat_mengajar_djp, public_riwayat_mengajar_kemenkp_ukm, public_riwayat_mengajar_uii, public_riwayat_mengajar_unair [EXTRACTED 1.00]
- **Corporate and Social Impact Ecosystem** — pt_kotagede_jewellery_group, public_yayasan_riyadhul_jannah_indonesia, riwayat_mengajar [INFERRED 0.90]

## Communities (28 total, 11 thin omitted)

### Community 0 - "UI/UX Search Core"
Cohesion: 0.10
Nodes (28): detect_domain(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection, Search stack-specific guidelines, search() (+20 more)

### Community 1 - "Frontend Dependencies"
Cohesion: 0.10
Nodes (21): @fontsource/cormorant-garamond, @fontsource/manrope, @fontsource/outfit, gsap, @gsap/react, dependencies, @fontsource/cormorant-garamond, @fontsource/manrope (+13 more)

### Community 2 - "Build Tooling"
Cohesion: 0.10
Nodes (20): oxlint, devDependencies, oxlint, @types/react, @types/react-dom, vite, @vitejs/plugin-react, name (+12 more)

### Community 3 - "Design System Generator"
Cohesion: 0.16
Nodes (9): DesignSystemGenerator, Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation., Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Execute searches across multiple domains., Find matching reasoning rule for a category. (+1 more)

### Community 4 - "Brand Identity"
Cohesion: 0.15
Nodes (13): Color Palette, Logo Design, Brand Guidelines, Brand Strategy, Typography, Coach Joko Wardiyanto, Design System Master, Landing Page Entry (+5 more)

### Community 5 - "App Sections"
Cohesion: 0.24
Nodes (7): react, App(), About(), Clients, options, Programs(), Reveal()

### Community 6 - "Footer & Config"
Cohesion: 0.22
Nodes (8): Footer(), legal, nav, socialList, TODO: ganti URL sosial media dengan akun asli., TODO: ganti nomor WhatsApp dengan nomor asli (format internasional tanpa + dan…, SOCIALS, WHATSAPP_NUMBER

### Community 7 - "BM25 Search"
Cohesion: 0.28
Nodes (5): BM25, Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query, BM25 ranking algorithm for text search

### Community 8 - "Speaker & Private"
Cohesion: 0.31
Nodes (7): fitFor, Private(), kegiatan, Speaker(), themes, WA_MESSAGES, waLink()

### Community 9 - "Lint Rules"
Cohesion: 0.25
Nodes (7): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, warn

### Community 10 - "About & Button"
Cohesion: 0.29
Nodes (6): brands, education, roles, Button(), circle, shell

### Community 11 - "Hero & Motion"
Cohesion: 0.53
Nodes (4): Hero(), stats, readPreference(), usePrefersReducedMotion()

### Community 12 - "Nav & Logo"
Cohesion: 0.40
Nodes (4): Logo(), links, Nav(), sectionIds

### Community 13 - "Coach Profile"
Cohesion: 0.40
Nodes (5): Joko Wardiyanto, Coach Joko Wardiyanto Speaking, Coach Joko Wardiyanto Portrait, Universitas Islam Indonesia Logo, Universitas Airlangga Logo

### Community 14 - "Partner Organizations"
Cohesion: 0.50
Nodes (4): PT Kotagede Jewellery Group, PT Kotagede Jewellery Group Superteam Photo, Yayasan Riyadhul Jannah Indonesia, Yayasan Riyadhul Jannah Indonesia Infographic

### Community 15 - "Masterclass"
Cohesion: 0.50
Nodes (3): fitFor, Masterclass(), pillars

## Knowledge Gaps
- **72 isolated node(s):** `$schema`, `oxc`, `react/rules-of-hooks`, `warn`, `name` (+67 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Frontend Dependencies` to `Build Tooling`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `DesignSystemGenerator` connect `Design System Generator` to `UI/UX Search Core`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `react` connect `App Sections` to `Lint Rules`, `Hero & Motion`, `Nav & Logo`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `$schema`, `oxc`, `react/rules-of-hooks` to the rest of the system?**
  _72 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI/UX Search Core` be split into smaller, more focused modules?**
  _Cohesion score 0.1032258064516129 - nodes in this community are weakly interconnected._
- **Should `Frontend Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Build Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._