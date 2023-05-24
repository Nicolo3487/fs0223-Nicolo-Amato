
class sonAccount {
    //Proprietà
    protected balanceInit:number;
   

    constructor(balance:number){
        this.balanceInit = balance;
        
    }

    public deposit(amount:number):number {
        return amount;
    }
    public oneWithdraw(amount:number):number {
        return amount;
    }
    public twoWithdraw(amount:number):number {
        return amount;
    }
    public totalBalance():number {
        return this.oneWithdraw(700)- this.twoWithdraw(400);
    }
}

let son = new sonAccount(0);
console.log(son);
console.log('deposit', son.deposit(1000));
console.log('one Withdraw', son.oneWithdraw(400));
console.log('two Withdraw', son.twoWithdraw(200));
console.log('totalBalance', son.totalBalance());

class MotherAccount  extends sonAccount {
    constructor(balanceInit:number) {
        super(balanceInit)
    }
    public deposit(amount:number):number {
        return amount;
    }
    public oneWithdraw(amount:number):number {
        return amount;
    }
    public twoWithdraw(amount:number):number {
        return amount;
    }
    public getBalance():number {
        return this.oneWithdraw(700)- this.twoWithdraw(400);
    }
    public addInterest(rate:number):number {
        return (this.getBalance()*rate)/100;
    }
    public totalBalance(): number {
        return this.getBalance() - this.addInterest(10);
    }
}

let mother = new MotherAccount(0);
console.log(mother);
console.log('deposit', mother.deposit(1000));
console.log('one Withdraw', mother.oneWithdraw(400));
console.log('two Withdraw', mother.twoWithdraw(200));
console.log('totalBalance', mother.totalBalance());