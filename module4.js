// 2. Array Destructuring
// Get the first and third elements from the array.

let student = {
    name1: "Rahim",
    age: 20,
    marks: 75
};

let { name1, age } = student;

console.log(name1, age);

let fruits = ["Apple", "Mango", "Banana", "Orange"];


let [firstFruit, ,thirdFruit] = fruits
console.log(firstFruit, thirdFruit);
// 3. Spread Operator
// Create a new array by combining these two arrays.

let boys = ["Rahim", "Karim"];
let girls = ["Mim", "Jannat"];

let combined = [...boys,...girls];

console.log(combined);

// 4. Spread Operator
// Add "Orange" to the existing fruits array
// without changing the original array.

let fruits2 = ["Apple", "Mango", "Banana"];

let newFruits = [...fruits2, "orange"];

console.log(newFruits);


// 5. Rest Parameter
// Create a function that accepts any number of numbers
// and prints them.

let =   showNumbers(10, 20, 30, 40, 50);

function showNumbers(...numbers) {
    console.log(numbers);
}

// 6. Rest Parameter
// Create a function that accepts multiple numbers
// and calculates their sum.
function CalculateSum(...numbers) {
    let sum = 0;
    for (let i = 0; i <numbers.length;i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(CalculateSum(10, 20, 30, 40));

// 7. Arrow Function
// Create an arrow function that takes a number
// and returns its square.

let square = 5;

let squareNumber = (num) => {
    return num * square ;
}
console.log(squareNumber(square));
// Write your code here
// 8. Arrow Function
// Create an arrow function that takes two numbers
// and returns their sum.

let num1 = 10;
let num2 = 20;

let addNumbers = (num1,num2) => {
    return num1 + num2;
}
console.log(addNumbers(num1,num2));


// 9. Template Literal
// Print this message using template literals:
// "Rahim is 20 years old."



let name = "Rahim";
let age = 20;

console.log(`${name} is ${age} years old.`);


// 10. Optional Chaining
// Safely access the city property.


let user = {
    name: "Rahim",
    address: {
        city: "Dhaka"
    }
};

console.log(user.address?.city);

// 11. Nullish Coalescing
// If username is null, print "Guest".

let username = null;

let displayName = username ?? "Guest";
console.log(displayName);

// 12. Object Shorthand
// Create an object using shorthand property syntax.

let title = "Mouse";
let price = 500;
console.log({title, price});



let student2 = {
    name: "Rahim",
    marks: 75
};

console.log (`${student2.name} got ${student2.marks}  marks.`);
