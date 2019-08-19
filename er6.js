function calcula(){
    var i;
    var idade, peso, altura, olhos, cabelos;
    var item1=0;
    var item3=0;
    var item4= 0;
    var item2 =0; var item2Qtde = 0;
    for(i=1;i<=6;i++){
        idade = Number(prompt("Informe idade da pessoa " + i));
        peso = Number(prompt("Informe peso da pessoa " + i));
        altura = Number(prompt("Informe altura da pessoa " + i));
        olhos = prompt("Informe cor dos olhos da pessoa " + i);
        cabelos = prompt("Informe cor dos cabelos da pessoa " + i);
        if ((idade > 50) && (peso < 60)){
            item1++;
        }
        if (olhos == "A"){
            item3++;
        }
        if ((cabelos == "R") && (olhos != "A")){
            item4++;
        }
        if (altura < 1.50){
            item2 = item2 + idade;
            item2Qtde++;
        } 
    }
    alert("Resposta do item 1 " + item1);
    alert("Resposta do item 2 " + item2/item2Qtde);
    alert("Resposta do item 3 " + item3/6*100);
    alert("Resposta do item 4 " + item4/6*100);
    
    

}


function brinca(){
    
}