/*Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]*/
let arr1=[7,9,0,-2];
console.log(arr1.slice(0,3));
/*Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]*/
console.log(arr1.slice(-3));
// Qs3. Write a JavaScript program to check whether a string is blank or not.
let str= "";

if(str.length ==0)
{
    console.log("string is empty");

}
else 
{
    console.log("string is not empty");
}
// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.
let str1 ="Prabhjot"
let idx=0;
let str5=str[idx].toLowerCase();
if(str[idx] == str5){
    console.log("character is lowercase");
}
else 
    console.log("character is not lowercase");
// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let str2="   hello   ";
console.log("original string:",str2);
console.log(str2.trim())
// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let arr6=[7,9,0,2]
console.log(arr6.indexOf(5));