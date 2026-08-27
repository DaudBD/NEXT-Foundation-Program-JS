
let custom1 =["Mango","Bannana","Orange","Pineapple","Jack"];

let custom2 = custom1.find((fruit)  => fruit.length > 7 );
console.log(custom2);

let findFr = custom1.includes("Mango") ; // True or False

console.log(findFr);

let students =[
{ name : "Rahim", Mark: 45},
{ name : "Kahim", Mark: 65},
{ name : "Gahim", Mark: 95},
{ name : "Zahim", Mark: 85},
];

//let markCheck = students.some((s) => s.Mark < 45 );

let markCheck = students.every((s) => s.Mark < 45 );
console.log(markCheck);