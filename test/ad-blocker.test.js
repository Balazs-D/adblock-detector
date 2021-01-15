let e = document.getElementsByClassName("adsbox");

function adBlockDetector() {
  if (e === 0) {
    expect(adBlockDetector()).toBe(true);
  } else {
    expect(adBlockDetector()).toBe(false);
  }
}

describe("adBlockDetector", () => {
  it("ad detector active", () => {});
});
