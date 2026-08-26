/*তোমার program-এর কাজ:

Student-এর সব information একটি object-এ রাখবে।
সব subject-এর marks যোগ করে total marks বের করবে।
কয়টি subject আছে সেটা বের করবে।
Average marks বের করবে।
Average অনুযায়ী result দেখাবে:
80 বা তার বেশি → A+
70 বা তার বেশি → A
60 বা তার বেশি → A-
50 বা তার বেশি → B
40 বা তার বেশি → C
40-এর নিচে → Fail
তোমার ব্যবহার করতে হবে

object → for...in → variable → if/else */



const student ={
    name : " Arif",
    id: 7401,

    subject: { math : 80,
    eng: 70,
    islamic: 80,
    history: 80,
     bangla: 50}

}
let totalMarks = 0;
let totalSubject = 0;

for (const x in student.subject) {
    totalMarks += student.subject[x];
    totalSubject++;
}

totalAvg = Math.floor(totalMarks / totalSubject);
let result;
if (totalAvg >= 80){
    result = "A+";
} else if 
    (totalAvg >= 70){
    result = "A";
}
else if 
    (totalAvg >= 60){
    result = "A-";
}
else if 
    (totalAvg >= 50){
    result = "B";
}
else if 
    (totalAvg >= 40){
    result = "C";
}
else {
    result = "F"
}

console.log(result);
console.log(totalMarks);
console.log(totalSubject);
console.log(totalAvg);