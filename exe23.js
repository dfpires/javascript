function exe23(){
    var codigo, qtde, unitario, desconto, final;
    // entrada de dados
    codigo = Number(document.getElementById("codigo").value);
    qtde = Number(document.getElementById("qtde").value);
    // calcula valor unitário
    if ((codigo >= 1) && (codigo <= 10)){
         unitario = 10;   
    }
    else if ((codigo >= 11) && (codigo <= 20)){
            unitario = 15;
        }
        else if ((codigo >= 21) && (codigo <= 30)){
                unitario = 20;
            }
            else if ((codigo >= 31) && (codigo <= 40)){
                    unitario = 30;
                }
                else unitario = 0; // identifica que é inválido
    // calcula preço total
    total = unitario * qtde;
    // calcula desconto
    if (total == 0 ){
        document.getElementById("resultado").innerHTML = "Inválido";
    }
    else {
        if (total < 250){
            desconto = total * 5/100;
        }
        else if ((total >= 250) && (total <=500)){
                desconto = total * 10/100
            }
            else {
                desconto = total * 15/100
            }
        // calcula valor final
        final = total - desconto;
        document.getElementById("resultado").innerHTML = final
    }
}