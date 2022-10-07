//task 1
let nama = "Sri YUniar";
let adress = {
    kecamatan : "Sirimau",
    kota : "Ambon",
    provinsi : "Maluku"
} 
let email = "sriyuniar541@gmail.com";
let isMerried =  "false";
let hobbies = ["nonton","jalan-jalan","membaca"];


//task2
let printGanjilGenap = (x) => {
    for(i=1; i <= x ; i++){
        if( i%2=== 0){
            console.log(`${i} merupakan bilangan genap`)
        }
        else{
            console.log(`${i} merupakan bilangan ganjil`)
        }   
    }
}
printGanjilGenap(5)


//task3
let prinSegitiga = (x) => {
let pola = "";
    for(let i = 1; i <= x; i++){
        for (let j = 1; j <= i; j++){
            pola += i;
        }
        pola += "\n";
    }
    return pola;
}
console.log(prinSegitiga(5));