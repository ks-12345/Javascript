
 let produtos = [];

function Mercado() {
    let produtos = parseFloat(prompt ("Digite a quantidade de produtos que você comprou:"))
    let conta = prompt ("Você tem conta Clube Mercado+? (sim ou nao)")

    if (produtos >= 15 && conta === "sim") {
      alert("Voce teve direito ao desconto de 25%!");
    } else {
      alert("Voce infelimente nao teve direito ao descontos!");
    }
        Mercado.push({ produtos });
    }

        Mercado();