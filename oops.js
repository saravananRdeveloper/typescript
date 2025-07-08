var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, salary, isSing) {
        this.eId = 101;
        this.eName = "Saravanan";
        this.eSalary = 1200000;
        this.eSign = true;
        this.eId = id;
        this.eName = name;
        this.eSalary = salary;
        this.eSign = isSing;
    }
    Employee.prototype.employeeDetails = function () {
        return "Id:".concat(this.eId, " Name:").concat(this.eName, "  Salary : ").concat(this.eSalary, "  Sign : ").concat(this.eSign);
    };
    return Employee;
}());
// let empObj0 = new Employee(  102,"vis",15000,true);
// console.log(empObj0.eName);
// console.log(empObj0.employeeDetails());
// let empObj1 = new Employee(  103,"thi",20000,true);
// console.log(empObj1.eName);
// console.log(empObj1.employeeDetails());
var company = /** @class */ (function (_super) {
    __extends(company, _super);
    function company(id, name, salary, sing, compName, compAddr) {
        var _this = _super.call(this, id, name, salary, sing) || this;
        _this.cName = compName;
        _this.cAddress = compAddr;
        return _this;
    }
    company.prototype.employeeDetails = function () {
        return "Id:".concat(this.eId, " Name:").concat(this.eName, " salary:").concat(this.eSalary, " company Name:").concat(this.cName, " Address:").concat(this.cAddress);
    };
    return company;
}(Employee));
;
var companyObj = new company(201, "ravi", 45677, false, "changepond", "chennai");
console.log(companyObj.employeeDetails());
