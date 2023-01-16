var Device = /** @class */ (function () {
    function Device(item) {
        for (var prop in item) {
            console.log("".concat(prop, " : ").concat(item[prop]));
        }
    }
    return Device;
}());
var laptop = new Device({
    name: 'HP',
    cost: 50000,
    isAvailable: true
});
