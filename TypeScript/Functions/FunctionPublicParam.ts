class Test1{
    public viewName:string;
    public httpStatusCode():string|number{
        if(this.viewName=="index.html")
         return "Response Status : OK";
         else
         return 404;
    }

}
let ob=new Test1();
ob.viewName="index.html";
console.log(ob.httpStatusCode());