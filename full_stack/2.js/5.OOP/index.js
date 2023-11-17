//Процедурне програмування

// const summ = 20000;
// const month = 12;
// const p = 1000;
//
// const credit = (sum,date,p)=>{
//     return sum+p*date;
// }
// console.log(credit(summ,month,p));


//OOP
// const credit = {
//     summ: 20000,
//     month: 12,
//     p: 1000,
//     result(){
//         return this.summ+this.p*this.month;
//     }
// };
// console.log(credit.result());


// class Bank {
//     static type = "Private";
//     constructor(options) {
//         this.summ = options.summ;
//         this.month = options.month;
//         this.p = options.p;
//     }
//     credit() {
//         return "I am Private";
//     }
// }
//
//
// // const userBank = new Bank({
// //     summ:3000,
// //     month:5,
// //     p:500,
// // });
//
// // console.log(userBank.credit())
//
// class NewBank extends Bank {
//     constructor(options) {
//         super(options);
//         this.card = options.card;
//     }
//     credit() {
//         return "I am Aval";
//     }
// }
//
// const aval = new NewBank({
//     summ: 30000,
//     month: 5,
//     p: 500,
//     card: true,
// });
//
// console.log(aval.credit());


// class User{
//     constructor(props) {
//         this.name=props.name
//     }
//     firstName="";
//     lastName="";
//     age=""
//     city="";
//
//     set name(newName){
//         const nameRow=newName.split(" ");
//         this.firstName=nameRow[0];
//         this.lastName=nameRow[1];
//     }
//
//     get name(){
//         return `First name: ${this.firstName} last name: ${this.lastName}`
//     }
// }
//
// const Kris = new User({
//     name:"Kristina Malitowska",
// });
//
//
// console.log(Kris);


// const a = [1,2,3];
// console.log(a);

// const a={
//     x:1,
//     y:2,
// };
//
// const b=Object.create(a);
// console.log(b.x);

const Manager = function (name, sales) {
    this.name = name;
    this.sales = sales;

}

const ann = new Manager("Anna", 5);
const ivan = new Manager("Ivan", 10);

Manager.prototype.sale = function () {
    this.sales += 1;
}

console.log(ann.sales);
ann.sale();
console.log(ann.sales);



