let heroes =[
    ["ironman","spiderman","thor"],
    ["superman","wonder-woman","flash"]
]

for(let i=0; i<heroes.length;i++)
{
    console.log(i ,heroes[i]);
    for(let j=0; j<heroes[i].length;j++)
    {
        console.log(`j=${j}${heroes[i][j]}`);
    }
}
let students =[ ["aman",95],["prabhjot",92.4],["gautam",74.5]]

for(let i=0;i<students.length;i++)
{
    for(let j=0;j<students[i].length;j++)
    {
        console.log(`j=${j} ${students[i][j]}`);
    }
}