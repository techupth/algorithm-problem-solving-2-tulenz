function findStudentIndex(students, searchStudent) {
  let left = 0;
  let right = students.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midStudent = students[mid];

    if (midStudent === searchStudent) {
      return mid;
    } else if (midStudent < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// ตอบคำถามตรงนี้จ้า
const students1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
const searchStudent1 = "John";
console.log(findStudentIndex(students1, searchStudent1));

const students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
const searchStudent2 = "Andrew";
console.log(findStudentIndex(students2, searchStudent2));
