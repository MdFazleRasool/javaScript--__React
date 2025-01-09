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



const user01= user("fazle",12,true);
console.log(user01);

const user02 = user("chaiAurCode",11,false);
console.log(user01); 

/*

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


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/