
const myHeroes1=["shaktiman","krish",]

const arr1=  new Array(1,2,3,4,5);

console.log(arr1[0])

// Array methods

arr1.push(6);
arr1.push(7);
console.log(arr1)
arr1.pop()
console.log(arr1)

arr1.unshift(9)
console.log(arr1)
arr1.shift()
console.log(arr1)

console.log(arr1.includes(5))
console.log(arr1.indexOf(4))

const arrjoin=  arr1.join();
console.log(arr1)
console.log(arrjoin)
console.log(typeof arr1)
console.log(typeof arrjoin)

//slice,splice

console.log("A",arr1)
const myn1 = arr1.slice(1,3)
console.log(myn1);
console.log("B",arr1)
const myn2 = arr1.splice(1,3)
console.log(myn2);
console.log("C",arr1)

// slice only give answer in range but splice modifies the original arr between the range it is called upon
// slice:- (inclusive,exclusive)  splice(inclusive,inclusive)
const marvel_heroes=["ironman","thor","black panther"]
const dc_heroes=["superman","batman"];
marvel_heroes.push(dc_heroes)

console.log(marvel_heroes)
console.log(marvel_heroes[3][1])
marvel_heroes.pop()
console.log(marvel_heroes)
merge_heroes=marvel_heroes.concat(dc_heroes)
console.log(merge_heroes)

const heroes1=["ironman","thor","black panther"]
const heroes2=["superman","batman"];
const heroes3=["superman","batman","thor","black panther"];

spread_heroes=[...heroes1,...heroes2,...heroes3]
console.log(spread_heroes)

const flat1 = [1,2,[3,4,5,[6,8,9]],[10,11,12]]
const flatting = flat1.flat(Infinity);
console.log(flatting)


console.log(Array.isArray("fazle"))
console.log(Array.from("fazle"))
console.log(Array.from({name:"fazle"}))  //  interesting

let score1=100
let score2=200
let score3=300
console.log(  Array.of(score1,score2,score3))





/*
Objects
singleton
Object.create
*/


//symbols
const mysym = Symbol("key") // try to use this symbol as key in obj and use the correct syntax"


// object literals
const emptyObject={}

const name1 = {
   name:"fazle",
   "full name":"mfrasool",
   // mysym:"newkey1",  //this not the correct syntax of using symbols as keys 
   [mysym]:"newkey1",   // this is correct syntax
   age:18,
   location:"ranchi",
   email:"fazle@gmail.com" ,
   isLoggedIn:false,
   lastLoginDays : ["Monday","Tuesday"]

}

console.log(name1.email)
console.log(name1["email"]) // use this type more better
console.log(name1["full name"])  // we cant use name1.full name it will show error
console.log(name1[mysym])

name1.email="mfr@gmail.com"
console.log(name1["email"])

/*
//after freezing we cant modify anything in object

Object.freeze(name1)
name1.email="mfr001@gmail.com" // once freezed we cant change the content
console.log(name1)
*/ 


name1.greeting=function(){ // if you will freezee the object cant perform these actions
   console.log("fazlerasool");
}
console.log(name1.greeting());

name1.greeting2=function(){ // if you will freezee the object cant perform these actions
   console.log(`Hello Js user :- ,${this.name}`);
}
name1.greeting2();
console.log(name1.greeting2());
 


const tinderUser1 = new Object()

const User001 ={}
User001.id="123abc"
User001.name="fazle001"
User001.isLoggedIn=false

console.log(User001)

const regularuser = {
   email:"f001@gmail.com",
   fullname : {
      userfullname:{
            firstname:"fazle",
            lastname:"rasool"
      }
   }
}

console.log(regularuser,'\n')
console.log(regularuser.fullname,'\n')
console.log(regularuser.fullname.userfullname,'\n')
 



const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}



const obj4=Object.assign({},obj1,obj2,obj3) // we can provide empty array(target,source) so the empty array will be the target 
console.log(obj4)

const obj5 = {...obj1,...obj2,...obj3}  // use this type for better
console.log(obj5)

 


const obj6 = {obj1,obj2}
console.log(obj6)
// this will give object inside object
 


const users =[
   {
      id:1,
      email:"f@gmail.com"
   },
   {
      id:1,
      email:"f@gmail.com"

   },
   {
      id:1,
      email:"f@gmail.com"

   }
]

console.log(users[1].email)
console.log(User001)

console.log(Object.keys(User001));
console.log(Object.values(User001));
console.log(Object.entries(User001));

console.log(User001.hasOwnProperty('isLoggedIn'))



const course = {
   coursename:"js in hindi",
   price:"999",
   instructor:"hitesh"
}
console.log(course.instructor)


const {instructor:ins}= course
console.log(ins)


const navbar = ({company}) => {

}
navbar(comapny="mfr")
console.log(navbar)

 //API And JSON

/* 
//  eg :- 1
{
   "name ":"fazle",
   "coursename" :"js in hindi",
   "price" :0
}

eg :- 2

[
   {}
   {

   },
   {}
]

 */

// functions


function learning_function() {
   console.log("MFRASOOL")
   console.log("MFRASOOL")
}
learning_function
learning_function()

function sum1(num1,num2) {
   return num1+num2
}
console.log(sum1(1,2))
const sum2=sum1("1",2)
console.log(sum2)
console.log(sum1(1,"2"))
console.log(sum1("1","2"))

function login1(username){
   return `${username} that's my name`
}
console.log(login1("mfrasool"))
console.log(login1(),'\n \n')


function login2(username){
   if(username === undefined){
      console.log("please enter a usernanme");
      return;
   }
   return `${username} that's my name`
}
console.log(login2("mfrasool"))
console.log(login2(),'\n \n')


function login3(username = "faz"){
   if(!username){
      console.log("please enter a usernanme");
      return;
   }
   return `${username} that's my name`
}
console.log(login3("mfrasool"))
console.log(login3())

function calculate(...num1){ //(... rest operator)
   return num1;
}

console.log(calculate(1,2,3,4,5));

function calculate1(val1,val2,...num1){ //(... rest operator)
   return num1;
}

console.log(calculate1(1,2,3,4,5));


const user001={
   username:"fazle",
   price:100
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
handleObject(user001)

const users001={
   username:"fazle",
   prices:100
}

function handleObject1(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
handleObject1(users001)
handleObject1({
   username:"fazlerasool",
   price:499
})

 

const arr = [1,2,3,4,5]
function array1(getArray){
   return getArray[0]
}
console.log(array1(arr))
console.log(array1([1,2,3,4,5]))


function restOperator(...num){
   return  num;
}
console.log(restOperator(1,2,3,4,5,6))

console.log("utp to functions ")