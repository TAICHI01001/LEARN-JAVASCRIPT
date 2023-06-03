// document.getElementById("demo").innerHTML = "Hello world!";

// document.write("Hello world!");

// window.alert("What is your name!");

// alert("What is your nickname!");

// console.log("Hello world!");

// console.log(5+6);

// let a, b, c;
// a = 5;
// b = 6;
// c = a + b;
// document.getElementById("demo1").innerHTML = c;

// console.log("Hello world!");
// console.log(typeof "TaiChi");
// console.log(typeof 48);
// console.log(typeof false);

// const myVariable = "Hello World!";

// console.log(myVariable.length);

// console.log("My name is TaiChi".length);

// const myLet = "Hello World!";

// console.log(myLet.charAt(0));

// const myLet = "Hello World!";

// console.log(myLet.indexOf("Hel"));

// const myVar = "Mathematics";

// console.log(myVar.lastIndexOf("ath"));

// const myVar = "Mathematics";

// console.log(myVar.slice(0,11));

// const myVar = "Mathematics";

// console.log(myVar.toLowerCase());

// const myVar = "Mathematics";

// console.log(myVar.includes("Mat"));

// const myVar = "Mathematics";

// console.log(myVar.split(""));

// console.log("Guy,Mai,Man".split(","));

// console.log("Hello today is the good day".split(" "));

// const myNumber= 42;

// console.log(myNumber);

// const myFloat = 42.0;

// const myStrings = "24";

// console.log(myStrings);
// console.log(myFloat);

// console.log(myNumber === myFloat);
// console.log(myNumber === myStrings);

// console.log(myStrings + 5);

// console.log(Number(myStrings)===myNumber);

// console.log(Number("TaiChi"));

// console.log(Number(undefined));

// console.log(Number(true));
// console.log(Number(false));

// const myNumber = 42;
// const myFloat = 42.01545;
// const myStrings = "42.123abc";

// console.log(Number.isInteger(myNumber));
// console.log(Number.isInteger(myFloat));
// console.log(Number.isInteger(myStrings));

// console.log(Number.parseFloat(myNumber));
// console.log(Number.parseFloat(myFloat));
// console.log(Number.parseFloat(myStrings));

// console.log(myFloat.toFixed(5));

// console.log(Number.parseInt(myFloat));

// const titleEl=document.getElementById('title');
// const contentEl=document.querySelector('.content');
// const box=document.querySelector('.light');

// function displayText(){
//   // titleEl.style.color="#0f0";
//   // titleEl.style.background="#333";
//   // titleEl.style.fontSize ="30px";

//   // contentEl.setAttribute('class','kong');
//   // box.setAttribute('class','dark');
// }

// function lightMode(){
//   box.setAttribute('class','light');
// }
// function darkMode(){
//   box.setAttribute('class','dark');
// }

// const textAll = document.querySelectorAll('p');

// let massage = textAll[0].innerHTML;
// let title = textAll[1].innerHTML;
// let text = textAll[2].innerHTML;

// console.log(massage);
// console.log(title);
// console.log(text);

// console.log(textAll);
// console.log(textAll[0]);
// console.log(textAll[1]);
// console.log(textAll[2]);
// console.log(textAll.innerHTML);
// console.log(textAll[0].innerHTML);
// console.log(textAll[1].innerHTML);
// console.log(textAll[2].innerHTML);

// const menu = document.getElementById("menu");

// const item = document.createElement("li");

// item.innerHTML = "Item";

// menu.appendChild(item);

// let count =1;
// function addITem() {
//   const item = document.createElement("li");

//   item.innerHTML = "Item"+(count++);

//   menu.appendChild(item);
// }

// const menu = document.getElementById("menu");

// const item = document.getElementById("item-3");

// const itemB =document.getElementById('item-2');


// const newItem = document.createElement('li');

// newItem.innerHTML ='X';

// menu.replaceChild(newItem,itemB);
// menu.removeChild(item);

// function delateItem() {
//   menu.removeChild(item);
// }

// function replaceItem(){
//   menu.replaceChild(newItem,itemB);
// }

// const box = document.getElementById('box');

// let meme;

// function addDarkMode() {
//   box.classList.add('darkMode');
// }

// function removeDarkMode() {
//   box.classList.remove('darkMode');
// }

// function switchDarkMode() {
//   box.classList.toggle('darkMode');
//   meme = box.classList.contains('darkMode');
//   console.log(meme);
//   if (meme) {
//     box.style.color = "#0f0";
//   } else {
//     box.style.color = "#f00";
//   }
// }

// function welcome() {
//   alert("Welcome to visited my company!");
// }

// function highlight(obj) {
//   obj.style.background = "#0f0";
// }

// function endhighlight(obj) {
//   obj.style.background = "#f0f";
// }

// function getMenu() {
//   const menu = document.getElementById('menu');
//   const display = document.getElementById('display');
//   console.log(menu.value.toLowerCase());

//   display.innerText = menu.value;
// }

// function highlight(obj) {
//   obj.style.background = 'green';
// }
// function endhighlight(obj) {
//   obj.style.background = 'red';
// }

// const menu = document.getElementById('menu');

// const display = document.getElementById('display');

// const btn = document.getElementById('btn');

// btn.addEventListener('click', showWelcome);

// menu.addEventListener('change', getMenu);

// function getMenu() {
//   display.innerText = menu.value;
//   // console.log(menu.value);
// }

// function showWelcome() {
//   alert("Welcome to sign in my WebSite")
// }
