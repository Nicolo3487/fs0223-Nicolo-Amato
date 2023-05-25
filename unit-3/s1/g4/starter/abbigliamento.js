"use strict";
class Dress {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getData(obj) {
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
}
fetch('Abbigliamento.json')
    .then((res) => res.json())
    .then((res) => {
    console.log(res);
});
