/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */

const arrayNumeri = [1, 2, 4, 5, 6, 7, 8, 9];
let somma = 0;

for( z = 0; z < arrayNumeri.length; z ++ ){
    const thisElement = arrayNumeri[z];
    console.log(arrayNumeri);
    
    if (z % 2 == 1){
        somma = somma + thisElement;
    }
}
console.log(somma);