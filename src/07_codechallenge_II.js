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
let Saft = alter > 5 && alter < 13 
let Cola = alter > 12 && alter < 18
let Wein = alter > 17 

if ( milch)
 {
    console.log(name + " trinkt Milch")
} 
else if (Saft)
{
    console.log(name + " trinkt Saft")
}
else if (Cola)
{
    console.log(name + " trinkt Cola")
}
else 
{
    console.log(name + " trinkt Wein")
}
