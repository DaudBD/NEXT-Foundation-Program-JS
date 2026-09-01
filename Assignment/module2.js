// ===============================
// Module 2 - Problem Solving
// ===============================

// 1. Sum of Array
// Given an array of numbers, calculate the sum of all numbers.
let numbers1 = [10, 20, 30, 40, 50];

let sum = 0;
for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}


// 2. Find the Largest Number
// Given an array of numbers, find the largest number.
let numbers2 = [25, 80, 45, 90, 30];

let largest = numbers2[0];
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
console.log("Largest number is:", largest);
// 3. Find the Smallest Number
// Given an array of numbers, find the smallest number.
let numbers3 = [25, 80, 15, 90, 30];
let smallest = numbers3[0];

for (let i =0; i < numbers3.length; i++) {
    if (numbers3[i] < smallest) {
        smallest = numbers3[i];
    }
}

console.log("Smallest number is:", smallest);


// 4. Count Even Numbers
// Given an array, count how many even numbers are there.


let numbers4 = [10, 15, 20, 25, 30, 35];

let evenCount =0;
for (let i =0; i <numbers4.length; i++) {
    if (numbers4[i] % 2 === 0)
    {
        evenCount++;
    }
}
console.log("Even numbers count is:", evenCount);


// 5. Count Odd Numbers
// Given an array, count how many odd numbers are there.
let numbers5 = [10, 15, 20, 25, 30, 35];

let OddCount = 0;

for (let i = 0; i < numbers5.length; i++){
    if (numbers5[i] % 2 !== 0){
        OddCount++;
    }
}
console.log("Odd Number Count Is:", OddCount);



// 6. Find a Number
// Check whether 30 exists in the array.
let numbers6 = [10, 20, 30, 40, 50];
let found = false;

let target = 30;
for (let i =0; i < numbers6.length; i++){
    if (numbers6[i] === target){
        found = true;
        break;
    }

    }
console.log("Found:", found);

// 7. Print All Array Elements
// Print every element one by one.
let fruits = ["Apple", "Mango", "Banana", "Orange"];

for (let i=0; i < fruits.length;i++){
console.log("fruits:", fruits[i]);
}




// 8. Calculate Average
// Calculate the average of all marks.
let marks1 = [70, 80, 60, 90, 50];

let total =0;
for ( let i =0; i < marks1.length;i++){
    total += marks1[i];
}
let average = total / marks1.length;
console.log("Average:", average);

// 9. Print 1 to 50
// Using a loop, print numbers from 1 to 50.
 let numbers7 = 0;
 for (let i =1; i <=50; i++){
    console.log("numbers:", i);
 }



// 10. Print Even Numbers
// Using a loop, print all even numbers from 1 to 50.

let i=1;
for (let i =1; i <=50; i++){
    if (i % 2 ===0 ){
        console.log("Even number:", i);
    }
}


// 11. Print Odd Numbers
// Using a loop, print all odd numbers from 1 to 50.

for (let i =1; i <=50; i++){
    if (i % 2 !==0 ){
        console.log("odd number:", i);
    }
}

// 12. Multiplication Table
// Print the multiplication table of 7 from 1 to 10.

const number = 7;
 for (let i =1; i <=10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
 }
// 13. Student Information
// Print the student's name, age, and marks.
let student1 = {
    name: "Rahim",
    age: 20,
    marks: 75
};

for(let key in student1){
    console.log(`${key}:${student1[key]}`);
}

// 14. Student Pass or Fail
// If marks are 40 or above, print "Pass", otherwise "Fail".
let student2 = {
    name: "Rahim",
    marks: 65
};

if (student2.marks >=40){
    console.log("Pass");
} else {
    console.log("Fail");
}

// 15. Product Total Price
// Calculate total price.
// Formula: price * quantity
let product = {
    title: "Mouse",
    price: 500,
    quantity: 3
};

let totalPrice = product.price * product.quantity;
console.log("Total Price", totalPrice);

// 16. Find the Largest Mark
// Find the highest mark.
let marks2 = [55, 80, 65, 95, 70];

let largest = marks2[0];

for (let i = 0; i < marks2.length; i++) {

    if (marks2[i] > largest) {
        largest = marks2[i];
    }

}

console.log("Largest Number Is:", largest);
// 17. Count Passed Students
// Count how many students passed.
// Passing mark = 40.
let marks3 = [35, 60, 45, 80, 25, 90, 39];

for (let i =0; i < marks3.length; i++){
    if (marks3[i] >= 40) {
        console.log("Passed Student Marks:", marks3[i]);
    }
}



// 18. Calculate Total Price
// Calculate the total price of all products.
let prices = [500, 1200, 800, 1500, 300];

let totalPrice = 0;
for (let i =0; i < prices.length; i++){
    totalPrice += prices[i];
}
console.log("Total Price:", totalPrice);