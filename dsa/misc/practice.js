// //gcd by Euclidean Algorithm

// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return gcd(b, a % b);
// }
// console.log(gcd(12, 18));

// //permutation & combination

// function permutation(arr) {
//   const result = [];

//   function permuate(current, remaining) {
//     if (remaining.length === 0) {
//       result.push(current);
//       return;
//     }
//     for (let i = 0; i < remaining.length; i++) {
//       const next = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
//       permuate([...current, remaining[i]], next);
//     }
//   }
//   permuate([], arr);
//   return result;
// }

// console.log(permutation([1, 2, 3]));

// //combination

// function combination(arr, r) {
//   const result = [];

//   function combine(start, combo) {
//     if (combo.length === r) {
//       result.push([...combo]);
//       return;
//     }

//     for (let i = start; i < arr.length; i++) {
//       combo.push(arr[i]);
//       combine(i + 1, combo);
//       combo.pop();
//     }
//   }
//   combine(0, []);
//   return result;
// }
// console.log(combination([1, 2, 3], 1));

// //longest string

// function ReapetedString(str) {
//   const suffixes = [];

//   for (let i = 0; i < str.length; i++) {
//     suffixes.push(str.slice(i));
//   }
//   suffixes.sort();

//   let longest = "";

//   for (let i = 0; i < suffixes.length - 1; i++) {
//     const common = commonPrefix(suffixes[i], suffixes[i + 1]);
//     if (common.length > longest.length) {
//       longest = common;
//     }
//   }
//   return longest;
// }

// function commonPrefix(s1, s2) {
//   let i = 0;
//   while (i < s1.length && i < s2.length && s1[i] === s2[i]) {
//     i++;
//   }
//   return s1.slice(0, i);
// }
// console.log(ReapetedString("bananannanana"));
// console.log(ReapetedString("abacabdabacvdasd"));
// console.log(ReapetedString("bababababbababbabbabab"));


// //KNAPSACK PROBLEM

// // function knapsackRecursive(weights, values, capacity, n) {
// //   // Base case: no items left or capacity is 0
// //   if (n === 0 || capacity === 0) {
// //     return 0;
// //   }

// //   // If the current item's weight is more than capacity, skip it
// //   if (weights[n - 1] > capacity) {
// //     return knapsackRecursive(weights, values, capacity, n - 1);
// //   }

// //   // Choice: include or exclude current item
// //   const include = values[n - 1] + knapsackRecursive(weights, values, capacity - weights[n - 1], n - 1);
// //   const exclude = knapsackRecursive(weights, values, capacity, n - 1);

// //   return Math.max(include, exclude);
// // }

// // const weights = [2, 3, 5, 7,1,4,1];
// // const values = [10, 5, 15, 7,6,18,3];
// // const capacity = 15;
// // const n = weights.length;

// // console.log(knapsackRecursive(weights, values, capacity, n)); 


// function knapsack(weight ,  profit, capacity  , n){
//   if (n === 0 || capacity === 0 ){
//     return 0;
//   }

//   if (weight[n-1] > capacity){
//     return knapsack(weight , profit , capacity , n-1);
//   }

//   const include = profit [n-1] + knapsack(weight , profit , capacity-weight[n-1],n-1);
//   const exclude = knapsack(weight , profit ,capacity  , n-1);

//   return Math.max(include , exclude);

// }

// const weight = [2, 3, 5, 7,1,4,1];
// const profit = [10, 5, 15, 7,6,18,3];
// const capacity = 15;
// const n = weight.length;

// console.log(knapsack(weight, profit, capacity, n)); 


var isUgly = function(n) {
    var factors = [], i;
    let num = [2,3,5];

    for (i = 2; i <= n; i++) {
        while ((n % i) === 0) {
            factors.push(i);
            n /= i;
        }
    }

    return factors;
}
console.log(isUgly(6));
