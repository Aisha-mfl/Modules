//arrays 

const arr = [1,2,3,4,5 ,"aisha"];
console.log(arr[0]);

//to iterate we use for loop
for (const item of arr){
    console.log(item);
}
//.........................................................//
//add item in the beginning   
arr.unshift(0);
console.log(arr);
//remove at the beginning 
arr.shift(0);
console.log(arr);
//to add an item in the end of an array we can use push
arr.push(4);
console.log(arr[0]);
//remove at the end
arr.pop(3);
console.log(arr);

//map , filter , reduce , concat , slice and splice are array methods

//concat -- merge and returns a new one don't modify the original array

const a =[1,2,3,4];
const b =[5,6,7,8,9];
const c = a.concat(b);
console.log(c);
console.log(a);

// splice - change the original array with replacing/removing/adding elements

const A = [10,20,20,30,40];
A.splice(1,1);
console.log(A);


A.splice(2,0,60);
console.log(A);
   

