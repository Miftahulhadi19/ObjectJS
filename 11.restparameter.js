// function myfucn(a, ...myArgs) {
//   //   return `a = ${a} myArgs = ${myArgs}`;
//   //   return myArgs;
//   //   return arguments;
//   //   return Array.from(arguments);
//   //   return [...arguments];
// }

// console.log(myfucn(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   //   let total = 0;
//   //   for (const a of angka) {
//   //     total += a;
//   //   }
//   //   return total;

//   return angka.reduce((a, i) => a + i);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["miftahul", "hadi", "ulhadi", "hadisama"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "miftahul",
//   fd1: "hadi",
//   fd2: "ulsama",
//   bd: "ulhadi",
//   ux: "tahul",
//   devops: "hadisama",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

function data(type, ...values) {
  return values.filter((d) => typeof d === type);
}

console.log(data("number", 1, 2, 3, "miftahul hadi", false, true, "ulhadi"));
