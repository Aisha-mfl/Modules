function cartesian(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length;j++){
        result.push([arr1[i],arr2[j]]);
    }
  }
  return result;
}
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesian(arr1, arr2));
//lengths are dependant m is dependent on n, if array length are same it will be big-0(n^2)
//big-o 0(mn)

let prefix = "flow"
let text = "flow"


console.log(text.startsWith(prefix));
prefix = prefix.slice(0, -1);
console.log(prefix);






