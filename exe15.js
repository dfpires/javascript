function exe15(){
    var tipo, rendimento, total, valor;
    // entrada de dados
    valor = Number(document.getElementById("valor").value);
    tipo = Number(document.getElementById("tipo").value);
    switch(tipo){
        case 1: rendimento = valor * 3/100;
                break;
        case 2: rendimento = valor * 4/100;
                break
        default: rendimento = "inválido"
    }
    if (rendimento == "inválido"){
        document.getElementById("resultado").innerHTML = 
                                    "Tipo inválido";
    }
    else {
        document.getElementById("resultado").innerHTML = 
                                    valor+rendimento;
    }
}