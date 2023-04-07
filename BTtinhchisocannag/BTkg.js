function kiemtra() {
    let kg1 = parseFloat(document.getElementById("kg").value);
    let m1 = parseFloat(document.getElementById("m").value);
    let bmi = kg1 / (m1^2);
    let ketqua = "";
    if (bmi < 18){
        ketqua = " bạn gầy";
    }else if (bmi <= 25){
        ketqua = " bạn bình thường";
    }else {
        ketqua = " bạn béo phì";
    }
    document.getElementById("ketqua").innerHTML = "chỉ số BMI của bạn là " + bmi + ketqua;
}



