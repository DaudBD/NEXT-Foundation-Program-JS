// ... three dot 

let cart = ["Egg","Mango","Rice"];

//cart.push("Orange","Guvava");

let cart2 =[... cart,"Lemon"]
console.log(cart2);

const info ={
    FullName : "Adiyan Islam",
    Age: 4,
    City: "Dhaka",
}

const moreInfo = {
    Email: "arifyldaud@gmail.com",
    Phone: "0167788999"
}

let fullInfo ={
    ... info,
    ...moreInfo,
    zipcode: 1217,
    postOffice: "Kamlapur"
}

console.log(fullInfo);