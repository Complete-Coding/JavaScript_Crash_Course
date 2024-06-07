function greeting() {
  console.log('Welcome to our app.');
  console.log('Thanks for using our app.');
}

greeting();
// greeting();
// greeting();
// greeting();

function getPrimeNumber() {
  return 7;
  console.log('after return'); // will never execute
}

let prime = getPrimeNumber();
console.log(prime);


function sum(first, second) {
  let add = first + second;
  return add;
}

let result = sum(21, 9);
console.log(result);
