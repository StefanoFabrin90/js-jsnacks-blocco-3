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
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'Niccoló',
        lastname: 'Mannion',
        age: 23,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'Marco',
        lastname: 'Belinelli',
        age: 33,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'Alessandro',
        lastname: 'Pajola',
        age: 23,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'Kevin',
        lastname: 'Hervey',
        age: 26,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'Ekpe',
        lastname: 'Udoh',
        age: 30,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'kyle Weems',
        lastname: 'Rossi',
        age: 27,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'Milos',
        lastname: 'Teodosic',
        age: 34,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'Awudu Abas',
        lastname: 'Rossi',
        age: 23,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'JaKarr',
        lastname: 'Sampson',
        age: 28,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
    {
        codiceplayers: `${genCifreRandom (100, 200) + genLettere ()}`,
        firstname: 'Marco',
        lastname: 'Ceron',
        age: 23,
        mediapunti: genCifreRandom (0, 50),
        tiridatre: `${genCifreRandom (0, 100)}%`,
    },
];
console.table(players);

document.querySelector('.player1').innerHTML += 
`${players[0].firstname}
${players[0].lastname}: etá
${players[0].age}: codice giocatore:
${players[0].codiceplayers}`

document.querySelector('.player2').innerHTML += 
`${players[1].firstname}
${players[1].lastname}: etá
${players[1].age}: codice giocatore:
${players[1].codiceplayers}`

document.querySelector('.player3').innerHTML += 
`${players[2].firstname}
${players[2].lastname}: etá
${players[2].age}: codice giocatore:
${players[2].codiceplayers}`

document.querySelector('.player4').innerHTML += 
`${players[3].firstname}
${players[3].lastname}: etá
${players[3].age}: codice giocatore:
${players[3].codiceplayers}`

document.querySelector('.player5').innerHTML += 
`${players[4].firstname}
${players[4].lastname}: etá
${players[4].age}: codice giocatore:
${players[4].codiceplayers}`

document.querySelector('.player6').innerHTML += 
`${players[5].firstname}
${players[5].lastname}: etá
${players[5].age}: codice giocatore:
${players[5].codiceplayers}`

document.querySelector('.player7').innerHTML += 
`${players[6].firstname}
${players[6].lastname}: etá
${players[6].age}: codice giocatore:
${players[6].codiceplayers}`

document.querySelector('.player8').innerHTML += 
`${players[7].firstname}
${players[7].lastname}: etá
${players[7].age}: codice giocatore:
${players[7].codiceplayers}`

document.querySelector('.player9').innerHTML += 
`${players[8].firstname}
${players[8].lastname}: etá
${players[8].age}: codice giocatore:
${players[8].codiceplayers}`

document.querySelector('.player10').innerHTML += 
`${players[9].firstname}
${players[9].lastname}: etá
${players[9].age}: codice giocatore:
${players[9].codiceplayers}`



// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.


const greatPlayers = players.filter( (element) => {
    if (element.mediapunti > 35 && element.tiridatre > 80%){
        return element.tiridatre, element.mediapunti
    }
    return element.tiridatre, element.mediapunti
});
console.table(greatPlayers);

















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
