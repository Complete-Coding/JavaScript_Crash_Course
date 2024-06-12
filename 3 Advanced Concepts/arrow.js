// function sum(a, b) {
//   return a + b;
// }

let sum = function(a, b) {
  return a + b;
}
let sum1 = (a, b) => {
  return a + b;
}
let sum2 = (a, b) => a + b;
let square = a => a * a;

console.log(sum(4, 5));
console.log(sum1(4, 5));
console.log(sum2(4, 5));