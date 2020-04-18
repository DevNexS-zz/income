// let num = 20;

// function showFirstMessage(text){
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("hello world!");
// console.log(num);

// function calc(a,b){
//     return (a +b);
// }
// //or 

// let calcc = function calc(a,b){
//     return (a +b);
// }
// console.log(calcc(3,4));
// console.log(calcc(8,4));

let calc = (a,b) => a+b; //{a+b}

console.log(calc(3,4));
console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let twelwe = 12;
console.log(Math.round(twelwe));

let twelwes = "12.2px";
console.log(parseFloat(twelwes));