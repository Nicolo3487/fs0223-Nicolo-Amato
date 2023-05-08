let x = {
    firstName: 'John',
    lastName: 'Smith',
    age: 25,
    location: 'Washington',
}

let y = {
    firstName: 'Josh',
    lastName: 'Smith',
    age: 23,
    location: 'Panama',
}

let users =[];
class Users {
    constructor(firstNme, lastName, age, location){
        this.firstNme = firstNme;
        this.lastName = lastName;
        this.age = age;
        this.location = location; 
    }
}
compareAge = function(){
    if( x.age > y.age){
        return x.firstName + ' è piu vecchio di ' + y.firstName;
    } else {
        return y.firstName + ' è piu giovane di ' + x.firstName;
    }
}
console.log(compareAge())