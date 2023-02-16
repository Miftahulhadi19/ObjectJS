// spreed operator
/*memecah iterable 
--(string, array, arguments/nodelist, typedarray, map, set, user-defined-iterables)
menjadi singgle element*/

// const mhs = ["miftahul", "hadi", "ulsama"];
// console.log(...mhs);
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ["miftahul", "hadi", "ulsama"];
// const dosen = ["imam", "mashuri", "rofiq"];
// // const orang = [...mhs, ...dosen];

// // const orang = mhs.concat(dosen);
// const orang = [...mhs, "aji", ...dosen];
// console.log(orang);

// meng-copy array
// const mhs = ["miftahul", "hadi", "ulsama"];

// const mhsCopy = [...mhs];
// mhs[0] = "fajar";
// console.log(mhs);
// console.log(mhsCopy);

// const liMhs = document.querySelectorAll("li");
// // const mhs = [];
// // for (let i = 0; i < liMhs.length; i++) {
// //   mhs.push(liMhs[i].textContent);
// // }
// // console.log(mhs);

// const mhs = [...liMhs].map((m) => m.textContent);
// // console.log(liMhs);
// console.log(mhs);

// Latihan
// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

// nama.innerHTML = huruf;
