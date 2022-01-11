
function soSanhSoNguyen(){
    var soThuNhatVl = document.getElementById("soThuNhat").value*1;
    var soThuHaiVl = document.getElementById("soThuHai").value*1;
    var soThuBaVl = document.getElementById("soThuBa").value*1;

    if (soThuNhatVl >= soThuHaiVl && soThuNhatVl>=soThuBaVl){
        if (soThuHaiVl>=soThuBaVl){
            document.getElementById("xuatKetQua").innerText = "So Thu Tu Tang Dan La:  " + soThuBaVl + "   " + soThuHaiVl + "   " + soThuNhatVl;
        }else{
            document.getElementById("xuatKetQua").innerText = "So Thu Tu Tang Dan La:  " + soThuHaiVl + "   " + soThuBaVl + "   " + soThuNhatVl;
        }
    }else if(soThuHaiVl>=soThuNhatVl&& soThuHaiVl>=soThuBaVl ){
        if(soThuNhatVl>=soThuBaVl){
            document.getElementById("xuatKetQua").innerText = "So Thu Tu Tang Dan La:  " + soThuBaVl + "   " + soThuNhatVl + "   " + soThuHaiVl;
        }else{
            document.getElementById("xuatKetQua").innerText = "So Thu Tu Tang Dan La:  " + soThuNhatVl + "   " + soThuBaVl + "   " + soThuHaiVl;
        }
    }else{
        if (soThuNhatVl>=soThuHaiVl){
            document.getElementById("xuatKetQua").innerText = "So Thu Tu Tang Dan La:  " + soThuHaiVl + "   " + soThuNhatVl + "   " + soThuBaVl;
        }else{
            document.getElementById("xuatKetQua").innerText = "So Thu Tu Tang Dan La:  " + soThuNhatVl + "   " + soThuHaiVl + "  " + soThuBaVl;
        }
    }

}