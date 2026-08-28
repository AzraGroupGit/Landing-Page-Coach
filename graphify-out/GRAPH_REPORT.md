# Graph Report - landing-page-CEO  (2026-08-29)

## Corpus Check
- Large corpus: 71 files · ~535,631 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 210 nodes · 272 edges · 33 communities (12 shown, 21 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.87)
- Token cost: 12,179 input · 1,605 output

## Community Hubs (Navigation)
- Landing Page UI
- UI/UX Search Core
- Frontend Dependencies
- Build Tooling
- Design System Generator
- Lint Rules
- BM25 Search
- Kelas & Dokumentasi
- Brand & Design System
- Coach Profile
- Partner Organizations
- Landing Page
- Teaching Map
- Abata Jogja
- Safar Brand
- Brand Emblem
- Brand Web View
- KotaGede Jewellery
- Icon Set
- Kelas Dokumentasi
- Kelas Dokumentasi
- Kelas Dokumentasi
- Kelas Dokumentasi
- Kelas Dokumentasi
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
2. `waLink()` - 9 edges
3. `search()` - 9 edges
4. `BM25` - 7 edges
5. `generate_design_system()` - 7 edges
6. `Reveal()` - 6 edges
7. `usePrefersReducedMotion()` - 6 edges
8. `_search_csv()` - 6 edges
9. `persist_design_system()` - 6 edges
10. `WA_MESSAGES` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Landing Page Entry` --references--> `Favicon SVG`  [EXTRACTED]
  index.html → public/favicon.svg
- `Design System Master File` --references--> `Testimonials Component`  [EXTRACTED]
  design-system/coach-joko/MASTER.md → src/components/Testimonials.jsx
- `PT Kotagede Jewellery Group` --conceptually_related_to--> `Yayasan Riyadhul Jannah Indonesia`  [INFERRED]
  public/superteam.webp → public/yayasan.webp
- `Joko Wardiyanto` --conceptually_related_to--> `Universitas Islam Indonesia Logo`  [INFERRED]
  public/coach/photo.png → public/riwayat-mengajar/uii.png
- `Joko Wardiyanto` --conceptually_related_to--> `Universitas Airlangga Logo`  [INFERRED]
  public/coach/photo.png → public/riwayat-mengajar/unair.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Business Education Program Flow** — public_kelas_kelas_2, public_kelas_kelas_5, public_kelas_kelas_8, public_kelas_kelas_9 [EXTRACTED 0.95]
- **Visual Identity System** — public_icons [EXTRACTED 0.95]
- **Teaching History Institutions** — public_riwayat_mengajar_dinkop_ukm_blitar, public_riwayat_mengajar_dinkop_ukm_diy, public_riwayat_mengajar_djp, public_riwayat_mengajar_kemenkp_ukm, public_riwayat_mengajar_uii, public_riwayat_mengajar_unair [EXTRACTED 1.00]
- **Corporate and Social Impact Ecosystem** — pt_kotagede_jewellery_group, public_yayasan_riyadhul_jannah_indonesia, riwayat_mengajar [INFERRED 0.90]

## Communities (33 total, 21 thin omitted)

### Community 0 - "Landing Page UI"
Cohesion: 0.08
Nodes (36): App(), About(), brands, education, roles, Button(), circle, shell (+28 more)

### Community 1 - "UI/UX Search Core"
Cohesion: 0.10
Nodes (28): detect_domain(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection, Search stack-specific guidelines, search() (+20 more)

### Community 2 - "Frontend Dependencies"
Cohesion: 0.10
Nodes (21): @fontsource/cormorant-garamond, @fontsource/manrope, @fontsource/outfit, gsap, @gsap/react, dependencies, @fontsource/cormorant-garamond, @fontsource/manrope (+13 more)

### Community 3 - "Build Tooling"
Cohesion: 0.10
Nodes (20): oxlint, devDependencies, oxlint, @types/react, @types/react-dom, vite, @vitejs/plugin-react, name (+12 more)

### Community 4 - "Design System Generator"
Cohesion: 0.16
Nodes (9): DesignSystemGenerator, Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation., Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Execute searches across multiple domains., Find matching reasoning rule for a category. (+1 more)

### Community 5 - "Lint Rules"
Cohesion: 0.14
Nodes (12): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, react, warn (+4 more)

### Community 6 - "BM25 Search"
Cohesion: 0.28
Nodes (5): BM25, Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query, BM25 ranking algorithm for text search

### Community 7 - "Kelas & Dokumentasi"
Cohesion: 0.29
Nodes (7): Kotagede Jewellery, Scale Up Masterclass, Hijaz Moslem Jewelry Logo, Business Masterclass Presentation, Scale Up Masterclass Presentation, Educational Content Display, Superteam Presentation

### Community 8 - "Brand & Design System"
Cohesion: 0.40
Nodes (5): Dark Cinematic Luxury, Brand Guidelines, Design System Master File, Testimonials Component, The Clarity Point

### Community 9 - "Coach Profile"
Cohesion: 0.40
Nodes (5): Joko Wardiyanto, Coach Joko Wardiyanto Speaking, Coach Joko Wardiyanto Portrait, Universitas Islam Indonesia Logo, Universitas Airlangga Logo

### Community 10 - "Partner Organizations"
Cohesion: 0.50
Nodes (4): PT Kotagede Jewellery Group, PT Kotagede Jewellery Group Superteam Photo, Yayasan Riyadhul Jannah Indonesia, Yayasan Riyadhul Jannah Indonesia Infographic

## Knowledge Gaps
- **83 isolated node(s):** `circle`, `shell`, `legal`, `nav`, `socialList` (+78 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **21 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Frontend Dependencies` to `Build Tooling`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `DesignSystemGenerator` connect `Design System Generator` to `UI/UX Search Core`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `react` connect `Lint Rules` to `Landing Page UI`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **What connects `circle`, `shell`, `legal` to the rest of the system?**
  _83 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Landing Page UI` be split into smaller, more focused modules?**
  _Cohesion score 0.0815686274509804 - nodes in this community are weakly interconnected._
- **Should `UI/UX Search Core` be split into smaller, more focused modules?**
  _Cohesion score 0.1032258064516129 - nodes in this community are weakly interconnected._
- **Should `Frontend Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._