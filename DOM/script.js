
console.log("Conencted")
const btn = document.getElementById('btn').innerHTML = "Hello Js";
console.log(btn);


let taskinput = document.getElementById("taskinput");
let addBtn = document.getElementById("addBtn");
let tasklist = document.getElementById("tasklist");

//console.log(taskinput, addBtn, tasklist);

//let addBtnAlt1 = document.querySelector("button");
//let addBtnAlt = document.querySelector("#addBtn");

//addBtn.addEventListener("click", function () {
  // console.log("Click Me");
//});

//addBtn.addEventListener("click",  () => {
   // console.log(taskinput.value);
//});

//taskinput.addEventListener("keydown", (event) => {
    //if (event.key === "Enter"){
      //  console.log("EnterPrress",taskinput.value);
  //  }
//});

//console.log(addBtnAlt, addBtnAlt1);


// Create Element 


addBtn.addEventListener("click",  () => {
   // console.log(taskinput.value);
let li = document.createElement("li");

li.textContent =taskinput.value;
//tasklist.appendChild(li);
let span = document.createElement('span');
let btnWraper =document.createElement("span");
btnWraper.textconetnt = "textinput.value";
let completeBtn = document.createElement('button');
completeBtn.textContent ="✅"
let deleteBtn = document.createElement('button');
deleteBtn.textContent = "❌";
li.appendChild(span);
li.appendChild(btnWraper);
btnWraper.appendChild(completeBtn);
btnWraper.appendChild(deleteBtn);
tasklist.appendChild(li);
taskinput.value ="";
});
//console.log(li);
