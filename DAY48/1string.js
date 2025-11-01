// trim method:trim only left end and right end of a string.
let msg="     He llo";
console.log(msg.trim());
console.log(msg);

let a="  prabh"
console.log(a.trim());
console.log(a);
//uppercase and lowercase
let str="Prabhjot Singh";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
//indexof(Search of first occurance of letter )
let indexName="Prabhjot Singh"
console.log(indexName.indexOf("rabh_"));
//method chaining
let newMsg="    Prabhjot      ";
console.log(newMsg.trim().toUpperCase());
//slice method:Returns a part of the original string as a new string.
let sliceMsg="ILoveCoding";
console.log(sliceMsg.slice(1,5));
console.log(sliceMsg.slice(-1));//11-1=10
// Replace method is used to replace the string 
// it only replace first occurence in case of repeating word.
console.log(sliceMsg.replace("Love","do"));
let repeatmsg="Mango";
console.log(repeatmsg.repeat(2));