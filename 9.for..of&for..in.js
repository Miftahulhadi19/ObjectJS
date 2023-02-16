// Itereble Object
// .String
// .Array
// .Arguments
// .TypedArray
// .Map
// .Set
// .User-difined iterebles

// for..of
// const mhs = ["miftahul", "hadi", "ulhadi"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }
// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = "miftahul";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["miftahul", "hadi", "ulhadi"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// Noodlist
// const liNama = document.querySelectorAll(".nama");

// // liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments
// function jumlahkanAngka() {
//   //   console.log(arguments);
//   //   return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// // jumlahkanAngka(1, 2, 3, 4, 5);
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for in
const mhs = {
  nama: "miftahul",
  umur: 32,
  email: "miftahul@gmail.com",
};

for (m in mhs) {
  console.log(m);
  console.log(mhs[m]);
}
