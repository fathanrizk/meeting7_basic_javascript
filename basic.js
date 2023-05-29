//Tanggal, bulan, dan tahun untuk kemarin, hari ini, dan besok
let yesterday = new Date();
yesterday.setDate(yesterday.getDate()-1);
console.log("Kemarin tanggal : ",yesterday.getDate(),"-",yesterday.getMonth(),"-",yesterday.getFullYear());

let today = new Date();
console.log("Hari ini tanggal : ",today.getDate(),"-",today.getMonth(),"-",today.getFullYear());

let tomorrow =new Date();
tomorrow.setDate(tomorrow.getDate()+1);
console.log("Besok Tanggal : ",tomorrow.getDate(),"-",tomorrow.getMonth(),"-",tomorrow.getFullYear());

//Nyatakan dalam tahun, bulan, dan hari , untuk total hari 540
console.log("============================================================");
console.log("540 Hari sama dengan : ");
let day = 540;

let year = Math.floor(day/365);
let year_modulo = day%365;
day = year_modulo;
console.log(year,"Tahun");

let month = Math.floor(day/30);
let month_modulo = day%30;
day=month_modulo;
console.log(month, "Bulan");

let days = Math.floor(day/1)
console.log(days, "Hari");