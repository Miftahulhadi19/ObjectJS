// Promise
/* 
3 states (panding, fullfiled, rejected)
*/

// const myPromise = new Promise((resolve, reject) => {
//   const result = false;
//   if (result) {
//     resolve("Yes, resolve the promise");
//   } else {
//     reject("No! Something went wrong");
//   }
// });

// console.log(myPromise);

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// // Pending
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())

//   .then((data) => data.forEach((user) => console.log(user.name)));

// Async Await
const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return data;
};

myCoolFunction();
