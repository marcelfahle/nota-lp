// sRGB twins of the oklch tokens in globals.css, for canvas and WebGL.
export const palette = {
  paper: "#f7f3ea",
  paper2: "#ede7dc",
  ink: "#191510",
  ink2: "#5d5750",
  term: "#13100d",
  termFg: "#e8e4dc",
  hi: "#d1fd39",
  red: "#e02e1e",
} as const;

export function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export const APP_URL = "https://app.withnota.com";
export const GITHUB_URL = "https://github.com/marcelfahle/nota";
