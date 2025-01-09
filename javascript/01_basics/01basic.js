
 
const  accountId=144553
let accountEmail="fazle@gmail.com"
var accountPassword="12345"
accountCity="jaipur"

console.log(accountCity)
// accountId=2 not allowed (run-time error)
console.log(accountId)
accountEmail="hc@gmail.com"
var accountCity="bengaluru"
accountPassword="545326734"
let accountstate
console.table([accountId,accountCity,accountEmail,accountstate])

console.table([accountCity]);

/* 
   prefer not to use var
   because of issue in block scope and functional scope
*/

 "use strict"; // treat all js code as newer version
console.log(3+3)

//alert(3+5); // we are using node.js not browser;

let score =undefined
/* type conversion  

"33" -> 33
   "33abc" -> NAN

*/
console.log(typeof score);
console.log(typeof (score));
 
/* Type Conversion */ 
let valueInNumber=Number(score);

/* Type Conversion  to Number

   "33" => 33
   "33abc" => NaN
   "fazle" => NaN
   null => 0
   undefined =>  NaN
   true => 1
   false => 0
*/ 

console.log(typeof valueInNumber)
console.log(valueInNumber)


let isLoggedIn = ""
/*  Type Conversion  to Boolean

   1 -> true; 
   0 -> false;
   "fazle" -> true
   "" -> false
 */
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33
let StringNumber = String(someNumber)
console.log(someNumber)
console.log(StringNumber)
console.log( typeof StringNumber)




// *********** Operations ************
console.log( "*********** Operations ************");

let value=3 ;
let negValue=-value ;
console.log(negValue) ;
console.log(2+2) ;
console.log(2-2) ;
console.log(2*2) ;
console.log(2**3) ;
console.log(2/2) ;
console.log(2%3) ;
console.log(2%2) ;

console.log("\n \n");

let str1="hello"
let str2=" fazle"
let str3= str1 + str2
console.log(str3)

console.log("\n \n") ;

console.log("1"+2);
console.log(1+"2");
console.log(1+"@");
console.log("1"+2+2);
console.log(2+2+"1"); //do not use this type
console.log((2+2)+"1");



// do not use this way
let num1,num2,num3;
num1=num2=num3=2+2
let gamecounter=100
gamecounter++;
console.log(gamecounter)
console.log(gamecounter++)
console.log(++gamecounter)

console.log("\n \n") ; 

// do not use this way
console.log(+true);
console.log(+"");




// comparisons
console.log("------comparisons--------");

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log("--------comparisons with different data types----------");

console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0) ;
                  /* the reason is that an equality check == and
                      comparison <,>,<=,>= work differently comparison converts null to a number treating it as a 0.
                      that's why (3) null >= 0 is true and (1) null > 0 is false */

console.log("\n \n") ; 

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);


console.log("\n \n") ; 
console.log("2" === 2); 
console.log("2" == 2);


console.log("\n \n") ; 
 
/* 

data types 
1 primitive  2 non-primitive(reference type)
1:-  7 types : String,Number,Boolean,null,undefined,Symbol,bigInt.
   

   2:-  Arrays,objects,functions.   */


const score12 = 100;
const score13 = 100.01;
const isLoggedIn1=false;
const outsideTemp=null;
let userEmail1;
const id = Symbol('123');
const anotherId=Symbol('123');
console.log(id == anotherId);

console.log("\n \n") ; 
 
const bigNumber = 234567123456789;
const bigNumber1 = 234567123456789n;
console.log(bigNumber);
console.log(bigNumber1);




//reference (non-primitive)
   //Array , Objects, Function

console.log("-------- Non Primitive ----------");

const heros = ["shaktiman" , "naagraj" , "doha"];

let Obj = {
   name:"fazle",
   age:22,
}

// function(){}

const myFunction= function(){
   console.log("fazle rasool using function in JS")
}

console.log(typeof heros)
console.log(typeof Obj)
console.log(typeof myFunction)


// 10 :-  memories in java script

/*  
   Stack(primitve) :-   copy type memory (do not changes original value)

   Heap(Non-primitive) :- refernce type memory (changes original value )
*/

//example for stack memory
let myYoutubename = "fazle.com"
anothername=myYoutubename
console.log(anothername)
anothername="fazleamity"
console.log(anothername)
console.log(myYoutubename)

console.log("\n \n") ; 
 
//example for heap memory

let user01 = {
   email : "fazleamity001.com",
   upi : "700@ybl",
}

let user02 =user01 ;
console.log(user01) ;
user02.email="frasool2020@gmail.com"  ;
console.log(user01) ;
console.log(user02) ;


console.log("\n \n");

/* Stack and Heap Memory Concept */

console.log("/* Stack and Heap Memory Concept */") ;
let myName = "Fazle";
let myTiltle = myName ;
myTiltle="Mfr";

console.log(myTiltle) ;
console.log(myName) ;

let user001 = {
   email : "fazleamity001.com",
   upi : "700@ybl",
}
let user002 = user001;
console.log( user001) ;
console.log(user002) ;
console.log("changing email using user002");

user002.email="frasool@gmail.com";

console.log(user001) ;
console.log(user002) ;

console.log("\n \n");


// 11 :-   Strings in java script


console.log("// Strings in java script") ;

const name1 = "fazle" ;
const repo=50 ;

console.log(name1+repo+"rasool") ;

console.log(`hello my name is ${name1} and my repo count is ${repo}`);

const myname = new String('MdFazleRasool') ;

console.log(typeof myname) ;

console.log(myname[0]+myname[2]+myname[7]);
console.log(myname.__proto__) ;

console.log(typeof myname.length) ;
console.log(myname.length) ;
console.log(myname.toUpperCase());
console.log(myname.charAt(2));

console.log("\n \n");

console.log(myname.indexOf('R')) ;
console.log(myname.indexOf('r')) ;

console.log("\n \n") ;

const newString = myname.substring(0,5) ;
console.log(newString) ;
const newString11 = myname.slice(-8,5) ;
console.log("fazle"+newString11) ;
console.log(myname.slice(-8,10)) ;

const newString3 = myname.substring(-8,5) ; // it will not consider -ve value  and starts from zero 
console.log(newString3) ;

console.log("\n \n");

const myname1 = new String('Md Fazle Rasool') ;
console.log(myname1.trim( )) ;

const url = "https://fazle.com/%20rasool" ;
console.log(url.replace('%20' , '-')) ;


console.log(url.includes('fazle')) ;
console.log(url.includes('fazle11')) ;

console.log(myname1.split(' ')) ;

console.log("\n \n"); 

// 12 :-  Numbers and maths in js

console.log("\n \n");

const score1=400 ;
const balance = new Number(400) ; // this declaration provides protoypes / methods , go to browser to check it 
console.log(score1) ;
console.log(balance) ;
console.log(balance.toString()) ;
console.log(typeof balance.toString()) ;
console.log(balance.toString().length) ;
console.log(balance.toFixed(2)) ;

console.log("\n \n");


const otherNumber=23.8966 ;
console.log(otherNumber.toPrecision(1)) ;
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000 ;
console.log(hundreds.toLocaleString()) ;
console.log(hundreds.toLocaleString('en-IN')) ;

// ******* math  *********

console.log("\n \n") ;

console.log(Math) ;
console.log(Math.abs(-5)) ;
console.log(Math.round(8.99)) ;
console.log(Math.ceil(8.11)) ;
console.log(Math.floor(8.99)) ;
console.log(Math.max(3,45,56,7,8)) ;
console.log(Math.min(3,45,56,7,8)) ;
console.log(Math.random()) ; // gives output btw 0 to 1
console.log(Math.random()*10) ;
console.log((Math.random()*10)+1) ;


const min = 10 ;
const max = 20 ;

console.log("\n \n")  ;

console.log(Math.random() * (max-min+1)+min) ;
console.log(Math.floor(Math.random() * (max-min+1))+min ,"fazle") ;


// 13 :-  date 

console.log("\n \n")  ;

let myDate = new Date() ;
console.log(myDate.toString()) ;
console.log(myDate.toDateString()) ;
console.log(myDate.toLocaleDateString()) ;
console.log(typeof myDate) ;

console.log("\n") ;
let myCreateddate =  new Date(2024,1,23) ;
console.log(myCreateddate.toDateString()) ;

console.log("\n") ;
let myCreateddate1 =  new Date("09-07-2024") ;
console.log(myCreateddate1.toDateString()) ;

console.log("\n time in js \n") ;

let mytime = Date.now()
console.log(mytime)

console.log(myCreateddate1.getTime()) ;
console.log(mytime.toString()) ;
console.log(mytime.toLocaleString()) ;

console.log("\n") ;

console.log(Math.floor(Date.now()/1000))

console.log("\n") ;

let newdate1 = new Date()
console.log(newdate1)
console.log(newdate1.getMonth()+1)
console.log(newdate1.getDay())

// `${newdate1.getDay()} and the time is `

newdate1.toLocaleString('default',{
   weekday:"long",
   
})

console.log("upto primitive data type")