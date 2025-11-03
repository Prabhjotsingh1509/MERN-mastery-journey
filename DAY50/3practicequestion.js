// Question-1 
// start:['january','july',march,august]
// final:['july','june','march','august']
let start=['january','july','march','august'];
start.splice(0,2,'july','june');
console.log(start);
// Question-2:return the index of 'javascript' from the given array,if it was reversed.
let array=['c','c++','html','javascript','python','java','c#','sql'];
console.log(array.reverse().indexOf('javascript'));