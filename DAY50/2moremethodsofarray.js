// Array methods:
// 1. IndexOf:It helps to use the index of an array element.
let cars=["bmw","xuv","scorpio"];
console.log(cars.indexOf("bmw"));
console.log(cars.indexOf("BMW"));
//2.includes:It tells whether the element we enter exist or not.
console.log(cars.includes("maruti"));
console.log(cars.includes("bmw"));
//3. concat:it helps to join to array.but it will not change the actual size of arrays.and also not affect the value of an earlier array.
let primary=["red","green","blue"];
let secondary=["yellow","black","white"];
console.log(primary.concat(secondary));
//4.reverse :It completely reverse the original array.
let subjects=["English","hindi","maths"];
console.log(subjects.reverse());
console.log(subjects.reverse());
//5,slice:It copies a portion of array.
let colors=["red","yellow","blue","orange","pink","white"];
console.log(colors.slice(0,3));
//slice(startindex,endindex),whre end index is exclusive.
// 6.splice:it removes/replaces/add elements in place.
// splice(start,deletecount,item0 to item n);
console.log(colors.splice(5));//delete element at 5th index,
console.log(colors.splice(0,1));//delete element from 0th index to 1 st index .1st index is exclusive.
console.log(colors);
colors.splice(0,1,"black","grey");
console.log(colors);
//7.sort:to sort an array.
console.log(colors.sort());
//not use in case of number.
let marks=[100,20,30,50];
console.log(marks.sort());