

//let marks =["56","60", "70","40","98","76"]

//let max = marks[0];

//for (let i =1; i < marks.length;i++){
    //if (max < marks[i]) {
      //  max = marks[i];
    //}
    
//}
//console.log(max);


//let marks = [56, 60, 70, 40, 98, 76];
    //let sum = 0;

    // for (let i of marks) {
    //     sum += i;
    // }

    // console.log(sum);
    // console.log(sum / marks.length);
let marks = [56, 60, 70, 40, 98, 76];
    let reVers = [];

    for (let i = marks.length-1; i >= 0; i--){
        reVers.push(marks[i]);
    };

    console.log(reVers);