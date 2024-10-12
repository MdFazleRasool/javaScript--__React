function user001(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email=value;
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
        },
        set : function(value){
            this._passwordl=value;
        }
    })
}

const chao = new user001("daz@Ai","fazle*&098");
console.log(chao.email);
console.log(chao.password);
