function calcular () {
  let valor = parseFloat(prompt ("Digite o valor do produto"));
  let pagamento= prompt("Digite a forma de pagamento: \n Debito \n Credito \n Dinheiro");

  
if (pagamento === "dinheiro") {
  let troco = parseFloat(prompt("Digite o valor do pagamento:"));
    let dc = document.getElementById('dinheiro');
    
    if (dc) {
      let d = troco - valor;
      dc.innerHTML = `<p> Produto: ${valor} <br>
      Dinheiro: ${troco} <br>
      O valor do troco é : ${d}<p>`;
    
    } else {
    alert("Forma de pagamento não suportada.");
}
}}






  