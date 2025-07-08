class Employee{
    eId : number = 101;
    eName : string ="Saravanan";
    eSalary : number = 1200000;
    eSign : boolean = true;


    constructor(id: number, name: string,salary: number,isSing: boolean){
        this.eId=id;
        this.eName=name;
        this.eSalary=salary;
        this.eSign= isSing;
    }

    employeeDetails(){
        return `Id:${this.eId} Name:${this.eName}  Salary : ${this.eSalary}  Sign : ${this.eSign}`
    }
}


// let empObj0 = new Employee(  102,"vis",15000,true);
// console.log(empObj0.eName);
// console.log(empObj0.employeeDetails());

// let empObj1 = new Employee(  103,"thi",20000,true);
// console.log(empObj1.eName);
// console.log(empObj1.employeeDetails());
class company extends Employee{
    cName : string;
    cAddress: string;
    constructor(id: number, name: string, salary: number, sing:boolean, compName: string,compAddr: string){
        super(id, name,salary,sing);
        this.cName = compName;
        this.cAddress=compAddr;
    }
    employeeDetails(){
        return `Id:${this.eId} Name:${this.eName} salary:${this.eSalary} company Name:${this.cName} Address:${this.cAddress}`;
    }
    };
    let companyObj = new company(201,"ravi",45677,false,"changepond","chennai");
    console.log(companyObj.employeeDetails());
