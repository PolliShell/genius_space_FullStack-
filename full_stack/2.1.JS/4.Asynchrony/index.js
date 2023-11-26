// выполнится первым
console.log('First');

setTimeout(() => {
    // выполнится третьим, спустя 2 секунды
    console.log('Second');
}, 2000);

// выполнится вторым
console.log('Third');


function sayHello() {
    console.log('Hello!');
}

const timerId = setTimeout(sayHello, 5000);

clearTimeout(timerId);