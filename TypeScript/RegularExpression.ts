let phoneNo:string="+919876543210";
let regExp:any=/\+91[0-9]{10}/;
if(phoneNo.match(regExp))
{
   console.log(`Phone No ${phoneNo} is VERIFIED !!!`);
}
else
{
   console.log(`PhoneNo not Valid...`);
}