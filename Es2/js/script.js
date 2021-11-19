/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

const names = ['pippo','luca','giovanni','pietro'];
const lastName = ['Alfonsio','Perugia','Nometti','Alfieri'];
const arrayFake = [];

for (let x = 0; x < names.length; x++){
    const thisName = names[Math.floor(Math.random() * (names.length -1)) + 0];
    const thisLastName = lastName[Math.floor(Math.random() *(names.length -1)) + 0];

    alert(thisName + ' ' + thisLastName);
}