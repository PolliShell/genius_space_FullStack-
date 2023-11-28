const person = Object.create(
    {
        calculateAge(){
            console.log('Age: ', new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Lina',
            enumerable: true,
            writable: true
        },
        birthYear: {
            value: 1993,
            enumerable: true,
            writable: true,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear;
            },
            set(value) {
                console.log('Set age', value);
            }
        }
    })

person.name = 'Lena';

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key]);
    }
}