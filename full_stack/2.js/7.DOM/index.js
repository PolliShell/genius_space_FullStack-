// let elem = document.getElementById("elem");
// elem.style.background="green";
//
// let elements=document.querySelectorAll('ul>li:last-child');
//
// for (element of elements){
//     console.log(element);
// }

// let element = document.getElementsByTagName("div");
// console.log(element);

// let textHidden = document.getElementById("textHidden");
// textHidden.hidden=true;

// let message = document.getElementById("message");
//
// console.log(message.value);

// let text = document.querySelector('.text-message');
// console.log(text.textContent);


// let text = document.querySelector('.text-message');
// text.textContent="Hello, Olga!";

// let btn = document.querySelector(".button");
// btn.style.backgroundColor="red";


// let text = document.querySelector("#p_text");
// console.log(text.classList)
//
// text.classList.remove("red");

const item = document.createElement("a");
item.href="#";
item.classList.add("btn");
item.textContent="3";

const nav = document.querySelector(".naw");
nav.appendChild(item);

const heading = document.createElement("h1");
heading.textContent="hello";

const container = document.querySelector(".container");
container.insertBefore(heading,nav);