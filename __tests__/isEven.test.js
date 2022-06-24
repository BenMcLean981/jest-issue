const { isEven } = require("../isEven");

describe("isEven", () => {
  it("Returns true for an even number.", () => {
    expect(isEven(-2));
    expect(isEven(0));
    expect(isEven(2));
    expect(isEven(4));
  });

  it("Returns false for an odd number.", () => {
    expect(!isEven(-1));
    expect(!isEven(1));
    expect(!isEven(3));
    expect(!isEven(6)); // this should fail, but it doesn't.
  });
});

describe("the issue.", () => {
  expect(false); // this doesn't fail.
});
