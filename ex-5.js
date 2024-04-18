const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  return console.log(students.reduce(sum,0)/4);
}
function sum(a,b){
   return a + b.score ;
}
getAverageStudentScore(students); // Output: 87.5
