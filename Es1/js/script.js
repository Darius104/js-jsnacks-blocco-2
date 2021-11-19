// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.

let userNumber = parseInt(prompt('Inserisci un numero: '))

if ( userNumber % 2 === 0 ){
    alert(userNumber);
}else{
    alert(userNumber = userNumber + 1);
}