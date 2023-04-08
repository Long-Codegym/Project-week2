

/*bài tập 1*/
function bT1() {
    let a1 = parseFloat(document.getElementById("so1").value);
    let   a2 = parseFloat(document.getElementById("so2").value);
    let x = a1 % a2;
    let  kq;
    if (x !== 0) {
        kq = "a không chia hết cho b";
    } else {
        kq = "a chia hết cho b";
    }
    document.getElementById("kq").innerHTML = kq;
}


/* bài tập 2*/
function kiemtra2() {
    let bt2 = parseInt(document.getElementById("age").value);
    let kq2;
    if (bt2 >= 16) {
        kq2 = "Đủ điều kiện học lớp 10";
    } else {
        kq2 = "Không đủ điều kiện học lớp 10";
    }
    document.getElementById("kqbt2").innerHTML = kq2;
}


/*bài tập 3*/
function kiemtra3() {
    let bt3 = parseInt(document.getElementById("number").value);
    let kq3;
    if (bt3 > 0) {
        kq3 = "Số nguyên lớn hơn 0";
    } else {
        kq3 = "Số nguyên nhỏ hơn 0";
    }
    document.getElementById("kqbt3").innerHTML = kq3;
}


/*bài tập 4*/
function kiemtra4() {
    let a1 = parseInt(document.getElementById("number1").value);
    let a2 = parseInt(document.getElementById("number2").value);
    let a3 = parseInt(document.getElementById("number3").value);
    let kq4;
    if (a1 > a2) {
        if (a1 > a3) {
            kq4 = "số lớn nhất " + a1;
        }else {
            kq4 = "số lớn nhất " + a3;
        }
    }else if (a2 > a3){
        kq4 = "số lớn nhất " + a2;
    }else {
        kq4 = "số lớn nhất " + a3;
    }
    document.getElementById("kqbt4").innerHTML = kq4;
}


/*bài tập5*/
function kiemtra5() {
    let point1 = parseFloat(document.getElementById("diemktr").value);
    let point2 = parseFloat(document.getElementById("diemgk").value);
    let point3 = parseFloat(document.getElementById("diemck").value);
    let kq5;
    let diemtb = (point1 + point2 + point3) / 3;
    if (diemtb >= 8.5 ){
         kq5 = " Học sinh giỏi";
    } else if (diemtb >= 6.5){
        kq5 = " Học sinh khá";
    } else if (diemtb >= 5){
        kq5 = " Học sinh trung bình";
    } else {
        kq5 = " Học sinh kém";
    }
    document.getElementById("kqbt5").innerHTML = "Điểm trung bình là " + diemtb  + kq5;
}


/*bài tập6*/
function kiemtra6() {
    let nguoi = parseFloat(document.getElementById("people").value);
    let tien = parseFloat(document.getElementById("revenue").value);
    let pt = parseFloat(document.getElementById("percent").value);
    let pt1 = pt / 100 ;
    let dt;
    dt = tien * pt1 / nguoi ;
    document.getElementById("kqbt6").innerHTML = "Hoa hồng một người nhận được = " + dt + " VND";
}

/*bài tập7*/
function kiemtra7() {
    let minutes = parseInt(document.getElementById("minute").value);
    let cp;
    let cpcd = 30000;
    if (minutes > 200) {
        cp = (minutes - 200) * 200 + 400 * 150 + 600 * 50;
    } else if (minutes > 50) {
        cp = (minutes - 50) * 400 + 600 * 50;
    }else {
        cp = minutes * 600;
    }
    document.getElementById("kqbt7").innerHTML = "cước phí quý khách phải trả tháng này là " +  ( cp + cpcd ) + " VND";
}