let temperatura = parseFloat(prompt("Digite a temperatura: "));

if (temperatura >= 30) {
  console.log("Esta muito quente");
  //promt(temperatura);
} else if (temperatura >= 20) {
 console.log("Esta agradavel. ");
} else if (temperatura >= 10) {
  console.log("Esta frio. ");
} else {
  console.log("Esta muito frio. ");
  alert(temperatura);
}
