// OBJECT

// 1. Object litreral (tidak efektif untuk banyak object)
// let mahasiswa = {
//   nama: "miftahul hadi",
//   energi: 10,

//   makan: function (porsi) {
//     this.energi += porsi;
//     // this.energi = this.energi + porsi;
//     console.log(`Hallo ${this.nama}, Selamat makan`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Hallo ${this.nama}, Selamat tidur`);
//   },
// };

// let mahasiswa2 = {
//   nama: "hadi sama",
//   energi: 20,

//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo ${this.nama}, Selamat makan`);
//   },
// };

// 2. Function Declaration (a)
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.name = nama;
//   mahasiswa.energy = energi;

//   mahasiswa.tidur = function (jam) {
//     this.energy += jam * 2;
//     console.log(`Hallo ${this.name}, Selamat tidur`);
//   };
//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Haloo ${this.name}, Selamat makan`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Hallo ${this.name}, Selamat bermain`);
//   };
//   return mahasiswa;
// }
// let miftahul = Mahasiswa("miftahul hadi", 10);
// let hadi = Mahasiswa("Hadi", 20);

// 2. Function Declaration (b)

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Haloo ${this.nama}, Selamat makan`);
//   },
//   main: function (jam) {
//     this.energi -= energi;
//     console.log(`Hallo ${this.nama}, Selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Hallo ${this.nama}, Selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
// let miftahul = Mahasiswa("miftahul hadi", 10);
// let hadi = Mahasiswa("Hadi", 20);

// 3. Construktur Function
// function Buruh(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo pak ${this.nama}, Selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo pak ${this.nama}, Selamat main`);
//   };
// }
// let supono = new Buruh("Supono", 20);

// function Mahasiswa(nama, energi) {
//   //   let this = Object.create(Mahasiswa.prototype);
//   this.nama = nama;
//   this.energi = energi;

//   //   return this
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Hallo ${this.nama}, Selamat makan`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Hallo ${this.nama}, Selamat bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Hallo ${this.nama}, Selamat tidur`;
// };

// let miftahul = new Mahasiswa("miftahul", 10);
