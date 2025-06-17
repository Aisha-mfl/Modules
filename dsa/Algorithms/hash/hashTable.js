const hashTable = (Size) => {
  let table = Array(Size);

  const hash = (key) => {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % Size;
  };
  // write now it giving loss of data
  // const set = (key, value) => {
  //   const index = hash(key);
  //   table[index] = value;
  // };

  const set = (key, value) => {
    const index = hash(key);
    const bucket = table[index];
    if (!bucket) {
      table[index] = [[key, value]];
    } else {
      //key store at index 0 
      const sameKey = bucket.find(item => item[0] === key);
      //if item exist we update its value
      if (sameKey) {
        //value store at index 1
        sameKey[1] = value;
      }
      //if not we push key,value pair
      else {
        bucket.push([key, value]);
      }
    }
  };
  //now we can use collisions
  const get = (key) => {
    const index = hash(key);
    // return table[index];
    const bucket = table[index];
    if(bucket){
      const sameKey = bucket.find(item => item[0]===key);
      if(sameKey){
        return sameKey[1];
      }
      return undefined
    }
  };
  const remove = (key) => {
    const index = hash(key);
    // table[index] = undefined;
    const bucket = table[index];
    if(bucket){
      const sameKey = bucket.find(item=>item[0] === key);
      if(sameKey){
        //array.splice to remove the item form bucket
        bucket.splice(bucket.indexOf(sameKey),1)
      }
    }
  };
  const display = () => {
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        console.log(i, table[i]);
      }
    }
  };
  return {
    set,
    get,
    remove,
    display,
  };
};

const table = hashTable(50);
table.set("name", "bruce");
table.set("age", 29);
table.display();
console.log(table.get("name"));

table.set("name", "clark");
table.set("mane", "diana");
// table.remove("name");
table.display();

