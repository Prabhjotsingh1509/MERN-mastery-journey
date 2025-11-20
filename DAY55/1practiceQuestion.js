// Practice Questions
/*Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]*/

let arr= [1,2,3,4,5,6,2,3];
let num=2;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]==num)
    {
        arr.splice(i,1);
    }
}
for( let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
/* Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6 */

let number=287152;
let i=0;
while(number>0)
{
    number= Math.floor(number/10);
    i++;
}
console.log("count=",i);

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
let nums=287152;
let sum=0;
while(nums>0)
{
    r=nums%10;
    sum+=r;
    nums= Math.floor(nums/10);
}
console.log("sum=",sum);
/*Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :

7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1 */
fact=1;
fact_num=7;
for(i=1;i<=fact_num;i++)
{
    fact*=i;
}
console.log("factorial of ",fact_num,"is:",fact);
// Qs5. Find the largest number in an array with only positive numbers.
let arr1=[4,5,9,56,25,30];
let max=0;
for(let i=0;i<arr1.length;i++)
{
    if(max<arr1[i])
    {
        max=arr1[i];
    }
}
console.log(max);