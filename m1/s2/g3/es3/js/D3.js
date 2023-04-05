/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

{
  let n = 10
  let m = 13
if(n < m){
  console.log(true)
  }
}
//or
{
let x = 4;
let y = 20;
let max;
if(x > y){
  max = x;
}else{
  max = y;
}
console.log(max)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/*{
let numero = prompt('inserisci il numero da 1 a 20');
if(numero == 5){
  document.write('è uguale')
}else{
  document.write('è diverso')
}
console.log(numero)
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito
  è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
{
  let numero = prompt('inserisci il numero da 1 a 20');
  if(numero % 5 == 0){
    document.write('divisibile per 5')
  }else{
    document.write('non è divisibile per 5')
  }
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/*
{
  let x = prompt('inserisci il numero da 1 a 20')
  let y = prompt('inserisci il numero da 1 a 20')
  if(x + y == 8){
    console.log(8)
    }else if(x - y == 8){
      console.log(8)
    }else{
      console.log('non è uguale a 8')
  }
}
*/

//or

{
int1 = 4;
int2 = 4;
let result = int1 + int2;
  function somma(){
    let result = int1 + int2;
    }
    console.log(result)
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/*
{
let totalShoppingCart= prompt('Quanto è il totale in euro del tuo carrello?');
let spedizioneGratuita = 50;

function carrello(){
    if (totalShoppingCart >= 50){
    document.write('La tua spedizione è gratuita')
    }else{

      document.write(`Aggiungi ${spedizioneGratuita - totalShoppingCart} per ottenere la spedizione gratuita`)
    }
  }
  carrello();
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo,
   determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
{
  let totalShoppingCart = prompt('Quanto è il totale in euro del tuo carrello?')

}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/*
{
  let a = 4
  let b = 17
  let c = 9
  let arr = [4,17,9];
  if(a,b,c){
    (a,b,c)
  } 
console.log(arr)
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no 
  (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*{
  var numero = prompt('scrivi un numero!');
  var result = (numero%2);

  if(result = 0){
    console.log('il numero è pari')
  }else{
    console.log('il numero è dispari')
  }
}*/
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
 let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere 
  una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: ['Toronto']
}


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, 
  scrivi del codice per rimuovere la proprietà "lastName".
*/



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, 
  scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. 
  Riempilo successivamente con i numeri da 1 a 10.
*/
let arr=[]



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, 
  ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
