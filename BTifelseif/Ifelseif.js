let userName = prompt("bạn là ai?", '');
if (userName == 'Admin') {
    let pass = prompt('nhập mật khẩu?', '');
    if (pass == 'long1') {
        alert('Xin chào!');
    } else if (pass == null) {
        alert('Hủy lệnh.');
    } else {
        alert("mật khẩu sai ");
    }
} else if (userName == null) {
    alert("Hủy lệnh");
} else {
    alert("tôi không biết bạn");
}