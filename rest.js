
// rest Operator 

function add(...numbers) {
    let total = 0;
    for( const n of numbers){
        total +=  n ;
    }
    return total ;
}
console.log(add(1,2,4,5,6,10,30,40,50,100));

// Obj in Rest Operator

let obj ={
    name2: "Arif",
    age : 32,
    country: "Bangladesh",
    Occupation: "Job Holder",
    Email: "arifuldaud@gmail.com",
    Website: "DaudBD.Com",
}

const { name2,age,Email, ...reaming} = obj;
console.log(reaming);
// Array 
const array = [1,2,4,100];

const [,,...rest] = array;

console.log(rest);

function someThing(one, ...remaining) {
console.log(one, remaining);
}
console.log(someThing("first", 1,2,5,6,7,8,9));