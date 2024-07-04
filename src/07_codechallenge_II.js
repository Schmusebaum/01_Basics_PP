/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

let name =  prompt("Name: ") ;
let alter = prompt("Alter: ") ;

let milch = alter >= 0 && alter < 6
let saft = alter > 5 && alter < 13 
let cola = alter > 12 && alter < 18


if ( milch)
 {
    console.log(name + " trinkt Milch")
} 
else if (saft)
{
    console.log(name + " trinkt Milch oderSaft")
}
else if (cola)
{
    console.log(name + " trinkt Milch, Saft oder Cola")
}
else 
{
    console.log(name + " trinkt Milch, Saft, Cola oder Wein")
}
