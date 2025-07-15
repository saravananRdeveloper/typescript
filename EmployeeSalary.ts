class EmployeeSalary {
  empId: number;
  empName: string;
  basicSalary: number;
  hra: number;
  da: number;
  grossSalary: number;
 
  constructor(empId: number, empName: string, basicSalary: number) {
    this.empId = empId;
    this.empName = empName;
    this.basicSalary = basicSalary;
 
    this.hra = 0.2 * this.basicSalary;
 
    this.da = 0.1 * this.basicSalary;
 
    this.grossSalary = this.basicSalary + this.hra + this.da;
  }
 

  displayDetails(): void {
    console.log(`${this.empId}, ${this.empName}, ${this.basicSalary}, ${this.hra},${this.da},${this.grossSalary}`)
  }
}
 

let emp1 = new EmployeeSalary(101, "Vishal", 30000);
emp1.displayDetails();