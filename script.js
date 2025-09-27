let campoChute = document.getElementById("campoChute");
let botaoChutar = document.getElementById("botaoChutar");
let mensagem = document.getElementById("mensagem");


let numeroSecreto;

function iniciarjogo(){
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    mensagem.textContent = "";
    campoChute.value = "";
    botaoChutar.textContent = "Chutar!";
    
    campoChute.disabled = false;
    campoChute.focus();
    botaoChutar.removeEventListener('click', iniciarjogo);
    botaoChutar.addEventListener("click", verificarChute);

console.log (numeroSecreto)
}

function verificarChute() { 
    let chute = parseInt (campoChute.value);

    if (isNaN(chute) || chute < 1 || chute > 100) {
        mensagem.textContent = "Por favor, digite um numero entre 1 e 100"
        mensagem.style.color = '#ff0000ff'

        campoChute.value = '';
        return;
    }

    if (chute === numeroSecreto){
        mensagem.textContent = " parabens voce acerto essa merda, cagado! " + numeroSecreto + "!"
        mensagem.style.color = '#17ff02ff'
        finalizarJogo ();
    } else if (chute < numeroSecreto) {
        mensagem.textContent = "Muito baixo! tente um numero maior."
        mensagem.style.color = '#c24e00cc'
    } else if (chute > numeroSecreto) {
        mensagem.textContent = "Muito alto! tente um numero menor."
        mensagem.style.color = '#ff8800ff'
    }

    campoChute.value = '';
    campoChute.focus();    
}

function finalizarJogo () {
    campoChute.disabled = true;

    botaoChutar.textContent = 'Jogar novamente'

    botaoChutar.removeEventListener('click', verificarChute);
    botaoChutar.addEventListener('click' , iniciarjogo);
}
iniciarjogo();