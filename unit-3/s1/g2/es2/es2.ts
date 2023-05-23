
class User {
    //Proprietà
    protected balanceInit:number;
    protected saldoAttuale:string;

    constructor(balance:number, saldo:string){
        this.balanceInit = balance;
        this.saldoAttuale = saldo;
    }

    public information():string {
        return `Balance: ${this.balanceInit}, saldo: ${this.saldoAttuale}`;
    }
}

let sonAccount:User = new User(0, '0');
console.log('sonAccount :',sonAccount.information());

let motherAccount:User = new User(1500, '3000');
console.log('motherAccount :',motherAccount.information());