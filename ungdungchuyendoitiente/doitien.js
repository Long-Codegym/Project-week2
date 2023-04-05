function doitiente() {
    let sltien = document.getElementById("sotien").value;
    let From = document.getElementById("kieutien1").value;
    let To = document.getElementById("kieutien2").value;
    let ketqua;
    if (From == "USD" && To == "VND"){
        ketqua = "kết quả =" +(sltien * 24000) + "Đ";
    }
    else if (From == "VND" && To == "USD" ){
        ketqua = "Kết quả =" + (sltien / 24000) + "$";
    }
    else if (From == "VND"){
        ketqua = "Kết quả =" + sltien + "Đ"
    }
    else {
        ketqua = "Kết quả =" + sltien + "$"
    }
    document.getElementById("ketqua").innerHTML = ketqua;
}
