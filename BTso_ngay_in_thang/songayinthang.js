function kiemtra() {
    let a = document.getElementById("month").value
    let ketqua;
    switch (a){
        case "tháng1":
            ketqua = "tháng 1 có 31 ngày";
            break;
        case "tháng2":
            ketqua = "tháng 2 có 28 và 29 ngày";
            break;
        case "tháng3":
            ketqua = "tháng 3 có 31 ngày";
            break;
        case "tháng4":
            ketqua = "tháng 4 có 31 ngày";
            break;
        case "tháng5":
            ketqua = "tháng 5 có 31 ngày";
            break;
        case "tháng6":
            ketqua = "tháng 6 có 31 ngày";
            break;
        case "tháng7":
            ketqua = "tháng 7 có 31 ngày";
            break;
        case "tháng8":
            ketqua = "tháng 8 có 31 ngày";
            break;
        case "tháng9":
            ketqua = "tháng 9 có 30 ngày";
            break;
        case "tháng10":
            ketqua = "tháng 10 có 31 ngày";
            break;
        case "tháng11":
            ketqua = "tháng 11 có 30 ngày";
            break;
        case "tháng12":
            ketqua = "tháng 1 có 31 ngày";
            break;
    }
    document.getElementById("ketqua").innerHTML = ketqua;
}