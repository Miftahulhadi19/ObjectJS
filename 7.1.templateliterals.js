// Tamplate literal / Tamplate String

// Menggunakan ``back tick
// Multi-line string
// Embeded Expresion
// HTML Fragments
// Expresion Interpoltion
// Tagged Tamplate

// Menggunakan ``back tick
// const nama = "miftahul hadi";
// const umur = 33;
// console.log(`halo, nama saya${nama}, dan umur saya${umur}`);

// Embeded Expresion
// console.log(`${alert("hallo")}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
// const mhs = {
//   nama: 'hadi sama',
//   umur: 33,
//   nrp: '12345678',
//   email: 'hadisama@gmail.com',
// };
// const el = `<div class="mhs">
//               <h2>${mhs.nama}</h2>
//               <span class="nrp">${mhs.nrp}</span>
//               <p class="email">${mhs.email}</p>
//             </div>`;

// console.log(el);

// LATIHAN

// 1.DOM
// const mhs = {
//   nama: "Hadi Sama",
//   umur: 33,
//   nrp: "12345678",
//   email: "hadisama@gmail.com",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`;
// document.body.innerHTML = el;

// 2.Looping
// const mhs = [
//   {
//     nama: "Miftahul Hadi",
//     email: "miftahul@gmail.com",
//   },
//   {
//     nama: "Miftahul sama",
//     email: "sama@gmail.com",
//   },
//   {
//     nama: "Hadi Sana",
//     email: "Hadisama@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) =>
//       `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`
//   )
//   .join("")}
// </div>`;
// document.body.innerHTML = el;

// 3. Condisional
// ternary
// const lagu = {
//   judul: "Tetep Dalam jiwa",
//   penyanyi: "Isyana Saraswati",
//   feat: "Rayi Putra",
// };
// // const el = `<div class="lagu">
// //   <ul>
// //     <li>${lagu.judul}</li>
// //     <li>${lagu.penyanyi}</li>
// //   </ul>
// // </div>`;
// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//   </ul>
// </div>`;
// document.body.innerHTML = el;

// 4.Nested (hmtl fragment bersarang)
// const mhs = {
//   nama: "Hadi Sama",
//   semester: 5,
//   mataKuliah: [
//     "Rekayasa Web",
//     "Analisis dan Perancangan Sistem Informasi",
//     "Pemograman Sistem Informatif",
//     "Perancangan Sistem Berorientasi Object",
//   ],
// };

// function cetakMataKuliah(mataKuliah) {
//   return `
//   <ol>
//     ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
//   </ol>`;
// }
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="semester">Semester ${mhs.semester}</span>
// <h2>Mata Kuliah</h2>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;
