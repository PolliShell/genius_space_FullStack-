//Замикання
function createNewSum(n) {
    return function () {
        console.log(10 * n);
    };
}

const calc = createNewSum(5);
calc();

function createNewNumber(n) {
    return function (num) {
        return n + num;
    };
}

const addFive = createNewNumber(5);
console.log(addFive(10));


function createUrl(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}

const comUrl = createUrl("com");
console.log(comUrl("google"));


//this
// function hello(){
//     console.log("hello",this);
// }
//
// hello();
//
// const user={
//     name:"Ivan",
//     city:"Odesa",
//     sayHello:hello
// };
//
// user.sayHello();


// function abc(){
//     console.log(this);
// }
//
// abc();
// document.querySelector('p').onclick=abc;


// function changeColor(){
//     console.log(this);
//     this.style.background="green";
// }
//
// document.querySelector('div').onclick=changeColor;


// function changeColor(){
//     this.style.background="green";
// }
//
// let user = document.querySelectorAll('div');
// user.forEach(function (element){
//     element.onclick=changeColor;
// })


// const showList = ()=>{
//     console.log(this);
// }
//
// showList();
// const list ={
//     names:["Ann","Olga","Nata"],
//     showList:showList,
// };
//
// list.showList();


// function hello(){
//     console.log(this)
// }
//
// const user={
//     name:"Ivan",
//     age:30,
//     hello:hello,
//     sayHelloWindow:hello.bind(window),
// };
//
// user.hello();


// const userInfo = {
//     name: "name",
//     age: 98,
//     logInfo: function (job) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is : ${this.name}`);
//         console.log(`Age is : ${this.age}`);
//         console.log(`Job is : ${job}`);
//         console.groupEnd();
//     },
// };
//
// const Vano = {
//     name: "Ivan",
//     age: 45,
// }
//
// userInfo.logInfo.call(Vano, "developer");


// const showUserInfo={
//     name:"name",
//     age:87,
//     logInfo: function (job,city) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is : ${this.name}`);
//         console.log(`Age is : ${this.age}`);
//         console.log(`Job is : ${job}`);
//         console.log(`City is : ${city}`);
//         console.groupEnd();
//     },
// };
//
//
// const Vano = {
//     name: "Ivan",
//     age: 45,
// }
//
// showUserInfo.logInfo.apply(Vano, ["developer","Lviv"]);


/////
const message = function (name, stars) {
    console.log(`${name},Welcome to ${this.hotel},stars ${stars}`);
};

const Bukovel = {hotel: "Bukovel"};
const Turist = {hotel: "Turist"};

message.call(Bukovel, "Ivan", "5")
















