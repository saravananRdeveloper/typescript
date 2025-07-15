var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_roll", {
        get: function () {
            return this.roll;
        },
        set: function (val) {
            this.roll = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_mark1", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_mark2", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_mark3", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.userDetails = function () {
        return "total, average, and grade are ".concat(this.mark1 + this._mark2 + this._mark3, "  ").concat(this.mark1 + this._mark2 + this._mark3 / 3, "  ");
    };
    return Student;
}());
var stuobj = new Student();
stuobj.name = "Saravanan R";
stuobj._roll = 4725;
stuobj._mark1 = 88;
stuobj.mark2 = 78;
stuobj.mark3 = 96;
console.log(stuobj.userDetails());
