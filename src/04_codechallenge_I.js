
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let number1 = prompt("Zahl 1: ");
let number2 = prompt("Zahl 2: ");
let number3 = Number(number1) + Number(number2);
console.log("Summe = " + number3);
