// array refrences: It is defined when two array's is eqaul whwn their address  is equal 
let arr1=[20];
let arr2=[20];

console.log(arr1==arr2);
// their address for first array element is not equal to second array element 

let arr=['a','b','c'];
let arrcopy=arr;// we tie both the array.

console.log(arrcopy === arr);
// their adress are equal as they assigned same values.
// both they array attach to the same address.