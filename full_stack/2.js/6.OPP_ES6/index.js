//
// class CircleBox {
// constructor(selector) {
//     this.$el = document.querySelector(selector);
// }
//     hide() {
//         // Add logic to hide the element
//         this.$el.style.display = 'none';
//     }
//
//     show() {
//         // Add logic to show the element
//         this.$el.style.display = 'block';
//     }
// }
// class CircleItem extends CircleBox {
//     constructor(options) {
//         super(options.selector);
//
//         if (!options.size || !options.color) {
//             throw new Error("Size and color options are required");
//         }
//
//         this.$el.style.width = options.size + "px";
//         this.$el.style.height = options.size + "px";
//         this.$el.style.borderRadius = "50%";
//         this.$el.style.background = options.color;
//     }
// }
//
// const CircleRed = new CircleItem({
//     selector: ".circleRed",
//     color: "red",
//     size: 50,
// });


//////

// function Car(name, color) {
//     this.name = name;
//     this.color = color;
// }
//
// const BMW = new Car("BMW", "red");
// const opel = new Car("opel", "green");
//
// Car.prototype.message = function () {
//     console.log(`${this.name} is ${this.color} color`)
// }
//
// Car.prototype.start = function (){
//     console.log(`${this.name} is start!!!`)
// }



let message={
    messageHello(){
        console.log(`Hello,${this.name}`);
    },
    messageBye(){
        console.log(`Bye, ${this.name}`);
    }
}

class User{
    constructor(name) {
        this.name=name;
    }
}

Object.assign(User.prototype,message);

new User("Ivan").messageHello();





















