//generic function

function viewRecord<T>(args:T):T{
    return args;
}

class Test{

    public show<T>(args:T):T{

        return args;
    }
}

let obj=new Test();
console.log(`generic type Output  :`+obj.show<number>(1000));
console.log(`generic type Output  :`+obj.show<string>("Hello"));