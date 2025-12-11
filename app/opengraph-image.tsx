import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Swasthya Sarathi - Your Complete Healthcare Companion";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            backgroundColor: "white",
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          }}
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="#14B8A6">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: 800,
            marginBottom: 16,
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          Swasthya Sarathi
        </div>

        <div
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: 32,
            fontWeight: 500,
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Your Complete Healthcare Companion
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 40,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: "12px 24px",
              borderRadius: 50,
              color: "white",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            5,000+ Doctors
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: "12px 24px",
              borderRadius: 50,
              color: "white",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            500+ Hospitals
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: "12px 24px",
              borderRadius: 50,
              color: "white",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            1,000+ Labs
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: 24,
          }}
        >
          swasthyasarathi.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
