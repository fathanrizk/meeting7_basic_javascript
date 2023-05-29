var name="Fathan";
let age = 24;
const isSingle = false;

console.log("Info saya" , name, age, isSingle)

// Hindari penggunaan var karna dapat memuat nama variabel yg sama
// tidak dapat meng assign nama variabel yg sama tapi dapat merubahnya dengan assign langsung nama variabel tujuan
//const : ketetapan yg tidak atau sangat jarang berubah dan tidak dapat di rubah dengan conts ataupun assign langsung

var name="Rizki";
age = 20;
// isSingle="true";
let isSick = "true"
console.log("Info saya" , name, age, isSick)
console.log("----------------");

var x = 'Apa Kabar';
console.log(x.length);
console.log(x.indexOf('Dunia'));
console.log(x.substr(5, 3)); 
//substr (start, length)
console.log(x.slice(5, 8));
//slice (start, end)
console.log(x.split(' '));
console.log("============================");

//String
var x ='Apa';
var y ='KABAR';
var z = 12345;
console.log(x.toUpperCase());
console.log(y.toLowerCase());
console.log(x.replace('pa', 'mi'))
console.log(x.replace(/pa/g, 'mi'))
console.log(z.toString())
console.log(typeof(z.toString()))
console.log("=============================");

// Arithmetic& Assignment Operators
var usiaAyah= 60;
var usiaBunda= 45;
var hasil = usiaAyah+usiaBunda;
console.log(usiaAyah*usiaBunda);// *=
console.log(usiaAyah/usiaBunda);// /=
console.log(usiaAyah+usiaBunda);// +=
console.log(usiaAyah-usiaBunda);//-=
console.log(usiaAyah%usiaBunda);// %=
console.log(hasil);
console.log("==============================");


//BASIC MATH Object
console.log(Math.PI);
console.log(Math.abs(-4.7));
console.log(Math.pow(8, 2));
console.log(Math.sqrt(64));
console.log(Math.cbrt(8));
console.log("==============================");

// Round, Ceil & Floor
console.log(Math.round(4.7)); //Ditarik ke antara nilai bulat terdekat 
console.log(Math.round(4.4));
console.log(Math.floor(4.7));//Ditarik keatas
console.log(Math.ceil(4.4));//Ditarik kebawah
console.log("=============================");

// Random, Max & Min
console.log(Math.random()*10);
console.log(Math.max(1,3,5));
console.log(Math.min(1,3,5));
console.log("=============================");

//Date Time
let time = new Date();
let date= time.getDate();
let day = time.getDay();
let hours = time.getHours();
console.log(date,day,hours);
console.log(time.getDate(), time.getDay(), time.getHours());
console.log("=================================================");

//Nyatakan dalam tahun,bulan,minggu dan hari 540 hari
let total_day = 540;
let year_now=0;
let month_now
let day_now


for(let total=540;total>365;total-365){
    year_now++;
    console.log(total);
    console.log(year_now);
    for(total;total>30;total-30){
        console.log(total);
        month_now++
        console.log(month_now);
        // for(total;total>1;total-1){
        //     day_now++
        //     console.log("540 Hari = ", year_now, "Tahun", month_now, "Bulan", day_now, "Hari" );
        // }

    }

}

// while(total_day > 365){
//     let year_now=0;
//     let month_now=0;
//     let day_now=0;
//     total_day=total_day-365;
//     year_now++;  
//     console.log(year_now);
//     while(total_day > 30){
//         total_day=total_day-30;
//         month_now++
//         while(total_day > 1){
//             total_day=total_day-1
//             day_now++
//             console.log("540 Hari = ", year_now, "Tahun", month_now, "Bulan", day_now, "Hari" );
//         }
//     }
// }
// console.log("540 Hari = ", year_now, "Tahun", month_now, "Bulan", day_now, "Hari" );
