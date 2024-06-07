
let counter = 0; // Initialization
while (counter < 100000) { // condition check
  console.log(`${counter + 1}`);
  counter = counter + 1; // update
}
console.log("Out of the loop");


for (let c = 0; c < 100000; c++) {
  console.log(`${c + 1}`);
}
console.log("Out of the for loop");