// EXECUTION CONTECT, HOISTING & SCOPE

// var nama = "miftahul";
// console.log(nama);

// creation phase pada global contect
// nama var = undefined
// nama funciton = fn()
// hoisting
// window = global object
// this = window

// execution phase

// var nama = "miftahul";
// var umur = 30;
// console.log(sayHello());

// function sayHello() {
//   return `Hallo nama saya ${nama}, umur saya ${umur} tahun`;
// }

// function membuat local Execution contect
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "miftahul hadi";
// var username = "@miftahulhadi";

// function cetakUrl() {
//   // console.log(arguments[0]);
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }

// console.log(cetakUrl("@firmanutina"));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

// Latihan

function satu() {
  var nama = "miftahul";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "eric";
satu();
dua("irfan");
console.log(nama);
