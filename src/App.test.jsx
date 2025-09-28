import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("falsy to be falsy", () => {
    expect(false).toBe(false);
  });
});
