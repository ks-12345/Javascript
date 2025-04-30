let idades = [];

function votaçao() {
  let idade = parseFloat(prompt("Digite a sua idade:"));
  let nacionalidade = prompt("Qual a sua nacionalidade? (brasileiro ou estrangeiro)");

  if (idade >= 16 && nacionalidade === "brasileiro", "Brasileiro") {
    alert("Você pode votar!");
  } else {
    alert("Você não pode votar!");
  }

votaçao.push({ idade, votaçao });
}

votaçao();

