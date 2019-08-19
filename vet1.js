function calcula1(){
    let i
    let vet = []
    let pares = []
    let impares = []
    // leitura dos dados
    for(i=0;i<6;i++){
        vet.push(Number(prompt("Informe um número")))
    }
    // verifica os pares e ímpares
    for(i=0;i<6;i++){ // percorre o vetor
        if (vet[i] % 2 == 0){ // par
            pares.push(vet[i]);
        }
        else { // ímpar
            impares.push(vet[i]);
        }
    }
    alert(pares + " - " + pares.length)
    alert(impares + " - " + impares.length)
}
function calcula2(){
    let i
    let vet = []
    let mult2 = []
    let mult3 = []
    let mult23 = []
    // leitura dos dados
    for(i=0;i<7;i++){
        vet.push(Number(prompt("Informe um número")))
    }
    // verifica os múltiplos de 2, 3 e 2 e 3
    for(i=0;i<7;i++){ // percorre o vetor
        if (vet[i] % 2 == 0){ // multiplo de 2
            mult2.push(vet[i]);
        }
        if (vet[i] % 3 == 0){ // multiplo de 3
            mult3.push(vet[i]);
        } 
        if ((vet[i] % 2 == 0) && (vet[i] % 3 == 0)){ // multiplo de 2 e 3
            mult23.push(vet[i]);
        }
    }
    alert(mult2 + " - " + mult2.length)
    alert(mult3 + " - " + mult3.length)
    alert(mult23 + " - " + mult23.length)
}
function calcula3(){
    let i
    let vet = []
    let posicoes = []
    // leitura dos dados
    for(i=0;i<15;i++){
        vet.push(Number(prompt("Informe um número")))
    }
    // verifica os elementos iguais a 30
    for(i=0;i<30;i++){ // percorre o vetor
        if (vet[i] == 30){ // par
            posicoes.push(i);
        }
    }
    alert(posicoes + " - " + posicoes.length)
}