
if(new Date().getHours() <18) {
   document.getElementById("orario").innerHTML = "Buongiorno!"
}

var altezza = prompt('quanto sei alto?');

console.log(altezza);

if( altezza >=165 && altezza <= 200){
    document.write('Sei grand*!');
}else if(altezza > 200){
    document.write('Sei gigante!');
}else{
    document.write('Sei bass*!');
}
  

 
 