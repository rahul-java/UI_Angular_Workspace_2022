let pass:string="Rahul_123";
let regExpPass:any=/(?=.*[A-Z])\w{6,12}/;
if(pass.match(regExpPass))
   {
    console.log(`Strong Password : ${pass}`);
   }
else
 {
    if(pass.length<6)
        console.log(`Poor Password : ${pass} the Length is shorter ${pass.length}`);
    else
        console.log(`Weak Password : ${pass} Does not match the Criteria given bellow :${regExpPass}`);
 } 