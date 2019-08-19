function exe2(){
    var nota1, nota2, media;
    var mensagem;
    // entrada de dados
    nota1= Number(document.getElementById("nota1").value);
    nota2= Number(document.getElementById("nota2").value);
    // processamento
    media = (nota1 + nota2) / 2;
    if ((media >= 7) && (media <= 10)){
        mensagem = "Aprovado";
    }
    else if ((media >=3) && (media < 7)){
            mensagem = "Exame";
        }
        else if ((media >= 0) && (media < 3)){
                mensagem = "Reprovado";
            }
            else {
                mensagem = "Média impossível de calcular";
            }
    document.getElementById("resultado").innerHTML = mensagem;
}