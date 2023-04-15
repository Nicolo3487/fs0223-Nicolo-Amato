
let myForm = document.getElementById('myForm');
let myFormButton = document.querySelector('#myForm.invia');



myForm.addEventListener('submit', function(e){
    e.preventDefault();//blocca funzionamento predefiniti qualora ce ne fossero, per l'elemento selezionato e questo evento

    console.log('inviato');
})


myFormButton = addEventListener('click', function(e){
    e.preventDefault();
    console.log('cliccato');
})

let nome = document.querySelector('#myForm input[name="nome"]');
let cognome = document.querySelector('#myForm input[name="cognome"]');
let email = document.querySelector('#myForm input[name="e-mail"]');
let password  = document.querySelector('#myForm input[name="psw"]');

let valid = true;
//ciclo if x 4
if(nome.value == ''){
    console.log('il campo nome è vuoto');
    valid = false;
}
if(cognome.value == ''){
    console.log('il campo cognome è vuoto');
    valid = false;
}
if(email.value == ''){
    console.log('il campo email è vuoto');
    valid = false;
}
if(password.value == ''){
    console.log('il campo password è vuoto');
    valid = false;
}


if(valid){
    console.log('inviato');
}