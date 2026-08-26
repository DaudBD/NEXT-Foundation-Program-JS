
let cart = [{
    name: "Shirt", Price: 1400, quantity: 5 },
    { name: "Punjabi", Price: 2100, quantity: 3 },
    { name: "Pant", Price: 1500, quantity: 2 },
    { name: "Shoe", Price: 13400, quantity: 3 }
];

let totalQuantity = 0;
let totalSell = 0;
let totaltItem = 0;
let highPrice = 0;
let maxQuantity = 0;
let highestQualityProduct = 0;

for (const x of cart) {
    totalQuantity += x.quantity;
    totaltItem++;
    totalSell += x.Price * x.quantity

    if (x.Price > highPrice) {
    highPrice = x.Price 
}
if (x.quantity > maxQuantity) {

    maxQuantity = x.quantity;
    highestQualityProduct  = x.name;
}

}

console.log(maxQuantity);
console.log(totalSell);
console.log(totaltItem);
console.log(totalQuantity);
console.log(highPrice);
console.log( highestQualityProduct);
