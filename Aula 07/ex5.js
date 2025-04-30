function Compras() {
let preço = window.prompt("Digite o valor do produto: R$")
let porc = window.prompt("Digite o valor do desconto:")
let valor = (preço * porc) / 100
let total = preço - valor
let res = document.getElementById('result')


res.innerHTML = `<p>O produto custa R$${preço.toFixed(2)}.</p>`
res.innerHTML += `<p>Um desconto de ${porc}% sobre ele sera de R$${valor.toFixed(2)}.</p>`
res.innerHTML += `<p>O valor final a ser pago sera de R$${total}.</p>`
}