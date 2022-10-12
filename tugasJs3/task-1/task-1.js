const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) =>{
                return item === day
            })
            if(cek){
                resolve (cek)
            } else {
                reject (new Error ('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
} 

let day = 'rabu'


//=====then dan catch=====
let result = cekHariKerja(day)
result.then(res => console.log(`berhasil hari ini adalah kerja (${res})`))
.catch(res => console.log(res));


//=====try dan catch=====
// async function hasilAsync () {
//     try {
//         let result = await cekHariKerja(day);
//         console.log ( `berhasil hari ini adalah kerja (${result} )`);
//     } catch(err) {
//         console.log(err)
//     }
// }

// hasilAsync();



//=====pengertian=====
//then = untuk menangkap resolve
//catch = untuk menangkap reject
//try = untuk menangkap resolve /menguji sekumpulan statement
//catch = untuk menangkap resolve/ alternatif bila terjadi eror