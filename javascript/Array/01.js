// const myArr=[];
// %Debugprint(myArr);

//Continuous , Holey

//SMI (small Integers)
//Packed elements
//Double(float,string,function)

const arrTwo = [1,2,3,4,5];
//Packed SMI elements


arrTwo.push(6.0);
//packed Double_Elements

arrTwo.push('7');
//packed Elements

arrTwo[10]=11;
// HOLEY ELEMENTS

console.log(arrTwo);
console.log("LENGTH :-  " , arrTwo.length);
console.log(arrTwo[9]);
/*
bound check
hasOwnProperty(arrTwo,9)
hasOwnProperty(arrTwo.prototype,10)
hasOwnProperty(Object.prototype,10)
*/

//holes are very expensive  in js


const arrThree = [1,2,3,4,5];
console.log(arrThree[2]);

/*
SMI > DOUBLED > PACKED

H_SMI > H_DOUBLE > H_PACKED  // H -> HOLY
*/


const arrFour =  new Array(3);
//just 3 holes . HOLEY_SMI_ELEMENTS

arrFour[0] = '0'; // HOLEY ELEMENTS
arrFour[1] = '1'; // HOLEY ELEMENTS
arrFour[2] = '2'; // HOLEY ELEMENTS


const arrFive = [] // SMI
arrFive.push('0'); // packed elements
arrFive.push('1');
arrFive.push('2');

const arrSix = [1,2,3,4,5]; // SMI

arrSix.push(Infinity); // Packed Double
arrSix.push(NaN);   // Packed Double

//for , for-of , forEach

