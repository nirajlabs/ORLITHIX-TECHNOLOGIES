import { ImageResponse } from "next/og";

const logoMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#080D1B"/><path d="M50 12 78 24 88 50 78 76 50 88 22 76 12 50 22 24Z" fill="#10192B" stroke="#586BFF" stroke-width="5" stroke-linejoin="round"/><path d="M39 76 46 43h-7l11-22 11 22h-7l7 33Z" fill="#40D6C5"/><circle cx="50" cy="21" r="3.5" fill="#F4F6FF"/><circle cx="78" cy="24" r="2.5" fill="#40D6C5"/><circle cx="88" cy="50" r="2.5" fill="#586BFF"/><circle cx="78" cy="76" r="2.5" fill="#40D6C5"/><circle cx="22" cy="76" r="2.5" fill="#586BFF"/><circle cx="12" cy="50" r="2.5" fill="#40D6C5"/><circle cx="22" cy="24" r="2.5" fill="#586BFF"/></svg>`;
const logoMarkDataUrl = `data:image/svg+xml,${encodeURIComponent(logoMark)}`;

export const alt =
  "Orlithix Technologies — Engineering Intelligence. Building the Future.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          color: "#F4F6FF",
          backgroundColor: "#080D1B",
          backgroundImage:
            "radial-gradient(ellipse at 82% 18%, rgba(88,107,255,0.2), transparent 42%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 16,
              backgroundImage: `url("${logoMarkDataUrl}")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: 5 }}>
              ORLITHIX<span style={{ color: "#40D6C5" }}>.</span>
            </span>
            <span
              style={{
                marginTop: 4,
                color: "#A5B2CC",
                fontSize: 12,
                letterSpacing: 5,
              }}
            >
              TECHNOLOGIES
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              alignSelf: "flex-start",
              padding: "10px 16px",
              border: "1px solid #263650",
              borderRadius: 999,
              color: "#40D6C5",
              fontSize: 14,
              letterSpacing: 2,
            }}
          >
            PROPOSED TECHNOLOGY VENTURE
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 900,
              fontSize: 58,
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            <span>Engineering Intelligence.</span>
            <span>Building the Future.</span>
          </div>
          <span style={{ color: "#A5B2CC", fontSize: 20 }}>
            A technology venture in development.
          </span>
        </div>
        <div style={{ height: 2, width: "100%", backgroundColor: "#263650" }} />
      </div>
    ),
    { ...size },
  );
}
