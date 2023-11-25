// console.log("1");
//
// setTimeout(()=>(console.log("2"), 2000));
//
// console.log("3");
// console.log("4");

// const hello =()=>{
//     console.log("hello");
// };
//
// const timeout= setTimeout(hello,1000);
// clearTimeout(timeout);

// const hello =()=>{
//     console.log("hello");
// };
//
// const  setInt = setInterval(hello,2000);

// const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");
//
// let time = null;
//
// startBtn.addEventListener("click", ()=>{
//     time= setInterval(()=>{
//         console.log("123");
//     },1000)
// });
//
// stopBtn.addEventListener("click",(()=>{
//     clearInterval(time);
//     console.log("stop");
// }))


// const a={
//     classic(){
//         setTimeout(function (){
//             console.log(`${this}, classic in obj`)
//         })
//     },
//     arr(){
//         setTimeout(()=>{
//             console.log(`${this}, arr in obj`)
//         })
//     }
// }
// a.classic();
// a.arr();


// const data = new Date();
// console.log(data);
//
// const unixData = new Date(1000);
// console.log(unixData);


// let prom = new Promise(function (resolve,reject){
//     setTimeout(()=>resolve("resolve"),1000);
//     setTimeout(()=>resolve("reject"),1000);
// });

// prom.then(
//     (resolve)=>console.log(resolve),
//     (reject)=>console.log(reject)
// );
//
// prom.catch(alert);

// prom.finally()

function load(src){
    return new Promise(
        function(resolve, reject){
            let script = document.createElement('script');
            script.src;

            script.onload=()=>resolve(script);
            script.onerror=()=>reject(new Error(`Err ${script}`));

            document.head.append(script);
        });
    }

    let prom = load('')