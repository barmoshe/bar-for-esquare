import type { Metadata } from "next";
import EsquareApp from "@/src/marketing/esquare/EsquareApp";

// Ad-hoc, personalized application page for Bar Moshe's Junior Full Stack
// Developer application to e-square.io, built in e-square's own visual language
// (near-black navy, glassmorphism cards, purple -> cyan gradients, system font,
// a gradient-badge card grid). e-square's site is drawn in a system sans stack
// (ui-sans-serif, system-ui), so no web font is loaded — the stack lives in
// esquare.css. A private, shareable link sent with the application, so noindex.
const ogTitle = "Bar Moshe × e-square.io — Junior Full Stack Developer";
const ogDescription =
  "A full-stack developer who works in Cursor, Claude Code, and Codex daily and builds for them. React, Node, and TypeScript, open source on npm and live in the browser.";

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "Bar Moshe",
    title: ogTitle,
    description: ogDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
  },
};

export default function EsquarePage() {
  return <EsquareApp />;
}
