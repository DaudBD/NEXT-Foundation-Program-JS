

// 1. Use map()
// Given an array of numbers, create a new array
// where each number is multiplied by 2.

let numbers1 = [10, 20, 30, 40, 50];

let multipliedNumbers = numbers1.map(function(num) {
    return num * 2;
    });

    console.log(multipliedNumbers); 
    
    // Output: [20, 40, 60, 80, 100]
  // Onlin

    // Output: [20, 40, 60, 80, 100]
    

// 2. Use map()
// Given an array of products, create a new array
// containing only the product titles.

    let products1 = [
    { title: "Mouse", price: 500 },
    { title: "Keyboard", price: 1200 },
    { title: "Headphone", price: 2500 }
];
let productTitles = products1.map(function(p) {
    return p.title;
});
console.log("productTitles:", productTitles);
let productPrice = products1.map(function(p) {
    return p.price;
});

console.log("productPrice:", productPrice);


let numbers2 = [10, 25, 35, 45, 20, 50];

let largestNumber = numbers2.filter(function(num){
    return num > 30;
});
console.log("largestNumber:", largestNumber);


let products2 = [
    { title: "Mouse", price: 500 },
    { title: "Keyboard", price: 1200 },
    { title: "Headphone", price: 2500 }
];

let highPrice =products2.filter(function (p){
    return p.price > 1000;
});
console.log("highPrice:", highPrice);


let products3 = [
    { title: "Mouse", price: 500, instock: true },
    { title: "Keyboard", price: 1200, instock: false },
    { title: "Headphone", price: 2500, instock: true }
];

let inStock = products3.filter(function(p) {
    return p.instock === true;
});
console.log("inStock:", inStock); 





let products4 = [
    { title: "Mouse", price: 500 },
    { title: "Keyboard", price: 1200 },
    { title: "Headphone", price: 2500 }
];

let findTitle = products4.find(function(p) {
    return p.title === "Mouse";
});
console.log("findTitle:", findTitle);


// 7. Use some()
// Check whether there is any product with a price
// greater than 2000.

let products5 = [
    { title: "Mouse", price: 500 },
    { title: "Keyboard", price: 1200 },
    { title: "Headphone", price: 2500 }
];

let highPrice = products5.some(function(p) {
    return p.price > 2000;
});
console.log("highPrice:", highPrice); // Output: true




// 8. Use every()
// Check whether all products are in stock.

let products6 = [
    { title: "Mouse", instock: true },
    { title: "Keyboard", instock: true },
    { title: "Headphone", instock: true }
];


let inStock = products6.every(function(p) {
    return p.instock === true;  
});
console.log("inStock:", inStock);



// 9. Use reduce()
// Calculate the total of all numbers.

let numbers3 = [10, 20, 30, 40, 50];

let total = numbers3.reduce(function(sum,num){
    return sum +num;
}, 0);
console.log("total:", total); // Output: 150

// Output: true

// Calculate the total price of all products.

let products7 = [
    { title: "Mouse", price: 500 },
    { title: "Keyboard", price: 1200 },
    { title: "Headphone", price: 2500 }
];
let totalPrice = products7.reduce(function(sum, p) {
    return sum + p.price;

}, 0);
console.log("totalPrice:", totalPrice); // Output: 4200

let totalProducts =products7.reduce(function(count, p) {
    return count +1;
}, 0);
console.log("totalProducts:", totalProducts); // Output: 3

let products8 = [
    { title: "Mouse", price: 500 },
    { title: "Keyboard", price: 1200 },
    { title: "Headphone", price: 2500 }
];

let increasedPrices = products8.map(function(p) {
    return (p.price * 10/100);
});
console.log("increasedPrices:", increasedPrices);


let students = [
    { name: "Rahim", marks: 35 },
    { name: "Karim", marks: 60 },
    { name: "Hasan", marks: 45 },
    { name: "Jamal", marks: 30 }
];

let passedstudents = students.filter(function (s){
    return s.marks >= 40;
});
console.log("passedstudents:", passedstudents);

let findSt= students.find(function (s){
    return s.name === "Karim"
});

console.log("findSt:", findSt);