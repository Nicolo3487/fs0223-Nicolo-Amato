for(let i = 0; i < 10; i++){
    document.write(i + '<br>');
}


//ciclare un array con for
let pizze = ['Margherita','Diavola','Marinara','Mimosa'];
for(let c= 0; c < pizze.length; c++){
    document.write(pizze[c] + '<br>');
}

document.write('<ul>');
for(let prop in pizze){
    document.write(`<li>${prop}: ${pizze[prop]}</li>`)
}
document.write(`</ul>`)


document.write('<hr>')

//ciclare un array for of
for(let pizza of pizze){
    document.write(pizza + '<br>')
}

// come ciclare un oggetto
let persona = {
    nome: 'Mario',
    cognome: 'Rossi',
    anni: '30',
}
console.log(persona.nome);
console.log(persona['nome']);

document.write('<ul>');
for(let prop in persona){
    document.write(`<li>${prop}: ${persona[prop]}</li>`)
}
document.write(`</ul>`)