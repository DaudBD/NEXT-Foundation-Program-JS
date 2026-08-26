
const student = {
    name1 : "Arif",
    age : 32,
    address: "Dhaka",
}

// Moderen Js 

//const {age,name1,address} = student
//console.log(age);

const student1 = {
    name2 : "Arif",
    age : 32,
    address: {
        city: "Dhaka",
        thana: "Kamlapur",
        zipcode: 1217,
    }
}

const {name2, address: { city, thana,zipcode}, } = student1;
console.log(name2,thana,zipcode);

const array = ["Red","Green","Blue","Yellow"];

//const [first,second,third,four]  = array;

const [,,third,four]  = array;
console.log(four);



const student2 = {
    name3 : "Arif",
    age : 32,
    address: {
        city2: "Dhaka",
        thana: "Kamlapur",
        zipcode: 1217,
    },
    hobies: ["Singing","Wataching","Playing"],

}

const {name3, address: {city2,thana2} ,hobies:[first], } = student2;

console.log(name3,first);