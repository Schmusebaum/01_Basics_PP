

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));


/* Iteration 1*/

// function getSentence(arr, op) {
//     // verbindet die Wörter im Array mit Leerzeichen, um den Basis-Satz zu formen
//     let sentence = arr.join(" ");
    
//     // Bestimmt die passende Interpunktion basierend auf dem 'op' Parameter
//     let punctuation;
//     if (op == "S") {
//         punctuation = ".";
//     } else if (op == "Q") {
//         punctuation = "?";
//     } else if (op == "E") {
//         punctuation = "!";
//     } else {
//         // Standardmäßig auf einen Punkt setzen, wenn der Operationstyp nicht erkannt wird
//         punctuation = ".";
//     }
    
//     // Gib den Satz mit der korrekten Interpunktion zurück
//     return sentence + punctuation;
// }



// // Modul: Ausgabe in Konsole : Test
// // output("hi"); 
// function output(outputData) {
//     console.log(outputData);
// }

/* Iteration 2 */

function getSentence(arr, op) {
    // Verbinde die Wörter im Array mit Leerzeichen, um den Basis-Satz zu formen
    let sentence = arr.join(" ");

    // Definiere ein Objekt für die Zuordnung der Interpunktion
    const punctuationMap = {
        "S": ".",
        "Q": "?",
        "E": "!"
    };

    // Bestimme die passende Interpunktion basierend auf dem 'op' Parameter
    // Wenn der Parameter ungültig ist, nutze standardmäßig einen Punkt.
    let punctuation = punctuationMap[op] || ".";

    // Gib den Satz mit der korrekten Interpunktion zurück
    return sentence + punctuation;
}

// Modul: Ausgabe in der Konsole : Test
function output(outputData) {
    console.log(outputData);
}