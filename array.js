
let fruits = ["Mango", "Jack", "Banna", "Pineapple"];

let newFruits = fruits.forEach((fruit, index) => {
    console.log(`${index+1} -> ${fruit}`);
});

let newFruits2 = fruits.map((fruit) => fruit.toLowerCase());

console.log(newFruits2,"\n", fruits);

let moreFruits = fruits.filter((fruit)  => fruit.length >= 4);
console.log(moreFruits);
let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter((number) => number > 20);

console.log(result);