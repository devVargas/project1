mensagemInicial();

let numeroSecreto = parseInt(Math.random() * 10 + 1);
let tentativas = 1;

document.getElementById('btnValidar').addEventListener('click', function() {

    let chute = parseInt(document.getElementById('inputNumero').value);
    
    if (isNaN(chute) || chute < 1 || chute > 100) {
        alert('Por favor, digite um número válido entre 1 e 100');
        return;
    }

    if (chute === numeroSecreto) {
        tagHtml('h1', 'ACERTOOOOOOOOOOOU');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        tagHtml('p', `Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            tagHtml('h1', `O número secreto é menor que ${chute}.`)
        } else {
            tagHtml('h1', `O número secreto é maior que ${chute}.`)
        }
        tentativas++;
    }

    document.getElementById('inputNumero').value = '';
});

function limpaCampos() {
    chute = document.getElementById('InputNumero').value = '';
}

function reiniciarJogo() {
    numeroSecreto = parseInt(Math.random() * 10 + 1);
    limpaCampos;
    tentativas = 1;
    mensagemInicial();  
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function pulaLinha(){
    document.write('<br>');
}

function exibirMensagem(texto){
    document.write(texto);
    pulaLinha();
}

function tagHtml(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    tagHtml('h1', 'Jogo do número secreto');
    tagHtml('p', 'Escolha um número entre 1 e 10');
}