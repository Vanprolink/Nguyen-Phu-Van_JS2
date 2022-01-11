

function kiemTra(){
    var soT1Value = document.getElementById("soT1").value*1;
    var soT2Value = document.getElementById("soT2").value*1;
    var soT3Value = document.getElementById("soT3").value*1;

    if(soT1Value%2 == 0){
        var soChanT1 = 1*1;
        var soLeT1 = 0*1;
    }else{
        var soLeT1 = 1*1;
        var soChanT1 = 0*1;
    }
    if(soT2Value%2 == 0){
        var soChanT2 = 1*1;
        var soLeT2 = 0*1;
    }else{
        var soLeT2 = 1*1;
        var soChanT2 = 0*1;
    }
    if(soT3Value%2 == 0){
        var soChanT3 = 1*1;
        var soLeT3 = 0*1;
    }else{
        var soLeT3 = 1*1;
        var soChanT3 = 0*1;
    }
    
    var tongChan = soChanT1 + soChanT2+soChanT3;
    var tongLe = soLeT1+soLeT2+soLeT3;
    document.getElementById("xuatKetQua").innerText = "Số Chẵn Là:  " + tongChan  +"   " + "Số Lẻ Là:   " + tongLe;
}