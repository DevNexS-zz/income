let options = {
    width: 1024,
    height: 2024,
    name: "Nex"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool; //Delete object

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

//let arr = ["first", 2, 3, "four", 5];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ": " + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key of mass){
//     console.log(key);
// }

// let ans = prompt("",""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['awe', 'Z', 'X', 'xs'],
//     i = arr.join(', ');

//     console.log(i);

let arr = ['awe', 'Z', 'X', 'xs'],
     i = arr.sort(compareNum);

     function compareNum(a,b){
         return a-b;
     }
     console.log(i);

let soldier = {
    healt: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);



