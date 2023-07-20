'use strict';

const check = document.getElementsByClassName('check')[0];

let nogenrate = Math.floor(Math.random() * 20 + 1);
console.log(nogenrate);

let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);

  if (!input) {
    displayMessage(`No Number ⛔⛔`);
  } else if (input === nogenrate) {
    displayMessage(' Correct Number 🎉✨');

    document.querySelector('.number').textContent = nogenrate;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (input !== nogenrate) {
    if (score > 1) {
      displayMessage(input > nogenrate ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  nogenrate = Math.floor(Math.random() * 20 + 1);
  console.log(nogenrate);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
