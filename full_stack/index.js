// const obj = {
//     viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
//     polina: ['grape', 'orange', 'apple', 'grape', 'banana'],
// };
//
//
// function calc() {
//     const result = {};
//     for(const key in obj){
//         if (Object.hasOwnProperty.call(obj,key)){
//             result[key]=obj[key].reduce((count, fruit)=>{
//                 count[fruit]=(count[fruit]||0)+1;
//                 return count;
//             },{})
//         }
//     }
//     return result;
// }
//
// console.log(calc());
//result of calc method should be equal to
// {
//     viktor: {
//         apple: 2,
//         grape: 1,
//         orange: 1,
//         banana: 1,
//     },
//     kate: {
//         apple: 1,
//         grape: 2,
//         orange: 1,
//         banana: 1,
//     },
// }


import mongoose from "mongoose";

const str = 'Hello team. Today I bought a lot of  :apple::apple::apple:and I would like to share them with you.  <@Viktor/><@kate/>received:apple::apple::apple:, <@max/>:apple:<@Kate/>:apple:<@Max />:apple:<@Kate />:apple: <@viktor /><@Max /><@Kate /> also got rest:apple::apple:. <@Viktor /><@Kate /><@Max /> Thank you all. <@Max /> you are cool guy. <@Kate /> do not use :apple, apple, apple: and : apple :'

// function countFruitsByUser(str){
//     const fruitCounts = {};
//     const regax = /<@([a-zA-Z]+) \/?>:aple:/g;
//
//     let match;
//     while ((match=regax.exec(str))!==null){
//         const user = match[1];
//         fruitCounts[user]=(fruitCounts[user]||0)+1;
//     }
//     return fruitCounts;
// }

// function countFruitsByUser(str){
//     const userNames = [];
//     const regax = /<@([a-zA-Z]+) \/?>:aple:/g;
//     let match;
//     while ((match=regax.exec(str))!==null){
//         const userName = match[1];
//         userNames.push(userNames);
//     }
//     return userNames.reduce((fruitCounts,userNames)=>{
//         fruitCounts[userNames]=(fruitCounts[userNames]||0)+1;
//         return fruitCounts;
//     },{});
// }

//
// const userFruitCounts = countFruitsByUser(str);
// console.log(userFruitCounts);
// expected result
// {
//    viktor: 5,
//    kate: 7,
//    max: 4
//}




// mongoose.connect(DB_HOST)
//     .then(() => app.listen(PORT))
//     .catch(error => {
//         console.log(error.message);
//         process.exit(1);
//     });


const text = 'Mike received $159,34. Lisa received $95,59. Kate received $140,12. Platform deposit $950,81. How much money is left on the platform?';

function countPlatformBalance(message) {
    let platformBalance = 0;
   for(let i = 0; i< message.length;i++){
       if(message.startsWith('Platform deposit $',i)){
           let j = i+ 'Platform deposit $'.length;
           let amount = 0;

           while (j<message.length && (/[0-9$,]/).test(message[j])){
               if(/[0-9]/.test(message[j])){
                   amount = amount*10+parseInt(message[j]);
               }j++;
           }
           platformBalance+=amount/100;
       }
   }
   return platformBalance.toFixed(2);
}

console.log(countPlatformBalance(text))

// expected result
// 950.81 - 140.12 - 95.59 - 159.34 = 555.76

















