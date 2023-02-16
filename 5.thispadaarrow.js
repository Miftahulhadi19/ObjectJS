// KONSEP THIS PADA ARROW FUNCTION

// Cotraction function
// const Mahasiswa = function () {
//   this.nama = "Miftahul";
//   this.umur = 33;
//   this.sayHallo = function () {
//     console.log(
//       `Hallo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`
//     );
//   };
// };
// const miftahul = new Mahasiswa();

// Arrow function (tidak mempunyai konsep this)

// const Mahasiswa = function () {
//   this.nama = "Miftahul";
//   this.umur = 33;
//   this.sayHallo = () => {
//     console.log(
//       `Hallo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`
//     );
//   };
// };
// const miftahul = new Mahasiswa();

// OBJECT LITERAL

// const mhs1 = {
//   nama: "miftahul",
//   umur: 32,
//   sayHello: function () {
//     console.log(`Hallo. nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   },
// };

// const mhs1 = {
//   nama: "miftahul",
//   umur: 32,
//   sayHello: () => {
//     console.log(`Hallo. nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Miftahul";
//   this.umur = 33;
//   this.sayHallo = function () {
//     console.log(
//       `Hallo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`
//     );
//   };
//   // setInterval(() => {
//   //   console.log(this.umur++);
//   // }, 500);
// };
// const miftahul = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle('size');
  setTimeout(() => {
    this.classList.toggle('caption');
  }, 600);
});
