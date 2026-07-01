'use client';

import { useEffect, useRef } from 'react';
import HeroBackdrop from './HeroBackdrop';
import './esquare.css';

/**
 * EsquareApp — an ad-hoc, personalized application page for Bar Moshe's
 * "Junior Full Stack Developer" application to e-square.io. Built in e-square's
 * verified visual language (read live off e-square.io): the near-black navy
 * canvas (#0a0a1a / #0f0f2a), glassmorphism cards, vibrant purple -> cyan
 * gradients, big bold system-font headings with gradient text on emphasised
 * words. The signature element is e-square's own "Open Positions" grid of
 * gradient-badge glass cards, reframed here as Bar's Selected Work. English /
 * LTR. Self-contained, every visual built fresh. Motion respects
 * prefers-reduced-motion and the page is legible with no JS.
 */

const EMAIL =
  'mailto:1barmoshe1@gmail.com?subject=' +
  encodeURIComponent('Application: Junior Full Stack Developer — Bar Moshe');
const CV = '/cv/Bar_Moshe_CV.pdf';
const WHATSAPP = 'https://wa.me/972546561465';
const LINKEDIN = 'https://www.linkedin.com/in/barmoshe/';
const GITHUB = 'https://github.com/barmoshe';

type Fit = { k: string; body: string };

const FIT: Fit[] = [
  {
    k: 'Full-stack fundamentals',
    body: 'React, Node.js, and TypeScript end to end. Israelify is a Spotify-style app: a React frontend over a Node and MongoDB REST API with auth and middleware.',
  },
  {
    k: 'AI coding agents, every day',
    body: 'The role asks for daily use of Cursor, Claude Code, and Codex. I work in them daily and build for them: MDP ships on npm as a Claude Code and Codex plugin with its own MCP server.',
  },
  {
    k: 'From idea to production',
    body: 'I ship ideas to running software. Several are open source on npm, and others are live demos you can open in the browser.',
  },
  {
    k: 'Eager to learn and grow',
    body: 'I move across TypeScript, JavaScript, Python, Go, and C#, and pick up new stacks quickly. Angular included, if that is where the work is.',
  },
];

type Proof = {
  tag: string;
  title: string;
  desc: string;
  href: string | null;
  open: string;
  grad: string;
};

// Each card carries a gradient badge drawn from e-square's own position-card
// palette, so the grid reads as an authentic e-square element. Headliners
// first, then supporting live demos. Joomsy is a credential only (no link).
const PROOF: Proof[] = [
  {
    tag: 'Open source · npm · MCP',
    title: 'MDP',
    desc: 'A Markdown-to-documents compiler on npm, shipped as a Claude Code and Codex plugin with its own MCP server so other tools and agents connect to it.',
    href: 'https://barmoshe.github.io/mdp/',
    open: 'Open MDP',
    grad: 'linear-gradient(90deg, #10b981, #0891b2)',
  },
  {
    tag: 'Claude Code plugin',
    title: 'temporal-plugin',
    desc: 'A Temporal.io orchestration plugin for Claude Code: durable, long-running workflows for agents.',
    href: 'https://github.com/Base67-AI/temporal-plugin',
    open: 'View on GitHub',
    grad: 'linear-gradient(90deg, #6366f1, #0284c7)',
  },
  {
    tag: 'AI · real-time',
    title: 'MIDI Agent',
    desc: 'A live call-and-response agent that answers your MIDI phrase with editable, in-key MIDI back in your DAW. Python, real-time.',
    href: 'https://github.com/barmoshe/midi-agent',
    open: 'View on GitHub',
    grad: 'linear-gradient(90deg, #8b5cf6, #9333ea)',
  },
  {
    tag: 'AI · REST API',
    title: 'MIDI GPT REST API',
    desc: 'A REST API that generates MIDI, driving a multi-step OpenAI pipeline with retries and validation.',
    href: 'https://github.com/barmoshe/AI_MIDI_API',
    open: 'View on GitHub',
    grad: 'linear-gradient(90deg, #06b6d4, #2563eb)',
  },
  {
    tag: 'Backend · Go + Python + TS',
    title: 'Cross-language service',
    desc: 'One workflow coordinating Go, Python, and TypeScript workers, with retries and validation across the pipeline.',
    href: 'https://github.com/barmoshe/data-processing-service',
    open: 'View on GitHub',
    grad: 'linear-gradient(90deg, #22c55e, #0d9488)',
  },
  {
    tag: 'Full-stack · React + Node',
    title: 'Israelify',
    desc: 'A Spotify-style app: a React frontend over a Node and MongoDB REST API, with auth, middleware, and a custom logger.',
    href: 'https://github.com/barmoshe/Israelify-backend',
    open: 'View the code',
    grad: 'linear-gradient(90deg, #f97316, #ca8a04)',
  },
  {
    tag: 'Creative · AI',
    title: 'Biome Synth',
    desc: 'A browser instrument with an AI DJ that moves through five states. Built with Tone.js, Three.js, and Canvas.',
    href: 'https://biome-synth.lovable.app/',
    open: 'Play the app',
    grad: 'linear-gradient(90deg, #ef4444, #db2777)',
  },
  {
    tag: 'Open source · logic',
    title: 'entailer',
    desc: 'An open-source logic-validity toolkit that checks whether an argument actually follows.',
    href: 'https://github.com/barmoshe/entailer',
    open: 'View on GitHub',
    grad: 'linear-gradient(90deg, #a855f7, #2563eb)',
  },
  {
    tag: 'Experience · full-stack + DevOps',
    title: 'Joomsy',
    desc: 'Primary full-stack and DevOps engineer at an early-stage startup, a team of five, with broad ownership across engineering and product.',
    href: null,
    open: '',
    grad: 'linear-gradient(90deg, #f4405e, #ea580c)',
  },
  {
    tag: 'Creative · on-device ML',
    title: 'bloom-garden',
    desc: 'A webcam hand-gesture game: pinch to pluck flowers, on-device with MediaPipe. No video leaves the browser.',
    href: 'https://bloom-garden-five.vercel.app',
    open: 'Play the app',
    grad: 'linear-gradient(90deg, #14b8a6, #0891b2)',
  },
  {
    tag: 'Full-stack · product',
    title: 'apartment-hunter',
    desc: 'A real-estate decision tool: side-by-side comparison, Israeli purchase-tax brackets, and a mortgage calculator.',
    href: 'https://apartment-hunter-one.vercel.app',
    open: 'Open the app',
    grad: 'linear-gradient(90deg, #6366f1, #0284c7)',
  },
  {
    tag: 'Full-stack · product',
    title: 'trip-planner',
    desc: 'An itinerary, budget, and logistics planner with a live currency converter and a countdown. Brief to live in days.',
    href: 'https://trip-planner-six-iota.vercel.app',
    open: 'Open the app',
    grad: 'linear-gradient(90deg, #10b981, #0891b2)',
  },
  {
    tag: 'Creative · WebGL',
    title: 'aurora',
    desc: 'A hand-written WebGL silk field, a shader study rendered live in the browser.',
    href: 'https://aurora-eight-iota.vercel.app',
    open: 'Open the app',
    grad: 'linear-gradient(90deg, #a855f7, #2563eb)',
  },
];

type Role = { title: string; org: string; time: string; note: string };

const EXPERIENCE: Role[] = [
  {
    title: 'Software Developer',
    org: 'Joomsy',
    time: '2025 – present',
    note: 'Early-stage startup, team of five. Primary developer across full-stack and DevOps, with broad ownership over engineering and product.',
  },
  {
    title: 'Customer Support Engineer',
    org: 'Wochit',
    time: '2021 – present',
    note: 'Technical support for users of a cloud video editor at scale, turning user feedback into product improvements alongside the development team.',
  },
];

const EDUCATION: string[] = [
  'B.Sc. Computer Science, Afeka College of Engineering (2020 – 2023).',
  'DevOps track at Wix: Amazon EKS, Kubernetes, Terraform, and microservices.',
  'Full-Stack Bootcamp, Coding Academy: Node.js, React, MongoDB.',
];

type Stat = { k: string; v: string };

// e-square's signature hero stat trio (big value + muted label). Honest, from
// jobs/cv.md: five languages and counting, MDP published, a CS degree.
const HEROSTATS: Stat[] = [
  { k: '5+', v: 'Languages I build in' },
  { k: 'npm', v: 'Open source, with an MCP server' },
  { k: 'B.Sc', v: 'Computer Science' },
];

type StackGroup = { group: string; items: string[] };

const STACK: StackGroup[] = [
  { group: 'AI coding agents', items: ['Claude Code', 'Codex', 'Cursor', 'MCP servers'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript'] },
  { group: 'Backend', items: ['Node.js', 'REST APIs', 'MongoDB', 'Go'] },
  { group: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
];

// e-square's logo glyph: a rounded square outline with a cyan block in the
// lower-right corner. Rebuilt from their live mark.
function ESquareMark() {
  return (
    <svg className="es-esq__mark" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="none" stroke="#e4e5ee" strokeWidth="2.2" />
      <rect x="12.5" y="12.5" width="9" height="9" rx="2" fill="#22d3ee" />
    </svg>
  );
}

// e-square's wordmark: "E-S▢UARE.io", the square glyph standing in for the Q.
function ESquareWord() {
  return (
    <span className="es-esq" aria-label="e-square.io">
      <span className="es-esq__txt">E-S</span>
      <ESquareMark />
      <span className="es-esq__txt">UARE</span>
      <span className="es-esq__io">.io</span>
    </span>
  );
}

// The sparkle in e-square's hero eyebrow pill.
function Spark() {
  return (
    <svg className="es-eyebrow__spark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
      <path d="M19 3l.7 2.3L22 6l-2.3.7L19 9l-.7-2.3L16 6l2.3-.7L19 3z" opacity="0.7" />
    </svg>
  );
}

export default function EsquareApp() {
  const scope = useRef<HTMLDivElement | null>(null);

  // Lightweight scroll reveal: add `.is-in` as each [data-reveal] enters. No
  // dependency; CSS settles the static frame when reduced motion is requested.
  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="es-root" ref={scope}>
      <a className="es-skip" href="#main">Skip to content</a>

      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="es-nav">
        <div className="es-nav__inner">
          <a className="es-brand" href="#main" aria-label="Bar Moshe">
            <span className="es-brand__mark" aria-hidden="true" />
            <span className="es-wordmark">Bar Moshe</span>
          </a>
          <span className="es-nav__tag">for <ESquareWord /></span>
          <nav className="es-nav__links" aria-label="Sections">
            <a className="es-nav__link" href="#fit">How I fit</a>
            <a className="es-nav__link" href="#work">Work</a>
            <a className="es-nav__link" href="#contact">Contact</a>
          </nav>
          <div className="es-nav__cta">
            <a className="es-btn es-btn--ghost es-btn--sm" href={CV} target="_blank" rel="noopener noreferrer">Download CV</a>
            <a className="es-btn es-btn--primary es-btn--sm" href={EMAIL}>Get in touch</a>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="es-hero">
          <HeroBackdrop />
          <div className="es-hero__inner">
            <p className="es-eyebrow" data-reveal>
              <Spark />
              For e-square.io · Junior Full Stack Developer
            </p>
            <h1 className="es-title" data-reveal>
              Full-Stack <span className="es-grad-text">Developer</span>,<br />
              built with <span className="es-grad-text">AI agents</span>.
            </h1>
            <p className="es-lede" data-reveal>
              I am a full-stack developer who works in Cursor, Claude Code, and Codex
              every day, and builds for them too. My tools and apps are open source on
              npm and live in the browser.
            </p>
            <div className="es-hero__cta" data-reveal>
              <a className="es-btn es-btn--primary" href={EMAIL}>
                Get in touch
                <span className="es-btn__arrow" aria-hidden="true">→</span>
              </a>
              <a className="es-btn es-btn--ghost" href={CV} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
            <div className="es-herostats" data-reveal>
              {HEROSTATS.map((s) => (
                <div className="es-herostat" key={s.k}>
                  <div className="es-herostat__k">{s.k}</div>
                  <div className="es-herostat__v">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stack ─────────────────────────────────────────── */}
        <section className="es-stack">
          <div className="es-wrap">
            <header className="es-section__head" data-reveal>
              <p className="es-kicker">Stack</p>
              <h2 className="es-h2">The tools I <span className="es-grad-text">build with</span>.</h2>
              <p className="es-sub">
                AI coding agents are the constant I work in every day. Beyond them, I have
                worked across a wide range of languages and stacks, and I enjoy learning new
                ones to stay adaptable and up to date.
              </p>
            </header>
            <div className="es-stackgrid">
              {STACK.map((g) => (
                <div className="es-stackcard" key={g.group} data-reveal>
                  <h3 className="es-stackcard__h">{g.group}</h3>
                  <ul className="es-stackcard__list">
                    {g.items.map((it) => (
                      <li className="es-pill" key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How I fit (areas mapped to the role) ──────────── */}
        <section id="fit" className="es-section es-section--soft">
          <div className="es-wrap">
            <header className="es-section__head" data-reveal>
              <p className="es-kicker">Focus areas</p>
              <h2 className="es-h2">What I do, mapped to the <span className="es-grad-text">role</span>.</h2>
            </header>
            <div className="es-fit__grid">
              {FIT.map((f, i) => (
                <article className="es-fcard" key={f.k} data-reveal>
                  <span className="es-fcard__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="es-fcard__k">{f.k}</h3>
                  <p className="es-fcard__body">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience + Education ────────────────────────── */}
        <section className="es-section">
          <div className="es-wrap">
            <header className="es-section__head" data-reveal>
              <p className="es-kicker">Background</p>
              <h2 className="es-h2">Experience and <span className="es-grad-text">education</span>.</h2>
            </header>
            <div className="es-cv">
              <div className="es-cv__col" data-reveal>
                <h3 className="es-cv__h">Experience</h3>
                <ul className="es-cv__list">
                  {EXPERIENCE.map((r) => (
                    <li className="es-cv__item" key={r.org}>
                      <div className="es-cv__row">
                        <span className="es-cv__role">{r.title}</span>
                        <span className="es-cv__org">{r.org}</span>
                        <span className="es-cv__time">{r.time}</span>
                      </div>
                      <p className="es-cv__note">{r.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="es-cv__col" data-reveal>
                <h3 className="es-cv__h">Education and training</h3>
                <ul className="es-cv__list">
                  {EDUCATION.map((e) => (
                    <li className="es-cv__edu" key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Selected work (the showcase grid) ─────────────── */}
        <section id="work" className="es-section es-section--soft">
          <div className="es-wrap">
            <header className="es-section__head" data-reveal>
              <p className="es-kicker">Selected work</p>
              <h2 className="es-h2">Selected <span className="es-grad-text">work</span>.</h2>
              <p className="es-sub">A live link for each, apart from the role I hold.</p>
            </header>
            <div className="es-proof__grid">
              {PROOF.map((p) =>
                p.href ? (
                  <a key={p.title} className="es-pcard" href={p.href} target="_blank" rel="noopener noreferrer" data-reveal>
                    <span className="es-pcard__badge" style={{ backgroundImage: p.grad }}>{p.tag}</span>
                    <div className="es-pcard__body">
                      <h3 className="es-pcard__title">{p.title}</h3>
                      <p className="es-pcard__desc">{p.desc}</p>
                      <span className="es-pcard__link" aria-hidden="true">{p.open} →</span>
                    </div>
                  </a>
                ) : (
                  <div key={p.title} className="es-pcard" data-reveal>
                    <span className="es-pcard__badge" style={{ backgroundImage: p.grad }}>{p.tag}</span>
                    <div className="es-pcard__body">
                      <h3 className="es-pcard__title">{p.title}</h3>
                      <p className="es-pcard__desc">{p.desc}</p>
                      <span className="es-pcard__cred">Current role</span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ── Contact close ─────────────────────────────────── */}
        <section id="contact" className="es-cta">
          <div className="es-cta__inner" data-reveal>
            <h2 className="es-cta__title">Let&apos;s talk.</h2>
            <p className="es-cta__sub">
              Email or WhatsApp me, or browse the code. My CV is a click away.
            </p>
            <div className="es-cta__links">
              <a className="es-btn es-btn--primary" href={EMAIL}>Email me</a>
              <a className="es-btn es-btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="es-btn es-btn--ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="es-btn es-btn--ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="es-btn es-btn--ghost" href={CV} target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="es-footer">
        <div className="es-footer__inner">
          <p className="es-footer__tag">
            An application page Bar Moshe built in e-square.io&apos;s visual language for the
            Junior Full Stack Developer role. Independent application, not affiliated with e-square.io.
          </p>
          <span className="es-footer__meta">Tel Aviv · 2026</span>
        </div>
      </footer>
    </div>
  );
}
