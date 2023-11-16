// let summ = 0;
//
// while (true) {
//     let value = +prompt("Введіть число")
//     if (!value) break;
//
//     summ += value;
// }
// console.log("Summ", summ);


for (let i = 0; i < 10; i++) {
    if (1 % 2 === 0) continue
    console.log(1);
}


let arr = ["Apple", "Orange", "Plum"];
arr [2] = "Lemon";

arr[3] = "Cherry";

console.log(arr);

arr.push("Tomat");

console.log(arr);

arr.pop();


const fruts = [
    {id: 0, name: "Apple"},
    {id: 1, name: "Tomat"},
    {id: 2, name: "Cherry"},
    {id: 3, name: "Orange"}
];

console.log(fruts.find((item) => item.id === 2));

console.log(fruts.filter((item) => item.id < 2));

let result = fruts.map(item => item.name.length);
console.log(result);

let names = 'Olya, Julia, Anya';

arr = names.split(", ");
console.log(arr);

let newString = arr.join(", ");
console.log(newString);

arr = [1, 2, 3, 4, 5];

let red = arr.reduce((summ, item) => summ + item);

arr = [23, 45, 30];

let summ = arr.reduce((sum, item) => sum + item) / arr.length;
console.log(summ)