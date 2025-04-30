let media = [];

function notamedia() {
  const nota1 = document.getElementById("nota1").value.toLowerCase();
  const nota2 = document.getElementById("nota2").value.toLowerCase();
  const nota3 = document.getElementById("nota3").value.toLowerCase();
  const trabalho = document.getElementById("trabalho").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  let media = (nota1 + nota2 + nota3 + trabalho) / 4;
  if (media === 0) {
    document.getElementById("notamedia").innerHTML = "<h2> reprovado.</h2>";
    return;
  }
if else (media => 6) {
     document.getElementById("pedido").innerHTML =
      "<h2>Nenhum item selecionado.</h2>";

}

  document.getElementById("notamedia").innerHTML = `<h2>Sua Media é: ${media}</p>
    <p>Voce esta ${situaçao}</p>`;
}
