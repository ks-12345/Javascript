let contador = 0;
let menos = contador - 1;
let resultado = document.getElementById('resultado')
function contar() {
    contador++
    resultado.innerHTML = `<p> Agora o contador esta em <mark> ${contador} </mark>.</p>`
}

function zerar() {
contador = 0
 resultado.innerHTML = '<p> O contador foi zerado.</p>'
}

function diminuir() {
  resultado.innerHTML = `<p> Agora o contador esta em <mark> ${menos} </mark>.</p>`;
}
