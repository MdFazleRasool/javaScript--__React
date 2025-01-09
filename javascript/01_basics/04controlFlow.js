// 25     :-  How does js execute code + call stack

// 26     :-  controlflow

//if
//comparison operators  ===,==, <, >, <=, >=, !=, ! , == ;
const isuserLogin = true ;
if(isuserLogin){
   console.log("fazle" , "\n");
}else {
   console.log("fazlerasool" , "\n");
}

const debitCard = true 
if(isuserLogin && debitCard && 3=== "3"){
   console.log("true" , "\n");
}

//switch case  syntax
/*
switch (key) {
   case value:
      
      break;

   default:
      break;
}
*/
const month =1;
switch (month) {
   case 1:
      console.log("january" , "\n");
      break;
      case 2:
      console.log("february" , "\n");
      break;
      case 3:
      console.log("march" , "\n");
      break;

   default:
      break;
}
const month1 ="jan";
switch (month1) {
   case "jan":
      console.log("january" , "\n");
      break;
      case "jan":
      console.log("february" , "\n");
      break;
      case "mar":
      console.log("march" , "\n");
      break;

   default:
      break;
}



/*
falsy value :- 
               false , 0,-0, BigInt(0n), "",null,undefined,NaN;

truthy value :-
            "0",'0',{},[],function(){}," " , 'false' ;

*/


const useremail = {};
console.log(typeof useremail)
const useremail1 = [];
console.log(typeof useremail1)
if(useremail.length === 0){
   console.log("array is empty" , "\n")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){ //Object.keys(emptyObj) -> returns array
   console.log("Object   is empty" , "\n")
}


// Nullish Coalescing Operator(??) : null

let val1;
val1=5??10
console.log(val1 , "\n")

let val2;
val2=null??10
console.log(val2 , "\n")

let val3;
val3=null??10
console.log(val3 , "\n")

let val4;
val4=null??null
console.log(val4 , "\n")

val4 = null??10??20; 
console.log(val4 , "\n")

// Ternary Operator
// condition ? true : false

const iceTeaOrice =100;
iceTeaOrice >= 80 ? console.log("more than 80" , "\n") : console.log("less than 80" , "\n")

var a;
console.log(a , "\n");  // Output: undefined
a = 10;

// let b ;
// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// b = 20;


// console.log(c);  // Works fine
// const c = 30;

let name ;
console.log(typeof name , "\n");
