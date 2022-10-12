const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari','Februari','Maret','April','Mei','Juni','Juli',
                    'Agustus','September','Oktober','November','Desember']
        if(!error) {
            callback (null, month)
        } else {
            callback (new Error ('Sorry Data Not Found'), [])
        }
    }, 4000);
}

const tampilkanMonth = ( err, month) => {
    if (err) {
        console.log(err.message)
    }
    let  hasil = month.map(res => res)
    console.log(hasil)
}

getMonth(tampilkanMonth);