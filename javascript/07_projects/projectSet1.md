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

 
``` javaScript

const clock = document.getElementById('clock');

// const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
