console.clear();

function ten() {
  console.log(10);
}

function sum() {
  //should return the product of arguments
}

//describe
//test, in other frameworks known as it.("Should Do a Thing.")
//expect (assertion library)

function expect(actual, expected, label = "") {
  console.log(`- ${label}`);
  if (actual !== expected) {
    console.log(`X - FAIL - expected ${actual} to equal ${expected}`);
  }
}

console.log("\n Testing ten function:");
expect(ten(), 10, "ten() should return 10");
