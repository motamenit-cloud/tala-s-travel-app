// tokens.jsx — Tala design tokens (palette, type, textures)
// Espresso brown / crème / terracotta / sage / soft ivory.
// Cormorant Garamond (serif, headlines) + Outfit (sans, UI/body).

const TALA = {
  // Light mode (primary)
  light: {
    bg:        '#F7F2EA',  // soft ivory
    bgWarm:    '#F1E9DC',  // crème
    surface:   '#FBF7F0',  // raised paper
    ink:       '#2A1F17',  // espresso, body text
    inkSoft:   '#5C4A3C',  // cocoa, secondary
    inkMute:   '#9A8775',  // taupe, tertiary
    line:      'rgba(42,31,23,0.10)',
    lineSoft:  'rgba(42,31,23,0.06)',

    // Accents
    terra:     '#C46A4A',  // warm terracotta (primary CTA)
    terraDeep: '#A4502F',  // pressed/hover
    sage:      '#A8B59B',  // sage accent
    sageDeep:  '#7E8E72',
    gold:      '#B8915A',  // metallic accent for tags / Michelin
  },
  // Evening / dark variant — soft, candle-lit
  dark: {
    bg:        '#1B1410',
    bgWarm:    '#221912',
    surface:   '#2A1F17',
    ink:       '#F4EADD',
    inkSoft:   '#C9B59E',
    inkMute:   '#8B7967',
    line:      'rgba(244,234,221,0.12)',
    lineSoft:  'rgba(244,234,221,0.06)',

    terra:     '#D88665',
    terraDeep: '#C46A4A',
    sage:      '#8E9C81',
    sageDeep:  '#6E7C62',
    gold:      '#D4AC76',
  },
};

const FONTS = {
  serif: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
  sans:  '"Outfit", -apple-system, system-ui, sans-serif',
  mono:  '"JetBrains Mono", ui-monospace, monospace',
};

// SVG paper-grain texture (used as repeating background-image)
const PAPER_GRAIN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.16  0 0 0 0 0.12  0 0 0 0 0.09  0 0 0 0.06 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>")`;

// Subtle film grain for photo overlays
const FILM_GRAIN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.13 0'/></filter><rect width='180' height='180' filter='url(%23n)'/></svg>")`;

// Tiny utility: get current theme based on dark flag
const T = (dark) => dark ? TALA.dark : TALA.light;

Object.assign(window, { TALA, FONTS, PAPER_GRAIN, FILM_GRAIN, T });
