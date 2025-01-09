// 27     :-  for loop
//for

/*

for(let i =0;i<10;i++){
   if(i == 5){
      console.log("5 is best number");
      continue;
      
   }
   console.log(i);
   
}

for (let i = 0; i < 5; i++) {
   console.log(`OUTER LOOP VALUE : ${i}`);
   for (let j = 0; j < 5; j++) {
      console.log(`Inner loop value : ${j}`);     
   }
}

// 27     :-  while and do - loop

let i=2;
console.log("while loop \n" );

while(i<10){
   console.log(i) ;
   i+=2;

}
i=0;
console.log("do while loop \n" );

do {
   console.log(i+=2);
} while (i<=10);

console.log("do while loop  ended \n" );
// let arr = [1,2,3,4,5]
// console.log(typeof(arr));


*/ 






// 29     :-  high order loops
/* high order loops  
1:- for of 

*/

/*
const arr1 = [1,2,3,4,5]

for (const num of arr1) {
   console.log(num)
}

const greet = "fazle rasool welcome";
for (const str of greet) {
   console.log(`Each char is ${str}`);
}


// maps ;- unique(keys) , order of Insetion (maintained), 

const map1 = new Map();
map1.set('IN',"INDIA");
map1.set('USA',"UNITED STATES OF AMERICA");
map1.set('FR',"FRANCE");
map1.set('IN',"INDIA");

console.log(map1);

for (const key of map1) {
   console.log(key);
   
}

for (const [key,value] of map1) {
   console.log(key, ';-' , value);
   
}




const myobj = {
   'hame1' :'nfs',
   'game2' : 'spiderman'
}

// for (const [key , value] of myobj) {
//    console.log();
   
// }
//objects are not iterable using forof loop
 

const myobj1 = {
   name1 :'nfs',
   game2 : 'spiderman',
   js : "javascript",
   rb : "ruby",
   swift : "swift by apple"
}

for (const key in myobj1) {
    console.log(key ," -" , myobj1[key]); 
}


const myobj3 = {
   js :'javaScript',
   cpp : 'c++',
   rb : "ruby",
   swift : "swift by apple"
}
for (const key in myobj3) {
   console.log(`${key} shortcut is for ${myobj3[key]}`);
}
   
console.log("\n");

const program = ["js",'rb' , "java" ,"cpp"];
for (const key in program) {
   console.log(`${key} shortcut is for ${program[key]}`);
}



const map2 = new Map();
map2.set('IN',"INDIA");
map2.set('USA',"UNITED STATES OF AMERICA");
map2.set('FR',"FRANCE");
map2.set('IN',"INDIA");

for (const key in map2) {
   console.log(key);
}
console.log("No output for map beacause map is not iteratable");



//for each loop


const program1 = ["js",'rb' , "java" ,"cpp"];

console.log(" \n for each loop and normal function ");

program1.forEach( function (item) {
   console.log(item) ;
} )

console.log("\n for each loop and arrow function ");

program1.forEach( (item) => {
   console.log(item)
})

console.log(" \n for each loop and normal function ");

function printme(item){
   console.log(item)
}
program1.forEach(printme)



program1.forEach( (item,index,arr1) =>  {
   console.log(item,index,arr1)
})


//[{},{},{}] objects inside array

const mycode = [
   {
      language : "javascript",
      extension : "js"
   },
   {
      language : "java",
      extension : "java"
   },
   {
      language : "c++",
      extension : "cpp"
   }
]

mycode.forEach( (item) => {
   console.log(item.language);
})

*/

/* for each looop  */

// 30     :-  Filter, Map, Reduce , loop

/*
console.log("\n \n");

const program2 = ["js",'rb' , "java" ,"cpp"];

const values = program2.forEach( (item ) => {
      console.log(item);
      return item;
      
}) ;

console.log(values);


const nums = [1,2,3,4,5,6,7,8,9];
let newNums=nums.filter( (nums) => nums>5);
console.log(newNums);

let newNums1=nums.filter( (nums) => {
   return nums>4;
});
console.log(newNums1);


const newNums2 = []
nums.forEach( (nums) => {
   if(nums > 3) {
      newNums2.push(nums);
   }
})
console.log(newNums2);



const mynum001 = [1,2,3,4,5,6,7,8,9];

const newNums11 = mynum001.map((num) => {
   return num+10;
})

console.log(newNums11);
console.log(mynum001);



const myNumber = [1,2,3,4,5,6,7,8,9];
const map04=myNumber
      .map((ob) => ob*10)
      .map(ob => ob+5)
      .filter((ob) => ob % 15 ==0 )

console.log(map04)




const red = [1,2,3,4,5]

const myTotal = red.reduce(function(acc,currval){
   console.log(`acc: ${acc} and currval : ${currval}`);
   return acc + currval;
},3) ;
console.log(myTotal) ;



const myTotal1 = red.reduce( (acc,currval) => acc+currval,0) ;
console.log(myTotal1) ;

*/


const shoppingCart = [
   {
      item: "js course ",
      price : 2999
   },
   {
      item: "python course ",
      price : 1500
   },
   {
      item: "java course ",
      price : 2000
   },
   {
      item: "dev ops ",
      price : 13000
   }
]

const total_price =shoppingCart.reduce( (acc,price) => acc+price.price ,0)

console.log(total_price);
 