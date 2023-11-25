// let symbol = Symbol('mySymbol');
// let symbol2 = Symbol('mySymbol');
// console.log(symbol===symbol2);

// let symbol = Symbol.for('mySymbol');
// let symbol2 = Symbol.for('mySymbol');
// console.log(symbol===symbol2);


let person = {
    name: 'Jack',
    age: 20,
    [Symbol.for('password')]: 'Jack20'
}

