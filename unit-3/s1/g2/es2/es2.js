"use strict";
class User {
    constructor(balance, saldo) {
        this.balanceInit = balance;
        this.saldoAttuale = saldo;
    }
    information() {
        return `Balance: ${this.balanceInit}, saldo: ${this.saldoAttuale}`;
    }
}
let sonAccount = new User(0, '0');
console.log('sonAccount :', sonAccount.information());
let motherAccount = new User(1500, '3000');
console.log('motherAccount :', motherAccount.information());
