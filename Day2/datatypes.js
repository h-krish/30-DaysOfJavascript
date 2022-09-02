//Primitive dataypes--Strings,Numbers,Null,Boolean,Undefined and Symbols

let varOne="Hari"
let varTwo="Hari"
let varThree=varOne
console.log(varOne==varTwo) //Return true
console.log(varOne==varThree)//return true. Because primitive datatypes are compared by their value.
console.log(varOne[0])//print "H"
//let varOne[0]="L"//raise an error, since primitive datatypes are immutable. 

//Non-Primitive datatypes
let myNumbers=[1,2,3,4]
console.log(myNumbers)
console.log(typeof myNumbers)
let myArray=[1,2,3,4]
console.log(myNumbers==myArray) /*return false.Because non-primitive datatypes are compared by
 their memmory reference and not by value.*/
console.log(myArray[0],myArray[3])
myArray[0]="One"
console.log(myArray)
let myStrings=["One","Two","Three"]
let myList=myStrings
console.log(myList==myStrings)//true. Point to the same memmory location
console.log(myList[0]==myArray[0])//true.
let userOne={name:"Harikrishnan",age:29}
let userTwo={name:"Pyare",age:35}
console.log(userOne)
console.log(typeof userTwo)