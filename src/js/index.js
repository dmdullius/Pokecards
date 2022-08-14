/* 
  
1- tornar responsivas as setas

  2- fazer GET/POST do elemento html das setas

  3- colocar um event listener para captar o clique do user 
  
  */

/*------------------------------------------------------*/

/*1*/

const btn1 = document.getElementById("btna");

const btn2 = document.getElementById("btnv");

const cards = document.querySelectorAll(".card-bg");

let cardatual = 0;

var cardstmp = document.querySelector(".selecionado");

btn1.addEventListener("click", function () {
  if (cardatual === cards.length - 1) return;

  cardatual++;
  cards[cardatual].classList.add("selecionado");
});

btn2.addEventListener("click", function () {
  cardatual = 2;
  cards[cardatual].classList.remove("selecionado");
  cardatual--;
  cards[cardatual].classList.remove("selecionado");
  cardatual--;
  cards[cardatual].classList.add("selecionado");

});
