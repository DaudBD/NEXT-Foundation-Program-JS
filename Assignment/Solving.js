

//Addition Given two numbers 25 and 15, find their sum.
let a = 25;
let b = 15;

let sum = a+b;
console.log(sum);

// // Basic Operations
// Given two numbers 20 and 5, find their:
// Sum
// Difference
// Product
// Quotient

let x = 20 ;
let y = 5;
 let sum1 = x+y ;
let deifference = x-y ;

let product = x* y;
let quotient = x/y;

console.log(sum1,deifference,product,quotient);

// Even or Odd
// Given a number 27, check whether it is Even or Odd.
// Positive, Negative, or Zero

let number = 27;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// Positive, Negative, or Zero
// Given a number -15, check whether it is Positive, Negative, or Zero.
let num = -15;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

// Find the Larger Number
// Given two numbers 45 and 70, find the larger number.

let num1 = 45 ;
let num2 = 70;

if (num1 < num2) {
    console.log("Largest")
} else if   {
    console.log("Smallest")
}



//  Question: Find the Largest of Three Numbers
// Given 25, 80, and 45, find the largest number.

let x1 = 25;
let x2 = 80;
let x3 = 45 ;

if ( x1 > x2 && x1 > x3) {
    console.log ("x1 is Largest")
} else if (x2 > x1 && x2 > x3 ){
    console.log(x2 is Largest)
} else {
    console.log(x3 is Largest)
}

//A student's mark is 65. If the mark is 40 or above, print "Pass"; otherwise, print "Fail".

let mark = 65;

if ( mark >= 40){
    console.log("pass")
} else {
    console.log("fail")
}

// Grade Calculator
// Grade Calculator
// Given a student's mark 85, determine the grade:
// 80+ → A+
// 70–79 → A
// 60–69 → B
// 50–59 → C
// 40–49 → D
// Below 40 → F

let studentsMark = 85;

if (studentsMark >= 80) {
    console.log("A+");
} else if (studentsMark >= 70) {
    console.log("A");
} 
else if (studentsMark >= 60){
    console.log("B")
} else if (studentsMark >= 50){
    console.log("C")
 } else if (studentsMark >= 40){
        console.log("D");
    } else{
        console.log("F");
    }
// Adult or Minor
// Given a person's age 18, print "Adult" if the age is 18 or above; otherwise, print "Minor".
let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// Divisible by 5
// Given a number 35, check whether it is divisible by 5.
// Divisible by 3 and 5

let x4 = 35 % 5;

if (x4 === 0) {
    console.log("Divisile By 5")
} else {
      console.log("Not Divisible by 5");
}
let number = 30;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}

// Celsius to Fahrenheit
// Convert 30°C to Fahrenheit.

let celsius = 30;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log(fahrenheit);

Rectangle Area
Given length 10 and width 5, calculate the area of the rectangle.
let width = 5;
let length = 10;

let areaRectangle = length * width;

console.log(areaRectangle);

// Triangle Area
// Given base 10 and height 8, calculate the area of the triangle.

const base = 10;

const height = 8;

const areaTraingle =  1/2 * base * height

console.log (areaTraingle);

// Find the Middle Number
// Given three numbers 10, 30, and 20, find the middle number

let x1 = 10;
let x2 = 30 ;
let x3 = 20;

if ((x1 > x2 && x1 < x3 ) || (x1 < x2 && x1 > x3)){
    console.log("x1 Is middle Number");
} else if ((x2 > x1 && x2 < x3) || (x2 < x1 && x2 > x3)){
    console.log("X2 Is Middle Number");
} else {
    console.log("x3 Is middele Number")
}


// Leap Year
// Given the year 2024, check whether it is a leap year.


let year = 2024;

if (year % 4 === 0) {
    console.log(" Is Leap ")
} else  {
    console.log ("nor lleap")
}

// Multiple of 10
// Given a number 100, check whether it is a multiple of 10.

let number = 100;

if (number % 10 === 0) {
    console.log("Multiple");
} else {
    console.log("Not Multiple");
}

// Compare Two Numbers
// Given 10 and 20, use if...else to determine which number is larger.
let num1 = 10;
let num2 = 20 ;

if (num1 > num2) {
    console.log(" is Small")
} else {
    console.log("is Lartger ")
}

// Number Range
// Given a number 7, check whether it is between 1 and 10.
let n = 7;

if (n >= 1 && n <= 10) {
    console.log("Number is between 1 and 10");
} else {
    console.log("Number is not between 1 and 10");
}

