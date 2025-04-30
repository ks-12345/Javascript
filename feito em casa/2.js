


function media() {
  let nome = window.prompt("Qual o seu nome?");
  let n1 = Number(window.prompt(`Qual a sua Idade?`));

  let res = document.getElementById(`situaçao`);
  res.innerHTML = `<p>Seu nome è: ${nome} e sua Idade è :${n1}.</p>`;
}

