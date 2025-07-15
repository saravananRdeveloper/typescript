class BankAccount{
    private acntHolderName: string;
    private balance: number;
    private acntNumber: string;
 
    constructor(name:string,balance:number,accountnumber:string){
        this.acntHolderName = name;
        this.balance = balance;
        this.acntNumber = accountnumber;
    }
 
    public deposit(amount:number){
        if(amount>0){
            return this.balance+= amount;
        }
        return 0;
    }
 
    public withraw(amount:number){
        if(amount>0 && amount<=this.balance){
            return this.balance -= amount;
        }
        return 0;
    }
 
    public displayBalance(){
        return `Name: ${this.acntHolderName} Balance: ${this.balance}`;
    }
 
}
let result = new BankAccount("Moon",8000,"6922");
result.deposit(100);
console.log(result.displayBalance());
result.withraw(200);
console.log(result.displayBalance());