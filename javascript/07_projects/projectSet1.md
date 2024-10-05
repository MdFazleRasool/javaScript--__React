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

``` javascript 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
      >Youtube channel</a
    >
  </nav>
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
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


## project 5 - unlimited color change
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