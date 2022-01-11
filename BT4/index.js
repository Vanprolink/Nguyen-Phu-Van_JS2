function soSanh(){
    var canhAVl = document.getElementById("canhA").value*1;
    var canhBVl = document.getElementById("canhB").value*1;
    var canhCVl = document.getElementById("canhC").value*1;
    if((canhAVl == canhBVl) && (canhBVl == canhCVl) &&(canhCVl == canhAVl))
    {
        document.getElementById("xuatKetQua").innerText = "Đây là tam giác đều";
        alert("Đây là tam giác đều");
    }else if ((canhAVl == canhBVl) || (canhBVl == canhCVl) || (canhCVl == canhAVl)){
        document.getElementById("xuatKetQua").innerText = "Đây là tam giác cân";
        alert("Đây là tam giác cân");
    }else if ((canhAVl*canhAVl + canhBVl*canhBVl == canhCVl*canhCVl) || (canhCVl*canhCVl + canhBVl*canhBVl == canhAVl*canhAVl) || (canhAVl*canhAVl + canhCVl*canhCVl == canhBVl*canhBVl))
    {
        document.getElementById("xuatKetQua").innerText = "Đây là tam giác vuông";
        alert("Đây là tam giác vuông");
    }else{
        document.getElementById("xuatKetQua").innerText = "Đây là tam giác bình thường";
        alert("Đây là tam giác bình thường");

    }


}