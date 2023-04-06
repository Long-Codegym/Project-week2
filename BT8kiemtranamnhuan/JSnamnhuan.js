function kiemtranamnhuan() {
    let years = parseInt(document.getElementById("ynam").value);
    if (years % 4 ==0) {
        if (years % 100 == 0) {
            if (years % 400 == 0) {
                ketqua = (years + " năm nhuận");
            } else {
                ketqua = (years + " năm không nhuận");
            }

        } else {
            ketqua = (years + " năm nhuận" );
        }
    } else {
        ketqua = (years + " năm không nhuận" );
    }
    document.getElementById("ketqua").innerHTML = ketqua;
}








