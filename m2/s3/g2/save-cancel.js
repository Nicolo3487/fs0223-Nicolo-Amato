console.log('esercizio-1');

let saveButton = document.getElementById('save-button');
let cancelButton = document.getElementById('cancel-button');
let nameField = document.getElementById('nameField');

saveButton.addEventListener('click', function (e) {
    e.preventDefault();
    let nameContent = nameField.value
    console.log('nome', nameContent)
    localStorage.setItem('name', nameContent)
})

cancelButton.addEventListener('click', function (e) {
    localStorage.clear(nameField.value)
    nameField.value = ''
})

var CountDownDate = new Date().getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = now - CountDownDate;

    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor(distance / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("time").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
})
