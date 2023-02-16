// tagged tamplate
// const nama = 'miftahul hadi';
// const umur = 33;
// const email = 'miftahulhadi@gmail.com';

// Luas Persegi Panjang
function luasPersegiPanjang() {
  const hasil = arguments[0] * arguments[1];
  return hasil;
}
const panjang = () => 12;
const lebar = () => 6;
console.log(luasPersegiPanjang(panjang(), lebar()));

// Luas ligkaran 10 cm
function luasLingkaran(r, r) {
  const pi = 22 / 7;
  return pi * (r * r);
}
const hasil = Math.floor(luasLingkaran(10, 10));
console.log(`${hasil} cm`);

// function coba(strings) {
//   return strings;
// }

// Res paramater
// function coba(strings, ...values) {
//   return values;
// }

// function coba(strings, ...velues) {
// //   let result = "";
// //   strings.forEach((str, i) => {
// //     result += `${str} ${velues[i] || ""}`;
// //   });
// //   return result;
//     return strings.reduce(
//       (result, str, i) => `${result}${str}${velues[i] || ""}`,
//       ""
//     );
// }
// const str = coba`hallo, nama saya ${nama}, saya ${umur} tahun, dan email saya${email}`;
// console.log(str);

// Haighlight
// function haighligh(strings, ...velues) {
//   return strings.reduce(
//     (result, str, i) =>
//       `${result}${str}<span class= "hl">${velues[i] || ""}</span>`,
//     ""
//   );
// }
// const str = haighligh`hallo, nama saya ${nama}, saya ${umur} tahun dan email saya ${email}`;
// // console.log(str);

// document.body.innerHTML = str;

// Penggunaan lain tegged tamplate
/* 
--Escaping HTML Tags
--Translation & Internationalization
--Styled Components
*/
