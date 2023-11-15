//String
let str = "Привіт";
let srt2 = "Одинарні лапки також дозволяються";
let phrase = `так можна вставляти ${str}`;
let name = "Оля";
let hello = `Привіт ${name}`;

console.log(hello);

const message = "JavaScript " + "is" + " awesome";
console.log(message); // JavaScript is awesome

//Конкатенація;
let result;
result = 5 + "5";

console.log(result); // '55'
console.log(typeof result); // string

result = 5 + "5" + 5;

console.log(result); // '555'
console.log(typeof result); // string

result = 5 + 5 + "5";

console.log(result); // 105'
console.log(typeof result); // string

//length - довжина
// toLowerCase() и toUpperCase()
// index0f0)
// includes()
//const message = "Welcome to Bahamas!";

console.log(message.length); // 19
console.log("There is nothing impossible to him who will try".length); //47
console.log(message.toLowerCase()); // welcome to bahamas
console.log(message.toUpperCase()); // WELCOME TO BAHAMAS

// При этом исходная строка не изменяется
console.log(message); // Welcome to Bahamas!
console.log(message.indexOf("t")); // 8
console.log(message.indexOf("hello")); // -1

// Все методы строк чувствительны к регистру
console.log(message.includes("welcome")); // false
console.log(message.includes("Welcome")); // true


// Обжекти
// let user = {
// // обʼєкт
//  name: "Іван", // за ключем "name" зберігаємо значення "Іван"
//  age: 30, // за ключем "age" зберігати значення "30"
//  work: true,
// };
// console.log(user);
// // отримаємо значення властивостей обʼєкта:
// console.log(user.name); // Іван
// console.log(user.age); // 30


let user = {
    name: "Іван",
    age: 30,
    isAdmin: true
};
for (let key in user) {
// ключі
    console.log(key); // name, age, isAdmin
// значення ключів
    console.log(user [key]); // Іван, 30, true
}