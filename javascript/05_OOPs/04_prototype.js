/* 
let myName = "fazle    ";
let myName2 = "fazle Rasool    ";
console.log(myName.length);
console.log(myName.trueLength);



let MyHero = ["thor","ironman","spiderman"];

let heroPower = {
    thor:"hammer",
    ironman:"AI",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.fazle = function(){
    console.log(`fazle is present in all objects`);
    
}

// heroPower.fazle();
MyHero.fazle();


Array.prototype.ArrayFazle = function (){
    console.log(`hey fazle array and protoype`);
}
MyHero.ArrayFazle();
// heroPower.ArrayFazle(); // don't have access in heropower because it is only provided in Array

*/ 


/*  Inheritance */

// Older syntax

const user001 = {
    name :"fazle",
    email : "fazle@gmail.com"
}

const Teacher = {
    makevideo : true
}
const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeassignment:'JS assignment' ,
    fullTime : true ,
    __prto__ : TeachingSupport
}

Teacher.__prto__=user001;


// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherusername = "chaiAurCode     "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`$True Length is : ${this.trim().length}` );
    
}

anotherusername.truelength();

"fazle".truelength();
"coldCoffee".truelength();

