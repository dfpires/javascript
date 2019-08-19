function exe14(){
    var salario, aumento, percAumento, novoSalario;
    // entrada de dados
    salario = Number(document.getElementById("salario").value);
    if (salario <= 300){
        percAumento = 50; 
    }
    else if ((salario > 300) && (salario <= 500)){
            percAumento = 40;
        }
        else if ((salario > 500) && (salario <= 700)){
                percAumento = 30;
            }
            else if ((salario > 700) && (salario <= 800)){
                    percAumento = 20;
                }
                else if ((salario > 800) && (salario <= 1000)){
                        percAumento = 10;
                     }
                     else {
                        percAumento = 5;
                     }
    aumento = salario * percAumento / 100
    novoSalario = salario + aumento;
    document.getElementById("resultado").innerHTML = novoSalario;
}