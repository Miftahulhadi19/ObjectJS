// Higher Order Function
/*
-- Function yang beroperasi pada function yang lain baik itu digunakan dalam argument, maupun sebagai return value
*/

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// filter
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(angka);

// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// const newAngka = angka.map(function (a) {
//   return a * 2;
// });
// console.log(newAngka);

// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// const newAngka = angka.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue,
//   0
// );
// console.log(newAngka);

// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan

// const hasil = angka
//   .filter((a) => a > 5)
//   .map((a) => a * 3)
//   .reduce((acc, cur) => acc + cur);

// console.log(hasil);

// LATIHAN

// ambil semua element video
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// // pilih hanya yang javascript lanjutan
// let jsLanjut = videos
//   .filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))
//   // ambil durasi masing2 video
//   .map((item) => item.dataset.duration);
// console.log(jsLanjut);

//   // ubah durasi menjadi float -> ubah menit menjadi detik

//   .map((waktu) => {
//     // 10:30 -> [10, 30] split
//     const parts = waktu.split(":").map((part) => parseFloat(part));
//     return parts[0] * 60 + parts[1];
//   })

//   // jumlahkan semua detik
//   .reduce((total, detik) => total + detik);

// // ubah formatnya dari jam menjadi menit
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60);
// const detik = jsLanjut - menit * 60;

// // simpan di DOM
// const pDurasi = document.querySelector(".total-durasi");
// pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} Detik`;

// const jmlVideo = videos.filter((video) =>
//   video.textContent.includes("JAVASCRIPT LANJUTAN")
// ).length;

// const pJmlVideo = document.querySelector(".jumlah-video");
// pJmlVideo.textContent = `${jmlVideo} Video`;

// console.log();
