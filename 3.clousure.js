// Clousure
/*
--Clousure adalah sebuah function yang memiliki akses ke parent scope-nya, meskipun parent scope nya sudah selesai di eksekusi
--Clousere merupakan kombinasi antara fuction dan lingkungan leksikal di dalam fuction tersebut*/

// function init() {
//   let nama = "miftahul";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
//   // console.log(tampilNama);
// }
// init();

// function init() {
//   let nama = "miftahul";
//   function tampilNama() {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// // init();
// let panggilNama = init();
// panggilNama();

// function init() {
//   // let nama = "miftahul";
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("ulSama");
// panggilNama("hadi");

// function init() {
//   return function tampilNama(nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("miftahul");
// panggilNama("hadi");

// function vactary
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalamm = ucapkanSalam("malam");

// selamatPagi("miftahul");

// privat method
// let counter = 0;
// let add = function () {
//   return ++counter;
// };

// counter = 10;

// let add = function () {
//   let counter = 0;
//   return ++counter;
// };
// counter = 100;

// console.log(add());
// console.log(add());

// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// counter = 10;

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// imedietly involve function
// let add = (function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// })();

// counter = 10;

// console.log(add());
// console.log(add());
// console.log(add());
