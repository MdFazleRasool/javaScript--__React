class   user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`UserName is  ${this.username}`);
        
    }

    static createId(){
        return '123';
    }
}

const fazle = new user("mfrasool");
fazle.logMe();
// console.log(fazle.createId());


class teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const phone = new teacher ("iphone","steve@apple.com");
phone.logMe();
// phone.createId();