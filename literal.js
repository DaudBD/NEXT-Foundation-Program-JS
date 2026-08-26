

let price = 500;
quantity = 3;

//console.log(`Total price: ${price * quantity} Taka\nYou Pay own`);

function getDiscount() {
    return price * 0.2;
}
console.log(`You Save 20 Percent: ${getDiscount(price)} BDT\nYou can Enjoy The offer`);
console.log(`You Save 20 Percent: ${getDiscount(price)} BDT\nYour total Bill is: ${price * quantity - getDiscount(price)}Taka`);

let stock = 5;

console.log(`Status: ${stock > 0 ? "In Stcok" + " " + stock : "Out Of Stock"}`);