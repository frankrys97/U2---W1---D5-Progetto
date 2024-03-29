const nav = document.querySelector("nav");
const navButton = document.querySelector("nav div button");

window.addEventListener("scroll", function () {
  if (window.scrollY < 450) {
    nav.classList.remove("nav-scrolled");
    navButton.classList.remove("nav-scrolled");
    nav.classList.remove("nav-transition");
    navButton.classList.remove("nav-transition");
  } else {
    nav.classList.add("nav-scrolled");
    navButton.classList.add("nav-scrolled");
    nav.classList.add("nav-transition");
    navButton.classList.add("nav-transition");
  }
});

// Vado a prendere l'elemento svg, dato che avremo una HTML collection, indico l'indice
// 0 come primo elemento!
let svg = document.getElementsByTagName("svg")[0];
// Dichiaro un array dove vado ad inserire tutti gli g contenuti nel primo figlio del secondo
// figlio dell'svg
let arraySVG = svg.children[1].children[0].children;
// Dichiaro un'array vuoto
let indexM = [];

// Ciclo sulla metà dell'array di g per prendere solo gli indici dispari
//, perchè sono quelli che contengono le mie M (sulla metà poichè essendo 560 elementi,
// se volessimo prendere tutti gli indici dispari supereremmo il numero stesso delle g
// nell'svg, quindi dividendo l'array per due avremo a disposizione un array con tutti gli
// indici dispari fino a 560)
// Il ragionamento è che arrivato all'indici 280 se lo moltiplicassimo per due + 1 ci darebbe
// un numero superiore a 560 e non troveremmo la g che stiamo cercando , quindi dividere a metà
// mi permette di prendere l'indice con valore massimo 559, poichè 279 * 2 + 1 da proprio
// 560
for (let i = 0; i < arraySVG.length / 2; i++) {
  indexM[i] = 2 * i + 1;
}

// Creo un set interval per far succedere quanto dichiarato nella funzione
// con un intervallo regolare

setInterval(function () {
  let randomIndex = Math.floor(Math.random() * indexM.length); // numero random preso e
  // moltiplicato per la lunghezza dell'array di numeri dispari
  let moveM = arraySVG[indexM[randomIndex]]; // prendo l'elemento di arraySVG
  // corrispondente al numeroin posizione random
  // nell'array di numeri dispari

  if (moveM.getAttribute("opacity") == 0) {
    // Se l'elemento trovato ha opacità uguale a 0
    // allora gliela assegno
    moveM.setAttribute("opacity", "1");
  } else {
    moveM.setAttribute("opacity", "0");
  } // altrimenti se ha opacità uguale a 1
  // gliela tolgo
}, 100);

// Riscrivo la funzione altre due volte per rendere l'effetto di animazione più dinamico
// per prendere più elementi alla volta

setInterval(function () {
  let randomIndex = Math.floor(Math.random() * indexM.length);
  let moveM = arraySVG[indexM[randomIndex]];
  if (moveM.getAttribute("opacity") == 0) {
    moveM.setAttribute("opacity", "1");
  } else {
    moveM.setAttribute("opacity", "0");
  }
}, 100);
setInterval(function () {
  let randomIndex = Math.floor(Math.random() * indexM.length);
  let moveM = arraySVG[indexM[randomIndex]];
  if (moveM.getAttribute("opacity") == 0) {
    moveM.setAttribute("opacity", "1");
  } else {
    moveM.setAttribute("opacity", "0");
  }
}, 100);
