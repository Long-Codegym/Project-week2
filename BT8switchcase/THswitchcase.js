function baitap1() {
    let names = prompt("Nhập tên của bạn");
    switch (names) {
        case "Nhóm 5":
            alert("Chào mừng bạn đến với nhóm 5");
            break;
        case "Long":
        case "Dũng":
        case "Tùng":
        case "Cường":
            alert("Rất vui hỗ trợ bạn");
            break;
        default:
            alert("Bạn không thuộc nhóm tôi mời đi ra")
    }
}

function baitap2() {
    let a = prompt("a = ?",'');
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
        case 2:
        case 3:
            alert(2,3);
            break
    }
}

function baitap3() {
    let numbers = prompt("nhập số");
    if (numbers >0 ){
        alert(1);
    }else if (numbers <0){
        alert(-1);
    }else {
        alert(0);
    }
}

