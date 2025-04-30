let mecanica = [];

function menu() {
  const mecanica = `<p><strong>MECÂNICA DO ZÉ!</strong><br> 
Troca de óleo: R$250,00 <br>
Alinhamento e balanceamento: R$150,00<br>
Troca de pastilhas de freio: R$210,00<br>
Revisão geral: R$1.200`;
  document.getElementById("resultado").innerHTML = mecanica;
}

function fazerPedido() {
  const oleo = document.getElementById("oleo").value.toLowerCase();
  const bale = document.getElementById("bale").value.toLowerCase();
  const freio = document.getElementById("freio").value.toLowerCase();
  const geral = document.getElementById("geral").value.toLowerCase();
  const resultado = document.getElementById("resultado");

    let total = oleo * 250 + bale * 150 + freio * 210 + geral * 1.200;

  if (total === 0 ) {
    document.getElementById("pedido").innerHTML =
      "<h2>Nenhum item selecionado.</h2>";
    return;
  }
let compra = total
  document.getElementById("pedido").innerHTML = `<h2>Seu pedido é:</h2>
    <p>Troca de óleo:${oleo}<br>
    Alinhamento e balanceamento: ${bale}<br>
   Troca de pastilhas de freio: ${freio}<br>
 Revisão geral: ${geral}<br>
    Total: R$ ${total.toFixed(2)}</p>
`;
}
