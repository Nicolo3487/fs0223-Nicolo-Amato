"use strict";
class Dress {
    constructor(obj) {
        this.id = obj.id;
        this.codprod = obj.codprod;
        this.collezione = obj.collezione;
        this.capo = obj.capo;
        this.modello = obj.modello;
        this.quantita = obj.quantita;
        this.colore = obj.colore;
        this.prezzoivaesclusa = obj.prezzoivaesclusa;
        this.prezzoivainclusa = obj.prezzoivainclusa;
        this.disponibile = obj.disponibile;
        this.saldo = obj.saldo;
    }
    mostraPrezzo() {
        return this.saldo + '$';
    }
}
fetch('Abbigliamento.json')
    .then((res) => res.json())
    .then((res) => {
    let arr = [];
    res.forEach((el) => {
        arr.push(new Dress(el));
    });
    console.log(arr, arr[0].mostraPrezzo());
});
