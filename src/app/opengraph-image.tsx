import { ImageResponse } from "next/og";

export const alt = "Escolent — One Curriculum. Every Student's Real Pace.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#07080c",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(30, 107, 255, 0.18) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(45, 212, 191, 0.1) 0%, transparent 45%)",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Top Header / Brand Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "rgba(30, 107, 255, 0.2)",
                border: "1px solid rgba(30, 107, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "6px",
                  backgroundColor: "#1e6bff",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "36px",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#ffffff",
              }}
            >
              Escolent
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "100px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              fontSize: "14px",
              fontWeight: 600,
              color: "#94a3b8",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#1e6bff",
              }}
            />
            <span>Adaptive Intelligence Platform</span>
          </div>
        </div>

        {/* Center Headline & Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "960px" }}>
          <h1
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            One curriculum. <br />
            <span style={{ color: "#60a5fa" }}>Every student’s real pace.</span>
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.4,
              color: "#94a3b8",
              margin: 0,
              maxWidth: "820px",
            }}
          >
            Real-time cognitive diagnostics, graduated support ladders, and emotional distress detection — natively integrated into existing school LMS portals.
          </p>
        </div>

        {/* Bottom Feature Pillars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "12px",
              backgroundColor: "rgba(30, 107, 255, 0.12)",
              border: "1px solid rgba(30, 107, 255, 0.3)",
              fontSize: "15px",
              fontWeight: 600,
              color: "#93c5fd",
            }}
          >
            <span>Dynamic Scaffold Ladder</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "12px",
              backgroundColor: "rgba(45, 212, 191, 0.1)",
              border: "1px solid rgba(45, 212, 191, 0.25)",
              fontSize: "15px",
              fontWeight: 600,
              color: "#5eead4",
            }}
          >
            <span>Affective Safety Net</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "15px",
              fontWeight: 600,
              color: "#cbd5e1",
            }}
          >
            <span>LTI 1.3 Canvas / Classroom / Moodle</span>
          </div>

          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            escolent.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
