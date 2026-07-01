import { ImageResponse } from "next/og";

// Share card for the e-square.io application page, in e-square's verified brand:
// a near-black navy field (#0a0a1a / #0f0f2a), glassmorphism, and the purple ->
// cyan gradient earned as the accent. Rendered by next/og (Satori), so it uses a
// flexbox-only CSS subset and plain hex. Text is Latin so it renders reliably.

export const alt =
  "Bar Moshe for e-square.io — Junior Full Stack Developer. Full-stack, built with AI coding agents.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a1a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "66px 72px 52px",
            backgroundImage:
              "radial-gradient(760px 480px at 12% 0%, rgba(147,51,234,0.28), transparent 60%), radial-gradient(700px 460px at 92% 8%, rgba(8,145,178,0.24), transparent 62%)",
          }}
        >
          {/* brand row */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                width: 54,
                height: 54,
                borderRadius: 14,
                backgroundImage: "linear-gradient(135deg, #9333ea, #0891b2)",
              }}
            />
            <div
              style={{
                display: "flex",
                marginLeft: 18,
                fontSize: 40,
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Bar Moshe
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: 16,
                padding: "8px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.16)",
                backgroundColor: "rgba(255,255,255,0.05)",
                fontSize: 22,
                fontWeight: 600,
                color: "#22d3ee",
              }}
            >
              for e-square.io
            </div>
          </div>

          {/* headline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 70,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                maxWidth: "1000px",
              }}
            >
              Full-stack, built with AI agents.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                color: "#c9cad4",
                marginTop: "20px",
                maxWidth: "960px",
              }}
            >
              Junior Full Stack Developer: React, Node, and TypeScript, shipped with
              Cursor, Claude Code, and Codex in the loop.
            </div>
          </div>

          {/* foot */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 25,
              color: "#a3a3a7",
            }}
          >
            <div style={{ display: "flex" }}>github.com/barmoshe</div>
            <div style={{ display: "flex", fontWeight: 700, color: "#22d3ee" }}>
              React · Node · TypeScript · AI agents
            </div>
          </div>
        </div>

        {/* base strip */}
        <div
          style={{
            display: "flex",
            height: "14px",
            background: "linear-gradient(90deg, #10b981 0%, #0891b2 50%, #9333ea 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
