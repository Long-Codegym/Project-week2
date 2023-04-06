function phepcong() {
    let valu1 = parseInt(document.getElementById("number1").value);
    let valu2 = parseInt(document.getElementById("number2").value);
    ketqua= (valu1 + valu2) ;
    document.getElementById("ketqua").innerHTML = ketqua;
}
function pheptru() {
    let valu1 = parseInt(document.getElementById("number1").value);
    let valu2 = parseInt(document.getElementById("number2").value);
    ketqua= (valu1 - valu2) ;
    document.getElementById("ketqua").innerHTML = ketqua;
}
function phepnhan() {
    let valu1 = parseInt(document.getElementById("number1").value);
    let valu2 = parseInt(document.getElementById("number2").value);
    ketqua= (valu1 * valu2) ;
    document.getElementById("ketqua").innerHTML = ketqua;
}
function phepchia() {
    let valu1 = parseInt(document.getElementById("number1").value);
    let valu2 = parseInt(document.getElementById("number2").value);
    ketqua= (valu1 / valu2) ;
    document.getElementById("ketqua").innerHTML = ketqua;
}