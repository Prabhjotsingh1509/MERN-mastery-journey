let arr=[];

console.log(typeof(arr)); //object

//object literals://more clearity than the array.
const student ={
    //key:value
    name:"Prabhjot",
    age:"19",
    marks:"90.4",

};
console.log(student);
//Eg-2
const item={
    price:100.99,
    discount:50,
    colors:["red","pink"],
};
console.log(item);

// threads/twitter object literals post
const post={
    username:"@prabhh.singh15",
    content:"This is my #firstpost",
    likes:150,
    reposts:5,
    tags:["@drishti.shreds","@aaradhyaa"]
}
console.log(post["username"]);
console.log(post.likes);
// update object literals

const students1=
{
    name:"prabhjot",
    age:19,
    marks:94.4,
    city:"dehradun"
};
students1.city="saharanpur";
console.log(students1);

students1.marks="O";
console.log(students1);
//delete the key from object literals
delete students1.age;
console.log(students1);