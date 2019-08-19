function exe1(){
    var nota1, nota2, nota3, nota4, media;
    var mensagem;
    // entrada de dados
    nota1= Number(document.getElementById("nota1").value);
    nota2= Number(document.getElementById("nota2").value);
    nota3= Number(document.getElementById("nota3").value);
    nota4= Number(document.getElementById("nota4").value);
    // processamento
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (media >= 7){
        mensagem = "Aprovado";
    }
    else {
        mensagem = "Reprovado";
    }
    document.getElementById("resultado").innerHTML = mensagem;
}

