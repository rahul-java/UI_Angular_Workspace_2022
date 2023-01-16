class A{
    static s:number=0;
    ns:number=0;

    constructor(){
        A.s=A.s+1;
        this.ns=this.ns+1;
    }
    view(){
        console.log(`
                    Static Member : ${A.s}
                    Non-Static Member : ${this.ns}
        `);
    }
}
let obj1=new A();
obj1.view();

let obj2=new A();
obj2.view();

let obj3=new A();
obj3.view();