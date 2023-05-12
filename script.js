//% Array

//let cities = ["Milano", "Torino", "Roma", "Napoli"];

//$ Accedere agli elementi

/*
console.log(cities);
console.log(cities[0]); //Milano
console.log(cities.length-1)// 4
console.log(cities.length)// 3
console.log(cities[cities.length]); //undefined
console.log(cities[cities.length-1]); //Napoli
console.log(cities[4]); //undefined
console.log(cities[3]); //Napoli

 */

//$ Operazioni sugli elementi

/*
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
 */

//% Altre tipologie di Array in JavaScript

//$ Array Bidimensionali
/*
const classi = [
    [1, 2, 3],
    ["Paolo", "Mirko", "Anna"]
]

console.log(classi)

console.log(classi[0])

console.log(classi[1][2]) //Anna
 */


//$ Array di oggetti
/* let people = [
    {
        name: "Paolo",
        age: 23,
        products: ["iPhone", "Scarpe Nike", "Capello Obey"],
        married: false,
        message: () => "Hi, I'm Paolo."
    },
    {
        name: "Sara",
        age: 25,
        products: ["Xiaomi", "Borsa Fendi", "Scarpe Reebok"],
        married: true,
        message: () => "Hi, I'm Sara."
    },
]

console.log(people[0]); //Primo oggetto
console.log(people[1].message()); //"Hi, I'm Sara."

for (let person of people){
    console.log(`Name: ${person.name} \n Age: ${person.age}`);
}
 */

//$ Metodi degli array

//* concat()
/*
const numbers1 = [1,2,3,4];
const numbers2 = [5,6,7,8];
const newArray = numbers1.concat(numbers2);
console.log(newArray); //[1, 2, 3, 4, 5, 6, 7, 8]
*/

//* every()
/*
const numbers = [1,2,3,4];
const greaterThanTwo = numbers.every(num => num > 2);
console.log(greaterThanTwo); //false
const greaterThanZero = numbers.every(num => num < 10);
console.log(greaterThanZero); //true
*/

//* some()
/*
const numbers = [1,2,3,4];
const greaterThanTwo = numbers.some(num => num > 2);
console.log(greaterThanTwo); //true

 */


//% Oggetti


//$ Approfondimenti



//* Conversione chiave in stringa
/*
let object = {
    "key" : "key",
}
console.log(object.key); // key
 */

//* Proprietà dinamiche
/*
const name = "non saprei";
let object = {
    [name] : "Edoardo"
}
console.log(object[name]); // Edoardo
console.log(name); // non saprei
*/

//* Nome chiave e valore uguali

let age = 30;
let object = {
    name : "name",
    age
}
console.log(object.age); //30




//$ Operazioni in un oggetto

/*
let house = {
    mq: 132,
    "address": "32 Boulevard st.",
    garden: false,
    rooms: ["kitchen", "bathroom", "bedroom", "small bedroom", "hallway"],
    roommates: [
        {
        name: "Anna",
        age: 36
        },
        {
        name: "Francesco",
        age: 40
        },
    ],
}
 */
//$ Accedere agli oggetti
//console.log(house.mq); // 132
//console.log(house.rooms[3]); //small bedroom

//$ Accedere agli oggetti innestati
//console.log(house.roommates[1].age); // 40

//$ Ordine proprietà
//console.log(house);
//console.table(house);

//$ Aggiungere proprietà fuori dall'oggetto
//house.color = "blue";
//console.log(house.color);

//$ Sovrascrivere proprietà fuori dall'oggetto
/*
console.log(house.garden); // false
house.garden = true;
console.log(house.garden); // true
 */

//$ Eliminare proprietà dall'oggetto
/*
console.log(house);
delete house.roommates;
delete house.rooms;
console.log(house);
*/

/* delete house;
console.log(house.address); */

//$ Accedere alle proprietà di un oggetto
/*
let user = {
    "name": 'John',
    10: "Ciao",
    "not my age": 20,
}

//console.log(user.10); //Ciao
console.log(user[10]); //Ciao
console.log(user[2*5]); //Ciao
console.log(user[100/10]); //Ciao
//console.log(user.not my age); //20
console.log(user["not my age"]); //20

let saluta = "name";
console.log(user.saluta);//undefined
console.log(user[saluta]);//John
console.log(user["name"]);//John

 */