
 
const  accountId=144553
let accountEmail="fazle@gmail.com"
var accountPassword="12345"
accountCity="jaipur"

console.log(accountCity)
// accountId=2 not allowed
console.log(accountId)
accountEmail="hc@gmail.com"
var accountCity="bengaluru"
accountPassword="545326734"
let accountstate
console.table([accountId,accountCity,accountEmail,accountstate])

/* 
   prefer not to use var
   because of issue in block scope and functional scope
*/

 "use strict"; // treat all js code as newer version
console.log(3+3)


let score =undefined
/* "33" -> 33
   "33abc" -> NAN

*/
console.log(typeof score)
console.log(typeof (score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


let isLoggedIn = ""
/*  1 -> true; 
   0 -> false;
   "fazle" -> true
 */
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33
let StringNumber = String(someNumber)
console.log(someNumber)
console.log(StringNumber)
console.log( typeof StringNumber)




// *********** Operations ************

let value=3
let negValue=-value
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(2%3)
console.log(2%2)

let str1="hello"
let str2=" fazle"
let str3= str1 + str2
console.log(str3)

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



// comparisons
console.log("----------------------comparisons----------------------");

console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)

console.log("2" > 1)
console.log("02" > 1)
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) /* the reason is that an equality check == and
                      comparison <,>,<=,>= work differently comparison converts null to a number treating it as a 0.
                      that's why (3) null >= 0 is true and (1) null > 0 is false */
console.log()
console.log(undefined > 0)
console.log(undefined >= 0)
console.log(undefined == 0)

console.log()
console.log("2" === 2)
console.log("2" == 2)

/* 

data types 
1 primitive  2 non-primitive(reference type)
1:-  7 types : String,Number,Boolean,null,undefined,Symbol,bigInt.
   

   2:-  Arrays,objects,functions.   */

const isLoggedIn1=false
const outsideTemp=null
let userEmail1;
const id = Symbol('123')
const anotherId=Symbol('123')
console.log(id == anotherId)

const bigNumber = 234567123456789
console.log(bigNumber)



//reference (non-primitive)
   //Array , Objects, Function

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


//memories oin java script

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

//example for heap memory

let user01 = {
   email : "fazleamity001.com",
   upi : "700@ybl",
}

let user02 =user01
console.log(user01)
user02.email="frasool2020@gmail.com"
console.log(user01)
console.log(user02)


// Strings in java script


const name1 = "fazle"
const repo=50
console.log(name1+repo+"rasool")

console.log(`hello my name is ${name1} and my repo count is ${repo}`);

const myname = new String('MdFazleRasool')
console.log(typeof myname)

console.log(myname[0]+myname[2]+myname[7]);
console.log(myname.__proto__);

console.log(typeof myname.length);
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.charAt(2));

console.log(myname.indexOf('R'));
console.log(myname.indexOf('r'));



const newString = myname.substring(0,5)
console.log(newString)
const newString1 = myname.slice(-8,5)
console.log(newString1)
const newString3 = myname.substring(-8,5)
console.log(newString3)
console.log()

const myname1 = new String('Md Fazle Rasool')
console.log(myname1.trim( ));

const url = "https://fazle.com/%20rasool"
console.log(url.replace('%20' , '-'))


console.log(url.includes('fazle'))
console.log(url.includes('fazle11'))

console.log(myname1.split(' '))




const score1=400
const balance = new Number(400)
console.log(score1)
console.log(balance)
console.log(balance.toString())
console.log(typeof balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))


const otherNumber=23.8966
console.log(otherNumber.toPrecision(1))
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// ******* math  *********

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(8.99));
console.log(Math.ceil(8.11));
console.log(Math.floor(8.99));
console.log(Math.max(3,45,56,7,8));
console.log(Math.min(3,45,56,7,8))
console.log(Math.random()); // gives output btw 0 to 1
console.log(Math.random()*10);
console.log(Math.random()*10+1);


const min = 10;
const max = 20;


console.log(Math.random() * (max-min+1))
console.log(Math.floor(Math.random() * (max-min+1)) ,"fazle")


// date 

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString())
console.log(typeof myDate);

console.log()
let myCreateddate =  new Date(2024,1,23);
console.log(myCreateddate.toDateString())

console.log()
let myCreateddate1 =  new Date("09-07-2024");
console.log(myCreateddate1.toDateString())


let mytime = Date.now()
console.log(mytime)

console.log(Math.floor(Date.now()/1000))


let newdate1 = new Date()
console.log(newdate1)
console.log(newdate1.getMonth()+1)
console.log(newdate1.getDay())

// `${newdate1.getDay()} and the time is `

newdate1.toLocaleString('default',{
   weekday:"long",
   
})

console.log("upto primitive data type")