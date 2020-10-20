var calcular = document.getElementById('calcular')

calcular.addEventListener('click', function(){
    var pesoTerra = document.getElementById('peso').value;
    var comboPlaneta = document.getElementById('planeta');
    var planeta = comboPlaneta.options[comboPlaneta.selectedIndex].value;
    var gravidade;

    console.log(planeta);
    
    switch (planeta) {
        case 'Mercúrio':
            gravidade = 0.37;
            break;
        case 'Vênus':
            gravidade = 0.88;
            break;
        case 'Marte':
            gravidade = 0.38;
            break;
        case 'Júpiter':
            gravidade = 2.64;
            break;
        case 'Saturno':
            gravidade = 1.15;
            break;
        case 'Urano':
            gravidade = 1.17;           
            break; 
        default: gravidade = 0;
    }

    
    console.log(gravidade);

    var pesoPlaneta = (pesoTerra / 10) * gravidade;
    resultado.innerText = "Seu peso no Planeta " + planeta + " é de " + pesoPlaneta + "kgs";
    
})