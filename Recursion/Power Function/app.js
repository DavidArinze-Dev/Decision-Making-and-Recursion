function power(a, b) {
  // Recursive case:
  if (b === 0) {
    return 1;
  }
  return a * power(a, b - 1);
}

//Power of 2
console.log(power(2, 0));
console.log(power(2, 1));
console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(2, 4));
console.log(power(2, 5));

//Power of 5
console.log(power(5, 0));
console.log(power(5, 1));
console.log(power(5, 2));
console.log(power(5, 3));
