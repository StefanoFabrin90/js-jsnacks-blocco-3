// Snack 1
// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti

// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100

// 3. Stampare Nome, cognome, età e codice giocatore.

// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate

// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.



// step1 creazione dell mio array con i dati del giocatore

const players = [
    {
        codiceplayers: genCifreRandom (100, 200) + genLettere (),
        firstname: 'Paolo',
        lastname: 'Rossi',
        age: 23,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: genCifreRandom (0, 100),
    },
];
console.table(players);





// FUNZIONI

function genCifreRandom (min, max) {
    const cifreRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return cifreRandom;
}

function genLettere (){
    let text = '';
    let possible = 'DFHDJDVSJWNDVALSAMDHEFNKEFEJFJWK'

    for (let i = 0; i < 3; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
























// Snack 2
// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
// Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]


// const numbers = [4, 7, 20, 35, 67];
// console.log(numbers);

// const NewNumber = numbers.map ( (element) => {
//     return element * element
// });
// console.log(NewNumber);
