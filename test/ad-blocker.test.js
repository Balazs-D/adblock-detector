function adBlockDetector() {
  let e = document.getElementsByClassName("adsbox");
  if (e === 0) {
    expect(adBlockDetector()).toBe(true);
  } else {
    expect(adBlockDetector()).toBe(false);
  }
}

describe("adBlockDetector", () => {
  it("ad detector active", () => {});
});
