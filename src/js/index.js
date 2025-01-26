/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
     - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/

//OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
//cartao da lista

// Passo 1 - pegar os elementos HTML das setas avançar e voltar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// Passo 2 - identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return; // Evita avançar além do último cartão

    // Passo 4 - buscar o cartão que está selecionado e esconder
    const cartaoSelecionado = document.querySelectorAll(".selecionado");
    cartaoSelecionado[0].classList.remove("selecionado");

    // Passo 3 - fazer aparecer o próximo cartão da lista
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

// Passo 2 - identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return; // Evita voltar além do primeiro cartão

    // Passo 4 - buscar o cartão que está selecionado e esconder
    const cartaoSelecionado = document.querySelectorAll(".selecionado");
    cartaoSelecionado[0].classList.remove("selecionado");

    // Passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});
