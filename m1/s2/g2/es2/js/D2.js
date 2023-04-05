/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*Js ammette 5 tipologie di dati:
1.String: la stringa è tutto ciò che viene scritto tra due apici che siano singoli o doppi oppure tra due backtik;
2.Number: prende qualsiasi numero, intero o decimale;
3.Boolean: ammette due valori: true o false;
4.Null: è una keyword e indica intenzionale assenza di oggetto. Questo  non significa che il valore sia 0 in quanto è un valore.
5.Undefinied: segnala che la variabile non ha valore assegnato o non di partenza definita.
6.Object: è tutto ciò che viene inserito all'interno delle parentesi graffe {}. 
Racchiude l'insieme delle caratteristiche dell'oggetto stesso. l'operatore di assegnazione del valore e delle caratteristiche sono i due punti (:).
Indichiamo anche Array che è un particolare tipo di oggetto e viene rappresentato tramite le parentesi quadre[].
*/

/* ESERCIZIO 2 
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var name = "Nicolò"
console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
a += 20;
console.log(a);
//or
function somma(p1, p2) {
  return p1 + p2;
}
document.getElementById("somma").innerHTML = somma(12, 20);
//or
console.log(12 + 20);
//or
let c = 12;
let d = 20;
let risultato = (c + d);
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Amato";
console.log(name);
const NAME = "Nicolò";
console.log(NAME);
//il costrutto const è un blockscope, posso riassegnare il valore nella const o creare una nuova const.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/



console.log(4 - x);

x -= 4;
console.log(x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = "john"
var name2 = "John"
console.log(name1 === name2)
//extra
let text = "Hello World!";
let result = text.toLowerCase();
document.getElementById().innerHTML = result;

