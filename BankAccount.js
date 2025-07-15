var BankAccount = /** @class */ (function () {
    function BankAccount(name, balance, accountnumber) {
        this.acntHolderName = name;
        this.balance = balance;
        this.acntNumber = accountnumber;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            return this.balance += amount;
        }
        return 0;
    };
    BankAccount.prototype.withraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            return this.balance -= amount;
        }
        return 0;
    };
    BankAccount.prototype.displayBalance = function () {
        return "Name: ".concat(this.acntHolderName, " Balance: ").concat(this.balance);
    };
    return BankAccount;
}());
var result = new BankAccount("Moon", 8000, "6922");
result.deposit(100);
console.log(result.displayBalance());
result.withraw(200);
console.log(result.displayBalance());
