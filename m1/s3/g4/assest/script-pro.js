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

let campi = document.querySelector('#myForm input');
let [nome, cognome, email, password] = campi;
let valid = true;

for(let campo of campi){
    if(campo.value == ''){
        campo.style.outline = "1 solid "
    }
}