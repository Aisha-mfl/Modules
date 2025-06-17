const set = new Set([1, 2, 3, 4]);
// adding value in set
set.add(5);
//ignore duplicate value
set.add(5);
//check the value exist in set
console.log("value", set.has(5));
//delete
set.delete(3);
//check item
console.log("size", set.size);
//to clear all values
set.clear();
for (const item of set) {
  console.log(item);
}

// -----------------------------MAPS------------------------

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
//to add a in map we can use set method
map.set('d',4 );
//item check
console.log("item",map.has('a'));
//delete
map.delete('a');
console.log(map.size)
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
