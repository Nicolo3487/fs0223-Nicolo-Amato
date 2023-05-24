"use strict";
class sonAccount {
    constructor(balance) {
        this.balanceInit = balance;
    }
    deposit(amount) {
        return amount;
    }
    oneWithdraw(amount) {
        return amount;
    }
    twoWithdraw(amount) {
        return amount;
    }
    totalBalance() {
        return this.oneWithdraw(700) - this.twoWithdraw(400);
    }
}
let son = new sonAccount(0);
console.log(son);
console.log('deposit', son.deposit(1000));
console.log('one Withdraw', son.oneWithdraw(400));
console.log('two Withdraw', son.twoWithdraw(200));
console.log('totalBalance', son.totalBalance());
class MotherAccount extends sonAccount {
    constructor(balanceInit) {
        super(balanceInit);
    }
    deposit(amount) {
        return amount;
    }
    oneWithdraw(amount) {
        return amount;
    }
    twoWithdraw(amount) {
        return amount;
    }
    getBalance() {
        return this.oneWithdraw(700) - this.twoWithdraw(400);
    }
    addInterest(rate) {
        return (this.getBalance() * rate) / 100;
    }
    totalBalance() {
        return this.getBalance() - this.addInterest(10);
    }
}
let mother = new MotherAccount(0);
console.log(mother);
console.log('deposit', mother.deposit(1000));
console.log('one Withdraw', mother.oneWithdraw(400));
console.log('two Withdraw', mother.twoWithdraw(200));
console.log('totalBalance', mother.totalBalance());
