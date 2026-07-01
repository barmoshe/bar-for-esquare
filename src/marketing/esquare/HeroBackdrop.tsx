/**
 * HeroBackdrop — the decorative field behind the hero, replicating e-square.io's
 * dark hero: a scattered starfield of faint dots over the near-black navy, two
 * soft gradient orbs (purple and cyan) glowing behind the headline, and a
 * lighter radial vignette lifting the centre where the wordmark sits. Purely
 * decorative (aria-hidden), low opacity, no animation, so it never competes with
 * the copy. Dot positions are a fixed list (no Math.random) so the server and
 * client render identical markup.
 */

// scattered stars: [x, y, r, opacity] in the 1440×620 viewBox.
const STARS: [number, number, number, number][] = [
  [120, 90, 1.6, 0.5], [380, 130, 1.2, 0.35], [1110, 110, 1.4, 0.45],
  [1270, 210, 1.6, 0.5], [1030, 160, 1.1, 0.3], [1490, 220, 1.3, 0.4],
  [1300, 330, 1.5, 0.45], [245, 610, 1.6, 0.5], [520, 515, 1.2, 0.35],
  [565, 530, 1, 0.28], [735, 360, 1.1, 0.3], [1175, 545, 1.4, 0.42],
  [1375, 650, 1.2, 0.32], [175, 700, 1.3, 0.38], [60, 470, 1.4, 0.4],
  [1400, 445, 1.2, 0.33], [1495, 400, 1, 0.26], [400, 330, 1.3, 0.36],
  [95, 250, 1.1, 0.3], [1200, 430, 1.2, 0.34], [860, 90, 1.2, 0.34],
  [640, 200, 1, 0.26], [980, 560, 1.3, 0.36], [300, 470, 1.1, 0.3],
  [1080, 300, 1, 0.24], [700, 620, 1.2, 0.32], [1440, 130, 1.1, 0.3],
];

export default function HeroBackdrop() {
  return (
    <svg
      className="es-backdrop"
      viewBox="0 0 1440 620"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* a lighter vignette lifting the centre of the hero */}
        <radialGradient id="esVignette" cx="50%" cy="42%" r="60%">
          <stop offset="0" stopColor="#20204a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#20204a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* centre vignette */}
      <rect x="0" y="0" width="1440" height="620" fill="url(#esVignette)" />

      {/* two soft brand orbs */}
      <circle cx="250" cy="180" r="210" fill="#9333ea" opacity="0.12" />
      <circle cx="1210" cy="260" r="230" fill="#0891b2" opacity="0.12" />

      {/* scattered starfield */}
      <g fill="#ffffff">
        {STARS.map(([x, y, r, o], i) => (
          <circle key={i} cx={x} cy={y} r={r} opacity={o} />
        ))}
      </g>
    </svg>
  );
}
