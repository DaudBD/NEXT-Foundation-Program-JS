let student = {
    name : "Arif",
    id : 7403,
    marks : {
        math: 80,
        english: 70,
        bangla: 25,
    }
}

let totalMarks = 0;
let totalSubjet = 0;

for (const ele in student.marks) {
    totalMarks += student.marks[ele]
    totalSubjet++;
}
//console.log(student);
//console.log(totalMarks);
//console.log(totalSubjet);

let avg = (totalMarks / totalSubjet)
console.log(avg);

if (avg >= 80) {
    console.log("You are got", "A+");
} else {
    console.log("you are Fail", "F");
}
