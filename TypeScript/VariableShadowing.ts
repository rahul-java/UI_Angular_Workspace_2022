function f()
{
    var x;
    var y=1000;
    x=100;
    if(x==100)
    {
        var x;
        var y=2000;
        //var y; //this will give error.
        x=200;
        console.log(` This is variable shadowing : x = ${x} And y = ${y}`)
    }
}
f();