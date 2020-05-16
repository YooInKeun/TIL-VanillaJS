// createElement
const dom = document.createElement("div");
dom.innerText = "inner text";
dom.innerHTML += "\n append inner html";
console.log("div tag:", dom);

// appendChild
const dom2 = document.createElement("span");
dom.appendChild(dom2);

// setAttribute
dom.setAttribute("class", "btn btn-success");
dom2.setAttribute("id", "title");

// getAttribute
const className = dom.getAttribute("class");
console.log("get className:", className);

// parentElement(부모가 갖고 있는자식까지 다 가져옴)
const parentElement = dom2.parentElement;
console.log("get parentElement:", parentElement);

// firstElementChild
const firstElementChild = dom.firstElementChild;
console.log("get firstElementChild:", firstElementChild);

// lastElementChild
const dom3 = document.createElement("a");
dom3.innerHTML = "anchor tag";
dom.appendChild(dom3);
const lastElementChild = dom.lastElementChild;
console.log("get lastElementChild:", lastElementChild);

// createDocumentFragment()
let fruits = ["Apple", "Orange", "Banana", "Melon"];
const fragment = new DocumentFragment();
fruits.forEach((fruit) => {
  let li = document.createElement("li");
  li.innerHTML = fruit;
  fragment.appendChild(li);
});

// DOMParser
const template = `<div>Hello World</div>`;
const domParser = new DOMParser();
// const body = domParser.parseFromString(template, "text/html");
const body = domParser.parseFromString(template, "text/xml");
console.log(body.documentElement);
dom.appendChild(body.documentElement);

// Array include
let array = ["string", 3, true];
console.log(array.includes("string"));
console.log(array.includes(true));

// contains(reference를 통해 알아냄)
console.log(dom.contains(dom2));

// map
const arr = new Array(1, 1, 1, 1, 1).map((item) => {
  return item + 1;
});

const arr2 = new Array(1, 1, 1, 1, 1).map(function tmpFunction(item) {
  return item + 1;
});
console.log(arr);
console.log(arr2);

// querySelector
const title = document.getElementById("title");
const title2 = document.querySelector("#title");
console.log(title2);

// console.dir(title(DOM)이 가진 모든 Property를 볼 수 있음)
console.dir(title);

// Style with JS
title.style.color = "cornflowerblue";

// Change Document Title
document.title = "title changed";

// addEventListener
const handleResize = (event) => {
  console.log(event);
  console.log("I have been resized");
};

window.addEventListener("resize", handleResize);

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
  // if (title.style.color === "cornflowerblue") {
  //   title.style.color = "black";
  // } else {
  //   title.style.color = "cornflowerblue";
  // }
}

title.addEventListener("click", handleClick);
// document.getElementById("title").addEventListener("click", handleClick);
// document.querySelector("#title").addEventListener("click", () => {
//   if (title.style.color === "blue") {
//     title.style.color = "black";
//   } else {
//     title.style.color = "blue";
//   }
// });

// Make Clock
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const init = () => {
  getTime();
  setInterval(getTime, 1000);
};

init();
