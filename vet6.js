function vet6(){
    // declaração dos vetores
    var nomes = []
    var vendas = []
    var comissoes = []
    // entrada de dados
    for(var i=0;i<5;i++){
        nomes.push(prompt("Informe nome"))
        vendas.push(Number(prompt("Informe o total de vendas")))
        comissoes.push(Number(prompt("Informe comissão")))
    }
    // processamento
    var receber = []
    for(var i=0;i<5;i++){
        receber.push(vendas[i] * comissoes[i] / 100)
    }
    alert(nomes + "\n" + receber)
    alert(nome + "\n" + vendas)
    var maior = receber[0]
    var menor = receber[0]
    var nomeMaior, nomeMenor
    for(var i=0;i<5;i++){
       if (receber[i] > maior){
           maior = receber[i]
           nomeMaior = nomes[i];
       }
       if (receber[i] < menor){
           menor = receber[i]
           nomeMenor = nomes[i];
       }
    }
    alert("Maior valor " + nomeMaior + " - " + maior)
    alert("Menor valor " + nomeMenor + " - " + menor)
}