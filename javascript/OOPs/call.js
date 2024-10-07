function  setusername (username){
    //complex DB calls
    this.username=username;
    console.log("called");
    
}

// function createUser(username,email,password){
//     this.email=email;
//     this.password=password;

//     setusername(username);
// }

// const chai = new createUser("chai " , "facebook@gmail.com",1234);
// console.log(chai);

// function createUser001(username,email,password){
//     this.email=email;
//     this.password=password;

//     setusername.call(username);
// }

// const chai001 = new createUser001("chai " , "facebook@gmail.com",1234);
// console.log(chai001);

function createUser002(username,email,password){
    this.email=email;
    this.password=password;

    setusername.call(this,username);
}

const chai002 = new createUser002("chai " , "facebook@gmail.com",1234);
console.log(chai002);