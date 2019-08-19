
function maximizar(){
    var preco;
    var qtde = 120
    var lucro;
    var saida = "Resultado: "
    var lucroMaximo = 0;
    var precoMaximo = 0;
    for(preco = 5.0; preco >= 1.0; preco = preco - 0.50){
        lucro = preco * qtde - 200
        if (lucro > lucroMaximo){
            lucroMaximo = lucro;
            precoMaximo = preco;
        }
        saida = saida + "\n Lucro com preço = " + preco + " = " + lucro;
        qtde = qtde + 26;
    }
    alert(saida + "\n Lucro máximo " + lucroMaximo + "Preço " +
        precoMaximo);
}