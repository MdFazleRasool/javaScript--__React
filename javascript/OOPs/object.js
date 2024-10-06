function  multiplBy5(num){
    return num*5;
}
multiplBy5.power=2;

console.log(typeof multiplBy5);
console.log(multiplBy5(4));
console.log(multiplBy5.power);
console.log(multiplBy5.prototype);


function createUser(username,score){
   this.username=username;
   this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new  createUser("chai",25);
const coffee = new createUser("coffee",100);

console.log(chai);

chai.printMe();

chai.printMe();