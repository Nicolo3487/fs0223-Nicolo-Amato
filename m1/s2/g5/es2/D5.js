/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish'];
 console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
/*
pets.reverse();
console.log(pets);
*/
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/*
pets.splice(0, 1, 'redfish');
pets.splice(3, 1, 'dog');
console.log(pets);
*/
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for(i = 0; i < cars.length; i++){
  cars[i].licensePlate = "VBA00" + i;
}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let b ={
  brand: 'Fiat',
  model: '500',
  color: 'purple',
  trims: 'oldstyle',
}
cars.push[b];
console.log(cars)

for(i = 0; i < cars.length; i++){
  cars[i].trims.pop();
}
console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
 for (d = 0; d < cars.length; d++){
  justTrims.push(cars[d].trims[0])
 }
 console.log(justTrims)
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (e = 0; e < cars.length; e++) {
  if (cars[e].color.startsWith ('b')) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }

}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,]

for(f = 0; f < numericArray.length; f++){
 do{
  console.log(numericArray[f]);
  f++;
 }
 while(numericArray[f] !==32){
  break;
 }
} 

/* esperimento..
for(g = 0; numericArray[g] !=32; g++){
  console.log(numericArray[g]);
}
*/ 

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array 
    composto dalle posizioni di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]
 let h = 0;
for(h = 0; h < charactersArray.length; h++){
 switch(charactersArray[h]){
  case 'g':
    console.log(7);
    break;
  case 'n':
    console.log(14);
    break;
  case 'u':
    console.log(21);
    break;
  case 'z':
    console.log(26);
    break;
  case 'd':
    console.log(4);
    break;
  default:
    break;
 }
}

