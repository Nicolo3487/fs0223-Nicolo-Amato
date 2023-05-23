
let player1 = Math.floor(Math.random()*100)
console.log('giocatore 1 :',player1);

let player2 = Math.floor(Math.random()*100)
console.log('giocatore 2 :',player2);

let numRandom = Math.floor(Math.random()*100)
console.log('numero casuale :',numRandom);

let diff_1:Number = Math.abs(player1 - numRandom);

let diff_2:Number = Math.abs(player2 - numRandom);
/*
if (diff_1 < diff_2) {
    console.log('Nessuno ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più');
} else if (diff_2 < diff_1 ){
    console.log('Nessuno ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più');
} else {

}*/


switch (true) {
    case (diff_2 > diff_1):
        console.log('Nessuno ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più');
        break;
    case (diff_1 > diff_2):
        console.log('Nessuno ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più');
        break;
    case(player1 === numRandom):
        console.log('Il giocatore 1 ha indovinato il numero');
        break;
    case(player2 === numRandom):
    console.log('Il giocatore 2 ha indovinato il numero');
    break;
    default:

}  