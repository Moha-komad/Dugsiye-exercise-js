const arr1 = [1, 2, 3];
const arr2 = [... arr1, 4, 5, 6];
console.log(arr2);


console.log("multiply function using the rest parameter (...)")

function multiply(...numbers) {
  let product = 1;

  for (const num of numbers) {
    product *= num;
  }

  return product;
}

console.log(multiply(2, 3));       // 6
console.log(multiply(2, 3, 4));    // 24
console.log(multiply(1, 2, 3, 4)); // 24