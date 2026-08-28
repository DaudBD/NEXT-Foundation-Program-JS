let user = {
    name: "Rahim",

    address: {
        city: "Dhaka",
    },
};

let user1 = {
    name: "Daud",
    // no address
};
// Optional Changing Operator
console.log(user?.address?.city);
//console.log(user1?.address?.city);
//Nulissh 

console.log(user1?.address?.city ?? "Rajshahi");

let name1 = null;

console.log(name1 ?? "Rahim");