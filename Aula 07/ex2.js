function media() {
    let nome= window.prompt("Qual o nome do aluno?");
    let n1 = Number(window.prompt(`Qual foi a primeira nome de ${nome} ?`));
    let n2= Number(window.prompt(`Alem de ${n1}, Qual foi a outra nota de ${nome}` ));
med = (n1 + n2)/ 2;

let msg
if (med >= 6) {
    msg = "Meus Parabens!"
} else {
    msg = `Estude mais um pouco`
}

 let res = document.getElementById(`situaçao`)
 res.innerHTML = `<p>Calculando a media final de <mark>${nome}</mark>.</p>`
  res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
   res.innerHTML += `<p>A media final sera <mark>${med}</mark>.</p>`
    res.innerHTML += `<p> A mensagem que temos è: <strong style='color: ;'>${msg}</strong></p>`

}