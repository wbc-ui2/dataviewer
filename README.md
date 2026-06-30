<p align="center">
  <img src="https://cdn.jsdelivr.net/npm/@wbc-ui2/dataviewer/logo/dataviewer2.svg" alt="@wbc-ui2/dataviewer" width="220" style="max-width: 100%;"/>
</p>

<p align="center">
  <strong>Data as Tables. Vue 2. Interactive.</strong><br/>
  <em>Pass any JSON — object, array, or a remote <code>src</code> URL — and get a live, sortable, searchable, editable data table. Themeable, nestable, white-labelable. Ship a data explorer in minutes, not days.</em>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@wbc-ui2/dataviewer"><img src="https://img.shields.io/npm/v/@wbc-ui2/dataviewer?color=1976D2" alt="npm"></a>
<a href="https://www.npmjs.com/package/@wbc-ui2/dataviewer?activeTab=versions"><img src="https://img.shields.io/npm/dm/@wbc-ui2/dataviewer?color=1976D2" alt="downloads"></a>
<a href="https://github.com/wbc-ui2/dataviewer/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@wbc-ui2/dataviewer?color=blue" alt="license"></a>
<a href="https://vuejs.org"><img src="https://img.shields.io/badge/vue-2.7%2B-42b883" alt="vue"></a>
</p>

<p align="center">
  <a href="https://wbdataviewer2.wbc-ui.com">📘 Docs</a> ·
  <a href="https://github.com/wbc-ui2/dataviewer">🐙 GitHub</a> ·
  <a href="https://wbdataviewer-demo.wbc-ui.com">▶️ Playground</a> ·
  <a href="https://wbc-ui.com">💎 Pro</a>
</p>

<p align="center">
  <img src="./assets/hero-data-table.webp"
       alt="@wbc-ui2/dataviewer — interactive data table explorer"
       width="780"/>
</p>

<p align="center">
  <img src="./assets/mermaid-architecture.png"
       alt="Architecture diagram"
       width="680"/>
</p>

---

## Why?

**@wbc-ui2/dataviewer** replaces the bespoke data-table stack — column config, sort handlers, a search box, per-cell edit state, pagination, a theme layer — that every dashboard, admin panel, and API explorer rebuilds from scratch.

### Render a table in one component

```javascript
// Before: column defs, sort comparators, a search filter, edit state, pagination wiring
// After: one <WBDataViewer>, driven by data.
<WBDataViewer :value="people" />
```

Pass a plain object or an array of objects — the component infers columns, renders the grid, and gives you copy-to-clipboard out of the box. Every other feature is one prop away.

### Fetch and shape remote data inline

```html
<!-- src fetches; project extracts the array you care about from the response -->
<WBDataViewer src="https://api.example.com/users" project="data.items" :sort="true" :pagination="true" />
```

### Host-owned data, package-owned UI

```javascript
// Turn features on declaratively — no forking the component.
{ editable: true, globalSearch: true, columnFilters: true, theme: 'dark' }
```

> **One component. One `<WBDataViewer>` tag.** No column boilerplate. No sort handlers. Everything is data.

---

## What is @wbc-ui2/dataviewer?

A **Vue 2.7+ component** — `<WBDataViewer>` — that turns any JSON value into a live, interactive table. It pairs with `@wbc-ui2/core` (the WBC engine) and is driven entirely by props.

| Surface | Role |
|---|---|
| `<WBDataViewer :value="...">` | The renderer — infers columns, draws the grid, handles copy / sort / search / edit |
| `src` + `project` / `projectMode` | Fetch a URL and extract the rows (dot-path like `data.items`, or a shape map) |
| `config` / `configByPath` | Flat layout-config bag; per-subtree overrides keyed by dot-path for nested tables |
| `theme` + global registration | Built-in themes, plus custom CSS themes registered via `Vue.use(WBDataViewer, { themes })` |

**Who's it for?** Dashboard and admin-panel builders, API explorers, internal tools, and anyone who needs a **sortable, searchable, editable, themeable** data table without rolling their own Vuetify grid plus per-feature state.

---

## Usage Examples

### Level 1 — Any JSON, instantly
```html
<WBDataViewer :value="{ name: 'Ada Lovelace', role: 'admin', active: true }" />
```
→ A rendered table with copy-to-clipboard. Pass an array of objects and it becomes a multi-row grid. ½ second of typing.

### Level 2 — Sort + search + pagination
```html
<WBDataViewer
  :value="users"
  :sort="true"
  :pagination="[10, 25, 50]"
  :globalSearch="true"
  globalSearchMode="and"
/>
```
→ Sortable columns, a search box (every term must match the same cell in `and` mode), and a page size selector.

### Level 3 — Editable, remote, themed
```html
<WBDataViewer
  src="https://api.example.com/teams"
  project="data.teams"
  :editable="true"
  :rowAdd="true"
  :rowDel="true"
  :columnFilters="true"
  theme="dark"
  v-model="teams"
  :twoWay="true"
/>
```
→ Fetches and extracts `data.teams`, renders an editable grid (add/delete rows, inline cell edit), per-column filters, the `dark` theme, and two-way binding via `v-model` + `:twoWay`.

---

## Key props

Every key is optional — `value` alone gives a sensible inferred table.

| Prop | Type | Purpose |
|---|---|---|
| `value` | `any` | The data to render (object, array of objects, primitive). |
| `src` | `string` | Fetch data from a URL / relative path / public path. |
| `project` / `projectMode` | `string \| object` / `string \| number` | Extract rows from the `src` response (`'data.items'`); mode `first` / `merge` / `all` / nth. |
| `typeTable` | `string` | Layout: `'horiz'` (default) or `'vert'`. |
| `sort` | `boolean \| string[]` | All columns sortable, specific columns, or off. |
| `pagination` | `boolean \| number[]` | Default page sizes, custom sizes, or off. |
| `globalSearch` / `globalSearchMode` | `boolean \| object` / `'or' \| 'and'` | Search box; match any column or all columns. |
| `globalFilter` | `boolean` | Per-row JS expression filter (e.g. `row.age > 25 && row.role === 'admin'`). |
| `columnFilters` / `columnFilterMode` | `boolean \| object` / `'text' \| 'regex'` | Per-column filter UI. |
| `editable` + `cellEdit` / `cellDel` / `cellSave` / `rowAdd` / `rowDel` / `rowSave` | `boolean` | Inline editing and row/cell operations. |
| `twoWay` | `boolean` | Emit `input` on edits — pairs with `v-model`. |
| `columns` / `extraColumns` / `extraItems` | `array` | Whitelist & order columns; append computed columns / rows. |
| `customValue` / `cellRender` / `headRender` / `rowLabel` | `function` / `string\|function` | Customize values, cell/header rendering, and vertical-layout row labels. |
| `theme` | `string` | `default` · `light` · `dark` · `paper` · `compact` · `zebra` · `terminal` (+ custom). |
| `selectable` | `boolean` | Checkbox column + multi-row selection. |
| `config` / `configByPath` / `templates` | `object` | Advanced layout config, per-subtree overrides, and renderer-template overrides. |

---

## 🚀 Try it in 30 seconds

```bash
# Live interactive lab — paste any JSON, see the table render
open https://wbdataviewer-demo.wbc-ui.com
```

> The fastest way to explore the component is the live demo at **[wbdataviewer-demo.wbc-ui.com](https://wbdataviewer-demo.wbc-ui.com)** — paste your own data, toggle features, copy the integration snippet back to your project. Full reference at **[wbdataviewer2.wbc-ui.com](https://wbdataviewer2.wbc-ui.com)**.

---

## Installation

### Prerequisites

- **Node.js** ≥ 18 (older versions may work but are not tested)
- **Vue 2.7.x** (the component targets Vue 2 specifically; Vue 3 tracked separately as `@wbc-ui3/dataviewer`)
- **[`@wbc-ui2/core`](https://www.npmjs.com/package/@wbc-ui2/core)** — the WBC engine the component renders into (brings the Vuetify peer expectations)
- A bundler that understands ESM exports: Vite (recommended), Webpack 5, or Vue CLI 5

### npm (recommended)

```bash
npm install @wbc-ui2/core @wbc-ui2/dataviewer

# Peer dependencies — install once per project
npm install vue@^2.7.16 vuetify@^2.7.2
```

### Yarn / pnpm

```bash
# Yarn
yarn add @wbc-ui2/core @wbc-ui2/dataviewer
yarn add vue@^2.7.16 vuetify@^2.7.2

# pnpm
pnpm add @wbc-ui2/core @wbc-ui2/dataviewer
pnpm add vue@^2.7.16 vuetify@^2.7.2
```

### Vue 2 plugin registration

```javascript
// main.js
import Vue from 'vue';
import Vuetify from 'vuetify';
import wbcCore from '@wbc-ui2/core';        // always first — dataviewer2 registers into it
import WBDataViewer from '@wbc-ui2/dataviewer';

Vue.use(Vuetify);
Vue.use(wbcCore);
Vue.use(WBDataViewer);
// Register custom themes at install time if you like:
// Vue.use(WBDataViewer, { themes: { mytheme: '.wbdv-theme-mytheme th { background:#111 }' } });
// Use <WBDataViewer :value="..."> anywhere in your app.
```

### Hello, WBDataViewer

```html
<WBDataViewer :value="{ name: 'Ada', role: 'admin' }" />
```

### Troubleshooting common install errors

| Symptom | Cause | Fix |
|---|---|---|
| `Vue.use is not a function` | Two copies of Vue are loaded (your app has Vue 2, a dependency hoisted Vue 3) | Pin a single Vue: `"resolutions": { "vue": "^2.7.16" }` (yarn/pnpm) or npm `overrides`, then reinstall. |
| `Cannot find module '@wbc-ui2/dataviewer'` | npm couldn't resolve the package | Confirm install: `npm ls @wbc-ui2/dataviewer`. If empty, `npm install @wbc-ui2/dataviewer@latest`. |
| Table renders but unstyled | Vuetify CSS isn't loaded | Import once in `main.js`: `import 'vuetify/dist/vuetify.min.css';` |
| `WBDataViewer is not a registered component` | `@wbc-ui2/core` was registered but `@wbc-ui2/dataviewer` wasn't | Add `Vue.use(WBDataViewer)` **after** `Vue.use(wbcCore)`. |
| `src` fetch returns data but no rows show | The rows are nested in the response | Set `project` to the dot-path of the array, e.g. `project="data.items"`. |

For a longer walkthrough with worked examples, see the documentation hub at [wbdataviewer2.wbc-ui.com](https://wbdataviewer2.wbc-ui.com).

---

## ⚡ The Component Under the Hood

<details>
<summary>Mermaid diagram (interactive fallback)</summary>
<p align="center">
  <img src="./assets/mermaid-under-the-hood.png"
       alt="Component architecture"
       width="680"/>
</p>
</details>

- **One data prop** — `value` (or `src` + `project`) feeds normalized rows; columns are inferred or whitelisted via `columns`
- **Composable pipeline** — sort, global search (or/and), JS-expression filter, per-column filters, and pagination stack declaratively
- **Editable & two-way** — inline cell/row edit with `editable` + ops, mirrored to `v-model` via `:twoWay`
- **Themeable & nestable** — built-in themes plus custom CSS themes; nested objects/arrays render as recursive sub-tables

---

## 💎 Free vs Pro

> **`@wbc-ui2/dataviewer` is open-source and a complete data table today** — rendering, sort, search, column/expression filters, inline editing, themes, and `src`/`project` fetching are free. The Pro lane is narrow and demand-driven; it follows the same open-core tiering as the underlying [`@wbc-ui2/core`](https://www.npmjs.com/package/@wbc-ui2/core) engine.

| Capability | Free | Pro |
|---|---|---|
| Rendering, sort, pagination, copy-to-clipboard | ✅ Full | ✅ Full |
| Global search (or/and), expression filter, column filters | ✅ Full | ✅ Full |
| Inline edit (cell/row ops), `v-model` two-way binding | ✅ Full | ✅ Full |
| Built-in + custom themes, nested sub-tables | ✅ Full | ✅ Full |
| `src` fetch + `project` extraction | ✅ | ✅ |
| Depth / item caps on the rendered WBC tree | core2 free caps | ∞ (via core2 Pro) |
| Advanced engine hooks & headless extraction | — | ✅ (via core2 Pro) |

👉 **[Compare in detail →](https://wbc-ui.com/free-vs-pro)** · **[Buy Pro →](https://wbc-ui.com/pricing)**

---

## 🌐 Ecosystem

`@wbc-ui2/dataviewer` is a sibling package in the **@wbc-ui2** monorepo. Every package is published to npm and shares the same versioning line.

| Package | What it adds | Status |
|---|---|---|
| [`@wbc-ui2/core`](https://www.npmjs.com/package/@wbc-ui2/core) | "UI as Data" engine — the foundation | 🟢 GA |
| [`@wbc-ui2/code`](https://www.npmjs.com/package/@wbc-ui2/code) | JSON-driven code editor + live run | 🟢 GA |
| [`@wbc-ui2/chart`](https://www.npmjs.com/package/@wbc-ui2/chart) | ECharts integration | 🟢 GA |
| **[`@wbc-ui2/dataviewer`](https://www.npmjs.com/package/@wbc-ui2/dataviewer)** | **JSON / data-table explorer** *(this package)* | 🟢 GA |
| [`@wbc-ui2/latex`](https://www.npmjs.com/package/@wbc-ui2/latex) | LaTeX math rendering | 🟢 GA |
| [`@wbc-ui2/mermaid`](https://www.npmjs.com/package/@wbc-ui2/mermaid) | Diagram-as-code rendering | 🟢 GA |
| [`@wbc-ui2/alert`](https://www.npmjs.com/package/@wbc-ui2/alert) | Notification / toast system | 🟢 GA |
| [`@wbc-ui2/press`](https://www.npmjs.com/package/@wbc-ui2/press) | Markdown-driven docs engine | 🟢 GA |

---

## Build artifacts

| Format | File |
|---|---|
| ESM | `dist/dataviewer2.es.js` |
| UMD | `dist/dataviewer2.umd.js` |
| CSS | `dist/dataviewer2.css` |

---

## 📄 License

MIT © [Wissem Boughamoura](https://github.com/wissemb11) · [wi-bg.com](https://www.wi-bg.com) · [wbc-ui.com](https://wbc-ui.com)
