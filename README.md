Esercizio di oggi pomeriggio: Array Snacks
nome repo: js-jsnacks-blocco-1
:avviso: creiamo una sottocartella per ciascun esercizio/snack
1. TuttiFrutti
Cartella array-lista
Descrizione:
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.
2. La coda dell'Array
Cartella: array_tail
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array
3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

-------------------RISOLUZIONE DEL PROBLEMA-------------------
A. TUTTIFRUTTI
1. Creare l'array per la frutta.
2. La pesca "sul tavolo" dovrà essere pushata nell'array.
3. Creare un ciclo for che controlla tutte le posizioni dell'array per trovare "cocomero" (utilizzare la flag).
    +3 Se c'è il cocomero la flag è true.
    -3 Altrimenti la flag è false.
4. Stampare l'output.

B. LA CODE DELL'ARRAY
1. Chiediamo con un prompt quanti elementi deve contenere l'array.
2. L'input deve essere salvato in una variabile che determina quante volte il ciclo deve essere ripetuto.
3. Per ogni ciclo deve essere creato un numero casuale da 1 a 100.
4. Stampiamo gli ultimi 5 elementi con un ciclo che decrementa.

C. BONUS
1. Inizializziamo due array di lunghezza differente.
2. Creiamo un controllo per l'array più lungo.
3. Se l'array è più lungo pushiamo con un for ogni singolo valore nell'array più corto.
