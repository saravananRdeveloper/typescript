export let myFullName : string="pan";
export class product{
    pId:number;
    pName: string;
    pPrice:number;

    constructor(id : number,name:string,prrice:number){
        this.pId=id;
        this.pName=name;
        this.pPrice=prrice;
    }
    productDetails(){
        return `Id:${this.pId} Name:${this.pName} Price:${this.pPrice}`
    }
}
