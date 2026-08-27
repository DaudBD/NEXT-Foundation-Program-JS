
let products = [
{title:'Mouse',price: 550, instock:true,quantity: 50},
{title:'Keyboard',price: 550, instock:false,quantity: 70},
{title:'Headphone',price: 550, instock:false,quantity: 40},
{title:'Airbud',price: 450, instock:true,quantity: 50},
{title:'Mousepad',price: 250, instock:true,quantity: 70},
];

let totalprice = products.reduce((acc,current) => {
//return (acc += current.instock);
return acc += current.price;
} ,1000);
console.log(totalprice);


let product = products.sort((a,b) => a.price -b.price );// Acceinding
console.log(product);
let product1 = products.sort((a,b) => b.price -a.price ); //Descinding

console.log(product1);

let sorted = [10,100,20,30,40,50,60,70,90].sort((a,b) => a-b);
let sorted2 = [10,100,20,30,40,50,60,70,90].sort((a,b) => b-a);
console.log(sorted);
console.log(sorted2);

let estiPrice = products.filter((p) => p.instock === true).reduce((acc,current) =>{
    return (acc += current.price);
},0)
console.log(estiPrice);


let estiPrice1 = products.filter((p) => p.instock === false).reduce((acc,current) =>{
    return (acc += current.price);
},0)
console.log(estiPrice1);

let totalQuantity = products.reduce((acc,current) => {
//return (acc += current.instock);
return acc += current.quantity;
} ,0);
console.log(totalQuantity);

let result = products.filter(
    (p) => p.title === "Mouse" || p.title === "Headphone"
);

console.log(result);

let result1 =products.find((p) => p.title === "Mouse")
console.log(result1);