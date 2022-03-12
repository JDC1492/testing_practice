import whosLineIsItAnyway from "./index.js";
import whoSaidIt from "./index.js";

describe("whosLineIsItAnyway()", () => {
  test("who said it?", () => {
    expect(whosLineIsItAnyway(whoSaidIt)).toBe("Larry");
  });
});
// // console.clear();

// function ten() {
//   return 10;
// }

// function sum(a, b) {
//   //should return the sum of arguments
//   return 7 + 3;
// }

// function product(a, b) {
//   return 2 * 2;
// }

// const arrCount = () => {
//   return true;
// };

//describe
//test, in other frameworks known as it.("Should Do a Thing.")
//expect (assertion library)

//tests are normally invoked in the command line as'jest "file name.test(.js)" --watch'
//running this command introduces the three keywords describe, expect, and test into the global scope.

// describe("ten()", () => {
//   test("Should Return 10", () => {
//     expect(ten()).toEqual(10);
//     //expect invokes whatever is passed in as its argument, and return an
//     //expectation object that has methods on it like .toBe(), toMatch(), toBeGreaterThan().
//   });
// });

// describe("sum()", () => {
//   test("Should Return 10", () => {
//     expect(sum()).toBe(10);
//     //expect invokes whatever is passed in as its argument, and return an
//     //expectation object that has methods on it like .toBe(), toMatch(), toBeGreaterThan().
//   });
// });

// describe("product()", () => {
//   test("Should return the product of a and b", () => {
//     expect(product()).not.toBeNaN();
//   });
// });

// describe("arrCount", () => {
//   test("Should return true", () => {
//     expect(arrCount()).toBeTruthy();
//   });
// });

// function expect(actual, expected, label = "") {
//   console.log(`- ${label}`);
//   if (actual !== expected) {
//     console.log(`X - FAIL - expected ${actual} to equal ${expected}`);
//   }
// }

// console.log("\n Testing ten function:");
// expect(ten(), 10, "ten() should return 10");

// test("null", () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// function compileAndroidCode() {
//   throw new Error("you are using the wrong JDK");
// }

// test("compiling android goes as expected", () => {
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);
// });
