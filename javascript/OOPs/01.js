const user001 = {
    username : "fazle",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from dataBase");
        // console.log(`username: ${this.username}`);
        
        // console.log(this);
        

    }
}

// console.log(user001.username);
// console.log(user001.getUserDetails());
// console.log(this);

function  user(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`); 
    }

    return this;
}

/*

const user01= user("fazle",12,true);
console.log(user01);

const user02 = user("chaiAurCode",11,false);
console.log(user01);


const user03= new user("fazle",12,true);
console.log(user03);

const user04 = new user("chaiAurCode",11,false);
console.log(user04);
console.log(user03);

*/

const user007= new user("fazle",12,true);
const user004 = new user("chaiAurCode",11,false);
// console.log(user007);
console.log(user007.constructor);


