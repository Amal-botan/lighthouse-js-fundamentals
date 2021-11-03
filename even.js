//function to determine if a value or even
const isEven  = function (num) {
  return num % 2 === 0;
}

//storing into a variable
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//putting directly into the console.log to simplify
console.log(isEven(10));
console.log(isEven(11));