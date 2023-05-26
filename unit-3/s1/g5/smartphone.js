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
    filtraChiamatePerDataOra(data, ora) {
        let chiamateFiltrate = [];
        this.registroChiamate.forEach((call) => {
            if (data == call.data.getDate() && ora == call.data.getHours()) {
                chiamateFiltrate.push(call);
            }
        });
        if (chiamateFiltrate.length == 0) {
            console.log("%cNON CI SONO RISULTATI", "color:red");
        }
        else {
            console.log("%cCI SONO " + chiamateFiltrate.length + " RISULTATI", "color:green");
            console.log(chiamateFiltrate);
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
let Samsung = new Smartphone(40, 10);
Samsung.ricarica(40);
Samsung.chiamata(50);
Samsung.getRegistroChiamate();
Samsung.filtraChiamatePerDataOra(26, 10);
Samsung.azzeraChiamate;
Samsung.chiamata;
console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());
