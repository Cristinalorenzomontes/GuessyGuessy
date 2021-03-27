'use strict';

const button = document.querySelector('.js-btn');
const replay = document.querySelector('.try-again-btn');
const track = document.querySelector('.js-track');
const attempts = document.querySelector('.js-attempts');
const inputValue = document.querySelector('.js-number');
const gyphOne = document.querySelector('.giphy-embed-one');
const gyphTwo = document.querySelector('.giphy-embed-two');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log('My random number is', randomNumber);

function updateTrack() {
  let feedback = '';
  const value = parseInt(inputValue.value);
  console.log(value);
  if (isNaN(value)) {
    feedback = 'You must introduce a number';
  } else {
    if (value >= 1 && value <= 100) {
      if (value > randomNumber) {
        feedback = 'Clue: Too high';
      } else if (value < randomNumber) {
        feedback = 'Clue: Too low';
      } else if (value === randomNumber) {
        feedback = 'You won!';
        gyphGenerator();
        replay.classList.remove('hidden');
        gyphTwo.classList.add('hidden');
        gyphOne.classList.add('hidden');
      }
    } else {
      feedback = 'Clue: The number must be between 1 and 100.';
    }
    updateCounter();
  }

  printFeedback(feedback);
}

function printFeedback(feedback) {
  track.innerHTML = feedback;
}

let attemptsTrying = 0;

function updateCounter() {
  attemptsTrying = attemptsTrying + 1;
  attempts.innerHTML = attemptsTrying;
  if (attemptsTrying > 2){
    gyphOne.classList.remove('hidden');
  } if (attemptsTrying > 4){
    gyphOne.classList.add('hidden');
    gyphTwo.classList.remove('hidden');
  }
}

function reload() {
  location.reload();
}

function handleSubmitEnter(ev) {
  if (ev.key === 'Enter') {
    ev.preventDefault();
    updateTrack();
  }
}

button.addEventListener('click', updateTrack);
replay.addEventListener('click', reload);
inputValue.addEventListener('keydown', handleSubmitEnter);

const api_key = "dc6zaTOxFJmzC"

function gyphGenerator () {
  fetch(`http://api.giphy.com/v1/gifs/search?q=win&api_key=${api_key}`)
  .then(response => response.json())
    .then(json => {
      json.data
        .map(gif => gif.images.fixed_height.url)
        .forEach(url => {
          let img = document.createElement('img')
          img.src = url
          document.body.appendChild(img)
        })
    })
    .catch(error => document.body.appendChild = error)
}