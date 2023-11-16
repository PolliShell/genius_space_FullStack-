// const addNumber = function (){
//     const args = Array.from(arguments);
//     console.log(arguments);
//     console.log(args);
// };
//
// addNumber(1,2,3);
//
//
// //rest
// const addNumber2 =  function (...args){
//     console.log(args)
// }
//
// addNumber2(5,6,7);
//
// //callback
//
// function ask(question,yes,no){
//     if (typeof confirm === 'function' && confirm(question)) {
//         yes();
//     }else{
//         no();
//     }
// }
//
// function showOk(){
//     console.log("You say ok");
// }
//
// function showCancel(){
//     console.log("You say No");
// }
//
// ask("Yes or no?", showOk,showCancel)
//
//
// //hof
//
// const hello = function (name){
//     console.log(`Hello,${name}`);
// }
//
// const searchName = function (callback){
//     const name = "Ivan";
//     callback(name);
// };
// searchName(hello);
//
// ///
// function checkAge(age){
//     if(age >18) {
//         return console.log("Hello");
//     }
//         console.log("Good bye");
// }
//
// checkAge(12);
//
//
// //Стрелочные функции
// const showMovie = (age)=>{
//     if (age<21){
//         return console.log("Hello");
//     }
//     return console.log("Bye");
// };
//
// showMovie(22);
//
// ///
// const a =()=>{
//     console.log("a");
// };
//
// const b=()=>{
//     console.log("b");
// };
//
// const c = ()=>{
//     console.log("c");
//     a();
//     b();
// }
//
// console.log(document);
// ///

const addNumber = (number) => {
    let summ = parseInt(number) + 10; // Преобразование строки в число
    console.log(summ);
};

const numberRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector("button");

buttonRef.addEventListener('click', () => {
    addNumber(numberRef.value);
});