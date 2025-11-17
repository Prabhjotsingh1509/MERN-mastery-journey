const favoriteMovie="Avatar 2";
let guess="avatar";

while(guess != favorite || guess!= 'quit')
{
    console.log("wrong");
    guess=prompt("wrong guess try again");
}

if(guess == favoriteMovie)
{
    console.log("Congratulations");
}
else 
{
    console.log("you lose!");
}