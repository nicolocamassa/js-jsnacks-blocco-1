/* Inizializzazione dei due array */
let array2 = [1, 2, 3, 4, 5];
let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

/* Visualizzazione dei due array originali */
console.log(array1)
console.log(array2)

/* Limitazione del for in base alla differenza della lunghezza dei due array */
let loopArray = array1.length - array2.length;
let loopArray2 = array2.length - array1.length;

if(array1.length < array2.length){
    /* Se il primo array è più corto aggiunge numeri casuali in base alla differenza */
    for(let i=0; i < loopArray2; i++){
        let randomNum = Math.floor(Math.random() * 100);
        array1.push(randomNum);
    }
}else{
    /* Se il primo array è più corto aggiunge numeri casuali in base alla differenza */
    for(let i=0; i < loopArray; i++){
        let randomNum = Math.floor(Math.random() * 100);
        array2.push(randomNum);
    }
}

/* Visualizzazione dei due array di lunghezza uguale */
console.log(array1);
console.log(array2);