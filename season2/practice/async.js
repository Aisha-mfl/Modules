// const promise = new Promise((resolve , reject) => {
//     resolve("promise is resolved");
// })

// async function getData(){
//     return promise;
// }

// const dataPromise = getData();
// dataPromise.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);

// })
//before async and await
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise is resolved");
//   }, 10000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise2 is resolved");
//   }, 5000);
// });

// // after async func
// // using await keyword to handle the promise in async fun
// // JS engine wait fot promise to be resolved
// async function handlePromise() {
//   const val = await promise;
//   console.log("hi");
//   console.log(val);

//   const val2 = await promise2;
//   console.log("hi 2");
//   console.log(val2);
// }
// handlePromise();

// function getData(){
//     promise.then(res => console.log(res));
// }
// getData();

//fetch

// const api_URL = "https://api.github.com/users/aishajaweria";

// async function handlePromise  () {
//   try {
//     const data = await fetch(api_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } 
//   catch (err) {
//     console.log(err);
//   }
// }
// handlePromise();

// const api_URL = "https://api.github.com/users/aishajaweria";

// async function handlePromise() {
//   try {
//     const data = await fetch(api_URL);
//     const json = await data.json();
//     console.log(json);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handlePromise();

// const api_URL = "https://jsonplaceholder.typicode.com/posts/1";

// async function handlePromise(){
//   try{
//     const data = await fetch(api_URL)
//     const json = await data.json();
//     console.log('post title: ',json.title);
//   }
//   catch (error){
//     console.log(error);
//   }  
// }
// handlePromise();


function fetchbutton(){
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve("fetched cool data");
    },2000);
  });

}

document.getElementById(btn),addEventListener("click",async() =>{
  const result = document.getElementById("result");
  result.textContent = "loading";


try{
  const data = await fetchbutton();
  result.textContent =data;

}
catch(err){
  result.textContent = "failed to fetched";
  console.log(err);
}
});