function calculaMedia(){
    var i;
    var qtde;
    var soma = 0;
    var media;
    var tipo;
    var contadora = 0;
    for(i=0; i< 30;i++){
       tipo = prompt("Digite o produto"); 
       qtde = Number(prompt("Digite a qtde de um produto"));
       if (tipo == "medalha"){
           // para para a próxima iteração do loop
           continue; 
           // desconsidera o que tem para baixo
       }
       if (qtde == 0){
            break; // sai do for
       }
       soma = soma + qtde;     
       contadora++;
    }
    media = soma / contadora;
    alert("A média é " + media.toFixed(2))
}