
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter Iteration 1
/*let year = 2024;
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;
*/

//Berechnung Alter Iteration 2
//let date = new Date();
//let year = date.getFullYear();
//console.log("Datum "+ date);
//console.log("Jahr "+ date.getFullYear());
//console.log("Jahr "+ year);

// Berechnung Alter Iteration 3

let year = new Date().getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;
// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

//Deklaration
let isJohnOlder;  // Is John older? --> y/n --> true / false
isJohnOlder = (ageJohn > ageMark);  // Test auf Ungleichheit
let isJohnEqual = (ageJohn == ageMark); // Test auf Gleichheit

console.log("Is John Older?: " + isJohnOlder);
console.log("Is Jogn equal " + ageMark);