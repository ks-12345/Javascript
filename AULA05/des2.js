const numeros= require("readline");

const num = numeros.createInterface({
 input: process.stdin,
  output: process.stdout,
}); 

num.question("Digite o primeiro numero: ", (num1) => {
    num.question("Digite o segundo numero: ", (num2) => {
        num.question("Digite o primeiro numero: ", (num3) => {
            let soma = Number (num1) + Number (num2) + Number(num3);
            console.log(`A soma dos numeros è: ${soma}`);
})}) 

