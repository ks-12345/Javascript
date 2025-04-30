let a1 = parseFloat(prompt("Digite numeros de somas: "));
let a2 = parseFloat(prompt("Digite numeros de somas: "));

let numero = parseFloat(prompt(`Digite o numero ${a1 + a2}: `));

num.question("Digite o segundo numero: ", (num2) => {
        num.question("Digite o primeiro numero: ", (num3) => {
            let soma = Number (num2) + Number(num3);
            console.log(`A soma dos numeros è: ${soma}`);