var Temperature = /** @class */ (function () {
    function Temperature(celsius) {
        this._celsius = 0;
        this.celsius = celsius;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        set: function (value) {
            if (value < -273.15) {
                console.log("Error: Temperature can't be below absolute zero (-273.15°C)");
            }
            else {
                this._celsius = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return this._celsius * 9 / 5 + 32;
        },
        enumerable: false,
        configurable: true
    });
    Temperature.prototype.show = function () {
        console.log("Celsius: ".concat(this._celsius, "\u00B0C"));
        console.log("Fahrenheit: ".concat(this.fahrenheit, "\u00B0F"));
    };
    return Temperature;
}());
var temp1 = new Temperature(25);
temp1.show();
console.log("\nSetting temperature to -300°C (invalid):");
temp1.celsius = -300;
console.log("\nSetting temperature to 100°C:");
temp1.celsius = 100;
temp1.show();
