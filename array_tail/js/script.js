/* Inizializzazione delle variabile */
let arrayLength = parseInt(prompt("Quanti elementi dovrà contenere l'array?"));
let arrayRandom = [];

/* For ripetuto in base all'input dell'utente */
for(let i = 1; i<=arrayLength; i++){
    /* Generazione dei numeri casuali */
    let randomNum = Math.floor(Math.random() * 100) + 1;
    arrayRandom.push(randomNum);
}

/* Inizio del conteggio del for dalla fine */
let startArray = arrayRandom.length - 1;

/* Limite del conteggio per 5 numeri */
let limitFor = arrayRandom.length - 6;

/* Stampa gli ultimi 5 numeri decrementando */
for(let i = startArray; i>limitFor; i--){
    console.log(arrayRandom[i]);
}


