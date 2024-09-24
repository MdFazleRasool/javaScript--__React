let a = 10
const b = 20
var c  = 30
console.log(a ,b,c)


if(true){
   let a = 10
   const b = 20
   var c  = 30
   console.log(a)
   console.log(b)
   console.log(c)

}

console.log(c)

// for(let i =0;i<array1.length;i++){
//    const ele = array[i];
// }

/* diiferenece between vs code glpbal scope and  global scope in console */

//nested scope example

function one() {
   const username="fazle"
   function two(){
      const website = "youtube"
      console.log(username)
   }
   // console.log(website) cant access outside the scope
   two()
}
one()

if(true){
   const username = "fazle"
   if(username == "fazle"){
      const website = " youtube";
      console.log(username+website)
   }
   // console.log(website) not defied error
}
// console.log(username)  not defied error

// ++++++ interesting  +++++++++++
console.log(addone(5));
function addone(num){  // function can be accessed anywhere
   return num+1;
}
console.log(addone(5));



// console.log(addTwo(5));
const addTwo = function (num){   // this type of declaration can only acces the function after not before initialisatioon
   return num+1;
}
console.log(addTwo(5));


/* Arrow function and This function */


const user001 = {
   username : "fazle",
   price : 999,
   welcomeMessage : function()  {
      console.log(`${this.username} , welcome to website`);
      console.log(this)
   }
}
user001.welcomeMessage()
user001.username="faz"
user001.welcomeMessage()
console.log(this)


// browser kai andar jo global object hai wo hai window object 


function three(){
   let username= "mfr"
   console.log(this.username)
   console.log(this);
}
three()

const four= function(){
   let username= "mfr"
   console.log(this.username)
   console.log(this);
}
four()



// Arrow function
const five = () => {
   let username = "fazle";
   console.log(this.username)
   console.log(this);
}
five()

// Arrow function basic syntax  and three forms

const addTwo001 = (num1 , num2) => {
   return num1+num2;

}
console.log(addTwo001(1,2))

const addTwoThree = (num1 , num2 , num3) => (num1+num2+num3);
console.log(addTwoThree(1,2,3))

const addoneone = (num1 , num2 ) => (num1+num2);
console.log(addoneone(1,9))

const  str = (num1 , num2 ) => ({username:"hitesh"})
console.log(str(1,2))


const myArray = [1,2,3,4,5,6,7]
myArray.forEach(function () {})
myArray.forEach( () => {})





//  Immediately Invoked function Expression  (I.I.F.E)

(function name(){
   console.log(`I.I.F.E used`);
})()

// why do we use IIFE?
// to get immediate declaration and to prevent from the global variable pollution

( () => {
   console.log(`I.I.F.E used`);
})()


