let idade = [];

function dirigir() {
    let idade = parseFloat(prompt ("Digite a sua idade:"))
    let habilitaçao = prompt ("Você tem habilitação? (sim ou nao)")

    if (idade >= 18 && habilitaçao === "sim" ) {
    alert("Você pode dirigir!"); 
    } else { 
        alert("Você não pode dirigir!");
    }
        dirigir.push({ idade, dirigir });
    }

dirigir();
