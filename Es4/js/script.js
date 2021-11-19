/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */

let emptyArray = [];
let somma = 0;

do{
    thisNumber = parseInt(prompt('Inserisci un numero dentro l\'array'));
    emptyArray.push(thisNumber);
    somma = somma + thisNumber;

}while(somma < 50);

console.log(`Il risultato è: ${somma}`);