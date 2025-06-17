// "use strict";
// console.log(this);

// function x (){
//     //the value depands on strict / non - strict mode
//     console.log(this);
// }

// //this substitution
// //if the value of this key word undefined or null
// //this keyword will be replaced with globalObject
// //only in strict mode
// x();
// window.x();

// //this inside a object method

// const student =  {
//     name:"aisha",
//     printName:function(){
//         console.log(this.name);
//     }
// }
// student.printName();

// //sharing method
// const student2={
//     name:"khan",
//     //we want to use printName from above method
//     //call apply bind used tp set the value inside
//     //trying to override the value

// }
// student.printName.call(student2);

// //using this inside arrow object

// const obj ={
//     a:10,
//     x:()=>
//     {
//         //in globalObject
//         //enclosing lexical environment
//         console.log(this);
//     },
// };
// obj.x();

// const obj2 ={
//     a:20,
//     x:function ()
//     {
//         //enclosing lexical context
//         const y = () =>{
//             console.log(this);
//         };
//         y();

//     },
// };
// obj2.x();

//call , apply , bind

let name = {
  firstName: "aisha",
  lastName: "khan",
}
let printName = function (hometown,state) {
  console.log(this.firstName + " " + this.lastName + " from "+ hometown+ "," + state );
}
printName.call(name, "karachi",3);
let names = {
  firstName: "aisha1",
  lastName: "khan1",
}
// function borrowing
printName.call(names, "karachi", 12);
// apply it takes the 2nd argument as parameter
printName.apply(names,[ "karachi" ,2]);
//bind returns the copy of method
let print= printName.bind(names, "karachi", 12);
console.log(print);
print();