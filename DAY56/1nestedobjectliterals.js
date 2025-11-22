let classinfo={
    prabhjot:{
        batch:45,
        city:"saharanpur"
    },
    gautam:{
        batch:75,
        city:"saharanpur",
    }
};
console.log(classinfo);
console.log(classinfo.prabhjot.batch);
classinfo.gautam.batch="not alloted";
console.log(classinfo.gautam.batch);
//array of object
const classInfo =[
    {
        name:"aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"Prabh",
        grade:"O",
        city:"saharanpur"
    },
    {
        name:"karan",
        grade:"B+",
        city:"Saharanpur"

    }
]
console.log(classInfo[0].name);
console.log(classInfo);
