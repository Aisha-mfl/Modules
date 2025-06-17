const obj ={
    name:"bruce",
    age:19,
    "key-three":true,
    sayMyName:function(){
        console.log(this.name);
    }
}
console.log(obj);

obj.hobby="football";
//to retrieve
console.log(obj.name);
//primarily use when obj key use spaces or hyphen
console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj);

//delete

delete obj.hobby
console.log(obj);
obj.sayMyName();

//object.keys() .values .entries

//entries return an array of key/value in object

const person ={
    name:"bruce",
    age:19,
}
let text = Object.entries(person);
console.log(text); 

const maps = new Map(Object.entries(person));
console.log(maps);
//values

const persons = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  
  let texts = Object.values(persons);
  console.log(texts);

