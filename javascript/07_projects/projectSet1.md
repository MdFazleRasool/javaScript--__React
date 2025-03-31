#projects related to DOM

## Project LINK
https://stackblitz.com/edit/dom-project-chaiaurcode-brsvkr?file=1-colorChanger%2Fstyle.css,1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js


## Project 1
```JavaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (evnt) {
    console.log(evnt);
    console.log(evnt.target);
    if(evnt.target.id === 'grey'){
      body.style.backgroundColor=evnt.target.id;
    }
    if(evnt.target.id === 'white'){
      body.style.backgroundColor=evnt.target.id;
    }
    if(evnt.target.id === 'blue'){
      body.style.backgroundColor=evnt.target.id;
    }
    if(evnt.target.id === 'yellow'){
      body.style.backgroundColor=evnt.target.id;
    }
    if(evnt.target.id === 'purple'){
      body.style.backgroundColor=evnt.target.id;
    }
  });
});
```



## project 2 - BMI calculator
``` javascript

const form = document.querySelector('form');

// this usecase will give you empty values
//const height = (document.querySelector('#height').value);

form.addEventListener('submit', function (evnt) {
  console.log(evnt);
  evnt.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  }
  // results.innerHTML=`${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  }
  // results.innerHTML=`${weight}`;
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(3);
    //show the bmi result now
    results.innerHTML = `<span>${bmi}<span`;
  }
});
```

## project 3 - Digital Clock
``` javaScript

const clock = document.getElementById('clock');

// const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## project 4 - Number Guessing Game
``` javascript 

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


## project 5 - keyboard
``` javascript project 5

console.log('Project 5');
const insert = document.querySelector('#insert');

window.addEventListener('keydown',function (e){
    insert.innerHTML=`
      <div class='color'>
        <table>
        <tr>
          <th>key</th>
          <th>keycode</th>
          <th>code</th>
        </tr>
        <tr>
          <td>${e.key==' '?"space":e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.Code}</td>
        </tr>
        
      </table>
      </div>
    `
});

```




## project 6 - unlimited color change
``` javascript //project 6 not working
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  intervalId = setInterval(changeBgColor, 1000);
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
// console.log(randomColor());
document.querySelector('#start').addEventListener('click', startChangingColor);

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
