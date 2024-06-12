let student = {
  rollNo: 43,
  name: 'Piyush Jindal',
  course: 'Computer Science'
};

console.log(student);
console.log(student.rollNo);
console.log(student.name);
console.log(student.course);
console.log(student['rollNo']);
console.log(student['name']);
console.log(student['course']);

console.log(typeof student);
console.log(typeof student.rollNo);

delete student.course;
console.log(student);
student.year = 'second';
console.log(student);
