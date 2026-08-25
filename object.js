let user = {
    name: "Ariful",
    age : 30,
    adrees: "Dhaka"

}
delete user.age;
user.age = 32;
user.age = 34;
user.adrees = {
    divison:  "Rajshahi",
    city :    "Sirajagnj",
    thana : "Belkuchi",
}
user.friend = ["Rahim","Karim", "jalim","Motin"],
//console.log(user["adrees"]);
//console.log(user);
//console.log(Object.entries(user));
console.log(Object.values(user));
console.log(Object.keys(user));