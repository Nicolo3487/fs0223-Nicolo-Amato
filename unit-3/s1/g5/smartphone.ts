interface Smartphone {
    carica: number;
    numeroChiamate:number;
    registroChiamate: Chiamata[];

    getRegistroChiamate():void;
    filtraChiamatePerdataOra(d:number, h:number):void
    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
}

class Chiamata {
    id:number;
    durata:number;
    data:Date;
    constructor(id:number, durata:number, data:Date) {
       this.id = id;
       this.durata = durata;
       this.data = data;
    }
}

class Smartphone implements Smartphone {
    carica:number;
    numeroChiamate:number;
    costoMinuto:number = 0.20;
    registroChiamate: Chiamata[] = [];

    constructor(carica:number, numeroChiamate:number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
   
    getRegistroChiamate():void {
        console.log(this.registroChiamate)
    }
   
    filtraChiamatePerDataOra(data:number, ora:number): void {
        let chiamateFiltrate:Chiamata[] = []
        this.registroChiamate.forEach((call:Chiamata) => {
            if (data == call.data.getDate() && ora == call.data.getHours()){
                chiamateFiltrate.push(call);
            }
        })
        if(chiamateFiltrate.length == 0){
            console.log("%cNON CI SONO RISULTATI","color:red")
        }else{
            console.log("%cCI SONO " + chiamateFiltrate.length + " RISULTATI","color:green")
            console.log(chiamateFiltrate)
            }
        }
    
    ricarica(euro:number):void{
        this.carica += euro;
        console.log('la riacrica è stata effettuata')
    }
    numero404():string {
        return "credito residuo " + this.carica +' €';
    }
    getNumeroChiamate():number {
        return this.numeroChiamate;
    }
    chiamata(min:number):void {
        let costoChiamata:number = this.costoMinuto * min
        if(this.carica > costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate ++;

        } else {
            console.log('Credito non sufficiente')
        }
    }
    azzeraChiamate(): void {
        this.registroChiamate.pop
    }
}

let Samsung = new Smartphone(40, 10);
Samsung.ricarica(40);
Samsung.chiamata(50);
Samsung.getRegistroChiamate()
Samsung.filtraChiamatePerDataOra(26, 10);
Samsung.azzeraChiamate;
Samsung.chiamata;

console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());




