// // const now = new Date();

// // // console.log(now);

// // // const specificDate = new Date('2025-08-02');
// // // console.log(specificDate );
// // console.log(now.getDate());
// // console.log(now.getDay());
// // console.log(now.toDateString());

// //arrays

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr[0]);

// arr.unshift(3);
// console.log(arr);

// arr.shift(3);
// console.log(arr);

// arr.push(13);
// console.log(arr);

// arr.pop(13);
// console.log(arr);

// arr.splice(2, 0, 60);
// console.log(arr);

// const songs = ["unstoppable", "pretty", "greatest"];

// for (const playlist in songs) {
//   console.log(playlist);
// }

// function playlist(index) {
//   console.log("playing", songs[index]);
// }
// playlist(0);
// songs.push("pal pal");
// console.log(songs);

// const week = ["mon", "tues", "wed", "thurs", "fri", "sat"];

// week.forEach((day) => {
//   console.log(`plan task for ${day}`);
// });

// //objects

// const products = {
//   name: "laptop",
//   price: 999,
//   brand: "TechPro",
//   features: ["Lightweight", "Fast", "Long Battery"],
// };

// for (let key in products) {
//   console.log(`${key}: ${products[key]}`);
// }

// for (const [key, values] of Object.entries(products)) {
//   console.log(`${key} => ${values}`);
// }

// Object.values(products).forEach((values) => {
//   console.log(values);
// });
// const map = new Map(Object.entries(products));
// console.log(map);

// const Map1 = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["3", 3],
// ]);
// for (const [key, values] of Map1) {
//   console.log(`${key}: ${values}`);
// }

// const array = [1, 2, 3, 4, 5, 6, 7];
// // array[7] = 8;
// // console.log(array);

// const insert = (index, value) => {
//   for (let i = array.length; i >= index; i--) {
//     array[i] = array[i - 1];
//   }
//   array[index] = value;
// };

// console.log(insert(0, 0));
// console.log(array);

// //fibonacci

// // function fibonacci(n) {
// //   let fib = [0, 1];
// //   for (let i = 2; i < n; i++) {
// //     fib[i] = fib[i - 1] + fib[i - 2];
// //   }
// //   return fib;
// // }
// // console.log(fibonacci(3));

// // function fibonacci(n){
// //   if(n < 2)
// //   {
// //     return n;
// //   }
// //   return fibonacci(n-1) + fibonacci(n-2);
// // }
// // console.log(fibonacci(4));

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(factorial(4));

// function recursive(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursive(n-1);
// }

// console.log(recursive(4));

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     let values = {
//         "I" :1,
//         "V" :5,
//         "X" :10,
//         "L" :50,
//         "C" :100,
//         "D" :500,
//         "M" :1000,

//     };
//     let total = 0;
//     for(let i =0; i < s.length;i++){
//         let curr = values[s[i]];
//         let next = values[s[i+1]];

//         if(next > curr){
//         total += (next - curr);
//         i++;
//         }
//         else{
//             total+=curr;
//         }
//     }
//     return total;

// // }

//    /**
//  * @param {string} s
//  * @return {boolean}
//  */
//    var isHappy = function(n) {
//     let digits = n.split('');
//     console.log("hi",digits);
//     if( n === 1 ){
//         return true;
//     }
//     while(digits === 1){
//         if(digits > 0){
//             digits = unsh

//     }

//    }
// };
// isHappy('19')

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (input) {
  let Alpha = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  

  for (let [key, value] of Object.entries(Alpha)) {
    if (input <= 26 && input === value) {
      console.log(key);
    }
    else if(){
      console.log()

    }
  }
};
convertToTitle(11);
