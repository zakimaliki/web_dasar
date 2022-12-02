// no 1

let namaLengkap = "Zaki Maliki";
let email = "malikizakitop@gmail.com";
let noHp = "087654321";
let umur = 28;
const tempatTanggalLahir = "Blora, 5 November 19xx";
let alamat = {
  kabupaten: "blora",
  kecamatan: "todanan",
};
let kota = "Blora";
let provinsi = "Jawa Tengah";
let kodePos = 00021;
let experieceProgramming = ["PHP", "Java", "Javascript"];
let riwayatPendidikan = [
  {
    namaSekolah: "STMIK AKAKOM",
    tingkat: "Perguruan TInggi",
    tahunMulai: 2017,
    tahunLulus: 2022,
    jurusan: "TI",
    direkomendasikanOrangLain: true,
    lokasi: "Yogyakarta",
    pengajarFavorit: ["Suryanti", "Badianto"],
    materiFavorit: [
      {
        materi1: "Algoritma",
        materi2: "Kalkulus",
        materi3: "Bahasa Inggris",
        tahun: 2017,
        guru: "Badianto",
        alasan: ["Bagus", "Meyenangkan"],
        apakahSulit: false,
      },
    ],
  },
  {
    namaSekolah: "MA Salafiyah",
    tingkat: "SLTA",
    tahunMulai: 2012,
    tahunLulus: 2014,
    jurusan: "IPA",
    direkomendasikanOrangLain: true,
    lokasi: "Pati",
    pengajarFavorit: ["Ari Sutoyo", "Deddy Damhudi"],
    materiFavorit: [
      {
        materi1: "Matematika",
        materi2: "Bahasa Inggris",
        materi3: "TIK",
        tahun: 2012,
        guru: "Deddy",
        alasan: ["Bagus", "Meyenangkan"],
        apakahSulit: false,
      },
    ],
    golonganDarah: "O",
    hoby: ["Ngoding", "Baca", "Ngegame"],
    makananFavorit: [
      { namaMakanan: "Pecel Blora", asal: "Blora" },
      { namaMakanan: "Steak", asal: "Eropa" },
    ],
  },
];
let golonganDarah = "O";
let hoby = ["Ngoding", "Baca", "Ngegame"];
let makananFavorit = [
  { namaMakanan: "Pecel Blora", asal: "Blora" },
  { namaMakanan: "Steak", asal: "Eropa" },
];

// no. 2

let zakiMaliki = {
  namaLengkap,
  email,
  noHp,
  umur,
  tempatTanggalLahir,
  alamat,
  kota,
  provinsi,
  kodePos,
  experieceProgramming,
  riwayatPendidikan,
  golonganDarah,
  hoby,
  makananFavorit,
};

//   no. 3
console.log(
  "Nama Lengkap : " + zakiMaliki.namaLengkap + "Nomor HP : 0" + zakiMaliki.noHp,
  "Experience Programming " + zakiMaliki.experieceProgramming + " saja.",
  "Nama makanan kesukaan ialah " + zakiMaliki.makananFavorit[0],
  ", Asalnya dari " + zakiMaliki.makananFavorit[0].asal,
  ", Hoby : " + zakiMaliki.riwayatPendidikan[0].hoby,
  ". Nama materi dan pengajar materi Favorit ialah " +
    zakiMaliki.riwayatPendidikan[0].materiFavorit[0].materi3,
  "Dosen : " + zakiMaliki.riwayatPendidikan[0].materiFavorit[0].guru
);

// no. 4

function dataDiri(zakiMaliki) {
  return (
    namaLengkap +
    " Pernah menempuh pendidikan di " +
    riwayatPendidikan.length +
    " tempat. "
  );
}
console.log(dataDiri(namaLengkap));

// no. 5
(function () {
  for (let x = 0; x <= num; x++) {
    console.log("Looping ke ", x);
  }
  return num;
});

// const looping = (num) => {
//   for (let x = 0; x <= num; x++) {
//     console.log("Looping ke ", x);
//   }
//   return num;
// }
// looping(10);

// no. 6

function printHobbies(listHobi) {
  for (let i = 0; i < listHobi.length; i++) {
    console.log("Hobi ke " + parseInt(i + 1) + " " + listHobi[i]);
  }
  return true;
}
printHobbies(hoby);

// no . 7

let cekPassingGrade = (grade) => {
  let passingGrade =
    grade >= 75
      ? "Nilai " + grade + " Selamat, Anda Lolos!"
      : "Nilai " + grade + " Anda tidak Lolos!";
  return passingGrade;
};
console.log(cekPassingGrade(90));
console.log(cekPassingGrade(75));
console.log(cekPassingGrade(74));

// no. 8

let printOddNumber = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
printOddNumber(20);

//  no. 9
let printPijarCamp = (num) => {
  for (let i = 1; i <= num; i++) {
    let pijarCamp =
      i % 3 == 0 && i % 5 == 0
        ? "PijarCamp"
        : i % 5 == 0
        ? "Camp"
        : i % 3 == 0
        ? "Pijar"
        : i;
    console.log(pijarCamp);
  }
  return true;
};

printPijarCamp(15);

// no. 10
let combineArr = () => {
  let arr1 = ["pisang", "angur", "mangga"];
  let arr2 = ["nanas", "apel"];
  let combine = [...arr1, ...arr2];

  return combine;
};
console.log(combineArr());

let combineObj = () => {
  let obj1 = { buah: "apel", jenis: "buah" };
  let obj2 = { warna: "merah", kategori: "Kesukaan" };
  let combine = { ...obj1, ...obj2 };

  return combine;
};
console.log(combineObj());

//   no . 11
console.log("no 11");

let storedObjects = (key, value) => {
  let obj1 = {};
  obj1[key] = value;
  return obj1;
};

let obj1 = storedObjects("nama", "zaki");
obj1 = { ...obj1, ...storedObjects("kota", "Blora") };
console.log(obj1);

// no. 12

let obj = {
  ...zakiMaliki,
  hobiBaru: ["ngoding", "jalan-jalan"],
  // printNama: function(){
  //   return(this.namaLengkap);
  // },
  // printEmail: function(){
  //   return(this.email);
  // },
  // printPhone: function(){
  //   return(this.noHp);
  // },
};

console.log(obj);

// No. 13

let returnFirstName = (fullName) => {
  let namaDepan = fullName.split(" ");
  return console.log(namaDepan[0]);
};
returnFirstName(namaLengkap);
const d = new Date();
const h = d.getHours();

let returnDay = (clock) => {
  let cekClock =
    clock >= 18
      ? "Malam"
      : clock >= 12 && clock !== 15 && clock !== 16 && clock !== 17
      ? "Siang"
      : clock >= 15
      ? "Sore"
      : "Pagi";
  // if (clock >= 18) {
  //   console.log('Malam');
  // } else if (clock >= 12 && clock !== 15 && clock !== 16 && clock !== 17) {
  //   console.log('Siang');
  // } else if (clock >= 15) {
  //   console.log('Sore')
  // } else {
  //   console.log('Pagi')
  // }
};
returnDay(h);

let greeting = (clock, returnDay, fullName) => {
  return "Selamat ";
};
console.log(greeting(h));

//No.  14
let printSquare = (num) => {
  let hasil = "";
  for (i = 0; i < num; i++) {

    for (j = 0; j <= num; j++) {
      hasil += "*";
    }
    
    hasil += "\n";
  }
  return hasil;
};
console.log(printSquare(5));

//NO. 15
function cekNum(num) {
  try {
    if (typeof num !== "number") throw "Parameter Harus Angka!";
    if (isNaN(num)) throw "Parameter Harus Angka!";
    if (num) throw num;
  } catch (error) {
    console.log(`${error}`);
  }
}

//  cekNum(5);
//  cekNum(3);
cekNum("7");
cekNum("tiga");
cekNum([]);
cekNum(NaN);
