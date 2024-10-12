const user001 = {
    _email:'fazle@amity'  ,
    _password:'667@#Pass' ,

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email=value;
    } ,



    
    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this._password=value;
    }
}

const tea = Object.create(user001);
console.log(tea.email);
