//PROMISES
// setTimeout(function(){
//     console.log("javascript")

// },5000)

// //callback hell
// const cart = ["shoes","pants","kurta"]

// api.createOrder(cart , function(){
//     api.proceedToPayment(function(){
//         api.checkout(function (){
//             api.summary()
//         })
//     }
//     )
// })

// api.createOrder(cart , function(){
//     api.proceedToPayment()
// })

//promises
// //performing async operation
// createOrder(cart,function(){
//     proceedToPayment(orderId);

// });
// //defining the promises so the value of order details store in this
// const promise = createOrder(cart);
// //attaching a callback function through promises to solve inversion of control also it call into once
// promise.then(function(){
//     proceedToPayment(orderId);
// });

// const api = "https://api.genderize.io/?name=luc"
// const user =  fetch(api);
// console.log(user);

// user.then(function(data){
//     console.log(data);

// })

//const cart = ["shoes","pants","kurta"]
// createOrder(cart).
// then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(paymentInfo => updateWallet(paymentInfo));
// const cart = ["shoes", "pants", "gloves"];

// //consumer part
// createOrder(cart)
//   //promise chaining
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })

//   .then(function (paymentInfo) {
//     console.log("payment Info:", paymentInfo);
//   })
//   //GRACEFULLY HANDLING ERROR
//   .catch(function (err) {
//     console.log(err.message);
//   });
// //producer part

// function createOrder(cart) {
//   //promise constructor
//   const pr = new Promise(function (resolve, reject) {
//     //crete orders
//     //validate

//     if (!validateCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     const orderId = "132132";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }
// function proceedToPayment(orderId) {
//   //logic of payment
//   return new Promise(function (resolve, reject) {
//     resolve("payment successful");
//   });
// }
// function validateCart(cart) {
//   return true;
// }

// //promise APIS
// const p1 = new Promise((resolve , reject) =>{
//     setTimeout(()=>
//         reject("P1 fail")
//     ,3000);
// })

// const p2 = new Promise((resolve , reject) =>{
//     setTimeout(()=>
//         reject("P2 fail")
//     ,1000);
// })

// const p3 = new Promise((resolve , reject) =>{
//     setTimeout(()=>
//         reject("P3 reject")
//     ,2000);
// })

// Promise.all([p1, p2 , p3]).then(res =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// })

// Promise.allSettled([p1, p2 , p3]).then(res =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// })

// Promise.race([p1 ,p2 , p3]).then(res =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// })
// Promise.any([p1 ,p2 , p3]).then(res =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
//     console.log(err.errors);
// });

const cart = ["apple", "samsung", "oppo"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("payment info:",paymentInfo)
    return checkOut(paymentInfo);
  })
  .then (function(paymentInfo){
    console.log(paymentInfo);
  })

  .catch((err) => {
    console.error(err);
  });

function createOrder() {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }   
    const orderId = 243554;
    setTimeout(() => {
      resolve(orderId);
    }, 5000);
  });

  return promise;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve , reject){
        resolve("payment successful");
    });
}
function checkOut(paymentInfo){
    return new Promise(function(resolve , reject){
        setTimeout(()=>{
            resolve("checkout done");
        },5000);
        
    });

}
function validateCart(cart){
    return true;
}