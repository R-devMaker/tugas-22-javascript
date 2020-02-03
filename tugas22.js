function tugas22(){
    var kalimat = "Saya ingin belajar bersama";
    var arrKal = kalimat.split(" ");
    // console.log(arrKal);
    arrKal.forEach(function (item,index){
        console.log("Item : ", item," Index ke ", index);
    })
}

tugas22();