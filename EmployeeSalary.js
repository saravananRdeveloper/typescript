var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(empId, empName, basicSalary) {
        this.empId = empId;
        this.empName = empName;
        this.basicSalary = basicSalary;
        this.hra = 0.2 * this.basicSalary;
        this.da = 0.1 * this.basicSalary;
        this.grossSalary = this.basicSalary + this.hra + this.da;
    }
    EmployeeSalary.prototype.displayDetails = function () {
        console.log("".concat(this.empId, ", ").concat(this.empName, ", ").concat(this.basicSalary, ", ").concat(this.hra, ",").concat(this.da, ",").concat(this.grossSalary));
    };
    return EmployeeSalary;
}());
var emp1 = new EmployeeSalary(101, "Vishal", 30000);
emp1.displayDetails();
