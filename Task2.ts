interface studentdetails{
 userDetails();
 
}
class Student implements studentdetails {
    name: string;
    roll: number;
    mark1: number;
    mark2: number;
    mark3: number;
 
 
    get _name() {
        return this.name;
    }
    set _name(val: string) {
        this.name= val;
    }
 
    get _roll() {
        return this.roll;
    }
    set _roll(val: number) {
        this.roll = val;
    }
 
    get _mark1() {
        return this.mark1;
    }
    set _mark1(val: number) {
        this.mark1= val;
    }
 
     get _mark2() {
        return this.mark1;
    }
    set _mark2(val: number) {
        this.mark1= val;
    }
 
     get _mark3() {
        return this.mark1;
    }
    set _mark3(val: number) {
        this.mark1= val;
    }
 
   
 
    userDetails() {
        return `total, average, and grade are ${this.mark1+this._mark2+this._mark3}  ${this.mark1+this._mark2+this._mark3/3}  `;
    }
}
 
let stuobj = new Student();
stuobj.name = "Saravanan R";
stuobj._roll = 4725;
stuobj._mark1 = 88;
stuobj.mark2 = 78;
stuobj.mark3 = 96;
 
 
 
console.log(stuobj.userDetails());
 
 