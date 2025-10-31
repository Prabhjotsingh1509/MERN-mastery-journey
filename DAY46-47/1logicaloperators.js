console.log(true && true);
console.log(true && false);
let  marks=80;
if ((marks>33 && marks<=80) || !false)
{
    console.log("pass");
}
//Practice Questions
//A good string is a string that starts with the letter 'a'& has a length >3.Write a Program to find if a sting is good or not.
let string="Apple"
if((string[0]=="a" || string[0]=="A") && string.length>3)
{
    console.log("Good string");
}
else
{
    console.log("not a good string");
}