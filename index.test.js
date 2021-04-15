// console.clear();

function ten() {
  return 10;
}

function sum() {
  //should return the product of arguments
}

//describe
//test, in other frameworks known as it.("Should Do a Thing.")
//expect (assertion library)

describe("ten()", () => {
  test("Should Return 10", () => {
    expect(ten()).toBe(10);
    //expect invokes whatever is passed in as its argument, and return an
    //expectation object that has methods on it like .toBe(), toMatch(), toBeGreaterThan().
  });
});

// function expect(actual, expected, label = "") {
//   console.log(`- ${label}`);
//   if (actual !== expected) {
//     console.log(`X - FAIL - expected ${actual} to equal ${expected}`);
//   }
// }

// console.log("\n Testing ten function:");
// expect(ten(), 10, "ten() should return 10");
