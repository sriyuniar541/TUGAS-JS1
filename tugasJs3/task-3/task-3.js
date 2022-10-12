//promise 1
let cekUsia = (usia) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usia < 20) {
                resolve ('usia masih muda')
            } else if (usia <= 30 ){
                resolve ('usia dewasa')
            } else {
                reject('kamu sudah mau tua')
            }
        },3000)
    })
}
//input usia
let usia = 25

cekUsia(usia)
.then((res) => console.log(res))
.catch((err) => console.log(err))

//tes
console.log('tes')






// promise 2 
let buatKopi = (kopi) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (kopi == true) {
                resolve ('kopi berhasil dibuat')
            } else {
                reject ('mesin kopi rusak')
            }
        }, 2500)
    })
}
//input isian
let kopi = true

buatKopi(kopi)
.then((res) => console.log(res)).
catch((err) => console.log(err.message))

//tes
console.log('tes')