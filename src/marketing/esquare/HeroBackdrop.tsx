/**
 * HeroBackdrop — the decorative field behind the hero, replicating e-square.io's
 * dark hero: a faint dotted / line grid fading out toward the edges, with two
 * soft gradient orbs (purple and cyan) glowing behind the headline. Purely
 * decorative (aria-hidden), low opacity, no animation, so it never competes with
 * the copy. The stronger radial glows are painted by .es-hero in esquare.css;
 * this adds the structural grid on top.
 */

export default function HeroBackdrop() {
  return (
    <svg
      className="es-backdrop"
      viewBox="0 0 1440 620"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* a faint square grid */}
        <pattern id="esGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0 L0 0 L0 48" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.05" />
        </pattern>
        {/* fade the grid out toward the edges */}
        <radialGradient id="esGridFade" cx="50%" cy="30%" r="75%">
          <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <mask id="esGridMask">
          <rect x="0" y="0" width="1440" height="620" fill="url(#esGridFade)" />
        </mask>
      </defs>

      {/* the masked grid */}
      <rect x="0" y="0" width="1440" height="620" fill="url(#esGrid)" mask="url(#esGridMask)" />

      {/* two soft brand orbs */}
      <circle cx="250" cy="180" r="200" fill="#9333ea" opacity="0.1" />
      <circle cx="1200" cy="240" r="220" fill="#0891b2" opacity="0.1" />
    </svg>
  );
}
