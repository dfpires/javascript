function vet5(){
    var logica = []
    var linguagem = []
    // entrada de dados
    for(var i=0;i<10;i++){
        logica.push(Number(prompt("Código do aluno")))
    }
    for(var i=0;i<5;i++){
        linguagem.push(Number(prompt("Código do aluno")))
    }
    // intersecção
    var interseccao  = []
    for(var i=0;i<10;i++){
        if (linguagem.indexOf(logica[i]) != -1){ // está presente
            interseccao.push(logica[i])
        } 
    }
    alert(interseccao)
}