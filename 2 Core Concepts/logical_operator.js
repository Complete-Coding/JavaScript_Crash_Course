let age = 17;
let isStudent = true;

if (age >= 18 && isStudent) {
  console.log('You are eligible for internship');
} else if (age >= 18) {
  console.log('You have to do a job');
} else {
  console.log('You are neither');
}

if (age < 22 || isStudent) {
  console.log('You are eligible for scholarship');
}