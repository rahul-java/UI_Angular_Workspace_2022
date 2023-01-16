/*
for(var i=0;i<=10;i++)
{

}
console.log(i); //it's bug bcoz i is declared within for and accessed out of for loop. i is not defined
*/

/*
for(let i=0;i<=10;i++)
{

}
console.log(i); //error i is not defined.
*/

/*
for(let i=0;i<=10;i++)
{
 console.log(i);
}
*/

/*
var n1=100;
var n1=200;
console.log(n1);  //o/p: n1=200 (it muset be ERROR for same variable name defined)
*/

/*
let n1=100;
let n1=200;
console.log(n1);  // o/p : SyntaxError: Identifier 'n1' has already been declared
*/

/*
let n1=100;
let n2=200;
console.log(n1);
*/

/*
console.log(num);   //o/p : undefined.
var num=1020;

console.log(number); // o/p : ReferenceError: Cannot access 'number' before initialization
let number=1234;
*/

/*
//Global Variable
var num=100;
console.log(num);
{
    //local variable
    var num=200;
    console.log(num);
}
console.log(num);
*/

//Global Variable
let num=100;
console.log(num);
{
    //local variable
    let num=200;
    console.log(num);
}
console.log(num);