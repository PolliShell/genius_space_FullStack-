let person = {
    name: 'Jack',
    age: 20,
    address: {
        city: "Cherkassy"
    }
}

// let { name, age } = person;

// let { name = 'Max', age = 20 } = {};

// let { name: personName, age: personAge } = person;

// let { address: { city } } = person;

function getData({ name, age }) {
    console.log(name, age);

    return { name, age };
}
let { name, age } = getData(person);


