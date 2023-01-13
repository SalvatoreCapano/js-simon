/*
-Generare 5 numeri casuali
-Stampare i 5 numeri casuali

-Dopo 30 secondi
    -I numeri scompaiono
    -Eseguire 5 volte:
        -Inserire nel prompt i numeri in ordine
        -Controllare se numero inserito = numero casuale
            -se Vero: 
                -punteggio++
                -inserire numero inserito nell'array numeri indovinati
    -Stampare punteggio
    -Stampare array numeri indovinati 
*/

const playBtn = document.querySelector("#playBtn");
let numbersNumber = 5;


playBtn.addEventListener("click", function(){

    console.clear();

    let numbers = [];

    for (let i = 0; i <= numbersNumber; i++) {

        numbers.push(getUniqueRandomNumber(numbers));

    }
    console.log("L'array da indovinare e'", numbers);

});







// FUNZIONI
// Genera un numero casuale tra min e max
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Dato un array, genera un numero casuale non presente nell'array
function getUniqueRandomNumber (array) {

    let newRandomNumber;

    do {
        newRandomNumber = getRandomNumber(1, 500);
    }
    while (array.includes(newRandomNumber))

    return newRandomNumber;
}