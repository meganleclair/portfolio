import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Megan LeClair — Product designer and engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Top label */}
        <span
          style={{
            color: "#525252",
            fontSize: 13,
            fontFamily: "sans-serif",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </span>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              color: "#fafafa",
              fontSize: 80,
              fontFamily: "serif",
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
            }}
          >
            Megan LeClair
          </div>
          <div
            style={{
              color: "#737373",
              fontSize: 28,
              fontFamily: "sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Product designer and engineer
          </div>
        </div>

        {/* Bottom rule + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 1,
              background: "#262626",
            }}
          />
          <span
            style={{
              color: "#404040",
              fontSize: 14,
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Design through build · shipped software
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
