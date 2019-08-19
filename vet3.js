function vet3(){
    var codigos = [] // vetor de códigos
    var estoque = [] // vetor de estoque
    var i
    // entrada de dados
    for(i=0;i<10;i++){
        codigos.push(Number(prompt("Informe o código do produto")));
        estoque.push(Number(prompt("Informe a qtde do produto ")));
    }
    // processamento
    var cliente = Number(prompt("Informe o código do cliente"));
    while (cliente != 0){
        var codProduto = Number(prompt("Informe o código do produto"));
        var qtdeProduto = Number(prompt("Informe a qtde do produto"));
        // retorna posição no vetor
        var auxIndice = codigos.indexOf(codProduto)
        if ( auxIndice == -1){ //  não existe
            alert("Produto não existe")
        }
        else {
            // tem em estoque
            if (estoque[auxIndice] - qtdeProduto >= 0){
                estoque[auxIndice] = estoque[auxIndice] - qtdeProduto
                alert("Produto comprado com sucesso")
            }
            else {
                alert("Não tem estoque")
            }
        }
        cliente = Number(prompt("Informe um novo código do cliente." + 
                    " Digite 0 para encerrar"));
    }
    // saída de dados
    alert("Estoque atualizado " + estoque)
}