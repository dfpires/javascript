function calcularMedia(){
    var tipo;
    var i;
    var qtde;
    var soma = 0;
    var media;
    var conta = 0;
    for(i=0;1<2;i++){
        tipo = prompt("Informe tipo");
        qtde = Number(prompt("Informe qtde"));
        if (tipo == "medalha"){
            continue; 
            // desconsidera o que tem pra baixo
            // volta para a próxima iteração do for
        }
        if (qtde == 0){
            break; // sai do for
        }
        soma = soma + qtde; // soma += qtde
        conta++;
    }
    // calcula média
    media = soma / conta; 
    alert("A média é " + media);
}