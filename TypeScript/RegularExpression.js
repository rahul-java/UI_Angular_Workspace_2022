var phoneNo = "+919876543210";
var regExp = /\+91[0-9]{10}/;
if (phoneNo.match(regExp)) {
    console.log("Phone No ".concat(phoneNo, " is VERIFIED !!!"));
}
else {
    console.log("PhoneNo not Valid...");
}
