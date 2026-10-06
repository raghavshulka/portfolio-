import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// Monogram mark: there is no photo or logo on file, so the initials stand in.
export default function AppleIcon() {
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
          borderRadius: 36,
          fontSize: 76,
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
