const elevador = document.querySelector(".elevador");
const botoes_andar = document.querySelectorAll(".andar-botao");


let andar_atual = 0;

botoes_andar.forEach((button) => {
  button.addEventListener("click", () => {
    const andar_destino = parseInt(button.dataset.floor);

});


