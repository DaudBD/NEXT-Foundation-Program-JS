let user = {
    name: "Ariful",
    age : 30,
    address: { 
    divison:  "Rajshahi",
    city :    "Sirajagnj",
    thana : "Belkuchi",
    },
};
//console.log(user["address"]["divison"]);
console.log(user.address.city);
let entry = Object.entries(user);
console.log(entry[0][1]);