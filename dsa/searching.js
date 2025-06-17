// function LinearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(LinearSearch([-5, 2, 10, 4, 6], 10));
// console.log(LinearSearch([-5, 2, 10, 4, 6], 2));

//Big-o O(n)

//Binary Search
function BinarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    console.log("middle index", middleIndex);
    if (target === arr[middleIndex]) {
      // console.log(middleIndex);
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
      console.log("rightIndex", rightIndex);
    } else {
      leftIndex = middleIndex + 1;
      console.log("left index", leftIndex);
    }
  }
  return -1;
}
console.log(BinarySearch([-5, 2, 4, 6, 10], 10));
console.log(BinarySearch([1, 2, 3, 4, 5], 3));

//Big-o O(logn)

//recursive Binary

function RecursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target ,leftIndex , rightIndex){
  if (leftIndex > rightIndex){
    return -1;
  }
  let middleIndex = Math.floor((leftIndex +rightIndex) /2);
  if(target === arr[middleIndex]){
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    search(arr , target , leftIndex , middleIndex -1);
  }
  else
  {
    search(arr , target , middleIndex , middleIndex -1)
  }
}
