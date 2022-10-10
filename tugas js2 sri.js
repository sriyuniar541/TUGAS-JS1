//task 1
//1. push
let nama = ["sri","yuniar","siti"];
nama.push("yuyun","saiful");
console.log(nama)

//2. pop
let nama1 = ["sri","yuniar","siti"];
nama1.pop();
console.log(nama1)

//3.toLowerCase
let bunga = "MAwaR";
let bungaBaru = bunga.toLowerCase();
console.log(bungaBaru);

//4.shift
let daun = ["Daun Mangga","Daun Pisang"];
daun.shift();
console.log(daun);

//5.unshift
let daun1 = ["Daun Mangga","Daun Pisang"];
daun1.unshift("Daun Singkong");
console.log(daun1);

//6.filter
let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = arr1.filter(filter1);
    function filter1 (value) {
        return value % 2 === 0;
    }
console.log(arr2);

//7. toString
let angka = ["satu","dua","tiga",1,2,3,4,5];
let angkaBaru = angka.toString();
console.log(angkaBaru);

//8. fill
let buahBuahan = ["apel","anggur","mangga"];
let fill = buahBuahan.fill("kiwi");
console.log(fill)

//9.every
let umur = [20,21,22,23,24,25];
let periksaUmur = umur.every(periksaUmur1);
    function periksaUmur1 (umur){
        return umur < 20 ;
    }

console.log(periksaUmur)

//10. flat
let color = [("red"),"white",("blue")];
let flatColor = color.flat(0,2);
console.log(flatColor); 





//task2

let name1 = ["Abigael","Alexandra","Alison","Amanda","Angela","Bella","Carol",
                "Carolina","Carolyn","Deidre","Diana","Elizabeth","Ella",
                "Faith","Olivia","Penelope"];          

let searchName = (arr, yangDiambil) => {
    return arr.filter((el) => el.toLowerCase().includes (yangDiambil.toLowerCase()))
}           
    
console.log(searchName(name1, "le"));








//task3
let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5){
        console.log(dataArray.filter((dataArray) => dataArray !== nilaiAkhir && nilaiAwal));
    } else if (dataArray.length <= 5  && nilaiAwal > nilaiAkhir){
        console.log("nilai awal harus kurang dari nilai akhir dan dataArray harus lebih dari 5");
    } else if (nilaiAwal > nilaiAkhir){
            console.log("nilai awal harus kurang dari nilai akhir");
    } else if (dataArray.length <= 5 ){
    console.log("dataArray harus lebih dari 5"); 
    } else{
        console.log("nilai tidak ditemukan");
    }
}

seleksiNilai(2,4,[1,2,3,7,5,6]);
seleksiNilai(7,4,[ 1,2,3,4,5]);
seleksiNilai(7,4,[1,2,3,4,5,6]);
seleksiNilai(2,4,[1,2,3,4,5]);


