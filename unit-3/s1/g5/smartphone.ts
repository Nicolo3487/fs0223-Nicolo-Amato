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
   
    filtraChiamatePerDataOra(d:number, h:number): void {
        let filtro:Chiamata[] = []
        this.registroChiamate.forEach((call:Chiamata) => {
            if (d == call.data.getDate() && h == call.data.getHours()){
                filtro.push(call);
            }
        })
        if(filtro.length == 0){
            console.log('non ci sono risultati')
        }else{
            console.log(filtro)
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

let Samsung = new Smartphone(40, 0);
Samsung.ricarica(40);
Samsung.chiamata(50);
Samsung.chiamata(30);
Samsung.chiamata(20);
Samsung.chiamata(10);

console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());
Samsung.getRegistroChiamate()
Samsung.filtraChiamatePerDataOra(12, 10);







