interface Knife{
     cut();
}
interface Screwdriver{
    turnScrew();
}
interface Opener{
    openBottle();
}
type allType=Knife & Screwdriver & Opener;
function use(tool:allType){
console.log("I have all type of tools");
tool.cut();
tool.turnScrew();
tool.openBottle();
}
