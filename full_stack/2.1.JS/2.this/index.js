function hello() {
    console.log('Hello', this);
}

const person = {
    name: "Lina",
    age: 25,
    seyHello: hello,
    seyHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '0679034');
// fnLenaInfoLog('Frontend', '0679034')

person.logInfo.call(lena, 'Frontend', '0679034');
person.logInfo.apply(lena, ['Frontend', '0679034']);

const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n;
    })
}

array.multBy(20);
