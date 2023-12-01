//Objects
const person = {
    name: 'lina',
    age:25,
    job:'Fullstack'
}

const op = new Proxy(person,{
    get(target, prop) {
        console.log('Target', target);
        console.log('Prop', prop);
        return target[prop];
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        }else{
            throw new Error(`No ${prop} field in target`);
        }
    },
    has(target,prop){
        return ['age','name','job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...',prop);
        delete target[prop];
    }
})


const log = text => `Log: ${text}`;
const fp = new Proxy(log,{
    apply(target, thisArg, argArray) {
        console.log('Calling fn...');

        return target.apply(thisArg,argArray).toUpperCase();
    }
})


//Classes
class Person{
    constructor(name,age) {
        this.name = name;
        this.age=age;
    }
}

const PersonProxy = new Proxy(Person,{
    construct(target, args) {
        console.log('Construct...')

        return new target(...args);
    }
})

const p = new PersonProxy('Maxim',30);