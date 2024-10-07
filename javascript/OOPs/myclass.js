/* 
class   user{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
        encryptPassword(){
            return `${this.password}abc`;
        }
    

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new user("chai","chai@gmail.com",123);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


console.log(chai);

*/ 

//behind the scene


function user001(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password;
}

user001.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}

user001.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new user001("tea","chai@gmail.com",123);

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

