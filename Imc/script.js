const calcular = document.getElementById('botao');
function cal() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resposta = document.getElementById('res');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    if (nome == '' || isNaN(altura) || isNaN(peso)) {
        resposta.innerHTML = 'Por favor, preencha todos os campos corretamente'
        return;
    }
    resposta.innerHTML = ''
    let imc = peso / (altura * altura);
    resposta.appendChild(p1)
    resposta.appendChild(p2)
    p1.innerHTML = `${nome}, seu IMC é: ${imc.toFixed(2)}`;
    
    if (imc < 18.5) {
        p2.innerHTML = `Abaixo do normal`
    }else if(imc < 24.9){
        p2.innerHTML = 'Normal'
    }else if(imc < 29.9){
        p2.innerHTML = 'Sobrepeso'
    }else if(imc < 34.9){
        p2.innerHTML = 'Obessidade grau I'
    }else if(imc < 39.9){
        p2.innerHTML = 'Obessidade grau II'
    }else{
        p2.innerHTML = 'Obessidade grau III'
    }

}
calcular.addEventListener('click', cal)