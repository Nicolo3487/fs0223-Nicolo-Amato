class Dress {
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor(
        id:number,
        codprod:number,
        collezione:string,
        capo:string,
        modello:number,
        quantita:number,
        colore:string,
        prezzoivaesclusa:number,
        prezzoivainclusa:number,
        disponibile:string,
        saldo:number) {
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
        getData(obj:Dress){
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
.then ((res:Response) => res.json())
.then((res:Dress[]) => {
    console.log(res)
})

