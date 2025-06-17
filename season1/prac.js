// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

// let a = 10;
// console.log(a);
// var b = 100;
// var b = 10;
// console.log(b);

// const x = 1000;

// x= 2000;

// let b = 100;
// {
//     var y = 1;
//     let b = 10;
//     const v = 200;
//     console.log(y);
//     console.log(b);
//     console.log(v);

// }
// console.log(b);

// function z(){
//     var w = 20;
//     function x(){
//         var a = 30;
//         //y is remember there lexical scope
//         function y(){

//             console.log(w,a);
//         }
//         y();

//     }
//     x();
// }
// z();

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);

//     }, 3000);
//     console.log("hello");
// }
// console.log("world");
// x();

// function x(){
//     for(var i=1;i<=5;i++ ){
//         function z(x){
//             setTimeout(function(){
//                 console.log(x);
//             }, x * 1000);
//             console.log("hello world");
//         }
//         z(i);
//     }
// }
// x();

// function counter(){
//     var count = 0; //Data Hiding
//     return function increment(){
//         count ++;
//         console.log("count",count);
//     }
// }
// var counter1 = counter();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();

// function Counter() {
//   var count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }
// var Counter1 = new Counter();
// Counter1.incrementCounter();
// Counter1.decrementCounter();
// Counter1.decrementCounter();

//function statement function declaration
// function a() {
//   console.log("hi");
// }

// //function  expression , function acts like a value
// var b = function () {
//   console.log("hello");
// };

//anonymous function that does not know their identity, it used when we need values
//parameters and arguments
//first class function

// var b = function () {
//   return function () {};
// };
// console.log(b());
// //arrow function

// //callback function in js
// //we can   do async with call back function

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }
// //callback function
// x(function y() {
//   console.log("y");
// });

// function getUserData(callback){
//   setTimeout(()=>
//   {
//     const userData = {"name":"aisha","age":23};
//     callback(userData);
//   },2000);
// }

// function display(data){
//   console.log(`name:  ${data.name} age : ${data.age}`);
// }
// getUserData(display);

//real world example

function bank_account(balance) {
  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`deposited: ${amount}`, `new balance: ${balance}`);
    },
    withdraw: function (amount) {
      if (balance >= amount) {
        balance -= amount;
        console.log(`withdraw : ${amount}`, `new balance: ${balance}`);
      } else {
        console.log("insufficient balance");
      }
    },
    getBalance: function () {
      console.log(`balance: ${balance}`);
    },
  };
}
const account = bank_account(5000);
account.getBalance();
account.withdraw(1000);
account.deposit(2000);

