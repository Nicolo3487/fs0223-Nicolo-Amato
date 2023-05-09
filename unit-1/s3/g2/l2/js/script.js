let now = new Date();
let year = now.getFullYear();
console.log(year);


let weekDay = now.getDay();// l'indice del giorno delle settimana parte da domenica e va da 0 a 6
let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Saturday'
]

console.log(days[weekDay]);

let monthDay = now.getMonth();
let time = now.getTime();

console.log(year, weekDay, monthDay, time);








