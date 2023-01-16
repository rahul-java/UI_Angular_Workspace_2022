var Friends = /** @class */ (function () {
    function Friends(message) {
        this.name = message;
    }
    Friends.prototype.greet = function () {
        return "Hello " + this.name;
    };
    return Friends;
}());
var friend = new Friends("Rahul");
console.log(friend.greet());
