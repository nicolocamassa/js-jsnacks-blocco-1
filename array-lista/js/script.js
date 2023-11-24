let fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
let table = 'pesca';
let flag = false;

for(let i = 0; i < fruits.length; i++){
    if(fruits[i] == 'cocomero'){
        flag = true
    }
}

if(flag){
    console.log("Trovato! Devo solo preparare il cocktail.")
}else{
    console.log("Oh no, devo uscire a comprare il cocomero!")
}

