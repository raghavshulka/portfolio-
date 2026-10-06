import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

// Monogram mark: there is no photo or logo on file, so the initials stand in.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fafafa",
          borderRadius: 14,
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        HS
      </div>
    ),
    { ...size }
  )
}
