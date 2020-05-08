function panggilObjects() {
    
    var mobil = {

        jenis: "Honda",
        harga: 234000000,
        warna: "Merah",

    }

    console.log(mobil);
    console.log("");
    
    console.log(mobil.jenis);
    console.log("");
    
    console.log(mobil.harga);
    console.log("");
    
    console.log(mobil.warna);
    console.log("");
    
    mobil.harga = "update harga: 250000000";
    mobil.tahun = 2018;
    console.log("");

    console.log(mobil.tahun);
    console.log("");
    
    console.log(mobil.harga);      

}

panggilObjects()
