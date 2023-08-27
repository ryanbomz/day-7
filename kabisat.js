
function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 & tahun % 100 !== 0 )|| tahun % 400 === 0) {
     return true;   
    } else  { 
        return false; 
    }
}


var tahun = 2022;
if (tahunKabisat(tahun)) {
    console.log(tahun +" adalah tahun kabisat");
}else {
    console.log(tahun + " bukan tahun kabisat");
}

