const students = require('./students.json')
<<<<<<< HEAD
console.log('Total of students: ', students.length)

let maleCount = 0;
let femaleCount = 0;

for (var i = 0; i < students.length; i++){
    var student = students[i];
    if(student.genre == 'Female'){
        femaleCount++
    } else {
=======

let maleCount = 0
let femaleCount = 0

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    if(student.genre == 'Female') {
        femaleCount++
    }
    else {
>>>>>>> 0878e368bac77cd97c3294791fcd2936f7a8c050
        maleCount++
    }
}

<<<<<<< HEAD
console.log("Women count: " + femaleCount);
console.log("Men count: " + maleCount);
=======
console.log("Women Students: " + femaleCount)
console.log("Men Students: " + maleCount)
>>>>>>> 0878e368bac77cd97c3294791fcd2936f7a8c050
