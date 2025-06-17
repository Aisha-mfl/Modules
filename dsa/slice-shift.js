//slice(start , end)
//gives shallow copy of array without modifying the original array

const num = [1,4,5,6,7,88,4];
const sliced = num.slice(1 , 4)
console.log(sliced);
console.log(num);



const nums = [1,4,5,6,7,88,4];
const result = nums.shift(1 ,4);

console.log(result);
console.log(nums);