require("./index.js")
test("Sanity", () => {
  // passes
})

test("capitalize", () => {
  expect("aha".capitalize()).toBe("Aha")
})

test("lower", () => {
  expect("YEEHAW".lower()).toBe("yEEHAW")
})

test("capitalize sentence", () => {
  expect("cowboy say yeehaw".capitalizeSentence()).toBe("Cowboy say yeehaw")
})
