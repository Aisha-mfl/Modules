// //fibonacci series
// function fibonacci(n){
//      const fib = [0,1];
//      for (let i = 2; i < n; i++){
//         fib[i] = fib[i-1] + fib[i-2];

//      }
//      return fib;

// }
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(7));

// // //big-O O(n)

//recursive fibonacci series
function fibonacci(n){
    if (n <2 ){
        return n;
    }
     return fibonacci(n-1) +fibonacci(n-2);

}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(7));
console.log(fibonacci(6));

// //big-O O(2^n) (not a good notation)

// // //factorial

// // function factorial(n){
// //     let  result = 1;
// //     for(let i = 2; i<= n;i++){
// //         result = result *  i;
// //     }
// //     return result;

// // }

// // console.log(factorial(10));
// // console.log(factorial(5));

// // //big-O O(n)

// // //recursive factorial

// function factorial(n){
//     if (n === 0 ){
//         return 1;
//     }
//     return n * factorial(n-1);

// }

// console.log(factorial(10));
// console.log(factorial(5));

// // //big-O O(n)

// //prime numbers
// // function prime(n) {
// //   if (n < 2) {
// //     return false;
// //   }
// //   for (let i = 2; i <= Math.sqrt(n); i++) {
// //     if (n % i === 0) {
// //       return false;
// //     }

// //     return true;
// //   }
// // }
// // console.log(prime(4));
// // console.log(prime(11));

// //big-O O(sqrt(n))

// //power of 2

// function powerOf2(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }
// console.log(powerOf2(4));
// console.log(powerOf2(2));
// console.log(powerOf2(5));
// console.log(powerOf2(6));

// //Big-0  Ologn

// function bitwise(n) {
//   if (n < 1) {
//     return false;
//   }
//   return (n & (n - 1)) === 0;
// }
// console.log(bitwise(2));


// var lengthOfLastWord = function(s) {
//     let len = 0;
//     let wordsArray = s.split(" ").filter(item => item !== "");

    
//     console.log(wordsArray);
//     return len-1;
// };
// lengthOfLastWord("     Hello World  ")
// var addBinary = function(a, b) {
//     let binary = {
//         'a' : [1,0],
//         'b' : [1,0]
//     }
    

//     console.log(binary);
    
// };
// addBinary(11,1);