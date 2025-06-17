// var n = 2;
// function square (num){
//     var ans = num * num;
//     return ans;
// }
// var square1 = square(n);
// var square2 = square(4);
// console.log(square1);
// console.log(square2);

// var x = 7;

// function getName(){
//     console.log("hello world");
// }
// getName();
// console.log(x);

// function x(){
//     console.log("hi");
// }
// function y(x){
//      x();
// }

// const radius = [1, 5, 7, 8];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function(radius){
//     return 2 * Math.PI *radius;

// }

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// Array.prototype.calculate = function(logic){
//     const output=[];
//     for (let i = 0; i < this.length;i++){
//         output.push(logic(this[i]));

//     }
//     return output;
// }
// console.log(radius.map(area));
// console.log(calculate(radius, circumference));

// map filter reduce

// function double(x){
//     return x * 2;
// }
// function triple(x){
//     return x * 3;
// }
// function binary(x){
//     return x.toString(2);
// }
// const arr = [5,1,3,2,6];

// const output = arr.map(double);
// const output1 = arr.map(triple);
// const output2 = arr.map(binary);
// console.log(output);
// console.log(output1);
// console.log(output2);

// const output3 = arr.map((x) => x.toString(2));
// console.log(output3);

// const arr = [5,1,3,2,6];
// function isOdd(x){
//     return x%2;

// }
// function isEven(x){
//     return x%2 === 0;

// }

// const output = arr.filter(isOdd);
// console.log(output);

// const output1 = arr.filter(function isEven(x){
//     return x%2 === 0;

// }
// );

// console.log(output1);

// const output4 = arr.filter((x)=> x>4);
// console.log(output4);

//  const Sum = arr.reduce(function(acc , curr){
//     acc = acc + curr;
//     return acc;
// },0);
// console.log(Sum);

// const array = [10, 2, 34, 5,6,7]
// const max = array.reduce(function (acc  , curr){
//     if (curr > acc){
//         acc = curr;
//     }
//     return acc;
// }, 0);
// console.log(max);

// const users = [
//     {firstName :"aisha", lastName:"khan", age:23},
//     {firstName :"bushra", lastName:"khan", age:26},
//     {firstName :"fatima", lastName:"khan", age:23}
// ]

// const output = users.map(x => x.firstName +" "+ x.lastName
// )
// console.log(output);

// const age = users.reduce(function(acc , curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++ acc[curr.age];
//     }
//     else{
//         acc[curr.age] =1;
//     }
//     return acc;

// }, {})
// console.log(age);

// const  people = users.filter((x) => x.age < 25).map((x) => x.firstName);
// console.log(people);

// const testing = users.reduce(function(acc , curr){
//     if(curr.age < 30){
//         acc.push(curr.firstName);
//     }
//     return acc;

// },[]);
// console.log(testing);

//real world example

// const prices = [2000, 1000, 400, 20, 10];

// const discount = prices.map((prices) => prices * 0.9);
// console.log(discount);

// const people = [
//   {
//     name: "aisha",
//     age: 20,
//   },
//   {
//     name: "fatima",
//     age: 30,
//   },
//   {
//     name: "khan",
//     age: 17,
//   },
// ];

// const users = people.filter((user) => user.age <= 30);
// console.log(users);

// const num = [100, 200, 300, 400];

// const sum = num.reduce((acc, curr) => (acc = acc + curr), 0);

// console.log("sum", sum);

//example

const listItems = [
  { item: "shirt", price: 2000, inStock: true },
  { item: "sneakers", price: 4000, inStock: false },
  { item: "watch", price: 1000, inStock: true },
  { item: "trousers", price: 2500, inStock: true },
];

// const outOfStock = listItems.filter(product => product.inStock);
// const discounts = listItems.map(product => product.price * 0.9);
// const total = listItems.reduce((sum , product) => sum + product.price , 0);

// console.log(outOfStock);
// console.log(discounts);
// console.log(total);

const total = listItems
  .filter((product) => product.inStock)
  .map((product) => product.price * 0.9)
  .reduce((sum, price) => sum + price, 0);

console.log(`${total}`);

const users = [
  { firstName: "aisha", lastName: "khan", age: 23 },
  { firstName: "bushra", lastName: "khan", age: 26 },
  { firstName: "fatima", lastName: "khan", age: 23 },
];

const upperCase = users.map((user) =>
  `${user.firstName}  ${user.lastName}`.toUpperCase()
);
console.log(upperCase);

const student = [
  { subject: "eng", score: 100 },
  { subject: "urdu", score: 80 },
  { subject: "Maths", score: 50 },
];
const totals = student.filter((subject) => subject.score > 80);
console.log(totals);

const listItem = [
  { item: "shirt", price: 2000, inStock: true },
  { item: "sneakers", price: 4000, inStock: false },
  { item: "watch", price: 1000, inStock: true },
  { item: "trousers", price: 2500, inStock: true },
];

const shoppingBill = listItem.reduce((sum, item) => sum + item.price, 0);
console.log(shoppingBill);

const books = [
  { title: "JS Basics", price: 1000, rating: 4.5 },
  { title: "HTML Mastery", price: 800, rating: 3.5 },
  { title: "React Pro", price: 1500, rating: 4.8 },
];

const List = books
  .filter((book) => book.rating >= 4)
  .map((book) => book.price * 0.9)
  .reduce((sum , price) => sum + price ,0);
console.log(List);
