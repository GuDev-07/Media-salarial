function calcularMedia(){
    const mes1 = document.querySelector(".mes1").value || "Digite o mês";
    const mes2 = document.querySelector(".mes2").value || "Digite o mês";
    const mes3 = document.querySelector(".mes3").value || "Digite o mês";
    const mes4 = document.querySelector(".mes4").value || "Digite o mês";


    const salario1 = parseFloat(document.getElementById("salario1").value || 0);
    const salario2 = parseFloat(document.getElementById("salario2").value || 0);
    const salario3 = parseFloat(document.getElementById("salario3").value || 0);
    const salario4 = parseFloat(document.getElementById("salario4").value || 0);

    const media = (salario1 + salario2 + salario3 + salario4) / 4; //Calcula a media
    const mensagem = `A média dos 4 meses foi R$${media.toFixed(2)}.`;

    if (media <= 1500){
        console.log("mensagem");
    }
    
    else if (media >= 1600 && media <= 2000){
        console.log("mensagem");
    }
    
    else if (media >= 2500) {
        console.log("mensagem");
    }

    else if (media >= 3000){
        console.log("mensagem");
    }

    document.getElementById("resultado").innerHTML = `<p>Média: R$${media.toFixed(2)}</p><p>${mensagem}</p>`;
    
}

