/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1 = 12, l2 = 7){
    return l1 * l2;
}
let risultato = area()
console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a = 15, b = 15){
    if(a === b){
        return (a + b)*3;
    }else{
        return a + b;
    }   
}
let risultato2 = crazySum();
console.log(risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*{
let par = prompt()
function crazyDiff( f = par, d = 19){
    if(f > d){
        return (f - d)*3;
    }else{
        return f - d;
    }
}
let result = crazyDiff();
console.log(result);
}*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n = 70){
    
    switch(true){
        case(n === 400):
            console.log('n è uguale a 400');
            break;
        case(n > 20 && n <= 100):
            console.log(true);
            break;
    }   
}
let result2 = boundary()

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 'BELLA'
function epify( a = c , b = 'EPICODE '){
    if( c === b){
        console.log('EPICODE')
    }else{
        return b + a;
    }
}
let risultato5 = epify();
console.log(risultato5);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(i = 14){
    if(i % 3 == 0){
        console.log(`${i} è un multiplo di 3`);
    }else if(i % 7 == 0){
        console.log(`${i} è un multiplo di 7`);
    }   
}
let risultato6 = check3and7();

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str){
    var risult = "";
    for (i = str.length - 1; i--;){// ho deciso di non aggiungere i>0 
        risult += str[i];
    }
    return risult;
}
let risultato7 = reverseString('hello');
console.log(risultato7);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la 
*/

/* SCRIVI QUI LA TUA RISPOSTA */



function upperFirst(phase){

    let parole = phase.split(" ");

    for(i = 0; i < parole.length; i++){
        let parola = parole[i];
        let upper = word.chatAt[0].toUpperCase();
        words = upper + words.slice(1)
    }
    let result = words.join(" ");
    return result
    }
    
const  phase = "Difficile questo esercizio";
result = upperFirst(phase);







/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let str1 = "Andrea";
function cutString(str1){
    return  str1.slice(1, -1);
}
console.log(cutString(str1));



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n = 8, max = 10){//n è la lunghezza dell'array , max è il numero dei elementi
    return Array.apply(null, Array(n)).map(function(){
        return Math.round(Math.random()*max)
    });
}
let rislutato10 = giveMeRandom();
console.log(rislutato10);


