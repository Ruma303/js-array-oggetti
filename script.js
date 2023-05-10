//% Array

//let cities = ["Milano", "Torino", "Roma", "Napoli"];

//$ Accedere agli elementi

/* console.log(cities);

console.log(cities[0]); //Milano

console.log(cities[cities.length-1]); //Napoli

console.log(cities[4]); //undefined

console.log(cities[3]); //Napoli */


//$ Operazioni sugli elementi

/* for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
 */

//% Altre tipologie di Array in JavaScript

//$ Array Bidimensionali
/* const classi = [
    [1, 2, 3],
    ["Paolo", "Mirko", "Anna"]
]

console.log(classi)

console.log(classi[0])

console.log(classi[1][2]) //Anna */

//$ Array Bidimensionali
/* const premi = [
    posizioni = [1, 2, 3],
    classificati = ["Paolo", "Mirko", "Anna"]
]
console.log(premi.posizioni) */

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

/* let house = {
    address: "32 Boulevard st.",
    mq: 132,
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
} */

//$ Accedere agli oggetti
//console.log(house.mq); // 132

//$ Accedere agli oggetti innestati
//console.log(house.roommates[1].age); // 40

//$ Ordine proprietà
//console.log(house);
//console.table(house);

//$ Aggiungere proprietà fuori dall'oggetto
//house.color = "blue";
//console.log(house);

//$ Sovrascrivere proprietà fuori dall'oggetto
/* house.garden = true;
console.log(house.garden); // true */

//$ Eliminare proprietà dall'oggetto
/* delete house.roommates;
delete house.rooms;
console.log(house); */

//$ Accedere alle proprietà di un oggetto
/*
let user = {
    "name": 'John',
    10: "Ciao",
    "not my age": 20,
}
console.log(user["not my age"]); //20

let saluta = "name";
console.log(user.saluta);//undefined
console.log(user[saluta]);//John
console.log(user["name"]);//John
*/
