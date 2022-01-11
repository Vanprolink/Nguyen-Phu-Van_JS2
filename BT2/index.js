function nhanNao(){
    var chaoValue = document.getElementById("cars").value;
    switch (chaoValue){
        case "B":
            document.getElementById("xuatKetQua").innerText = "Xin chao Ba";
            alert("Xin chao Ba");
        break
        case "M":
            document.getElementById("xuatKetQua").innerText = "Xin chao Me";
            alert("Xin chao Me");
        break
        case "A":
            document.getElementById("xuatKetQua").innerText = "Xin chao Anh Trai";
            alert("Xin chao Anh Trai");
        break
        case "E":
            document.getElementById("xuatKetQua").innerText = "Xin chao Em Gai";
            alert("Xin chao Em Gai");
        break

        default:
            alert("moi ban nhap lai");
    }
}