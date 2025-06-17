//using a global variable
// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("Button clicked", ++count);
// });
//using closure function

// function increment() {
//     let count=0
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button clicked", ++count);
//   });
// }
// increment();

// console.log("start");

// setTimeout(function cb() {
//   console.log("cb timeout");
// }, 5000);

// fetch("https://netflix.com").then(function cbF() {
//   console.log("netflix");
// });
// console.log("end");

// console.log("start");

// setTimeout(function cb() {
//   console.log("cb timeout");
// }, 0);

// console.log("end");

// let date = new Date().getTime();
// let DateEnd = date;
// while (DateEnd < date + 10000) {
//   DateEnd = new Date().getTime();
// }
// console.log("while expire");

//example of closure

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
  };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log("Counter", counter.getCount());

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(36));
console.log(triple(8));

function clickCounter(buttonId) {
  let count = 0;

  document.getElementById(buttonId).addEventListener("click", function () {
    count++;
    console.log(`button clicked ${count} times`);
  });
}
clickCounter("clickMe");


