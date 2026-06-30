import me from "vue-json-viewer";
function _e(e, t, i, l, s, r, o, n) {
  var c = typeof e == "function" ? e.options : e;
  return {
    exports: e,
    options: c
  };
}
function z(e, t) {
  const i = [];
  if (!e || typeof e != "object") return i;
  t in e && i.push(e);
  for (const l in e)
    e[l] && typeof e[l] == "object" && !Array.isArray(e[l]) && i.push(...z(e[l], t));
  return i;
}
function Q(e, t) {
  const i = [];
  if (!e || typeof e != "object") return i;
  t in e && i.push(e[t]);
  for (const l in e)
    e[l] && typeof e[l] == "object" && !Array.isArray(e[l]) && i.push(...Q(e[l], t));
  return i;
}
const be = [
  "#ffeb3b",
  "#ff9800",
  "#4caf50",
  "#03a9f4",
  "#e91e63",
  "#9c27b0",
  "#00bcd4",
  "#8bc34a",
  "#ff5722",
  "#607d8b",
  "#f44336",
  "#3f51b5"
], de = {
  required(e, t = {}) {
    var i;
    return t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: "This field is required.", fr: "Ce champ est requis.", ar: "هذه الخانة مطلوبه." }), e != null && String(e).length !== 0 || (typeof t.message == "string" ? t.message : (i = t.message) == null ? void 0 : i[t.lg]) || JSON.stringify(t.message);
  },
  maxLength(e, t = {}) {
    var i;
    return t.len ?? (t.len = 25), t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: `Max ${t.len} characters allowed.`, fr: `Au maximum ${t.len} caractères.`, ar: `الحد الأقصى ${t.len}.` }), e != null && String(e).length <= t.len || (typeof t.message == "string" ? t.message : (i = t.message) == null ? void 0 : i[t.lg]);
  },
  minLength(e, t = {}) {
    var i;
    return t.len ?? (t.len = 4), t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: `Min ${t.len} characters allowed.`, fr: `Au minimum ${t.len} caractères.`, ar: `الحد الأدنى ${t.len}.` }), e != null && String(e).length >= t.len || (typeof t.message == "string" ? t.message : (i = t.message) == null ? void 0 : i[t.lg]);
  },
  upperCharNb(e, t = {}) {
    var l;
    if (t.len ?? (t.len = 1), t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: `At least ${t.len} uppercase letter.`, fr: `Au moins ${t.len} majuscule.`, ar: `على الأقل ${t.len} حرف كبير.` }), e == null) return !0;
    const i = String(e).match(/[A-Z]/g);
    return i && i.length >= t.len || (typeof t.message == "string" ? t.message : (l = t.message) == null ? void 0 : l[t.lg]);
  },
  lowerCharNb(e, t = {}) {
    var l;
    if (t.len ?? (t.len = 1), t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: `At least ${t.len} lowercase letter.`, fr: `Au moins ${t.len} minuscule.`, ar: `على الأقل ${t.len} حرف صغير.` }), e == null) return !0;
    const i = String(e).match(/[a-z]/g);
    return i && i.length >= t.len || (typeof t.message == "string" ? t.message : (l = t.message) == null ? void 0 : l[t.lg]);
  },
  specialCharNb(e, t = {}) {
    var l;
    if (t.len ?? (t.len = 1), t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: `At least ${t.len} special char.`, fr: `Au moins ${t.len} caractère spécial.`, ar: `على الأقل ${t.len} حرف خاص.` }), e == null) return !0;
    const i = String(e).match(/[@#$%^&*()_+\-=[\]{}!`;':"\\|,.<>/?]/g);
    return i && i.length >= t.len || (typeof t.message == "string" ? t.message : (l = t.message) == null ? void 0 : l[t.lg]);
  },
  digitCharNb(e, t = {}) {
    var l;
    if (t.len ?? (t.len = 1), t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: `At least ${t.len} digit.`, fr: `Au moins ${t.len} chiffre.`, ar: `على الأقل ${t.len} رقم.` }), e == null) return !0;
    const i = String(e).match(/[0-9]/g);
    return i && i.length >= t.len || (typeof t.message == "string" ? t.message : (l = t.message) == null ? void 0 : l[t.lg]);
  },
  email(e, t = {}) {
    var i;
    return t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: "Invalid email.", fr: "Email non valide.", ar: "بريد غير صالح." }), /^\w+([.\-+]?\w+)*\+*@\w+([.-]?\w+)*(\.\w{2,24})+$/.test(e) || (typeof t.message == "string" ? t.message : (i = t.message) == null ? void 0 : i[t.lg]);
  },
  phone(e, t = {}) {
    var i;
    return t.lg ?? (t.lg = "en"), t.message ?? (t.message = { en: "Invalid phone.", fr: "Téléphone invalide.", ar: "هاتف غير صالح." }), /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(e) || (typeof t.message == "string" ? t.message : (i = t.message) == null ? void 0 : i[t.lg]);
  }
};
function H(e) {
  return e ? typeof e == "function" ? [e] : Array.isArray(e) ? e.map((t) => {
    if (typeof t == "function") return t;
    if (typeof t == "string") {
      const i = de[t];
      return i ? ((l) => i(l, {})) : (() => !0);
    }
    return () => !0;
  }) : typeof e == "object" ? Object.entries(e).map(([t, i]) => {
    if (typeof i == "function") return i;
    const l = de[t];
    return l ? typeof i == "string" ? (s) => l(s, { message: i }) : i && typeof i == "object" ? (s) => l(s, { ...i }) : (s) => l(s, {}) : () => !0;
  }) : [] : [];
}
function W(e, t, i = {}) {
  const { mode: l = "first" } = i;
  if (!e || typeof e != "object" || !t || typeof t != "object")
    return l === "all" ? [] : null;
  function s(n, c, h) {
    const d = {};
    return Object.keys(c).forEach((p) => {
      if (p === "_parent_") return;
      const m = c[p];
      if (m && typeof m == "object") {
        const g = m._parent_ || p, w = z(n, p);
        if (w.length > 0) {
          const $ = h === "merge" ? w[w.length - 1] : w[0], j = W($, m, { mode: h });
          j && Object.keys(j).length > 0 && (d[g] = j);
        }
      } else {
        const g = Q(n, p);
        g.length > 0 && (d[m || p] = h === "merge" ? g[g.length - 1] : g[0]);
      }
    }), Object.keys(d).length > 0 ? d : null;
  }
  function r(n, c, h) {
    const d = {};
    return Object.keys(c).forEach((p) => {
      if (p === "_parent_") return;
      const m = c[p];
      if (m && typeof m == "object") {
        const g = m._parent_ || p, w = z(n, p);
        if (w.length > h) {
          const $ = W(w[h], m, { mode: h });
          $ && Object.keys($).length > 0 && (d[g] = $);
        }
      } else {
        const g = Q(n, p);
        g.length > h && (d[m || p] = g[h]);
      }
    }), Object.keys(d).length > 0 ? d : null;
  }
  function o(n, c) {
    const h = Object.keys(c).filter((p) => p !== "_parent_");
    return h.length === 0 ? [] : z(n, h[0]).map((p, m) => W(p, c, { mode: m })).filter(Boolean);
  }
  return l === "all" ? o(e, t) : typeof l == "number" && l >= 0 ? r(e, t, l) : s(e, t, l);
}
const ye = {
  name: "WBDataViewer",
  components: { JsonViewer: me },
  model: { prop: "value", event: "input" },
  /* ═══ Props (read-only contract with parent) ═══ */
  props: {
    /**
     * WBC-template overrides for the renderers inside the component.
     * Keyed by renderer name (edit, raw, json, prim, select, themes, depth,
     * paginationBar, snackbar, columnFilterBar, display.table, display.thead,
     * display.tbody, display.th_tr, display.tbody_tr, display.th, display.td, …).
     * Each value is spread into the WBC item for that renderer.
     * (Previously this prop was named `meta` — renamed to avoid collision with
     * layout-config work in progress.)
     */
    templates: { type: null, default: null },
    /**
     * Flat layout-config bag. Preferred over scattered top-level props going
     * forward. Keys: output, childOutput, typeTable, editable, theme, boxed,
     * rowDel, rowSave, rowAdd, cellEdit, cellDel, cellSave, smartInput, sort,
     * pagination, showHeader, copyable, global, …
     * Resolution (low→high): defaults → top-level props → config → configByPath (ancestor→exact).
     * Top-level props remain supported as back-compat fallbacks.
     */
    config: { type: Object, default: null },
    /**
     * Per-subtree config overrides keyed by dot-path (e.g. `'d'`, `'d.f'`).
     * Each value is deep-merged on top of the parent config during resolution.
     * Propagates to nested WBDataViewers so grandchildren can be addressed too.
     */
    configByPath: { type: Object, default: null },
    wbCode: { type: null, default: null },
    value: { type: null, default: null },
    output: { type: null, default: null },
    /**
     * Layout for nested children (objects/arrays rendered as sub-tables when editable).
     * Accepts the same shape as `output` (string or array). When set, every nested
     * WBDataViewer instance inherits this layout instead of mirroring the parent's
     * `typeTable`. Passed down recursively so grandchildren follow the same layout.
     * `null` (default) → fall back to current behaviour (mirror parent's typeTable).
     */
    childOutput: { type: [String, Array], default: null },
    copyable: { type: Boolean, default: !0 },
    showHeader: { type: Boolean, default: !0 },
    boxed: { type: Boolean, default: !0 },
    depth: { type: Number, default: 1 },
    global: { type: String, default: "" },
    /** Emit `input` (and mirror to value_) on every cell edit — two-way binding with v-model. */
    twoWay: { type: Boolean, default: !1 },
    typeTable: { type: String, default: "horiz" },
    smartInput: { type: Boolean, default: !1 },
    editable: { type: Boolean, default: !1 },
    cellDel: { type: Boolean, default: !1 },
    cellEdit: { type: Boolean, default: !1 },
    cellSave: { type: Boolean, default: !1 },
    rowDel: { type: Boolean, default: !1 },
    rowSave: { type: Boolean, default: !1 },
    rowAdd: { type: Boolean, default: !1 },
    /** Sort config: `true` = all cols sortable, `Array<string>` = specific cols, `false` = no sort */
    sort: { type: [Boolean, Array], default: !1 },
    /** Pagination: `true` = default [5,10,15,20,25], `Array<number>` = custom, `false` = none */
    pagination: { type: [Boolean, Array], default: !1 },
    /** Global search: `true` = enable, `Object` = config options */
    globalSearch: { type: [Boolean, Object], default: !1 },
    /** Global search mode: 'or' matches any column, 'and' matches all columns */
    globalSearchMode: { type: String, default: "or" },
    /** Multi-color search: `true` = each search term gets a distinct highlight color */
    searchColor: { type: Boolean, default: !0 },
    /** Global expression filter: `true` = enable JS expression filter per row */
    globalFilter: { type: Boolean, default: !1 },
    /** Column filters: `true` = enable per-column filter UI, `Object` = config */
    columnFilters: { type: [Boolean, Object], default: !1 },
    /** Column filter mode: 'text' = text match, 'regex' = regex match */
    columnFilterMode: { type: String, default: "text" },
    /** Column whitelist & ordering: ordered list of column keys to display */
    columns: { type: Array, default: null },
    /** Extra rows to append: Array of row objects */
    extraItems: { type: Array, default: null },
    /** Extra columns to add: Array of {key, label, value: fn(row)} */
    extraColumns: { type: Array, default: null },
    /** Custom value transform: Function(val, key, rowIndex) → displayVal */
    customValue: { type: Function, default: null },
    /** Cell-level render custom: Function(value, key, row, ri) → WBC object */
    cellRender: { type: Function, default: null },
    /** Header render custom: Function(key, ci) → WBC object */
    headRender: { type: Function, default: null },
    /**
     * Row label for vertical layout's top header (replaces the default [0]/[1]/...).
     * Accepts:
     *   - String template with placeholders: "{i}" = 0-based index, "{i1}" = 1-based index.
     *     Example: "Client {i1}" → "Client 1", "Client 2", …
     *   - Function (row, i) => label, receives the paged row object and its 0-based page index.
     *   - Default: "Item {i1}" (i.e. "Item 1", "Item 2", …).
     */
    rowLabel: { type: [String, Function], default: "Item {i1}" },
    /**
     * Theme name — stamped on the root as `wbdv-theme-<name>`. Built-in themes:
     * `default`, `light`, `dark`, `paper`, `compact`, `zebra`, `terminal`.
     * Custom themes can be registered globally via
     * `Vue.use(WBDataViewer, { themes: { mytheme: '.wbdv-theme-mytheme th { … }' } })`.
     */
    theme: { type: String, default: "default" },
    /** Row multi-select: `true` = enable checkbox column + selection state */
    selectable: { type: Boolean, default: !1 },
    /** External data source: URL (http/https), relative path (./), or public path (/) */
    src: { type: String, default: null },
    /** Extract from src response. String = dot-path (e.g. 'data.items'), Object = shape map */
    project: { type: [String, Object], default: null },
    /** Extraction mode: 'first' (default), 'merge', 'all', or a number for nth occurrence */
    projectMode: { type: [String, Number], default: "first" },
    /** When true, use the raw API response as-is (bypass project and normalization) */
    raw: { type: Boolean, default: !1 },
    /** Max recursion depth for editable cells containing objects. Beyond this, value is JSON.stringified in a single VTextField. null/undefined = unlimited. */
    maxDepth: { type: Number, default: null },
    /** Validation rules applied to editable VTextFields. Three forms accepted:
       1) object with function values: {required:(v)=>msg}
       2) object with option-object values: {required:{lg,message}, maxLength:{len:20}, ...}
       3) array of rule names: ['required','maxLength', ...]
       Can also be a Function | Array<Function> | Object keyed by column path (e.g. rules:{age:{...}, name:['required']}). */
    rules: { type: [Object, Array, Function], default: null }
  },
  /* ═══ Internal working copies + state ═══ */
  data() {
    return {
      // Working copies of mutable props
      value_: this.value != null ? this.value : null,
      output_: this.output != null ? this.output : ["horiz"],
      childOutput_: this.childOutput,
      templates_: this.templates || null,
      config_: this.config || null,
      configByPath_: this.configByPath || null,
      wbCode_: this.wbCode,
      depth_: this.depth,
      typeTable_: this.typeTable,
      copyable_: this.copyable,
      showHeader_: this.showHeader,
      boxed_: this.boxed,
      twoWay_: this.twoWay || !1,
      smartInput_: this.smartInput,
      editable_: this.editable,
      cellDel_: this.cellDel,
      cellEdit_: this.cellEdit,
      cellSave_: this.cellSave,
      rowDel_: this.rowDel,
      rowSave_: this.rowSave,
      rowAdd_: this.rowAdd,
      sort_: this.sort,
      pagination_: this.pagination,
      globalSearch_: this.globalSearch,
      globalSearchMode_: this.globalSearchMode,
      searchColor_: this.searchColor,
      globalSearchText_: "",
      /** Cache: search term → highlight color (consistent colors across renders) */
      searchColors_: {},
      globalFilter_: this.globalFilter,
      globalFilterText_: "",
      columnFilters_: this.columnFilters,
      columnFilterMode_: this.columnFilterMode,
      /** Per-column filter text: { colKey: filterText } */
      filters_: {},
      global_: this.global,
      key_: 0,
      columns_: this.columns,
      extraItems_: this.extraItems,
      extraColumns_: this.extraColumns,
      customValue_: this.customValue,
      cellRender_: this.cellRender,
      headRender_: this.headRender,
      rowLabel_: this.rowLabel,
      theme_: this.theme,
      selectable_: this.selectable,
      /** Selected row indices */
      selItems_: [],
      // Internal state
      expandDepth: this.depth,
      expandedView: !0,
      stringifiedView: !1,
      editMode: !1,
      editValue: null,
      copied: !1,
      editingCells: {},
      originalValues: {},
      lockedPaths: {},
      addRowVisible: {},
      addRowText: {},
      /** Sort state: { colName: { order: -1|0|1, idx: 0|1|2... } } */
      sorted_: {},
      /** Pagination state */
      page_: 1,
      itemsPerPage_: 10,
      /** src fetch state */
      srcLoading_: !1,
      srcError_: null,
      apiResponse_: null,
      project_: this.project || null,
      projectMode_: this.projectMode || "first",
      raw_: this.raw || !1,
      maxDepth_: this.maxDepth,
      rules_: this.rules || null
    };
  },
  /* ═══ Sync props → working copies on change ═══ */
  watch: {
    value(e) {
      this.value_ = e !== void 0 ? e : null;
    },
    output(e) {
      this.output_ = e ?? ["horiz"];
    },
    templates(e) {
      this.templates_ = e || null;
    },
    config(e) {
      this.config_ = e || null, this._applyConfigToState();
    },
    configByPath(e) {
      this.configByPath_ = e || null, this._applyConfigToState();
    },
    src(e) {
      e && this._fetchSrc(e);
    },
    project(e) {
      this.project_ = e, this._applyProject();
    },
    projectMode(e) {
      this.projectMode_ = e, this._applyProject();
    },
    raw(e) {
      this.raw_ = e, this._applyProject();
    },
    maxDepth(e) {
      this.maxDepth_ = e;
    },
    rules(e) {
      this.rules_ = e;
    },
    depth(e) {
      this.depth_ = e;
    },
    typeTable(e) {
      this.typeTable_ = e;
    },
    copyable(e) {
      this.copyable_ = e;
    },
    showHeader(e) {
      this.showHeader_ = e;
    },
    boxed(e) {
      this.boxed_ = e;
    },
    twoWay(e) {
      this.twoWay_ = e;
    },
    smartInput(e) {
      this.smartInput_ = e;
    },
    editable(e) {
      this.editable_ = e;
    },
    cellDel(e) {
      this.cellDel_ = e;
    },
    cellEdit(e) {
      this.cellEdit_ = e;
    },
    cellSave(e) {
      this.cellSave_ = e;
    },
    rowDel(e) {
      this.rowDel_ = e;
    },
    rowSave(e) {
      this.rowSave_ = e;
    },
    rowAdd(e) {
      this.rowAdd_ = e;
    },
    sort(e) {
      this.sort_ = e;
    },
    globalSearch(e) {
      this.globalSearch_ = e;
    },
    globalSearchMode(e) {
      this.globalSearchMode_ = e;
    },
    searchColor(e) {
      this.searchColor_ = e;
    },
    globalFilter(e) {
      this.globalFilter_ = e;
    },
    columnFilters(e) {
      this.columnFilters_ = e;
    },
    columnFilterMode(e) {
      this.columnFilterMode_ = e;
    },
    columns(e) {
      this.columns_ = e;
    },
    extraItems(e) {
      this.extraItems_ = e;
    },
    extraColumns(e) {
      this.extraColumns_ = e;
    },
    customValue(e) {
      this.customValue_ = e;
    },
    cellRender(e) {
      this.cellRender_ = e;
    },
    headRender(e) {
      this.headRender_ = e;
    },
    rowLabel(e) {
      this.rowLabel_ = e;
    },
    theme(e) {
      this.theme_ = e;
    },
    childOutput(e) {
      this.childOutput_ = e;
    },
    selectable(e) {
      this.selectable_ = e;
    },
    pagination(e) {
      this.pagination_ = e, this.page_ = 1, this.itemsPerPage_ = e === !0 ? 10 : Array.isArray(e) && e.length > 0 ? e[0] : 10;
    },
    global(e) {
      this.global_ = e;
    }
  },
  computed: {
    isDark_() {
      const e = this.theme_ || "default";
      return ["dark", "terminal", "blueprint"].includes(e);
    },
    src_() {
      return this.src || this.value;
    },
    safeValue() {
      return this.value_ !== void 0 ? this.value_ : null;
    },
    typeLabel() {
      const e = this.safeValue;
      return e == null ? "Null" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : typeof e == "function" ? "Function" : typeof e == "object" ? "Object" : typeof e;
    },
    lengthLabel() {
      const e = this.safeValue;
      return e == null ? "" : Array.isArray(e) ? `${e.length} items` : typeof e == "object" && !(e instanceof Date) ? `${Object.keys(e).length} keys` : typeof e == "string" ? `${e.length} chars` : "";
    },
    /* ── Active data source ── */
    activeValue() {
      return this.editable_ ? this.editValue : this.safeValue;
    },
    isEditingActive() {
      return this.editable_ || this.cellEdit_ || this.cellDel_ || this.cellSave_;
    },
    isExpandableObject() {
      const e = this.activeValue;
      return typeof e == "object" && e !== null && !(e instanceof Date);
    },
    /* ── Pagination helpers ── */
    paginationOptions() {
      return this.pagination_ === !0 ? [5, 10, 15, 20, 25, 50] : Array.isArray(this.pagination_) ? this.pagination_ : [];
    },
    hasPagination() {
      return !!this.pagination_;
    },
    totalItems() {
      const e = this.activeValue;
      if (!Array.isArray(e)) return 1;
      let t = e;
      return this.globalFilter_ && this.globalFilterText_ && (t = this._globalFilterRows(t)), this.columnFilters_ && (t = this._columnFilterRows(t)), t.length;
    },
    totalPages() {
      return !this.hasPagination || this.itemsPerPage_ <= 0 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage_);
    },
    pageStart() {
      return (this.page_ - 1) * this.itemsPerPage_ + 1;
    },
    pageEnd() {
      return Math.min(this.page_ * this.itemsPerPage_, this.totalItems);
    },
    isKeyValueObject() {
      const e = this.activeValue;
      return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof Date);
    },
    /** Nesting depth of activeValue (for the UI depth slider — unrelated to the `maxDepth` prop that caps editable recursion). */
    objectDepth() {
      return typeof this.getObjectDepth == "function" ? this.getObjectDepth(this.activeValue) : this._getObjectDepth(this.activeValue);
    },
    canChangeDepth() {
      return this.isExpandableObject && this.objectDepth > 0;
    },
    depthOptions() {
      const e = Math.min(this.objectDepth, 20);
      return Array.from({ length: e + 1 }, (t, i) => i);
    },
    typeTableOptions() {
      return [
        { value: "horiz", text: "☰ Horizontal" },
        { value: "vert", text: "☷ Vertical" },
        { value: "select", text: "⊞ Select" },
        { value: "json", text: "{ } JSON" },
        { value: "raw", text: "< > Raw" },
        { value: "wbc", text: "⚡ WBC" }
      ];
    },
    jsonStringified() {
      try {
        return JSON.stringify(this.activeValue, null, 2);
      } catch {
        return "[Circular or unserializable value]";
      }
    },
    /* ═══ allComps — computed registry of all WBC objects ═══ */
    allComps() {
      var e, t;
      return {
        options: {
          key: `wb-dv-${this.key_}`,
          class: ["wbdv", `wbdv-theme-${this.theme_ || "default"}`, { "wbdv--boxed": this.boxed_ }],
          style: { fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace", fontSize: "13px", lineHeight: 1.5 }
        },
        // ── Toggle controls (computed) ──
        typeSelect: this.cToggleTypeTable,
        depth: this.cToggleDepth,
        rawView: this.cToggleStringifiedView,
        copyable: this.cToggleCopyable,
        showHeader: this.cToggleShowHeader,
        boxed: this.cToggleBoxed,
        themes: this.cToggleThemes,
        twoWay: this.cToggleTwoWay,
        smartInput: this.cToggleSmartInput,
        editable: this.cToggleEditable,
        cellDel: this.cToggleCellDel,
        cellEdit: this.cToggleCellEdit,
        cellSave: this.cToggleCellSave,
        rowDel: this.cToggleRowDel,
        rowSave: this.cToggleRowSave,
        rowAdd: this.cToggleRowAdd,
        sort: this.cToggleSort,
        pagination: this.cTogglePagination,
        searchColor: this.cToggleSearchColor,
        globalFilter: this.cToggleGlobalFilter,
        columnFilters: this.cToggleColumnFilters,
        filterExprInput: this.cGlobalFilterInput,
        columnFilterBar: this.cColumnFilterBar,
        selectable: this.cToggleSelectable,
        searchInput: this.cGlobalSearchInput,
        paginationBar: this.cPaginationFooter,
        snackbar: this.cSnackbar,
        exportHtml: this.cExportHtml,
        // ── Body renderers — editValue (draft/working copy, default) ──
        prim: this.bodyPrimitiveNode(this.editValue),
        edit: this.bodyEditableNode(this.editValue),
        select: this.bodyTableSelect(this.editValue),
        wbc: this.bodyWbcNode(this.editValue),
        raw: this.bodyRawNode(this.editValue),
        json: this.bodyJsonViewerNode(this.editValue),
        vert: this.bodyTableVertical(this.editValue),
        horiz: this.bodyTableHorizontal(this.editValue),
        vCol: this.bodyTableVCol(this.editValue),
        hHead: this.bodyTableHHead(this.editValue),
        hBody: this.bodyTableHBody(this.editValue),
        vHead: this.bodyTableVHead(this.editValue),
        vBody: this.bodyTableVBody(this.editValue),
        // ── Body renderers — value (prop, read-only) ──
        primProp: this.bodyPrimitiveNode(this.value),
        editProp: this.bodyEditableNode(this.value),
        selectProp: this.bodyTableSelect(this.value),
        wbcProp: this.bodyWbcNode(this.value),
        rawProp: this.bodyRawNode(this.value),
        jsonProp: this.bodyJsonViewerNode(this.value),
        vertProp: this.bodyTableVertical(this.value),
        horizProp: this.bodyTableHorizontal(this.value),
        vColProp: this.bodyTableVCol(this.value),
        hHeadProp: this.bodyTableHHead(this.value),
        hBodyProp: this.bodyTableHBody(this.value),
        vHeadProp: this.bodyTableVHead(this.value),
        vBodyProp: this.bodyTableVBody(this.value),
        // ── Body renderers — value_ (initial sandbox) ──
        prim0: this.bodyPrimitiveNode(this.value_),
        edit0: this.bodyEditableNode(this.value_),
        select0: this.bodyTableSelect(this.value_),
        wbc0: this.bodyWbcNode(this.value_),
        raw0: this.bodyRawNode(this.value_),
        json0: this.bodyJsonViewerNode(this.value_),
        vert0: this.bodyTableVertical(this.value_),
        horiz0: this.bodyTableHorizontal(this.value_),
        vCol0: this.bodyTableVCol(this.value_),
        hHead0: this.bodyTableHHead(this.value_),
        hBody0: this.bodyTableHBody(this.value_),
        vHead0: this.bodyTableVHead(this.value_),
        vBody0: this.bodyTableVBody(this.value_),
        // ── Body renderers — safeValue (computed baseline) ──
        primSafe: this.bodyPrimitiveNode(this.safeValue),
        editSafe: this.bodyEditableNode(this.safeValue),
        selectSafe: this.bodyTableSelect(this.safeValue),
        wbcSafe: this.bodyWbcNode(this.safeValue),
        rawSafe: this.bodyRawNode(this.safeValue),
        jsonSafe: this.bodyJsonViewerNode(this.safeValue),
        vertSafe: this.bodyTableVertical(this.safeValue),
        horizSafe: this.bodyTableHorizontal(this.safeValue),
        vColSafe: this.bodyTableVCol(this.safeValue),
        hHeadSafe: this.bodyTableHHead(this.safeValue),
        hBodySafe: this.bodyTableHBody(this.safeValue),
        vHeadSafe: this.bodyTableVHead(this.safeValue),
        vBodySafe: this.bodyTableVBody(this.safeValue),
        // ── Meta overrides ──
        ...((t = (e = this.templates_) == null ? void 0 : e.display) == null ? void 0 : t.allComps) || {}
      };
    },
    /* ═══ Computed toggle/structural WBC objects ═══ */
    cToggleCopyable() {
      return this._btn({ icon: !0, small: !0, title: this.copyable_ ? "Disable copy-to-clipboard" : "Enable copy-to-clipboard", onClick: () => this.toggleCopyable(!0), children: [this._icon(this.copyable_ ? "mdi-content-copy" : "mdi-content-copy-off")] });
    },
    cToggleShowHeader() {
      return this._btn({ icon: !0, small: !0, title: this.showHeader_ ? "Hide header" : "Show header", onClick: () => this.toggleShowHeader(!0), children: [this._icon(this.showHeader_ ? "mdi-eye" : "mdi-eye-off")] });
    },
    cToggleBoxed() {
      return this._btn({ icon: !0, small: !0, title: this.boxed_ ? "Remove box border" : "Add box border", onClick: () => this.toggleBoxed(!0), children: [this._icon(this.boxed_ ? "mdi-rectangle-outline" : "mdi-rectangle")] });
    },
    cToggleThemes() {
      var e;
      return { comp: "VSelect", options: {
        props: { value: this.theme_, items: Te(), label: "Theme", dense: !0, hideDetails: !0, outlined: !0 },
        class: "wbdv-select wbdv-select--theme",
        style: { width: "140px", maxWidth: "140px", fontSize: "12px" },
        attrs: { title: `Current theme: ${this.theme_}` },
        on: { change: (t) => {
          this.theme_ = t;
        } }
      }, ...((e = this.templates_) == null ? void 0 : e.themes) || {} };
    },
    cToggleTwoWay() {
      return this._btn({ icon: !0, small: !0, title: this.twoWay_ ? "Disable two-way binding" : "Enable two-way binding (emit input on every edit)", onClick: () => this.toggleTwoWay(!0), children: [this._icon(this.twoWay_ ? "mdi-sync" : "mdi-sync-off")] });
    },
    cToggleSmartInput() {
      return this._btn({ icon: !0, small: !0, title: this.smartInput_ ? "Disable smart input (JSON parsing)" : "Enable smart input (JSON parsing)", onClick: () => this.toggleSmartInput(!0), children: [this._icon(this.smartInput_ ? "mdi-code-braces" : "mdi-text")] });
    },
    cToggleEditable() {
      return this._btn({ icon: !0, small: !0, title: this.editable_ ? "Exit edit mode" : "Enter edit mode", onClick: () => this.toggleEditable(!0), children: [this._icon(this.editable_ ? "mdi-check-bold" : "mdi-pencil")] });
    },
    cToggleCellDel() {
      return this._btn({ icon: !0, small: !0, title: this.cellDel_ ? "Hide cell delete buttons" : "Show cell delete buttons", onClick: () => this.toggleCellDel(!0), children: [this._icon(this.cellDel_ ? "mdi-delete" : "mdi-delete-off")] });
    },
    cToggleCellEdit() {
      return this._btn({ icon: !0, small: !0, title: this.cellEdit_ ? "Hide cell edit buttons" : "Show cell edit buttons", onClick: () => this.toggleCellEdit(!0), children: [this._icon(this.cellEdit_ ? "mdi-pencil" : "mdi-pencil-off")] });
    },
    cToggleCellSave() {
      return this._btn({ icon: !0, small: !0, title: this.cellSave_ ? "Hide cell save buttons" : "Show cell save buttons", onClick: () => this.toggleCellSave(!0), children: [this._icon(this.cellSave_ ? "mdi-content-save" : "mdi-content-save-off")] });
    },
    cToggleRowDel() {
      return this._btn({ icon: !0, small: !0, title: this.rowDel_ ? "Hide row delete buttons" : "Show row delete buttons", onClick: () => this.toggleRowDel(!0), children: [this._icon(this.rowDel_ ? "mdi-delete-forever" : "mdi-delete-forever-off")] });
    },
    cToggleRowSave() {
      return this._btn({ icon: !0, small: !0, title: this.rowSave_ ? "Hide row save buttons" : "Show row save buttons", onClick: () => this.toggleRowSave(!0), children: [this._icon(this.rowSave_ ? "mdi-content-save-check" : "mdi-content-save-off")] });
    },
    cToggleRowAdd() {
      return this._btn({ icon: !0, small: !0, title: this.rowAdd_ ? "Hide row add UI" : "Show row add UI", onClick: () => this.toggleRowAdd(!0), children: [this._icon(this.rowAdd_ ? "mdi-plus-box" : "mdi-plus-box-off")] });
    },
    cToggleSort() {
      return this._btn({ icon: !0, small: !0, title: this.sort_ ? "Disable column sorting" : "Enable column sorting", onClick: () => this.toggleSort(!0), children: [this._icon(this.sort_ ? "mdi-swap-vertical" : "mdi-swap-vertical-off")] });
    },
    cTogglePagination() {
      return this._btn({ icon: !0, small: !0, title: this.pagination_ ? "Disable pagination" : "Enable pagination", onClick: () => this.togglePagination(!0), children: [this._icon(this.pagination_ ? "mdi-view-carousel" : "mdi-view-carousel-off")] });
    },
    cToggleSearchColor() {
      return this._btn({ icon: !0, small: !0, title: this.searchColor_ ? "Disable multi-color search highlight" : "Enable multi-color search highlight", onClick: () => this.toggleSearchColor(!0), children: [this._icon(this.searchColor_ ? "mdi-palette" : "mdi-palette-off")] });
    },
    cToggleGlobalFilter() {
      return this._btn({ icon: !0, small: !0, title: this.globalFilter_ ? "Disable expression filter" : "Enable expression filter", onClick: () => this.toggleGlobalFilter(!0), children: [this._icon(this.globalFilter_ ? "mdi-filter" : "mdi-filter-off")] });
    },
    cToggleColumnFilters() {
      const e = this._activeFilterCount(), t = this.columnFilters_ ? e > 0 ? `${e} column filter(s) active — click to disable` : "Disable column filters" : "Enable column filters";
      return this._btn({ icon: !0, small: !0, title: t, onClick: () => this.toggleColumnFilters(!0), children: [this._icon(this.columnFilters_ ? "mdi-filter-variant" : "mdi-filter-variant-off")] });
    },
    cToggleSelectable() {
      return this._btn({ icon: !0, small: !0, title: this.selectable_ ? "Disable row selection" : "Enable row selection", onClick: () => this.toggleSelectable(!0), children: [this._icon(this.selectable_ ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline")] });
    },
    cExportHtml() {
      return this._btn({ icon: !0, small: !0, title: "Copy HTML to clipboard", onClick: () => this.exportHtml(), children: [this._icon("mdi-code-tags")] });
    },
    cToggleDepth() {
      var e;
      return this.canChangeDepth ? { comp: "VSelect", options: {
        props: { value: this.expandDepth, items: this.depthOptions, label: "Depth", dense: !0, hideDetails: !0, outlined: !0 },
        class: "wbdv-select wbdv-select--depth",
        style: { width: "90px", maxWidth: "90px", fontSize: "12px" },
        attrs: { title: `Current expand depth: ${this.expandDepth} of ${this.objectDepth}` },
        on: { input: (t) => {
          this.expandDepth = t;
        } }
      }, ...((e = this.templates_) == null ? void 0 : e.depth) || {} } : null;
    },
    cToggleTypeTable() {
      var e;
      return this.isExpandableObject ? { comp: "VSelect", options: {
        props: { value: this.typeTable_, items: this.typeTableOptions, label: "View", dense: !0, hideDetails: !0, outlined: !0, itemValue: (t) => t.value },
        class: "wbdv-select wbdv-select--view",
        style: { width: "130px", maxWidth: "130px", fontSize: "12px" },
        attrs: { title: `Current view mode: ${this.typeTable_}` },
        on: { change: (t) => {
          this.typeTable_ = t, this.output_ = this.replaceInObject([this.output_], { vert: t, horiz: t, wbc: t, raw: t, json: t });
        } }
      }, ...((e = this.templates_) == null ? void 0 : e.typeSelect) || {} } : null;
    },
    cToggleStringifiedView() {
      return this.isExpandableObject ? this._btn({ icon: !0, small: !0, title: this.stringifiedView ? "Rendered JSON" : "Raw string view", onClick: () => {
        this.stringifiedView = !this.stringifiedView;
      }, children: [this._icon(this.stringifiedView ? "mdi-code-braces" : "mdi-code-json")] }) : null;
    },
    cGlobalSearchInput() {
      var r;
      if (!this.globalSearch_) return null;
      const e = this, t = { comp: "VTextField", options: {
        props: { value: this.globalSearchText_, dense: !0, hideDetails: !0, outlined: !0, clearable: !0, prependInnerIcon: "mdi-magnify", placeholder: "Search..." },
        class: "wbdv-search-input",
        style: { maxWidth: "280px", fontSize: "12px" },
        on: {
          "click:clear": () => {
            e.globalSearchText_ = "";
          }
        },
        nativeOn: {
          input: (o) => {
            e.globalSearchText_ = o.target.value || "";
          }
        }
      }, ...((r = this.templates_) == null ? void 0 : r.searchInput) || {} }, i = this._parseSearchTerms(this.globalSearchText_), l = i.map((o, n) => {
        const c = e.searchColor_ ? n % 12 : 0, h = o.type === "expr" ? " ⚡" : o.caseSensitive ? " Aa" : o.isGlob ? " ✱" : o.isGroup ? " ☍" : "", d = o.display + h;
        return { comp: "VChip", options: {
          props: { small: !0, label: !0 },
          class: `wbdv-active-chip wbdv-active-search wbdv-sc-${c}`,
          style: { fontSize: "11px", height: "20px", marginRight: "4px" },
          attrs: { title: `Search: ${o.caseSensitive ? "(case-sensitive) " : ""}${o.isGlob ? "(glob) " : ""}${o.isGroup ? "(group) " : ""}"${o.raw}"` },
          html: { comp: "span", options: { domProps: { textContent: d } } }
        } };
      }), s = this.globalSearchMode_ === "and" ? [{ comp: "VChip", options: { props: { small: !0, label: !0, outlined: !0, color: "grey darken-1" }, style: { fontSize: "10px", height: "18px", marginRight: "4px" }, attrs: { title: "All terms must match the same cell" }, html: "AND" } }] : [];
      return { comp: "div", options: {
        class: "wbdv-search-wrap",
        style: { display: "flex", flexDirection: "column", gap: "2px", margin: "4px 8px" },
        html: [
          t,
          i.length ? { comp: "div", options: {
            class: "wbdv-active-chiprow",
            style: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2px", paddingLeft: "4px" },
            html: [...s, ...l]
          } } : null
        ].filter(Boolean)
      } };
    },
    cGlobalFilterInput() {
      var s;
      if (!this.globalFilter_) return null;
      const e = this, t = { comp: "VTextField", options: {
        props: { value: this.globalFilterText_, dense: !0, hideDetails: !0, outlined: !0, clearable: !0, prependInnerIcon: "mdi-filter-variant", placeholder: 'Filter: row.age > 25 && row.role === "admin"' },
        class: "wbdv-filter-input",
        style: { maxWidth: "380px", fontSize: "12px" },
        on: {
          "click:clear": () => {
            e.globalFilterText_ = "";
          }
        },
        nativeOn: {
          input: (r) => {
            e.globalFilterText_ = r.target.value || "";
          }
        }
      }, ...((s = this.templates_) == null ? void 0 : s.filterExprInput) || {} }, i = this._splitGlobalFilterClauses(this.globalFilterText_ || ""), l = i.map((r, o) => ({ comp: "VChip", options: {
        props: { small: !0, label: !0 },
        class: `wbdv-active-chip wbdv-active-filter wbdv-rf-${o % 12}`,
        style: { fontSize: "11px", height: "20px", marginRight: "4px" },
        attrs: { title: `Filter clause #${o + 1}` },
        html: r
      } }));
      return { comp: "div", options: {
        class: "wbdv-filter-wrap",
        style: { display: "flex", flexDirection: "column", gap: "2px", margin: "4px 8px" },
        html: [
          t,
          i.length ? { comp: "div", options: {
            class: "wbdv-active-chiprow",
            style: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2px", paddingLeft: "4px" },
            html: l
          } } : null
        ].filter(Boolean)
      } };
    },
    cPaginationFooter() {
      var l;
      if (!this.hasPagination || this.totalPages <= 1) return null;
      const e = {};
      e.prev = { comp: "VBtn", options: { props: { icon: !0, small: !0, disabled: this.page_ <= 1 }, class: "wbdv-page-btn", style: { minWidth: "28px", height: "28px" }, attrs: { title: "Previous page" }, on: { click: this._prevPage }, html: this._icon("mdi-chevron-left") } };
      const t = Math.max(1, this.page_ - 2), i = Math.min(this.totalPages, t + 4);
      for (let s = t; s <= i; s++) {
        const r = s === this.page_;
        e[`page_${s}`] = { comp: "VBtn", options: { props: { xSmall: !0, depressed: !0, color: r ? "primary" : void 0, dark: r }, class: "wbdv-page-num", attrs: { title: `Go to page ${s}` }, style: { minWidth: "32px", margin: "0 2px", fontWeight: r ? "700" : "400" }, on: { click: () => this._goToPage(s) }, html: String(s) } };
      }
      return e.next = { comp: "VBtn", options: { props: { icon: !0, small: !0, disabled: this.page_ >= this.totalPages }, class: "wbdv-page-btn", style: { minWidth: "28px", height: "28px" }, attrs: { title: "Next page" }, on: { click: this._nextPage }, html: this._icon("mdi-chevron-right") } }, e.info = { comp: "span", options: { class: "wbdv-page-info", style: { marginLeft: "8px", fontSize: "12px", color: "#757575" }, attrs: { title: `Showing items ${this.pageStart} to ${this.pageEnd} of ${this.totalItems} total items` }, html: `${this.pageStart}–${this.pageEnd} of ${this.totalItems}` } }, { comp: "div", options: { class: "wbdv-pagination", style: { display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 12px", borderTop: "1px solid #e0e0e0", gap: "4px", flexWrap: "wrap" }, html: e }, ...((l = this.templates_) == null ? void 0 : l.paginationBar) || {} };
    },
    cSnackbar() {
      var e;
      return { comp: "VSnackbar", options: {
        props: { value: this.copied, top: !0, right: !0, timeout: 1500 },
        class: "wbdv-snackbar",
        style: { fontSize: "13px" },
        on: { input: (t) => {
          this.copied = t;
        } },
        html: "JSON copied to clipboard"
      }, ...((e = this.templates_) == null ? void 0 : e.snackbar) || {} };
    },
    cColumnFilterBar() {
      var r;
      if (!this.columnFilters_) return null;
      const e = this, t = this._activeColumnFilterKeys(), i = t.length, s = [this.columnFilterMode_ === "regex" ? { comp: "VChip", options: { props: { small: !0, label: !0, outlined: !0, color: "grey darken-1" }, style: { fontSize: "10px", height: "18px" }, attrs: { title: "Each column input is parsed as a regex" }, html: "regex" } } : null].filter(Boolean);
      return i > 0 && (s.push({ comp: "VChip", options: { props: { small: !0, color: "primary", textColor: "white" }, class: "wbdv-filter-chip", style: { fontSize: "11px" }, html: `${i} filter${i > 1 ? "s" : ""} active` } }), t.forEach((o, n) => {
        const c = (e.filters_[o] || "").trim();
        s.push({ comp: "VChip", options: {
          props: { small: !0, label: !0, close: !0 },
          class: `wbdv-active-chip wbdv-active-colfilter wbdv-cf-${n % 12}`,
          style: { fontSize: "11px", height: "20px" },
          attrs: { title: `Column "${o}" — filter: ${c}` },
          on: { "click:close": () => e._clearColumnFilter(o) },
          html: `${o}: ${c}`
        } });
      }), s.push(this._btn({ icon: !0, small: !0, title: "Clear all column filters", onClick: () => e._clearAllColumnFilters(), children: [this._icon("mdi-close-circle")] }))), { comp: "div", options: {
        class: "wbdv-column-filter-bar",
        style: { display: "flex", gap: "6px", padding: "4px 8px", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", background: "#f5f5f5", alignItems: "center", flexWrap: "wrap" },
        html: s
      }, ...((r = this.templates_) == null ? void 0 : r.columnFilterBar) || {} };
    },
    /** Parsed terms for global search */
    cGlobalSearchTerms() {
      return !this.globalSearch_ || !this.globalSearchText_ ? [] : this._parseSearchTerms(this.globalSearchText_);
    },
    /** Parsed terms for each column filter */
    cParsedColumnFilters() {
      const e = {};
      if (!this.columnFilters_) return e;
      for (const t in this.filters_) {
        const i = this.filters_[t];
        i && (e[t] = this._parseSearchTerms(i));
      }
      return e;
    },
    /** Parsed terms extracted from global expression filter (literals in quotes) */
    cParsedGlobalFilterTerms() {
      if (!this.globalFilter_ || !this.globalFilterText_) return [];
      const e = [], t = /['"]([^'"]+)['"]/g;
      let i;
      for (; (i = t.exec(this.globalFilterText_)) !== null; )
        i[1] && e.push(i[1]);
      return e.map((l) => {
        const s = l.replace(/([.*+?^${}()|[\]\\])/g, "\\$1");
        return {
          raw: l,
          display: l,
          caseSensitive: !1,
          isGlob: !1,
          regex: new RegExp(s, "i"),
          gRegex: new RegExp(s, "gi"),
          type: "quoted"
        };
      });
    }
  },
  created() {
    this.editValue = this._clone(this.value_), this._applyConfigToState(), this.src && this._fetchSrc(this.src);
  },
  mounted() {
    this.global_ && (window[this.global_] = this);
  },
  methods: {
    _fetchSrc(e) {
      if (!e || typeof e != "string") return;
      const t = e.startsWith("http://") || e.startsWith("https://"), i = e.startsWith("./") || e.startsWith("../"), l = e.startsWith("/");
      !t && !i && !l || (this.srcLoading_ = !0, this.srcError_ = null, fetch(e).then((s) => {
        if (!s.ok) throw new Error(`${s.status} ${s.statusText}`);
        return (s.headers.get("content-type") || "").includes("json") ? s.json() : s.text().then((o) => {
          try {
            return JSON.parse(o);
          } catch {
            return o;
          }
        });
      }).then((s) => {
        this.apiResponse_ = s, this._applyProject(), this.srcLoading_ = !1;
      }).catch((s) => {
        const r = s.message || String(s);
        this.srcError_ = r === "Failed to fetch" ? `Failed to fetch "${e}" — likely blocked by CORS. Use a proxy or a CORS-enabled API.` : r, this.srcLoading_ = !1;
      }));
    },
    _applyProject() {
      if (this.apiResponse_ == null) return;
      let e = this.apiResponse_;
      if (!this.raw_) if (typeof this.project_ == "string" && this.project_) {
        const t = this.project_.split(".");
        for (const i of t)
          if (e != null && typeof e == "object") e = e[i];
          else {
            e = this.apiResponse_;
            break;
          }
      } else this.project_ && typeof this.project_ == "object" && (e = W(e, this.project_, { mode: this.projectMode_ }) || e);
      this.value_ = e, this.editValue = this._clone(e);
    },
    /* ═══ allComps is now a computed property — see computed section ═══ */
    /* ── Deep clone (fallback if not provided by mixin) ── */
    _clone(e) {
      if (typeof this.clone == "function") return this.clone(e);
      try {
        return JSON.parse(JSON.stringify(e));
      } catch {
        return e;
      }
    },
    /* ── Compute object depth (fallback if not provided by mixin) ── */
    _getObjectDepth(e, t = /* @__PURE__ */ new WeakSet()) {
      if (e == null || typeof e != "object" || e instanceof Date || t.has(e)) return 0;
      if (t.add(e), Array.isArray(e))
        return e.length === 0 ? 0 : 1 + Math.max(...e.slice(0, 100).map((l) => this._getObjectDepth(l, t)));
      const i = Object.values(e);
      return i.length === 0 ? 0 : 1 + Math.max(...i.slice(0, 100).map((l) => this._getObjectDepth(l, t)));
    },
    /* ── Parse string to object (fallback if not provided by mixin) ── */
    _strToObj(e) {
      if (typeof this.strToObj == "function") return this.strToObj(e);
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    },
    /* ── Resolve rules for a specific field.
       Returns an array of (v)=>true|message functions to pass to Vuetify's VTextField.
       Accepts per-field nesting: rules:{age:{required:{...}, maxLength:{len:3}}, name:['required']}
       as well as the flat forms (applied to all fields). */
    _rulesForField(e) {
      const t = this.rules_;
      if (!t) return [];
      if (typeof t == "function" || Array.isArray(t)) return H(t);
      if (typeof t == "object") {
        const i = ["required", "maxLength", "minLength", "upperCharNb", "lowerCharNb", "specialCharNb", "digitCharNb", "email", "phone"], l = Object.keys(t);
        return l.length > 0 && l.every((r) => !i.includes(r)) ? t[e] ? H(t[e]) : [] : H(t);
      }
      return [];
    },
    /* ── VNode helpers ── */
    _icon(e) {
      return { comp: "VIcon", options: {
        props: { small: !0 },
        class: "wbdv-icon",
        style: { fontSize: "18px", lineHeight: 1 },
        html: e
      } };
    },
    _btn({ icon: e = !1, small: t = !1, title: i, onClick: l, children: s = [] }) {
      return { comp: "VBtn", options: {
        attrs: { title: i },
        props: { icon: e, small: t, title: i, text: !0 },
        class: "wbdv-btn",
        style: { minWidth: "28px", height: "28px", padding: "0 4px" },
        on: { click: l },
        html: s
      } };
    },
    /* ── Global Search filter logic ── */
    _globalSearchFilter(e) {
      if (!this.globalSearchText_ || !this.globalSearch_) return e;
      const t = this.globalSearchText_.toLowerCase().split(/\s+/).filter(Boolean);
      if (t.length === 0) return e;
      const i = this.globalSearchMode_;
      return e.filter((l) => {
        const s = Object.values(l).map((r) => String(r ?? "").toLowerCase());
        return i === "and" ? t.every((r) => s.some((o) => o.includes(r))) : t.some((r) => s.some((o) => o.includes(r)));
      });
    },
    /* ── P1-3: Global Expression Filter ── */
    /**
     * Safely evaluate a JS expression against a row object.
     * Uses Function constructor with row values as local variables.
     * Falls back to string search if expression is not a valid JS expression.
     * @param {Object} row - The data row
     * @param {string} expr - The JS expression to evaluate
     * @returns {boolean} Whether the row matches the filter
     */
    _evalGlobalFilter(e, t) {
      if (!t || !t.trim()) return !0;
      const i = t.trim();
      if (!e || typeof e != "object") return !1;
      try {
        const l = Object.keys(e).filter((o) => o !== "row" && /^[$A-Z_a-z][$0-9A-Z_a-z]*$/.test(o)), s = l.map((o) => e[o]);
        return !!new Function("row", ...l, `try { return (${i}); } catch(e) { return false; }`)(e, ...s);
      } catch {
        const s = i.toLowerCase();
        return Object.values(e).some((r) => String(r ?? "").toLowerCase().includes(s));
      }
    },
    /**
     * Apply global expression filter to rows.
     * Returns only rows where the expression evaluates to truthy.
     * @param {Array} rows - Input rows
     * @returns {Array} Filtered rows
     */
    _globalFilterRows(e) {
      return !this.globalFilter_ || !this.globalFilterText_ ? e : e.filter((t) => this._evalGlobalFilter(t, this.globalFilterText_));
    },
    /** Toggle `globalFilter`: true → false → v → true */
    toggleGlobalFilter(e) {
      e === !0 ? this.globalFilter_ = !this.globalFilter_ : e === !1 ? this.globalFilter_ = e : this.globalFilter_ = !0;
    },
    /* ── Resolve rowLabel prop for a given row + index (vertical thead) ── */
    _resolveRowLabel(e, t) {
      const i = this.rowLabel_;
      if (typeof i == "function")
        try {
          return String(i(e, t));
        } catch {
          return `Item ${t + 1}`;
        }
      return typeof i == "string" ? i.replace(/\{i1\}/g, String(t + 1)).replace(/\{i\}/g, String(t)) : `Item ${t + 1}`;
    },
    /* ── Normalize any value → array of rows for table rendering ── */
    _normalizeToRows(e) {
      return Array.isArray(e) ? e.some((i) => i && typeof i == "object") ? e : e.map((i, l) => ({ [l]: i })) : e && typeof e == "object" ? [e] : [{ 0: e }];
    },
    /* ── Path helpers ── */
    /* ── Config resolver ── deep-merge defaults ← props ← config ← configByPath (prefixes) */
    _cfgDefaults() {
      return {
        output: ["horiz"],
        typeTable: "horizontal",
        editable: !1,
        theme: "default",
        boxed: !0,
        showHeader: !0,
        copyable: !0
      };
    },
    _cfgFromProps() {
      const e = {};
      return this.output != null && (e.output = this.output), this.childOutput != null && (e.childOutput = this.childOutput), this.typeTable != null && (e.typeTable = this.typeTable), this.editable != null && (e.editable = this.editable), this.theme != null && this.theme !== "default" && (e.theme = this.theme), this.boxed != null && (e.boxed = this.boxed), this.showHeader != null && (e.showHeader = this.showHeader), this.copyable != null && (e.copyable = this.copyable), this.rowDel != null && (e.rowDel = this.rowDel), this.rowSave != null && (e.rowSave = this.rowSave), this.rowAdd != null && (e.rowAdd = this.rowAdd), this.cellEdit != null && (e.cellEdit = this.cellEdit), this.cellDel != null && (e.cellDel = this.cellDel), this.cellSave != null && (e.cellSave = this.cellSave), this.smartInput != null && (e.smartInput = this.smartInput), this.sort != null && (e.sort = this.sort), this.pagination != null && (e.pagination = this.pagination), e;
    },
    _deepMerge(e, t) {
      if (!e || typeof e != "object") return t;
      if (!t || typeof t != "object") return e;
      const i = Array.isArray(e) ? [...e] : { ...e };
      for (const l of Object.keys(t)) {
        const s = i[l], r = t[l];
        s && r && typeof s == "object" && typeof r == "object" && !Array.isArray(s) && !Array.isArray(r) ? i[l] = this._deepMerge(s, r) : i[l] = r;
      }
      return i;
    },
    _configFor(e = []) {
      let t = this._deepMerge(this._cfgDefaults(), this._cfgFromProps());
      this.config_ && (t = this._deepMerge(t, this.config_));
      const i = this.configByPath_ || null;
      if (i && e.length)
        for (let l = 1; l <= e.length; l++) {
          const s = e.slice(0, l).join(".");
          i[s] && (t = this._deepMerge(t, i[s]));
        }
      return t;
    },
    /* Apply resolved config values to the root instance's working state so
       features like output/typeTable/editable/theme react when `config` or
       `configByPath` props change after mount. Path-scoped overrides are
       applied inside renderCell via _configFor(path); this method only
       seeds the root-level state. */
    _applyConfigToState() {
      const e = this._configFor([]);
      e.output != null && (this.output_ = Array.isArray(e.output) ? e.output : [e.output]), e.childOutput != null && (this.childOutput_ = e.childOutput), e.typeTable != null && (this.typeTable_ = e.typeTable), e.editable != null && (this.editable_ = e.editable), e.theme != null && (this.theme_ = e.theme), e.boxed != null && (this.boxed_ = e.boxed), e.showHeader != null && (this.showHeader_ = e.showHeader), e.copyable != null && (this.copyable_ = e.copyable), e.rowDel != null && (this.rowDel_ = e.rowDel), e.rowSave != null && (this.rowSave_ = e.rowSave), e.rowAdd != null && (this.rowAdd_ = e.rowAdd), e.cellEdit != null && (this.cellEdit_ = e.cellEdit), e.cellDel != null && (this.cellDel_ = e.cellDel), e.cellSave != null && (this.cellSave_ = e.cellSave), e.smartInput != null && (this.smartInput_ = e.smartInput), e.sort != null && (this.sort_ = e.sort), e.pagination != null && (this.pagination_ = e.pagination);
    },
    _pathKey(e) {
      return Array.isArray(e) ? e.join(".") : e;
    },
    _isCellEditing(e) {
      return !!this.editingCells[this._pathKey(e)];
    },
    _hasCellChanged(e) {
      const t = this._pathKey(e);
      return t in this.originalValues ? JSON.stringify(this._getNestedValue(e)) !== JSON.stringify(this.originalValues[t]) : !1;
    },
    /* ── Cell edit ── */
    _startCellEdit(e, t) {
      const i = this._pathKey(e);
      this.$set(this.editingCells, i, !0), this.$set(this.originalValues, i, this._clone(t));
    },
    _cancelCellEdit(e) {
      const t = this._pathKey(e);
      t in this.originalValues && this._setNestedValue(e, this._clone(this.originalValues[t])), this.$delete(this.editingCells, t), this.$delete(this.originalValues, t), this.$forceUpdate();
    },
    _confirmCellEdit(e) {
      const t = this._pathKey(e), i = this._getNestedValue(e);
      this.$emit("saved", { path: [...e], value: this._clone(i) }), this.$delete(this.editingCells, t), this.$delete(this.originalValues, t), this.$forceUpdate();
    },
    _getNestedValue(e) {
      let t = this.editValue;
      for (const i of e) {
        const l = Array.isArray(t) ? Number(i) : i;
        t = t == null ? void 0 : t[l];
      }
      return t;
    },
    _setNestedValue(e, t) {
      const i = Array.isArray(e) ? e : e.split(".");
      let l = this.editValue;
      for (let r = 0; r < i.length - 1; r++) {
        const o = Array.isArray(l) ? Number(i[r]) : i[r];
        l = l[o];
      }
      const s = Array.isArray(l) ? Number(i[i.length - 1]) : i[i.length - 1];
      this.smartInput_ && typeof t == "string" ? t = this._strToObj(t) : !this.smartInput_ && typeof t == "string" && (t === "true" ? t = !0 : t === "false" ? t = !1 : t === "null" ? t = null : !isNaN(t) && t.trim() !== "" && (t = Number(t))), this.twoWay_ ? (Array.isArray(l) ? this.$set(l, Number(s), t) : this.$set(l, s, t), this._syncEditToValue_(e, t), this.$emit("input", this._clone(this.editValue))) : l[s] = t;
    },
    /* ── Sync editValue changes back to value_ (when twoWay=true) ── */
    _syncEditToValue_(e, t) {
      let i = this.value_;
      const l = Array.isArray(e) ? e : e.split(".");
      for (let r = 0; r < l.length - 1; r++) {
        const o = Array.isArray(i) ? Number(l[r]) : l[r];
        i = i[o];
      }
      const s = Array.isArray(i) ? Number(l[l.length - 1]) : l[l.length - 1];
      Array.isArray(i) ? this.$set(i, Number(s), this._clone(t)) : this.$set(i, s, this._clone(t));
    },
    /* ── Row actions ── */
    _toggleAddRow(e) {
      this.$set(this.addRowVisible, e, !this.addRowVisible[e]), this.addRowVisible[e] ? this.$nextTick(() => {
        var i, l;
        const t = this.$refs[`add-input-${e}`];
        if (t) {
          const s = (l = (i = t.$el) == null ? void 0 : i.querySelector) == null ? void 0 : l.call(i, "input");
          s && s.focus();
        }
      }) : this.$delete(this.addRowText, e);
    },
    _submitAddRow(e, t) {
      this.addRowText || (this.addRowText = {});
      const i = (this.addRowText[t] || "").trim();
      if (!i) return;
      const l = this._strToObj(i);
      if (!l || typeof l != "object" || l === null) {
        const s = e.length > 0 && typeof e[0] == "object" && e[0] !== null ? Object.keys(e[0]) : ["value"], r = {};
        s.forEach((o) => {
          r[o] = i;
        }), e.push(r);
      } else
        e.push(l);
      this.$emit("input", this._clone(this.editValue)), this.$emit("rowAdded", { value: e[e.length - 1] }), this.$delete(this.addRowText, t), this.$set(this.addRowVisible, t, !1), this.$forceUpdate();
    },
    _deleteRow(e, t) {
      confirm(`Delete row ${t}?`) && (e.splice(t, 1), this.$emit("input", this._clone(this.editValue)), this.$emit("rowDeleted", { index: t }), this.$forceUpdate());
    },
    _saveRow(e, t) {
      this.$emit("rowSaved", { index: t, value: this._clone(e[t]) });
    },
    /* ── Sorting ── */
    /** Check if a column is sortable. */
    _isSortable(e) {
      return this.sort_ ? this.sort_ === !0 ? !0 : Array.isArray(this.sort_) && this.sort_.includes(e) : !1;
    },
    /** Cycle sort state: 0 → 1 (asc) → -1 (desc) → 0 (none) */
    _toggleSort(e) {
      const t = this.sorted_[e];
      if (t)
        t.order === 1 ? t.order = -1 : (this.$delete(this.sorted_, e), this._reindexSort());
      else {
        const i = Object.keys(this.sorted_).length;
        this.$set(this.sorted_, e, { order: 1, idx: i });
      }
      this._applySort();
    },
    /** Enhanced comparison function for heterogeneous values (adapted from WBTable.js) */
    /**
     * Type-safe comparator handling heterogeneous types.
     * Type priority: null/undefined < number < string < boolean < object
     * Within same type: natural comparison (numeric for numbers, localeCompare for strings).
     * @param {*} a - First value
     * @param {*} b - Second value
     * @param {string} order - 'ascending' or 'descending'
     * @returns {number} -1, 0, or 1
     */
    _compareValuesLogic(e, t, i) {
      if (e === t) return 0;
      const l = i === "ascending" ? 1 : -1, s = e == null, r = t == null;
      if (s && r) return 0;
      if (s) return -1 * l;
      if (r) return 1 * l;
      if (typeof e == typeof t) {
        if (typeof e == "number") return (e - t) * l;
        if (typeof e == "string") return e.localeCompare(t) * l;
        if (typeof e == "boolean") return (e === t ? 0 : e ? 1 : -1) * l;
        try {
          const h = JSON.stringify(e).length, d = JSON.stringify(t).length;
          return (h - d) * l;
        } catch {
          return 0;
        }
      }
      const o = { number: 0, string: 1, boolean: 2, object: 3 }, n = o[typeof e] ?? 4, c = o[typeof t] ?? 4;
      return (n - c) * l;
    },
    /** Re-index all sort criteria to be consecutive 0, 1, 2... */
    _reindexSort() {
      Object.keys(this.sorted_).sort((t, i) => this.sorted_[t].idx - this.sorted_[i].idx).forEach((t, i) => {
        this.$set(this.sorted_, t, { ...this.sorted_[t], idx: i });
      });
    },
    /* ── Pagination methods ── */
    _goToPage(e) {
      this.page_ = Math.max(1, Math.min(e, this.totalPages));
    },
    _prevPage() {
      this._goToPage(this.page_ - 1);
    },
    _nextPage() {
      this._goToPage(this.page_ + 1);
    },
    /* _paginationFooter — removed, now computed: cPaginationFooter */
    /**
     * Non-mutating data pipeline: rawRows → sorted → paginated.
     * Used by _buildTable to get display-ready rows without side effects.
     * @param {Array} rows - Raw input rows
     * @returns {{ sorted: Array, paged: Array, allRows: Array }} Processed row sets
     */
    _processRows(e) {
      if (!Array.isArray(e) || e.length === 0) return { sorted: [], paged: [], allRows: e };
      e = this._globalFilterRows(e), e = this._columnFilterRows(e);
      let t = e;
      const i = Object.keys(this.sorted_).sort((s, r) => this.sorted_[s].idx - this.sorted_[r].idx);
      if (i.length > 0) {
        const s = e.map((r, o) => ({ row: r, _origIdx: o }));
        s.sort((r, o) => {
          var n, c;
          for (const h of i) {
            const d = this.sorted_[h].order === 1 ? "ascending" : "descending", p = this._compareValuesLogic((n = r.row) == null ? void 0 : n[h], (c = o.row) == null ? void 0 : c[h], d);
            if (p !== 0) return p;
          }
          return r._origIdx - o._origIdx;
        }), t = s.map((r) => r.row);
      }
      const l = this.hasPagination ? t.slice((this.page_ - 1) * this.itemsPerPage_, this.page_ * this.itemsPerPage_) : t;
      return { sorted: t, paged: l, allRows: e };
    },
    /** Apply current sort state — triggers re-render via reactivity. */
    _applySort() {
      this.$forceUpdate();
    },
    /** Render sort icon with multi-sort badge. */
    _sortIcon(e) {
      if (!this._isSortable(e)) return null;
      const t = this.sorted_[e], i = t ? t.order === 1 ? "mdi-arrow-up-bold" : "mdi-arrow-down-bold" : "mdi-swap-vertical", l = t ? "primary" : "grey", s = () => this._toggleSort(e), r = { comp: "VIcon", options: {
        props: { small: !0 },
        class: "wbdv-sort-icon",
        style: { color: l, cursor: "pointer", fontSize: "16px" },
        on: { click: s },
        html: i
      } };
      return Object.keys(this.sorted_).length > 1 && t ? { comp: "VBadge", options: {
        props: { value: !0, content: t.idx + 1, color: "primary", overlap: !0, bordered: !1, inline: !0 },
        class: "wbdv-sort-badge",
        style: { marginLeft: "2px", cursor: "pointer" },
        on: { click: (n) => {
          n.stopPropagation(), s();
        } },
        html: r
      } } : { comp: "VBtn", options: {
        props: { icon: !0, small: !0 },
        class: "wbdv-sort-btn",
        style: { minWidth: "24px", height: "24px" },
        attrs: { title: `Sort by "${e}"` },
        on: { click: s },
        html: r
      } };
    },
    /* ── Copy ── */
    async copyToClipboard() {
      try {
        const e = JSON.stringify(this.activeValue, null, 2);
        await navigator.clipboard.writeText(e), this.copied = !0, this.$emit("copied", e);
      } catch (e) {
        console.warn("[WBDataViewer] Copy failed:", e);
      }
    },
    /* ── Body: raw ──
       Shows the real content (pretty-printed JSON). When editable_ is on, renders a VTextarea
       whose change handler runs _strToObj so typed edits parse back to a live object/array.
       Uses domProps.innerText on <pre> to bypass WBHtml parsing that coerces JSON-looking
       strings back to [object Object]. */
    bodyRawNode(e) {
      var s, r;
      const t = e !== void 0 ? e : this.activeValue;
      let i;
      try {
        i = JSON.stringify(t, null, 2);
      } catch {
        i = "[Circular or unserializable value]";
      }
      if (this.editable_)
        return { comp: "VTextarea", options: {
          class: "wbdv-raw wbdv-raw-editable",
          style: { fontFamily: "monospace", fontSize: "12px" },
          props: {
            value: i,
            outlined: !0,
            dense: !0,
            hideDetails: !0,
            rows: Math.min(20, Math.max(3, (i.match(/\n/g) || []).length + 1)),
            autoGrow: !0
          },
          on: { change: (o) => {
            const n = this._strToObj(o);
            this.editValue = n, this.twoWay_ && (this.value_ = this._clone(n), this.$emit("input", this._clone(n)));
          } },
          ...((s = this.templates_) == null ? void 0 : s.raw) || {}
        } };
      const l = i.replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;");
      return { comp: "pre", options: {
        class: "wbdv-raw",
        style: { padding: "12px", margin: 0, overflowX: "auto", fontFamily: "monospace", fontSize: "12px", background: "#1e1e1e", color: "#d4d4d4", whiteSpace: "pre", tabSize: 2, borderRadius: "4px" },
        html: l
      }, ...((r = this.templates_) == null ? void 0 : r.raw) || {} };
    },
    /* ── Body: JSON viewer ── */
    bodyJsonViewerNode(e) {
      var i;
      const t = e !== void 0 ? e : this.activeValue;
      return { comp: "JsonViewer", options: {
        key: `jv-${this.expandDepth}`,
        props: { value: t, expandDepth: this.expandDepth, copyable: !1, boxed: !1, sort: this.sort_, showDoubleQuotes: !1 },
        class: "wbdv-json",
        style: { padding: "8px", overflowX: "auto" }
      }, ...((i = this.templates_) == null ? void 0 : i.json) || {} };
    },
    /* ── Body: primitive ── */
    bodyPrimitiveNode(e) {
      var i;
      const t = e !== void 0 ? e : this.activeValue;
      return { comp: "div", options: {
        class: "wbdv-primitive",
        style: { padding: "8px" },
        html: { comp: "JsonViewer", options: { props: { value: t, expandDepth: 1, copyable: !1, boxed: !1 } } }
      }, ...((i = this.templates_) == null ? void 0 : i.prim) || {} };
    },
    /* ── Body: WBC node ── */
    bodyWbcNode(e) {
      return e !== void 0 ? e : this.activeValue;
    },
    /* ── Editable cell VTextField ── */
    _editableCellField(e, t, i) {
      const l = this._hasCellChanged(i), s = i && i.length ? i[i.length - 1] : t, r = this._rulesForField(s);
      return { comp: "div", options: { class: "wbdv-cell-editing", style: { display: "flex", flexDirection: "row", alignItems: "center", gap: "4px" }, html: [
        { comp: "VTextField", options: {
          class: "wbdv-cell-field",
          props: {
            value: e === null ? "null" : String(e),
            label: t,
            dense: !0,
            outlined: !0,
            hideDetails: r.length ? "auto" : !0,
            rules: r,
            appendIcon: this.cellSave_ && l ? "mdi-content-save-check" : void 0,
            appendOuterIcon: this.cellDel_ ? "mdi-delete" : void 0
          },
          on: {
            change: (o) => this._setNestedValue(i, o),
            "click:append": () => this._confirmCellEdit(i),
            "click:append-outer": () => this._deleteProperty(i)
          }
        } },
        l ? this._btn({ icon: !0, small: !0, title: "Restore", onClick: () => this._cancelCellEdit(i), children: [this._icon("mdi-close-circle")] }) : null
      ] } };
    },
    /* ── Editable leaf node ── */
    _editableLeafNode(e, t, i) {
      const l = this._isCellEditing(i);
      if (this.editable_) {
        const r = i && i.length ? i[i.length - 1] : t, o = this._rulesForField(r);
        return { comp: "VTextField", options: {
          class: "wbdv-cell-field",
          style: { fontFamily: "inherit", fontSize: "12px" },
          props: {
            value: e === null ? "null" : String(e),
            label: t,
            dense: !0,
            outlined: !0,
            hideDetails: o.length ? "auto" : !0,
            rules: o
          },
          on: { change: (n) => this._setNestedValue(i, n) }
        } };
      }
      if (l)
        return this._editableCellField(e, t, i);
      const s = [];
      return this.cellEdit_ && s.push(this._btn({ icon: !0, small: !0, title: "Edit", onClick: () => this._startCellEdit(i, e), children: [this._icon("mdi-pencil")] })), { comp: "div", options: { class: "wbdv-cell-display", style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4px", padding: "2px 4px" }, html: [
        { comp: "span", options: {
          class: "wbdv-cell-value",
          style: { flex: 1, wordBreak: "break-all" },
          html: e === null ? { comp: "span", options: { class: "wbdv-cell-null", style: { color: "#999", fontStyle: "italic" }, html: "null" } } : String(e)
        } },
        ...s
      ] } };
    },
    /* ── Editable tree node ── */
    _editableTreeNode(e, t, i, l = /* @__PURE__ */ new WeakSet()) {
      if (e === null || typeof e != "object") return this._editableLeafNode(e, i, t);
      if (l.has(e))
        return { comp: "span", options: { class: "wbdv-cell-null", style: { color: "#999", fontStyle: "italic" }, html: "[Circular]" } };
      if (l.add(e), this._isCellEditing(t)) {
        const h = Array.isArray(e) ? e.map((d, p) => [String(p), d]) : Object.entries(e);
        return { comp: "div", options: {
          class: "wbdv-edit-group",
          style: { margin: "4px 0", paddingLeft: "16px", borderLeft: "2px solid #e0e0e0" },
          html: h.map(([d, p]) => this._editableTreeNode(p, [...t, d], d, l))
        } };
      }
      const r = Array.isArray(e), o = r ? e.map((c, h) => [String(h), c]) : Object.entries(e), n = [];
      return this.cellEdit_ && n.push(this._btn({ icon: !0, small: !0, title: "Edit all nested", onClick: () => this._startCellEdit(t, e), children: [this._icon("mdi-pencil")] })), { comp: "div", options: { class: "wbdv-edit-group", style: { margin: "4px 0", paddingLeft: "16px", borderLeft: "2px solid #e0e0e0" }, html: [
        { comp: "div", options: { class: "wbdv-edit-group-hdr", style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, html: [
          { comp: "span", options: { class: "wbdv-edit-group-label", style: { fontSize: "11px", color: "#888", padding: "2px 0 4px", textTransform: "uppercase", letterSpacing: "0.5px", flex: 1 }, html: r ? `[${i} — ${o.length}]` : `{${i} — ${o.length}}` } },
          ...n
        ] } },
        { comp: "div", options: {
          class: "wbdv-edit-group-body",
          style: { display: "flex", flexDirection: "column", gap: "2px" },
          html: o.map(([c, h]) => this._editableTreeNode(h, [...t, c], c, l))
        } }
      ] } };
    },
    bodyEditableNode(e) {
      var l;
      const t = e !== void 0 ? e : this.editValue;
      if (t == null || typeof t != "object") return this.bodyPrimitiveNode(t);
      const i = Array.isArray(t) ? t.map((s, r) => [String(r), s]) : Object.entries(t);
      return { comp: "div", options: {
        class: "wbdv-edit-root",
        style: { padding: "8px" },
        html: i.map(([s, r]) => this._editableTreeNode(r, [s], s))
      }, ...((l = this.templates_) == null ? void 0 : l.edit) || {} };
    },
    /* ── Delete property ── */
    _deleteProperty(e) {
      if (!confirm(`Delete "${e[e.length - 1]}"?`)) return;
      let t = this.editValue;
      for (let s = 0; s < e.length - 1; s++) {
        const r = Array.isArray(t) ? Number(e[s]) : e[s];
        t = t[r];
      }
      const i = Array.isArray(t) ? Number(e[e.length - 1]) : e[e.length - 1];
      Array.isArray(t) ? t.splice(Number(i), 1) : this.$delete(t, i), this.$emit("input", this._clone(this.editValue)), this.$emit("deleted", { path: e, value: null });
      const l = this._pathKey(e);
      this.$delete(this.editingCells, l), this.$delete(this.originalValues, l), this.$forceUpdate();
    },
    /* ═══ Toggle methods for boolean props (3-state: true → false → v → true) ═══ */
    /** Toggle `copyable`: true → false → v → true */
    toggleCopyable(e) {
      e === !0 ? this.copyable_ = !this.copyable_ : e === !1 ? this.copyable_ = e : this.copyable_ = !0, this.key_++;
    },
    /** Toggle `showHeader`: true → false → v → true */
    toggleShowHeader(e) {
      e === !0 ? this.showHeader_ = !this.showHeader_ : e === !1 ? this.showHeader_ = e : this.showHeader_ = !0, this.key_++;
    },
    /** Toggle `boxed`: true → false → v → true */
    toggleBoxed(e) {
      e === !0 ? this.boxed_ = !this.boxed_ : e === !1 ? this.boxed_ = e : this.boxed_ = !0, this.key_++;
    },
    /** Toggle `twoWay`: true → false → v → true */
    toggleTwoWay(e) {
      e === !0 ? this.twoWay_ = !this.twoWay_ : e === !1 ? this.twoWay_ = e : this.twoWay_ = !0, this.key_++;
    },
    /** Toggle `smartInput`: true → false → v → true */
    toggleSmartInput(e) {
      e === !0 ? this.smartInput_ = !this.smartInput_ : e === !1 ? this.smartInput_ = e : this.smartInput_ = !0, this.key_++;
    },
    /** Toggle `editable`: true → false → v → true */
    toggleEditable(e) {
      e === !0 ? this.editable_ = !this.editable_ : e === !1 ? this.editable_ = e : this.editable_ = !0, this.key_++;
    },
    /** Toggle `cellDel`: true → false → v → true */
    toggleCellDel(e) {
      e === !0 ? this.cellDel_ = !this.cellDel_ : e === !1 ? this.cellDel_ = e : this.cellDel_ = !0, this.key_++;
    },
    /** Toggle `cellEdit`: true → false → v → true */
    toggleCellEdit(e) {
      e === !0 ? this.cellEdit_ = !this.cellEdit_ : e === !1 ? this.cellEdit_ = e : this.cellEdit_ = !0, this.key_++;
    },
    /** Toggle `cellSave`: true → false → v → true */
    toggleCellSave(e) {
      e === !0 ? this.cellSave_ = !this.cellSave_ : e === !1 ? this.cellSave_ = e : this.cellSave_ = !0, this.key_++;
    },
    /** Toggle `rowDel`: true → false → v → true */
    toggleRowDel(e) {
      e === !0 ? this.rowDel_ = !this.rowDel_ : e === !1 ? this.rowDel_ = e : this.rowDel_ = !0, this.key_++;
    },
    /** Toggle `rowSave`: true → false → v → true */
    toggleRowSave(e) {
      e === !0 ? this.rowSave_ = !this.rowSave_ : e === !1 ? this.rowSave_ = e : this.rowSave_ = !0, this.key_++;
    },
    /** Toggle `rowAdd`: true → false → v → true */
    toggleRowAdd(e) {
      e === !0 ? this.rowAdd_ = !this.rowAdd_ : e === !1 ? this.rowAdd_ = e : this.rowAdd_ = !0, this.key_++;
    },
    /** Toggle `sort`: true → false → v → true (sort can be Boolean|Array) */
    toggleSort(e) {
      e === !0 ? this.sort_ = !this.sort_ : e === !1 ? this.sort_ = e : this.sort_ = !0, this.key_++;
    },
    /** Toggle `pagination`: true → false → v → true (pagination can be Boolean|Array) */
    togglePagination(e) {
      e === !0 ? this.pagination_ = !this.pagination_ : e === !1 ? this.pagination_ = e : this.pagination_ = !0, this.key_++;
    },
    /** Toggle `searchColor`: true → false → v → true */
    toggleSearchColor(e) {
      e === !0 ? this.searchColor_ = !this.searchColor_ : e === !1 ? this.searchColor_ = e : this.searchColor_ = !0;
    },
    /** Toggle `columnFilters`: true → false → v → true */
    toggleColumnFilters(e) {
      e === !0 ? this.columnFilters_ = !this.columnFilters_ : e === !1 ? this.columnFilters_ = e : this.columnFilters_ = !0, this.key_++;
    },
    /** Toggle `selectable`: true → false → v → true */
    toggleSelectable(e) {
      e === !0 ? this.selectable_ = !this.selectable_ : e === !1 ? this.selectable_ = e : this.selectable_ = !0, this.key_++;
    },
    /** Toggle selection for a row index */
    _toggleRowSelection(e) {
      const t = this.selItems_.indexOf(e);
      t === -1 ? this.selItems_.push(e) : this.selItems_.splice(t, 1), this.$emit("selection-change", this.selItems_.slice());
    },
    /** Select all rows */
    _selectAllRows() {
      this.selItems_ = Array.from({ length: this.totalItems }, (e, t) => t), this.$emit("selection-change", this.selItems_.slice());
    },
    /** Clear all selections */
    _clearSelection() {
      this.selItems_ = [], this.$emit("selection-change", []);
    },
    /* ═══ P5-2: HTML Export ═══ */
    /** Export the component's rendered HTML to clipboard */
    async exportHtml() {
      try {
        await this.$nextTick();
        const e = this.$el;
        if (!e) return;
        const t = e.outerHTML.replace(/\s*data-v-[a-f0-9]+/g, "").replace(/\s*aria-.+?="[^"]*"/g, "").replace(/\s*role="[^"]*"/g, "").replace(/\s*tabindex="[^"]*"/g, "");
        await navigator.clipboard.writeText(t), this.copied = !0, this.$emit("exported-html", t);
      } catch (e) {
        console.warn("[WBDataViewer] HTML export failed:", e);
      }
    },
    /* ═══ P1-2: Column Filtering Engine ═══ */
    /**
     * Apply per-column text/regex filters to rows.
     * Each column can have its own filter text in `this.filters_`.
     * Mode: 'text' (case-insensitive substring) or 'regex' (RegExp match).
     * Filter logic: AND mode — row must match ALL active column filters.
     * @param {Array} rows - Input rows
     * @returns {Array} Filtered rows
     */
    _columnFilterRows(e) {
      if (!this.columnFilters_) return e;
      const t = Object.entries(this.filters_).filter(([l, s]) => s && s.trim());
      if (t.length === 0) return e;
      const i = this.columnFilterMode_;
      return e.filter((l) => t.every(([s, r]) => {
        const o = l == null ? void 0 : l[s];
        if (o == null) return !1;
        const n = String(o).toLowerCase(), c = r.trim();
        if (i === "regex")
          try {
            return new RegExp(c, "i").test(String(o));
          } catch {
            return n.includes(c.toLowerCase());
          }
        return n.includes(c.toLowerCase());
      }));
    },
    /** Set a per-column filter value */
    _setColumnFilter(e, t) {
      this.$set(this.filters_, e, t), this.page_ = 1;
    },
    /** Clear a specific column filter */
    _clearColumnFilter(e) {
      this.$set(this.filters_, e, ""), this.page_ = 1;
    },
    /** Clear all column filters */
    _clearAllColumnFilters() {
      this.filters_ = {}, this.page_ = 1;
    },
    /** Count active column filters */
    _activeFilterCount() {
      return Object.values(this.filters_).filter((e) => e && e.trim()).length;
    },
    /* ═══ Column filter bar — moved to computed: cColumnFilterBar ═══ */
    /** Per-column filter input — used inside <th> cells when columnFilters is active */
    _columnFilterInput(e) {
      var r;
      if (!this.columnFilters_) return null;
      const t = this, i = this.filters_[e] || "", l = i && i.trim(), s = this.columnFilterMode_ === "regex" ? "regex" : "text";
      return { comp: "VTextField", options: {
        props: {
          value: i,
          dense: !0,
          hideDetails: !0,
          outlined: !0,
          clearable: !l,
          placeholder: `Filter (${s})…`,
          title: `Column filter — rows must match ALL active column filters (AND). Mode: ${s}.`,
          prependInnerIcon: l ? "mdi-filter" : "mdi-filter-variant-plus",
          backgroundColor: l ? "#e3f2fd" : "#fff"
        },
        class: "wbdv-column-filter-input",
        style: { width: "100%", fontSize: "11px", maxWidth: "160px" },
        on: {
          "click:clear": () => {
            t._clearColumnFilter(e);
          }
        },
        nativeOn: {
          input: (o) => {
            t._setColumnFilter(e, o.target.value);
          }
        }
      }, ...((r = this.templates_) == null ? void 0 : r.columnFilterInput) || {} };
    },
    /* ═══ Toggle icon VNode builders (accept h, return VNode) ═══ */
    /* Toggle/structural methods moved to computed: cToggle*, cGlobalSearchInput, cGlobalFilterInput, cPaginationFooter, cSnackbar */
    /* ═══ Search helpers ═══ */
    /**
     * Parse search text into structured term objects.
     * Supports:
     *  - Plain words: case-insensitive substring match
     *  - "Quoted phrases": case-SENSITIVE exact match (preserves spaces)
     *  - Glob wildcards: ? = any 1 char, * = any sequence
     * Returns: [{raw, display, caseSensitive, isGlob, regex}]
     */
    _parseSearchTerms(e) {
      if (!e || !e.trim()) return [];
      const t = [], i = /"([^"]*)"|\(([^)]*)\)|([^\s]+)/g;
      let l;
      for (; (l = i.exec(e)) !== null; ) {
        const o = l[1] !== void 0, n = l[2] !== void 0, c = o ? l[1] : n ? l[2] : l[3];
        c && (c === "*" || c === "?" || t.push({
          raw: c,
          isQuoted: o,
          isGroup: n,
          isLogic: c === "&&" || c === "||",
          isExpr: c.includes("%") || /^[<>=!]/.test(c)
        }));
      }
      const s = [];
      for (let o = 0; o < t.length; o++) {
        let n = t[o];
        if (!n.isLogic) {
          if (n.isExpr && !n.isGroup && !n.isQuoted)
            for (; o + 1 < t.length && t[o + 1].isLogic; ) {
              const c = t[o + 1].raw, h = t[o + 2];
              if (h)
                n.raw += ` ${c} ${h.raw}`, o += 2;
              else break;
            }
          s.push(n);
        }
      }
      const r = [];
      return s.forEach((o) => {
        const { raw: n, isQuoted: c, isGroup: h } = o;
        let d = h ? "group" : c ? "quoted" : n.includes("%") || /^[<>=!]/.test(n) ? "expr" : "plain", p = null, m = "", g = n;
        if (d === "expr" && (p = this._compileSearchExpr(n), p ? m = "-?\\d+(?:\\.\\d+)?" : d = "plain"), d === "group") {
          g = `(${n})`;
          const $ = n.split(/\s+/).filter((b) => b && b !== "*" && b !== "?" && b !== "&&" && b !== "||");
          if ($.length === 0) return;
          const j = [], D = [];
          $.forEach((b) => {
            if (b.includes("%") || /^[<>=!]/.test(b)) {
              const I = this._compileSearchExpr(b);
              if (I) {
                j.push("-?\\d+(?:\\.\\d+)?"), D.push({ type: "expr", test: I });
                return;
              }
            }
            let F = b.replace(/([.*+?^${}()|[\]\\])/g, "\\$1");
            /[?*]/.test(b) && (F = F.replace(/\\\*/g, ".*").replace(/\\\?/g, ".")), j.push(F), D.push({ type: "plain", raw: b });
          }), m = `(?:${j.join("|")})`, p = (b) => D.some((F) => F.type === "expr" ? F.test(b) : String(b).toLowerCase().includes(F.raw.toLowerCase()));
        } else (d === "plain" || d === "quoted") && (g = c ? `"${n}"` : n, m = n.replace(/([.*+?^${}()|[\]\\])/g, "\\$1"), /[?*]/.test(n) && (m = m.replace(/\\\*/g, ".*").replace(/\\\?/g, ".")));
        const w = c ? "" : "i";
        r.push({
          raw: n,
          type: d,
          display: g,
          test: p,
          caseSensitive: c,
          regex: new RegExp(m, w),
          gRegex: new RegExp(m, (w || "") + "g")
        });
      }), r;
    },
    /** Compile a search expression into a JS predicate function */
    _compileSearchExpr(e) {
      try {
        let t = e.replace(/(-?\d+(?:\.\d+)?)\s*([<>]=?)\s*%\s*([<>]=?)\s*(-?\d+(?:\.\d+)?)/g, "($1 $2 % && % $3 $4)");
        return t = t.replace(/([^<>!])=([^=])/g, "$1==$2").replace(/^=([^=])/, "==$1"), t = t.replace(/%/g, " v "), /[^0-9v.<>=!&|!\s()+-]/.test(t) ? null : new Function("v", `try { v = parseFloat(v); if(isNaN(v)) return false; return (${t}); } catch(e) { return false; }`);
      } catch {
        return null;
      }
    },
    /** Calculate if a hex color is dark (for text contrast) */
    _isColorDark(e) {
      if (!e || e[0] !== "#") return !1;
      const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), l = parseInt(e.slice(5, 7), 16);
      return (t * 299 + i * 587 + l * 114) / 1e3 < 128;
    },
    /**
     * True if the stringified cell value contains any active search term.
     * Used to toggle cell/row/column highlight wrappers.
     */
    _cellMatchesSearch(e) {
      return this._cellMatchTerm(e) != null;
    },
    /**
     * Return the index of the first search term that matches the cell, or null.
     * In 'and' mode, all terms must match; returns index 0 for coloring.
     */
    _cellMatchTerm(e) {
      if (!this.globalSearch_ || !this.globalSearchText_) return null;
      const t = this._parseSearchTerms(this.globalSearchText_);
      if (t.length === 0) return null;
      const i = String(e ?? ""), l = this.globalSearchMode_, s = (o) => {
        if (o.type === "expr" || o.test) {
          if (o.test(i)) return !0;
          const n = o.gRegex;
          n.lastIndex = 0;
          let c;
          for (; (c = n.exec(i)) !== null; ) {
            if (o.test(c[0])) return !0;
            c[0].length === 0 && n.lastIndex++;
          }
          return !1;
        }
        return o.regex.test(i);
      };
      if (l === "and")
        return t.every(s) ? 0 : null;
      const r = t.findIndex(s);
      return r >= 0 ? r : null;
    },
    /**
     * True if the row passes the current global expression filter.
     */
    _rowMatchesFilter(e) {
      return !this.globalFilter_ || !this.globalFilterText_ ? !1 : this._evalGlobalFilter(e, this.globalFilterText_);
    },
    /**
     * Split the global filter expression into top-level clauses (on `&&` / `||`),
     * ignoring operators inside parens/brackets/quotes. Returns an array of
     * trimmed clause strings for per-clause coloring.
     */
    _splitGlobalFilterClauses(e) {
      if (!e || !e.trim()) return [];
      const t = e.trim(), i = [];
      let l = 0, s = 0, r = null;
      for (let o = 0; o < t.length; o++) {
        const n = t[o];
        if (r) {
          if (n === "\\") {
            o++;
            continue;
          }
          n === r && (r = null);
          continue;
        }
        if (n === '"' || n === "'" || n === "`") {
          r = n;
          continue;
        }
        if (n === "(" || n === "[" || n === "{") {
          l++;
          continue;
        }
        if (n === ")" || n === "]" || n === "}") {
          l--;
          continue;
        }
        l === 0 && (n === "&" || n === "|") && t[o + 1] === n && (i.push(t.slice(s, o).trim()), s = o + 2, o++);
      }
      return i.push(t.slice(s).trim()), i.filter(Boolean);
    },
    /**
     * Return the index of the first global-filter clause the row matches, or -1.
     * Used to assign a color class per clause (wbdv-row-filter-match-N).
     */
    _rowFilterClauseIndex(e) {
      if (!this.globalFilter_ || !this.globalFilterText_) return -1;
      const t = this._splitGlobalFilterClauses(this.globalFilterText_);
      for (let i = 0; i < t.length; i++)
        if (this._evalGlobalFilter(e, t[i])) return i;
      return -1;
    },
    /** Ordered list of active column-filter keys (for stable color index). */
    _activeColumnFilterKeys() {
      return this.columnFilters_ ? Object.entries(this.filters_).filter(([, e]) => e && e.trim()).map(([e]) => e) : [];
    },
    /**
     * Extract the row-field identifiers a filter clause references.
     * Strips quoted strings, then matches JS identifiers and intersects with
     * the row's actual keys (so unrelated tokens like `===`, `admin` aren't
     * treated as fields).
     */
    _clauseFieldsForRow(e, t) {
      if (!e || !t || typeof t != "object") return [];
      const l = e.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g, "").match(/[$A-Z_a-z][$0-9A-Z_a-z]*/g) || [], s = new Set(Object.keys(t)), r = [], o = /* @__PURE__ */ new Set();
      for (const n of l)
        n !== "row" && s.has(n) && !o.has(n) && (o.add(n), r.push(n));
      return r;
    },
    /**
     * Build a map { fieldKey: clauseIndex } for a row — for each cell key, the
     * index of the *first* satisfied clause that mentions that field. Used to
     * tint individual cells with their clause's color.
     */
    _rowFilterCellTints(e) {
      if (!this.globalFilter_ || !this.globalFilterText_) return {};
      const t = this._splitGlobalFilterClauses(this.globalFilterText_), i = {};
      for (let l = 0; l < t.length; l++) {
        if (!this._evalGlobalFilter(e, t[l])) continue;
        const s = this._clauseFieldsForRow(t[l], e);
        for (const r of s)
          r in i || (i[r] = l % 12);
      }
      return i;
    },
    /**
     * Core highlighting engine shared by search and filter.
     * Accepts a raw cell string and an array of parsed term objects.
     * Returns a {comp:'span', options:{domProps:{innerHTML}}} WBC item.
     */
    _highlightTerms(e, t) {
      const i = this._escHtml, l = be, s = String(e ?? ""), r = [];
      if (t.forEach((h, d) => {
        const p = h.gRegex;
        p.lastIndex = 0;
        let m;
        for (; (m = p.exec(s)) !== null; ) {
          const g = m[0];
          if (g.length === 0) {
            p.lastIndex++;
            continue;
          }
          h.test && !h.test(g) || h.caseSensitive && !h.regex.test(g) || r.push({ start: m.index, end: m.index + g.length, tIdx: d });
        }
      }), r.length === 0) return { comp: "span", options: { domProps: { innerHTML: i(s) } } };
      const o = /* @__PURE__ */ new Set([0, s.length]);
      r.forEach((h) => {
        o.add(h.start), o.add(h.end);
      });
      const n = Array.from(o).sort((h, d) => h - d);
      let c = "";
      for (let h = 0; h < n.length - 1; h++) {
        const d = n[h], p = n[h + 1];
        if (d === p) continue;
        const m = s.substring(d, p), g = r.filter((O) => O.start <= d && O.end >= p).sort((O, M) => O.tIdx - M.tIdx);
        if (g.length === 0) {
          c += i(m);
          continue;
        }
        const w = g[0].tIdx, $ = l[w % l.length], j = this._isColorDark($);
        let D = [
          `background:${$}`,
          `color:${j ? "#fff" : "#000"}`,
          "background-clip:content-box",
          "padding:6px",
          "border-radius:4px",
          "font-weight:700",
          "display:inline-block",
          "line-height:1",
          "box-sizing:border-box"
        ], b = [];
        g.length >= 2 && b.push(`inset 0 -3px 0 0 ${l[g[1].tIdx % l.length]}`), g.length >= 3 && b.push(`inset 0 3px 0 0 ${l[g[2].tIdx % l.length]}`), g.length >= 4 && b.push(`inset 3px 0 0 0 ${l[g[3].tIdx % l.length]}`), g.length >= 5 && b.push(`inset -3px 0 0 0 ${l[g[4].tIdx % l.length]}`), b.length && D.push(`box-shadow:${b.join(",")}`);
        const F = (this.searchColor_ ? D.join(";") + ";" : "") + "margin:2px;", I = this.searchColor_ ? `wbdv-search-highlight wbdv-sc-${w % 12}` : "wbdv-search-highlight";
        c += `<span class="${I}" style="${F}">${i(m)}</span>`;
      }
      return { comp: "span", options: { domProps: { innerHTML: c } } };
    },
    /** HTML-escape a string for safe innerHTML injection. */
    _escHtml(e) {
      return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    },
    _filterCellWrap(e = []) {
      const t = this._configFor(e), i = t.display && t.display.filter;
      return i || "<~span,wbdv-filter-highlight>";
    },
    /* ── Table builder — outputs proper nested VNode structure ── */
    _buildTable(e, t, i, l = /* @__PURE__ */ new WeakSet(), s = null, r = "full") {
      var K, Y, ee, te, ie, le, se, re, oe, ne, ae, ce, he, ue;
      if (!Array.isArray(e) || e.length === 0)
        return { comp: "div", options: { class: "wbdv-table-empty", style: { padding: "16px", textAlign: "center", color: "#999", fontStyle: "italic" }, html: "(empty)" } };
      let { paged: o } = this._processRows(e);
      this.extraItems_ && Array.isArray(this.extraItems_) && (o = [...o, ...this.extraItems_]);
      const n = [], c = /* @__PURE__ */ new Set();
      if (this.columns_ && Array.isArray(this.columns_)) {
        this.columns_.forEach((a) => {
          c.has(a) || (c.add(a), n.push(a));
        });
        for (const a of o)
          if (a && typeof a == "object")
            for (const f of Object.keys(a))
              c.has(f) || (c.add(f), n.push(f));
      } else
        for (const a of o)
          if (a && typeof a == "object") {
            l.has(a) || l.add(a);
            for (const f of Object.keys(a))
              c.has(f) || (c.add(f), n.push(f));
          }
      this.extraColumns_ && Array.isArray(this.extraColumns_) && this.extraColumns_.forEach((a) => {
        const f = a.key || a.label;
        c.has(f) || (c.add(f), n.push(f));
      }), this.selectable_ && n.unshift("__sel__");
      const d = this.rowDel_ || this.rowSave_, p = (a, f, x) => {
        if (x === "__sel__")
          return { comp: "VCheckbox", options: {
            props: { value: this.selItems_.includes(f), dense: !0, hideDetails: !0, class: "wbdv-row-checkbox" },
            style: { margin: "0", padding: "0" },
            on: { input: () => this._toggleRowSelection(f) }
          } };
        if (this.extraColumns_ && Array.isArray(this.extraColumns_)) {
          const u = this.extraColumns_.find((_) => (_.key || _.label) === x);
          u && u.value && typeof u.value == "function" && (a = u.value(o[f], f));
        }
        if (this.cellRender_ && typeof this.cellRender_ == "function") {
          const u = this.cellRender_(a, x, o[f], f);
          if (u != null) return u;
        }
        if (this.editable_) {
          if (a !== null && typeof a == "object") {
            const y = this.maxDepth_;
            if (y == null || y > 1) {
              const S = y == null ? null : y - 1, A = this._configFor([x]), T = A.childOutput != null ? Array.isArray(A.childOutput) ? A.childOutput : [A.childOutput] : Array.isArray(A.output) ? A.output : [A.output || "horiz"];
              return { comp: "WBDataViewer", options: {
                class: "wbdv-nested",
                props: {
                  value: a,
                  config: { ...A, output: T, editable: !0, showHeader: !1, boxed: !1 },
                  configByPath: this.configByPath_,
                  templates: this.templates_,
                  maxDepth: S
                },
                style: { maxWidth: "100%", fontSize: "11px", margin: 0 },
                on: { input: (R) => {
                  o[f][x] = R, this.$emit("input", this._clone(e));
                } }
              } };
            }
          }
          const u = a === null ? "null" : a, _ = this._rulesForField(x);
          return { comp: "VTextField", options: {
            class: "wbdv-cell-field",
            props: {
              value: typeof u == "object" ? JSON.stringify(u) : u,
              dense: !0,
              outlined: !0,
              label: x,
              hideDetails: _.length ? "auto" : !0,
              rules: _
            },
            nativeOn: {
              input: (y) => {
                this.$set(o[f], x, this._strToObj(y.target.value)), this.$emit("input", this._clone(e));
              }
            }
          } };
        }
        if (this.customValue_ && typeof this.customValue_ == "function" && (a = this.customValue_(a, x, f)), a == null) return { comp: "span", options: { class: "wbdv-tbl-null", style: { color: "#999", fontStyle: "italic" }, html: "-" } };
        if (typeof a != "object" || typeof a == "function") {
          const u = String(a), _ = this.cGlobalSearchTerms, y = this.cParsedColumnFilters[x] || [], v = this.cParsedGlobalFilterTerms, S = [..._, ...y, ...v];
          return S.length > 0 ? this._highlightTerms(u, S) : { comp: "span", options: { domProps: { innerHTML: this._escHtml(u) } } };
        }
        if (t === "select")
          return { comp: "VSelect", options: { props: { items: Array.isArray(a) ? a : Object.values(a).sort((_, y) => String(_).localeCompare(String(y))), dense: !0, hideDetails: !0, outlined: !0 }, class: "wbdv-tbl-select", style: { minWidth: "80px", fontSize: "12px" } } };
        if (l.has(a)) {
          const u = Array.isArray(a), _ = u ? a.length : Object.keys(a).length;
          return { comp: "span", options: { class: "wbdv-tbl-null", style: { color: "#999", fontStyle: "italic" }, html: `[Circular] ${u ? "Array" : "Object"}(${_})` } };
        }
        l.add(a);
        const C = this._configFor([x]), V = C.childOutput != null ? Array.isArray(C.childOutput) ? C.childOutput : [C.childOutput] : Array.isArray(C.output) ? C.output : [C.output || "horiz"];
        return { comp: "WBDataViewer", options: {
          class: "wbdv-nested",
          props: {
            value: a,
            config: { ...C, output: V, showHeader: !1, boxed: !1 },
            configByPath: this.configByPath_,
            templates: this.templates_,
            theme: this.theme_
            // Inherit theme
          },
          style: { maxWidth: "100%", fontSize: "11px", margin: 0 }
        } };
      }, m = (a) => {
        if (!d) return [];
        const f = [];
        return this.rowSave_ && f.push(this._btn({ icon: !0, small: !0, title: `Save row ${a}`, onClick: () => this._saveRow(e, a), children: [this._icon("mdi-content-save-check")] })), this.rowDel_ && f.push(this._btn({ icon: !0, small: !0, title: `Delete row ${a}`, onClick: () => this._deleteRow(e, a), children: [this._icon("mdi-delete")] })), f;
      }, g = ((Y = (K = this.templates_) == null ? void 0 : K.display) == null ? void 0 : Y.table) || { 0: "level0", 1: "level1", 2: "level2" }, w = ((te = (ee = this.templates_) == null ? void 0 : ee.display) == null ? void 0 : te.thead) || { 0: "level0", 1: "level1" }, $ = ((le = (ie = this.templates_) == null ? void 0 : ie.display) == null ? void 0 : le.tbody) || { 0: "level0", 1: "level1" }, j = ((re = (se = this.templates_) == null ? void 0 : se.display) == null ? void 0 : re.th_tr) || { 0: "level0", 1: "level1" }, D = ((ne = (oe = this.templates_) == null ? void 0 : oe.display) == null ? void 0 : ne.tbody_tr) || { 0: "level0", 1: "level1" }, b = ((ce = (ae = this.templates_) == null ? void 0 : ae.display) == null ? void 0 : ce.th) || { 0: "level0", 1: "level1" }, F = ((ue = (he = this.templates_) == null ? void 0 : he.display) == null ? void 0 : ue.td) || { 0: "level0", 1: "level1" }, I = (a) => ({ comp: b, level0: "<~th>", level1: a }), O = (a) => ({ comp: F, level0: "<~td>", level1: a }), M = (a, f) => ({ comp: F, level0: `<~td,${f}>`, level1: a }), Z = (a) => ({ comp: j, level0: "<~tr>", level1: a }), G = (a) => ({ comp: D, level0: "<~tr>", level1: a }), fe = (a, f) => ({ comp: D, level0: `<~tr,${f}>`, level1: a });
      let B, N, J = null;
      if (t === "vertical") {
        const a = this.hasPagination ? (this.page_ - 1) * this.itemsPerPage_ : 0, f = { col_0: I("") };
        o.forEach((V, u) => {
          const _ = this.columnFilters_ ? this._columnFilterInput(n[0]) : null, y = this._resolveRowLabel(V, a + u), v = _ ? { comp: "div", options: { class: "wbdv-th-wrap", style: { display: "flex", flexDirection: "column", gap: "2px" }, html: [
            { comp: "span", options: { class: "wbdv-th-label", html: y } },
            _
          ] } } : y;
          f[`col_${u + 1}`] = I(v);
        }), d && (f.zzz_action = { comp: "th", options: { class: "wbdv-tbl-actions", style: { whiteSpace: "nowrap", width: "1%", textAlign: "center", padding: "2px 4px" }, html: "⚙️" } }), B = {
          comp: w,
          level0: "<~thead>",
          level1: Z(f)
        };
        const x = {}, C = {};
        n.forEach((V, u) => {
          const _ = I((() => {
            const v = this._sortIcon(V);
            return v ? [V, v] : V;
          })()), y = { col_0: _ };
          o.forEach((v, S) => {
            y[`col_${S + 1}`] = O(p(v == null ? void 0 : v[V], S, V));
          }), d && m(0).forEach((v, S) => {
            y[`zzz_action_${S}`] = { comp: "td", options: { class: "wbdv-tbl-actions", style: { whiteSpace: "nowrap", width: "1%", textAlign: "center", padding: "2px 4px" }, html: v } };
          }), x[`default_${u}`] = G(y), C[`default_${u}`] = G({ col_0: _ });
        }), N = x, J = C;
      } else {
        const a = {};
        n.forEach((u, _) => {
          if (u === "__sel__") {
            a[`col_${_}`] = { comp: "th", options: {
              class: "wbdv-tbl-select-header",
              style: { width: "40px", textAlign: "center" },
              html: { comp: "VCheckbox", options: {
                props: { value: this.selItems_.length > 0, dense: !0, hideDetails: !0 },
                style: { margin: "0", padding: "0" },
                on: { input: () => {
                  this.selItems_.length > 0 ? this._clearSelection() : this._selectAllRows();
                } }
              } }
            } };
            return;
          }
          const y = this.headRender_ && typeof this.headRender_ == "function" ? this.headRender_(u, _) : null, v = this.columnFilters_ ? this._columnFilterInput(u) : null, S = y || (v ? { comp: "div", options: { class: "wbdv-th-wrap", style: { display: "flex", flexDirection: "column", gap: "2px" }, html: [
            { comp: "span", options: { class: "wbdv-th-label", style: { display: "flex", alignItems: "center", gap: "2px" }, html: [u, this._sortIcon(u)] } },
            v
          ] } } : (() => {
            const E = this._sortIcon(u);
            return E ? { comp: "span", options: { html: [u, E] } } : u;
          })()), A = this.globalSearch_ && this.globalSearchText_ && o.some((E) => this._cellMatchesSearch(E == null ? void 0 : E[u])), T = this.filters_[u], R = this.columnFilters_ && T && T.trim() ? this._activeColumnFilterKeys().indexOf(u) % 12 : -1, k = [];
          A && k.push("wbdv-col-search-match"), R >= 0 && k.push(`wbdv-col-filter-match wbdv-cf-${R}`);
          const ge = _ === n.length - 1, q = {};
          a[`col_${_}`] = k.length ? { comp: b, level0: `<~th,${k.join(" ")}>`, level1: S, options: { style: q } } : ge && Object.keys(q).length ? { comp: b, level0: "<~th>", level1: S, options: { style: q } } : I(S);
        }), d && (a.zzz_action = { comp: "th", options: { class: "wbdv-tbl-actions", style: { whiteSpace: "nowrap", width: "1%", textAlign: "center", padding: "2px 4px" }, html: "⚙️" } }), B = {
          comp: w,
          level0: "<~thead>",
          level1: Z(a)
        };
        const f = {};
        this.globalSearch_ && this.globalSearchText_ && n.forEach((u) => {
          f[u] = o.some((_) => this._cellMatchesSearch(_ == null ? void 0 : _[u]));
        });
        const x = this._activeColumnFilterKeys(), C = {};
        x.forEach((u, _) => {
          C[u] = _ % 12;
        });
        const V = {};
        o.forEach((u, _) => {
          const y = {}, v = this._rowFilterCellTints(u);
          n.forEach((T, P) => {
            const R = p(u == null ? void 0 : u[T], _, T), k = [];
            f[T] && k.push("wbdv-col-search-match"), T in C && k.push(`wbdv-col-filter-match wbdv-cf-${C[T]}`), T in v && k.push(`wbdv-cell-filter-match wbdv-rf-${v[T]}`), y[`col_${P}`] = k.length ? M(R, k.join(" ")) : O(R);
          }), m(_).forEach((T, P) => {
            y[`zzz_action_${P}`] = { comp: "td", options: { class: "wbdv-tbl-actions", style: { whiteSpace: "nowrap", width: "1%", textAlign: "center", padding: "2px 4px" }, html: T } };
          });
          const S = [];
          u && typeof u == "object" && Object.values(u).some((T) => this._cellMatchesSearch(T)) && S.push("wbdv-row-search-match");
          const A = this._rowFilterClauseIndex(u);
          A >= 0 && S.push(`wbdv-row-filter-match wbdv-rf-${A % 12}`), V[`default_${_}`] = S.length ? fe(y, S.join(" ")) : G(y);
        }), N = V;
      }
      if (this.rowAdd_) {
        const a = this.addRowVisible[i], f = [];
        f.push(this._btn({
          small: !0,
          outlined: !0,
          class: "wbdv-add-btn",
          onClick: () => this._toggleAddRow(i),
          children: a ? [this._icon("mdi-close"), { comp: "span", options: { style: { marginLeft: "4px" }, html: "Cancel" } }] : [this._icon("mdi-plus"), { comp: "span", options: { style: { marginLeft: "4px" }, html: "Add Row" } }]
        })), a && f.push({ comp: "VTextField", options: {
          ref: `add-input-${i}`,
          props: { value: this.addRowText && this.addRowText[i] || "", label: '{"key":"value"}', autofocus: !0, dense: !0, hideDetails: !0, outlined: !0, class: "wbdv-cell-field" },
          on: {
            input: (x) => {
              this.addRowText || this.$set(this, "addRowText", {}), this.$set(this.addRowText, i, x);
            },
            keyup: (x) => {
              x.key === "Enter" && this._submitAddRow(e, i);
            }
          }
        } }, { comp: "VBtn", options: { props: { small: !0, color: "primary" }, on: { click: () => this._submitAddRow(e, i) }, html: "Parse & Add" } }), N.zzz_addRow = { 0: "<~tr>", 1: { comp: "td", options: { attrs: { colspan: n.length + (d ? 1 : 0) }, style: { padding: "8px" }, html: f } } };
      }
      const X = {
        comp: $,
        level0: "<~tbody>",
        level1: N
      }, U = (a) => ({
        options: { class: "wbdv-table-wrap", style: { width: "100%", overflowX: "auto" } },
        table: {
          comp: g,
          level0: "<~table,wbdv-table>",
          level1: a
        }
      });
      return r === "vCol" ? J ? U({ comp: $, level0: "<~tbody>", level1: J }) : { comp: "div", options: { class: "wbdv-slice-na", style: { padding: "8px", color: "#999", fontStyle: "italic" }, html: "(vCol is only available in vertical layout)" } } : r === "head" ? U(B) : r === "body" ? U(X) : {
        comp: g,
        level0: "<~table,wbdv-table>",
        level1: B,
        level2: X,
        options: {
          wrap: {
            comp: "div",
            options: {
              class: "wbdv-table-wrap",
              style: { width: "100%", overflowX: "auto" }
            }
          }
        }
      };
    },
    /* ── Table entry points ── */
    bodyTableHorizontal(e) {
      const t = e !== void 0 ? e : this.activeValue, i = this._normalizeToRows(t);
      return this._buildTable(i, "horizontal", "tbl-h");
    },
    bodyTableVertical(e) {
      const t = e !== void 0 ? e : this.activeValue, i = this._normalizeToRows(t);
      return this._buildTable(i, "vertical", "tbl-v");
    },
    /* ── Vertical keys-column slice (no meta.display.table equivalent) ── */
    bodyTableVCol(e) {
      const t = e !== void 0 ? e : this.activeValue, i = this._normalizeToRows(t);
      return this._buildTable(i, "vertical", "tbl-v", /* @__PURE__ */ new WeakSet(), null, "vCol");
    },
    /* ── Table part slices (head/body isolated per layout) ── */
    bodyTableHHead(e) {
      const t = e !== void 0 ? e : this.activeValue, i = this._normalizeToRows(t);
      return this._buildTable(i, "horizontal", "tbl-h", /* @__PURE__ */ new WeakSet(), null, "head");
    },
    bodyTableHBody(e) {
      const t = e !== void 0 ? e : this.activeValue, i = this._normalizeToRows(t);
      return this._buildTable(i, "horizontal", "tbl-h", /* @__PURE__ */ new WeakSet(), null, "body");
    },
    bodyTableVHead(e) {
      const t = e !== void 0 ? e : this.activeValue, i = this._normalizeToRows(t);
      return this._buildTable(i, "vertical", "tbl-v", /* @__PURE__ */ new WeakSet(), null, "head");
    },
    bodyTableVBody(e) {
      const t = e !== void 0 ? e : this.activeValue, i = this._normalizeToRows(t);
      return this._buildTable(i, "vertical", "tbl-v", /* @__PURE__ */ new WeakSet(), null, "body");
    },
    bodyTableSelect(e) {
      var l;
      const t = e !== void 0 ? e : this.activeValue;
      return t == null ? this.bodyPrimitiveNode(t) : typeof t != "object" || typeof t == "function" ? this.bodyPrimitiveNode(t) : { comp: "VSelect", options: {
        props: { items: Array.isArray(t) ? t : Object.values(t).sort((s, r) => String(s).localeCompare(String(r))), dense: !1, hideDetails: !1, outlined: !0, label: this.typeLabel },
        class: "wbdv-body-select",
        style: { maxWidth: "400px", margin: "8px", fontSize: "13px" }
      }, ...((l = this.templates_) == null ? void 0 : l.select) || {} };
    },
    renderDefaultWbcode(e, t, i) {
      const l = e || this.$createElement, s = i ? { ...i } : {};
      let r = t;
      if (t && typeof t == "object")
        try {
          r = JSON.stringify(t, null, 2);
        } catch {
          r = String(t);
        }
      return s.code = r, l("WBC", { props: { item: { comp: "WBCode", options: { props: { item: s } } } } });
    }
  },
  render(e) {
    if (this.srcLoading_)
      return e("div", { class: "wbdv-src-loading pa-4 text-center grey--text" }, [
        e("VProgressCircular", { props: { indeterminate: !0, size: 24, width: 2, color: "primary" } }),
        e("span", { style: { marginLeft: "8px" } }, ["Loading..."])
      ]);
    if (this.srcError_)
      return e("div", { class: "wbdv-src-error pa-4 red--text" }, [
        e("VIcon", { props: { color: "red", small: !0 } }, ["mdi-alert-circle"]),
        e("span", { style: { marginLeft: "4px" } }, [`src error: ${this.srcError_}`])
      ]);
    const t = `wbdv-theme-${this.theme_ || "default"}`, i = this.boxed_ ? "wbdv--boxed" : "", l = this.isDark_, s = this.output_ || ["horiz"], r = this.allComps, o = { options: r.options };
    for (const w of s)
      w in r && (o[w] = r[w]);
    const n = e("WBC", { props: { item: { comp: s, ...o } } });
    if (!(typeof this.wbCode_ == "boolean" || this != null && this.wbCode))
      return e("div", { class: `wbdv-root ${t} ${i}` }, [n]);
    const c = this.$props, h = c.wbCode, {
      activator: d = "div__Show/Hide Code|align-end font-weight-bold",
      wbCode: p = {},
      wbcObj: m = {},
      collapsed: g = typeof h == "boolean" ? !h : !1
    } = typeof h == "object" && h !== null ? h : {};
    return e("div", { class: `wbdv-root ${t} ${i}` }, [
      e("VCard", { props: { outlined: !0, shaped: !0, rounded: !0, dark: l }, class: "border pa-5 ma-5" }, [
        n
      ]),
      e("VListGroup", { props: { value: !g }, class: "wbdv-code-toggle" }, [
        e("template", { slot: "activator" }, [
          e("WBC", { props: { item: { options: { comp: "VRow", class: "justify-end" }, a: d } } })
        ]),
        e("div", { class: "pa-4" }, [
          e("div", { class: "display-1 text-center mb-4" }, ['<WBDataViewer v-bind="$props" />']),
          this.renderDefaultWbcode(e, c, p),
          e("div", { class: "mt-4" }, [
            e("WBC", { props: { item: { comp: "WBDataViewer", options: { props: { value: c, output: ["editable", "horiz"], theme: this.theme_, wbCode: !1 } } } } })
          ])
        ])
      ])
    ]);
  }
};
var we = /* @__PURE__ */ _e(
  ye
);
const xe = we.exports, ve = ["default", "light", "dark", "paper", "compact", "zebra", "terminal"], pe = /* @__PURE__ */ new Set();
function Se(e, t) {
  if (typeof document > "u" || !e || !t) return;
  pe.add(e);
  const i = `style[data-wbdv-theme="${e}"]`;
  if (document.head.querySelector(i)) return;
  const l = document.createElement("style");
  l.setAttribute("data-wbdv-theme", e), l.textContent = t, document.head.appendChild(l);
}
function Te() {
  const e = new Set(ve);
  return pe.forEach((t) => e.add(t)), Array.from(e);
}
const L = function(e, t = {}) {
  if (L.installed) return;
  L.installed = !0, e.component("WBDataViewer", xe);
  const i = t && t.themes;
  i && typeof i == "object" && Object.keys(i).forEach((l) => {
    const s = i[l];
    typeof s == "string" && Se(l, s);
  });
};
typeof window < "u" && window.Vue && L(window.Vue);
const Ae = { install: L };
export {
  ve as BUILT_IN_THEMES,
  xe as WBDataViewer,
  Ae as default,
  Se as injectThemeCss,
  L as install,
  Te as listThemes
};
