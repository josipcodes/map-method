  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results); // [ 2, 4, 6, 8, 10 ]

// Using map()
const multiplyByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log(mapResults); // [ 2, 4, 6, 8, 10 ]

// Simplified w/ map()
const simplified = nums.map(function(num) {return num * 2});
console.log(simplified); // [ 2, 4, 6, 8, 10 ]

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow); // [ 2, 4, 6, 8, 10 ]

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id])
console.log(studentsWithIds); // [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]