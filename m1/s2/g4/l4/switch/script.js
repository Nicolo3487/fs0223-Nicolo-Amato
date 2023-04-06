/*
    let frutto = 'Mela';
    switch( frutto){
        case 'Mela':
            document.write('La Mela costa 2.10€');
            break;
        case 'Pera':
            document.write('La Pera costa 1.80€');
            break;
        case 'Mango':
        case'Papaya':
            document.write('la Papaya costa 5.00€');
            break;
        default:
            document.write(`Non abbiamo il ${frutto}`);
    }
*/
//esercizio
/*
function mostraPrezzo(){

let frutto = document.getElementById('frutta').value;
console.log(frutto)// non scrivere frutto.innerHTML

switch( frutto){
    case 'Kiwi':
        document.write('Il Kiwi costa 0.80€ all\'uno');
        break;
    case 'Mela':
        document.write('La Mela costa 2.10€');
        break;
    case 'Pera':
        document.write('La Pera costa 1.80€');
        break;
    case 'Mango':
        document.write();
        break;
    case'Papaya':
        document.write('la Papaya costa 5.00€');
        break;
    default:
        document.write(`Non abbiamo il ${frutto}`);
    }
}
*/
//un altro esempio, codice pulito e piu funzionale
/*
function mostraPrezzo(select){

    let frutto = select.value;
    let risultato;
    switch( frutto){
        case 'Kiwi':
            risultato = 'Il Kiwi costa 0.80€ all\'uno';
            break;
        case 'Mela':
            risultato = 'La Mela costa 2.10€';
            break;
        case 'Pera':
            risultato = 'La Pera costa 1.80€';
            break;
        case 'Mango':
            risultato = '';
            break;
        case'Papaya':
            risultato = 'la Papaya costa 5.00€';
            break;
        default:
            risultato = `Non abbiamo il ${frutto}`;
        }
         console.log(risultato);//trovare alternativa
    }
*/
//
/*
function mostraPrezzo(select){
    let prezzo = document.getElementById('prezzo')
    let frutto = select.value;
    let risultato;
    switch( frutto){
        case 'Kiwi':
            risultato = 'Il Kiwi costa 0.80€ all\'uno';
            break;
        case 'Mela':
            risultato = 'La Mela costa 2.10€';
            break;
        case 'Pera':
            risultato = 'La Pera costa 1.80€';
            break;
        case 'Mango':
            risultato = '';
            break;
        case'Papaya':
            risultato ='la Papaya costa 5.00€';
            break;
        default:
            risultato = `Non abbiamo il ${frutto}`;
        }
        prezzo.textContent = risultato
    }
*/