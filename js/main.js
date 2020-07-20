"use strict";
//Función para conseguir el número random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Constantes
const randomNumber = getRandomNumber(100); //Constante para almacenar el número aleatorio
console.log("Mi número aleatorio es: ", randomNumber); //Logueamos el número para dejarlo guardado en la consola

// handle event
const submitBtn = document.querySelector(".js-submit");
const number = document.querySelector(".js-number");
const clue = document.querySelector(".js-clue");
const counter = document.querySelector(".js-counter");
const reset = document.querySelector(".js-reset");

function handleSubmitBtn(ev) {
  ev.preventDefault();
  updateClue();
  updateCounter();
}

function updateClue() {
  const numberValue = parseInt(number.value);
  /*Hacemos parseInt para convertir el número procedente del html en número, 
    ya que al venir del html, se procesa como texto*/
  if (numberValue <= 0 || numberValue > 100) {
    console.log("El número debe ser mayor de 0 y menor de 100");
    clue.innerHTML = "El número debe ser mayor de 0 y menor de 100";
  } else if (numberValue < randomNumber) {
    console.log("Es menor");
    clue.innerHTML = "Demasiado bajo";
  } else if (numberValue > randomNumber) {
    console.log("Es mayor");
    clue.innerHTML = "Demasiado alto";
  } else if (numberValue === randomNumber) {
    console.log("Es igual");
    clue.innerHTML = "Has ganado campeona!!!";
  } else if ((numberValue = undefined)) {
    console.log("Está vacío");
    clue.innerHTML = "Pero inténtalo con algún número Maricarmen!!!";
  }
}

function updateCounter() {
  let counterAttempts = parseInt(counter.innerHTML);
  console.log(counterAttempts);
  counter.innerHTML = counterAttempts + 1;
}

//En un código laboral, borraríamos los console.log, pero aquí los vamos a dejar para poder jugar con ellos más adelante.
submitBtn.addEventListener("click", handleSubmitBtn); //No ponemos paréntesis para ejecutar la función porque queremos que se ejecute con la función manejadora a través del navegador

//Creamos función para el resetButton
function resetButton() {
  let counterAttempts = parseInt(counter.innerHTML);
  console.log(`Soy un reset reshulón`);
  counter.innerHTML = counterAttempts = 0;
  clue.innerHTML = "Escribe al número y dale a Prueba";
  getRandomNumber(100);
}

//Further challenges
// Then you can improve the game as you please, here you have some ideas:

// Add new feedback when the number is bigger than 100 or smaller than 0.
// Manage when the user hits the button and the input is empty.
// Make the input work when hitting enter key.
// Add a reset button that cleans the input, the counter, writes the initial feedback and generates a new random number to play again!
// Whatever you want!
reset.addEventListener("click", resetButton);
