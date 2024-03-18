const pedido = document.querySelector(".pedido");
const aceitado = document.querySelector(".aceitado");
const botoes = document.querySelectorAll(".botoes button");

let positivoOuNegativo = ["-", "+"];

function aceitar() {
  aceitado.style.display = "flex";
  pedido.style.display = "none";
}

function recusar() {
  let posicoes = [Math.floor(Math.random() * 701), Math.floor(Math.random() * 350)];

  let simboloAleatorio = Math.floor(Math.random() * positivoOuNegativo.length);

  if (simboloAleatorio == 0) {
    botoes[1].style.transform = `translate(-${posicoes[0]}px, ${posicoes[1]}px)`;  
  }else {
    botoes[1].style.transform = `translate(${posicoes[0]}px, -${posicoes[1]}px)`;  
  }
}

botoes[1].addEventListener("click", () => {
  botoes[1].removeEventListener("mouseover", recusar);

  let posicoes = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 350)];

  let simboloAleatorio = Math.floor(Math.random() * positivoOuNegativo.length);

  if (simboloAleatorio == 0) {
    botoes[1].style.transform = `translate(-${posicoes[0]}px, ${posicoes[1]}px)`;  
  }else {
    botoes[1].style.transform = `translate(${posicoes[0]}px, -${posicoes[1]}px)`;  
  }
});