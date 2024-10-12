/*
console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);
*/ 

// const  descripter =  Object.getOwnPropertyDescriptors(Math);
// console.log(descripter);

const chai = {
    name : 'ginger chai',
    price:250 ,
    isAvailable : true,
    order : function(){
        console.log("chai nhii mili :- ");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


 Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// for(let [key,value] of chai ){
//     console.log(`${key} : ${value}`);
// }


for(let [key,value] of Object.entries(chai) ){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

