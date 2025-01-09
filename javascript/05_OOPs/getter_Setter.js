
class User {
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;
    }

    get email(){
        return `${this._email}fazle`
    }

    set email(value){
        this._email=value;
    }
}

const fazle = new User("f@Ai","098@3hshsh");
console.log(fazle.password);
console.log(fazle.email);
