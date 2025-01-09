class   user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`UserName is  ${this.username}`);
        
    }
}

class Teacher extends user {
    constructor(username,email,password){
        super(username); // this behind the scene jayega
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course is added  by ${this.username}`);
        
    }
}

const faz = new Teacher("mfrasool ","chai@teacher",123);
faz.addCourse();

const masalachai = new user("masalachai");
masalachai.logMe();

// masalachai.addCourse(); // not available

faz.logMe();

console.log(faz === masalachai);
console.log(faz instanceof Teacher);
console.log(faz instanceof user);
console.log(masalachai instanceof user);
console.log(masalachai instanceof Teacher);
