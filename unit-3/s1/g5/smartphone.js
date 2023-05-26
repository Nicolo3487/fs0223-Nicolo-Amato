"use strict";
class Chiamata {
    constructor(id, durata, data) {
        this.id = id;
        this.durata = durata;
        this.data = data;
    }
}
class Smartphone {
    constructor(carica, numeroChiamate) {
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    getRegistroChiamate() {
        console.log(this.registroChiamate);
    }
    filtraChiamatePerDataOra(d, h) {
        let filtro = [];
        this.registroChiamate.forEach((call) => {
            if (d == call.data.getDate() && h == call.data.getHours()) {
                filtro.push(call);
            }
        });
        if (filtro.length == 0) {
            console.log('non ci sono risultati');
        }
        else {
            console.log(filtro);
        }
    }
    ricarica(euro) {
        this.carica += euro;
        console.log('la riacrica è stata effettuata');
    }
    numero404() {
        return "credito residuo " + this.carica + ' €';
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        let costoChiamata = this.costoMinuto * min;
        if (this.carica > costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log('Credito non sufficiente');
        }
    }
    azzeraChiamate() {
        this.registroChiamate.pop;
    }
}
let Samsung = new Smartphone(40, 0);
Samsung.ricarica(40);
Samsung.chiamata(50);
Samsung.chiamata(30);
Samsung.chiamata(20);
Samsung.chiamata(10);
console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());
Samsung.getRegistroChiamate();
Samsung.filtraChiamatePerDataOra(12, 10);
