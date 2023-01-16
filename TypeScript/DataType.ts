function fun_1()
{
    var a=10;
    a=50;
    //a="ABC"; //allowed in JS bt not allowed in TS 
    //a=true;  // Implicit and Explicit Concept
    document.write(`a is a ${typeof a} Type`); // this is  used to print on browser screen and accessed in html file.
    console.log(`a is a ${typeof a} Type`);
}
fun_1();