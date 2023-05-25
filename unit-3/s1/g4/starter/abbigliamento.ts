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

    constructor(obj:any) {
      
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
       
        mostraPrezzo():string {
            return this.saldo + '$';
        }
}
fetch('Abbigliamento.json')
.then ((res:Response) => res.json())
.then((res:Dress[]) => {

    let arr:Dress[] = [];

    res.forEach((el: Dress) => {
        arr.push(new Dress(el));
    });

    console.log(arr, arr[0].mostraPrezzo());
})

