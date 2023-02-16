// Distructuring Array

// const perkenalan = ["halo", "nama", "saya", "miftahul"];

// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);

// skiping item
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return values pada function
// function coba() {
//   return [1, 2];
// }
// const a = coba();
// console.log(a[1]);

// const [a, b] = coba();
// console.log(a);

// res parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destracturing Object
// const mhs = {
//   nama: "Miftahul hadi",
//   umur: 33,
// };
// const { nama, umur } = mhs;
// console.log(nama);

// Asigment tanpa deklarasi Object
// ({ nama, umur } = { nama: "Miftahul hadi", umur: 33 });
// console.log(nama);

// Asign ke variable baru
// const mhs = {
//   nama: "Miftahul hadi",
//   umur: 33,
// };
// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan default value
// const mhs = {
//   nama: "Miftahul hadi",
//   umur: 33,
// };
// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// Memberikan default value dan Asign ke variable baru
// const mhs = {
//   nama: "Miftahul hadi",
//   umur: 33,
// };
// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// Rest parameter
// const mhs = {
//   nama: "Miftahul hadi",
//   umur: 33,
//   email: "miftahul@gmail.com",
// };
// const { nama, ...value } = mhs;
// console.log(value);

// Mengambil field pada object setelah di kirim sebagau parameter untuk function
// const mhs = {
//   id: 123,
//   nama: "Miftahul hadi",
//   umur: 33,
//   email: "miftahul@gmail.com",
// };

// function getIdMhs({ id }) {
//   return id;
// }
// console.log(getIdMhs(mhs));

// LATIHAN
// Destructuring Array
// function kalkulasi(a, b) {
//   return [a + b, a * b];
// }
// const [tambah, kali] = kalkulasi(2, 3);
// console.log(kali);

// function kalkulasi(a, b) {
//   return [a + b, a * b, a / b];
// }
// const [tambah, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return [a + b, a * b];
// }
// const [tambah, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// Destructuring object
// function kalkulasi(a, b) {
//   return {
//     tambah: a * b,
//     kurang: a - b,
//     bagi: a / b,
//   };
// }
// const { tambah, bagi, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring function arguments
const mhs1 = {
  nama: "Miftahul Hadi",
  umur: 33,
  email: "miftahul@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(nama, umur) {
//   return `Hallo nama saya ${nama}, dan umur saya ${umur}`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// function cetakMhs(mhs) {
//   return `Hallo nama saya ${mhs.nama}, dan umur saya ${mhs.umur}`;
// }
// console.log(cetakMhs(mhs1));

// function cetakMhs({ nama, umur }) {
//   return `Hallo nama saya ${nama}, dan umur saya ${umur}`;
// }
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Hallo nama saya ${nama}, dan umur saya ${umur} dan nilai uas saya ${uas}`;
}
console.log(cetakMhs(mhs1));
