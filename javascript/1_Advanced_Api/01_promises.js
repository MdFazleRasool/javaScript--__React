// fetch('https://something.com').then().catch().finally()
/*
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls , cryptography , network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "fazle", email: "fazleb3456@egmail.com" });
  }, 1000);
});
promiseThree.then(function (obj) {
  console.log(obj);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "fazle", password: "123" });
    } else {
      reject("Error : something went wrong");
    }
  }, 1000);
});
*/

/*
const username01=promisefour.then((user)=>{
    console.log(user);
    return  user.username;
});
console.log(username01);
 this is not the right way
 */


 /*
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promisefive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    // let error = true;
    if (!error) {
      resolve({username:"mfrasool",password:"123"})
    } else {
      reject("error : something went wrong");
    }
  }, 1000);
});

async function consumepromisefive() {
    try{
        const response = await promisefive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumepromisefive()
*/

  
/*

async function getAllUsers() {
  try{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(typeof  response);
  const data= await response.json();
  console.log(data);
  console.log(typeof data);
  }
  catch(error){
    console.log("E: ",error);
    
  }
};
getAllUsers();


*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  
})
.catch((error) => console.log(error));