function exe5(){
    var nro1, nro2, opcao, mensagem;
    // entrada de dados
    nro1 = Number(document.getElementById("nro1").value);
    nro2 = Number(document.getElementById("nro2").value);
    opcao = Number(document.getElementById("opcao").value);
    switch(opcao){
        case 1: mensagem = (nro1 + nro2) / 2;
                break;
        case 2: if (nro1 > nro2){
                    mensagem = (nro1 - nro2);
                }
                else {
                    mensagem = (nro2 - nro1);
                }
                break;
        case 3: mensagem = (nro1 * nro2);
                break;
        case 4: if (nro2 !=0 ){
                    mensagem = nro1 / nro2;
                }
                else {
                    mensagem = "Divisão por zero";
                }
                break;
        default: mensagem = "Opção inválida";
    }
    document.getElementById("resultado").innerHTML = mensagem;
}