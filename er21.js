function exe21(){
    var voto;
    var qtde1 = 0, qtde2 = 0, qtde3 = 0, qtde4=0;
    var qtde5 = 0, qtde6 = 0; 
    var total;
    voto = Number(prompt("Informe um voto"));
    do { // faça
        switch(voto){
            case 1: qtde1++; break; //sai do switch
            case 2: qtde2++; break; //sai do switch
            case 3: qtde3++; break; //sai do switch
            case 4: qtde4++; break;  //sai do switch
            case 5: qtde5++; break; //sai do switch
            case 6: qtde6++; break; //sai do switch
            default: alert("Voto inválido")
        }
            
        voto = Number(prompt("Informe um voto. Digite 0 para encerrar"));      
    }
    while (voto != 0); // enquanto
    total = qtde1 + qtde2 + qtde3 + qtde4 + qtde5 + qtde6;       
    alert("C1 " + qtde1 + " C2 " + qtde2 + " C3 " + qtde3 + 
    " C4 "+ qtde4);
    alert("Nulos " + qtde5 + " Brancos " + qtde6);
    alert("% de nulos " + qtde5/total*100) 
    alert("% de brancos " + qtde6/total*100) 

}