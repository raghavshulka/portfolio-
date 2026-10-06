import { describe, expect, it } from "vitest"

import { decodeEmail } from "./string"

describe("decodeEmail", () => {
  it("decodes a base64-encoded email address", () => {
    expect(decodeEmail("aGltYW5zaHU0c2h1a2xhNGxAZ21haWwuY29t")).toBe(
      "himanshu4shukla4l@gmail.com"
    )
  })

  it("decodes the value stored in the USER data", () => {
    expect(
      decodeEmail("aGltYW5zaHU0c2h1a2xhNGxAZ21haWwuY29t")
    ).toContain("@gmail.com")
  })
})
