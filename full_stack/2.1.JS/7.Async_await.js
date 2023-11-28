// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }
//
//  const url = 'https://jsonplaceholder.typicode.com/todos/1';
//
// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => {
//         console.log('Data', data);
//     })
//     .catch(e => console.error(e));


// async function fetchAsyncTodos(){
//     try {
//         await delay(2000)
//         const response =  await fetch(url);
//         const data  = await response.json();
//         console.log('Data: ',data)
//     } catch (e){
//         console.error(e);
//     }
//
// }

// function sum(x,y){
//     return new Promise(function (resolve){
//         const result = x+y;
//         resolve(result);
//     })
// }
//
// async function calculate(){
//     const value = await sum(5,4);
//     console.log(`Sum: ${value}`)
// }

function yourName(name, lastName) {
    return new Promise((resolve, reject) => {
        if (typeof name === 'string' && typeof lastName === 'string') {
            resolve(`Your name: ${name}, your lastname: ${lastName}`);
        } else {
            reject(new Error('Invalid input. Please provide valid strings for name and lastName.'));
        }
    });
}

async function print() {
    try {
        const value = await yourName('Lina', 'Shell');
        console.log(value);
    } catch (error) {
        console.error(error.message);
    }
}

print();