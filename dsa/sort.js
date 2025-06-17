// //Bubble sort

// // function bubbleSort(arr) {
// //   let swapped;
// //   do {
// //     swapped = false;
// //     for (let i = 0; i < arr.length - 1; i++) {
// //       if (arr[i] > arr[i + 1]) {
// //         let temp = arr[i];
// //         arr[i] = arr[i + 1];
// //         arr[i + 1] = temp;
// //         swapped = true;
// //       }
// //     }
// //   } while (swapped);
// // }
// // const arr = [6, 5, 4, 3, 2, 1];
// // bubbleSort(arr);
// // console.log(arr);

// // //big -o O(n^2);

// // //insertion sorted

// // function InsertionSort(array) {
// //   for (let i = 1; i < array.length; i++) {
// //     let numToInsert = array[i];
// //     //j is sorted element
// //     let j = i - 1;
// //     while (j >= 0 && array[j] > numToInsert) {
// //       array[j + 1] = array[j];
// //       j = j - 1;
// //     }

// //     array[j + 1] = numToInsert;
// //   }
// // }

// // const array = [-6, 20, 8, -2, 4];
// // InsertionSort(array);
// // console.log(array);

// //big -o O(n^2);

// //Quick Sort

// // function QuickSort(arr){
// //     if(arr.length< 2){
// //         return arr;
// //     }
// //     //last item as a pivot
// //     let pivot = arr[arr.length -1];
// //     let left=[];
// //     let right=[];

// //     for(let i = 0; i<arr.length-1;i++){
// //         if (arr[i] < pivot){
// //             left.push(arr[i]);
// //         }
// //         else{
// //             right.push(arr[i]);
// //         }
// //     }
// //     //... (spread in array)
// //     return [...QuickSort(left),pivot ,...QuickSort(right)]

// // }
// // const arr = [-6, 20, 8, -2, 4];
// // console.log(QuickSort(arr));

// //big-o (worst case)- O(n^2)
// //average case O(nlogn)

// //Merge Sort
// // function MergeSort(arr) {
// //   if (arr.length < 2) {
// //     return arr;
// //   }
// //   const mid = Math.floor(arr.length / 2);
// //   const leftArr = arr.slice(0, mid);
// //   const rightArr = arr.slice(mid);
// //   return merge(MergeSort(leftArr), MergeSort(rightArr));
// // }
// // function merge(leftArr, rightArr) {
// //   const sortedArr = [];
// //   while (leftArr.length && rightArr.length) {
// //     if (leftArr[0] <= rightArr[0]) {
// //       sortedArr.push(leftArr.shift());
// //     } else {
// //       sortedArr.push(rightArr.shift());
// //     }
// //   }
// //   return [...sortedArr, ...leftArr, ...rightArr];
// // }
// // //const arr = [-6, 20, 8, -2, 4];
// // console.log(MergeSort(arr));

// //big-o 0(nlogn) best algorithm

// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     console.log('list1.length',leftArr.length);
//     console.log('list2.length',rightArr.length);
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   console.log('abc: ',leftArr.length && rightArr.length);
  
//   return [...sortedArr, ...leftArr, ...rightArr];
// }
// const leftArr = [1,2,4];
// const rightArr = [1,3,4];
// console.log(merge(leftArr , rightArr));



// var mergeTwoLists = function(list1, list2) {
//   const sortedArr = [];
//   while(list1.length && list2.length){
//     console.log('list1.length',list1.length);
//     console.log('list2.length',list2.length);
    
//       if(list1[0] === list2[0]){
//           sortedArr.push(list1.shift());
          
//       }
//       else{
//           sortedArr.push(list2.shift());
//       }
//   }
//   console.log('abc: ',list1.length && list2.length);
  
//   return [...sortedArr, ...list1, ...list2];
  
// };
// const list1 = [1,2,4];
// const list2 = [1,3,4];
// console.log(merge(list1 , list2));

function mergeTwoLists (list1, list2) {
  const sortedArr = [];
  while(list1.length && list2.length){
      if(list1[0] <= list2[0]){
          sortedArr.push(list1.shift());
          
      }
      else{
          sortedArr.push(list2.shift());
      }
  }
  return sortedArr;
  
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));
