//% Array

//, Sintassi
let cities = ["Milano", "Torino", "Roma", "Napoli"];
let fruits = new Array("Apple", "Banana", "Cherry",);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(cities, fruits);


//, Accedere agli elementi

/* console.log(cities[0]); // Milano
console.log(cities[1]); // Torino
console.log(cities[2]); // Roma
console.log(cities[3]); // Napoli */


//, length
/* console.log(cities.length) // 4
console.log(fruits.length) // 3 */

// console.log((cities.length * 6) / 3) // 8

/* console.log(cities[cities.length]); // undefined
console.log(cities[cities.length -1]); // Napoli

console.log(cities[4]); // undefined
console.log(cities[3]); // Napoli */


//, Array Bidimensionali

/* const classi = [
    [1, 2, 3],
    ["Paolo", "Mirko", "Anna"]
]

console.log(classi);
// [1, 2, 3], ["Paolo", "Mirko", "Anna"]

console.log(classi[0]); // [1, 2, 3]

console.log(classi[1][2]); // Anna */


//, Array di oggetti
/* const people = [
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

console.log(people[0]); // Primo oggetto
console.log(people[1].message()); // "Hi, I'm Sara."

for (let person of people) {
    console.log(`Name: ${person.name}\nAge: ${person.age}`);
} */


//, Destrutturazione array
// const numeri = [1, 2, 3];

//* Senza destrutturazione
/* const uno = numeri[0];
const due = numeri[1];
const tre = numeri[2]; */

//* Con destrutturazione
/* const [uno, due, tre] = numeri;
console.log(uno, due, tre); // 1 2 3 */

/* const [uno, , tre] = numeri;
console.log(uno, tre); // 1 3 */


//, Spread operator
/* const numeri1 = [1, 2, 3];
const numeri2 = [4, 5, 6];
let numeri3 = [0, ...numeri1, ...numeri2];
console.log(numeri3); // [0, 1, 2, 3, 4, 5, 6]

let numeri4 = [0, numeri1, numeri2];
console.log(numeri4); // [0, [1, 2, 3], [4, 5, 6]] */


//, Iterare sugli array
/* const cities = ["Milano", "Torino", "Roma", "Napoli"];

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

let j = 0;
do {
    console.log(cities[j]);
    j++;
} while (j < cities.length); */



//, Metodi degli array

//* forEach()
/* fruits.forEach((fruit) => {
    console.log(fruit);
}); // Apple Banana Cherry */

/* fruits.forEach((fruit, index) => {
    console.log("Position:", index, ", Element:", fruit);
}); */


//* filter()
/* const newFruits = fruits.filter((fruit) => fruit !== "Banana");
console.log(newFruits); // ["Apple", "Cherry"] */


//* map()
/* const numbers = [1, 2, 3, 4];
const newNumbers = numbers.map((num) => num * 2);
console.log(newNumbers); // [2, 4, 6, 8] */


//* sort()
/* numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.sort((a, b) => b - a);
console.log(numbers);
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] */


//* reverse()
/* const revArray = cities.reverse();
console.log(revArray); // ['Napoli', 'Roma', 'Torino', 'Milano'] */


//* reduce()
/* const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 55 */


//* every()
/* const greaterThanTwo = numbers.every(num => num > 2);
console.log(greaterThanTwo); // false

const lessThanTwenty = numbers.every(num => num < 20);
console.log(lessThanTwenty); // true */


//* some()
/* const equalsToTen = numbers.some(num => num == 10);
console.log(equalsToTen); // true */


//* find()
/* const found = numbers.find(num => num == 5);
console.log(found); // 5 */


//* includes()
/* const hasApple = fruits.includes("Apple");
console.log(hasApple); // true */


//* indexOf()
/* const positionOfRome = cities.indexOf("Roma");
console.log(positionOfRome); // 2 */


//* concat()
/* const numbers1 = [1,2,3,4];
const numbers2 = [5,6,7,8];
const newArray = numbers1.concat(numbers2);
console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8] */


//* split()
/* const str = "Hello, World!";
const words = str.split(", "); // Separatori
console.log(words); // ["Hello", "World!"] */


//* join()
/* const elements = ["Fire", "Air", "Water"];
const result = elements.join(", "); // Usare dei separatori
console.log(result); // "Fire, Air, Water" */


//* slice()
/* const firstThreeNumbers = numbers.slice(0, 3);
console.log(firstThreeNumbers); // [1, 2, 3] */


//* splice()
/* const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");
// Inserisce "Feb" all'indice 1 senza rimuovere elementi
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

const removed = months.splice(4, 1, "May");
// Sostituisce 1 elemento all'indice 4
console.log(months); // ["Jan", "Feb", "March", "April", "May"]
console.log(`Removed: ${removed}`); // "Removed: June" */


//* fill()
/* const array = [1, 2, 3, 4];
array.fill(0, 2, 4);
console.log(array); // [1, 2, 0, 0] */


//* push()
/* cities.push("Bologna");
console.log(cities);
// ["Milano", "Torino", "Roma", "Napoli", "Bologna"] */


//* pop()
/* cities.pop();
console.log(cities);
// ["Milano", "Torino", "Roma"] */


//* unshift()
/* cities.unshift("Venezia");
console.log(cities);
// ["Venezia", "Milano", "Torino", "Roma", "Napoli"] */

//* shift()
/* cities.shift();
console.log(cities);
// ["Torino", "Roma", "Napoli"] */