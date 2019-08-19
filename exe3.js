function exe3(){
    var nro1, nro2, menor;
    // entrada de dados
    nro1= Number(document.getElementById("nro1").value);
    nro2= Number(document.getElementById("nro2").value);
    if (nro1 < nro2){
        menor = nro1;
    }
    else if (nro2 < nro1){
            menor = nro2;
        }
        else {
            menor = "Não existe menor";
        }
    document.getElementById("resultado").innerHTML = menor;

}