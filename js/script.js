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

const root = document.querySelector(":root");
const playBtn = document.querySelector("#playBtn");
const numbersContainer = document.querySelector(".numbers");
const timer = document.querySelector(".timer");

let numbersNumber = 5;

playBtn.addEventListener("click", function(){

    // Reset
    console.clear();
    numbersContainer.innerHTML = "";
    numbersContainer.style.display = "flex";
    let numbers = [];
    let score = 0;
    let correctNumbers =[];

    playBtn.setAttribute("disabled", "");

    root.style.setProperty("--progressBarWidth", "100%");

    // Crea e stampa i numeri casuali
    for (let i = 0; i < numbersNumber; i++) {

        // Ottiene numero casuale unico
        numbers.push(getUniqueRandomNumber(numbers));

        // Crea elemento HTML in cui stampa il numero casuale
        const newElement = document.createElement("span");
        newElement.innerText = numbers[i];

        // Agg. l'elemento creato alla pagina
        numbersContainer.append(newElement);
    }
    console.log("L'array da indovinare e'", numbers);

    // Countdown
    let seconds = 30;
    let percUnit = 100 / seconds;
    let perc = 100;

    const countdown = setInterval(function(){

        if (seconds >= 0) {
            // Stampa il secondo attuale e dimensiona la barra
            console.log(seconds);
            timer.innerText = seconds;
            root.style.setProperty("--progressBarWidth", `${perc}%`)

            seconds--;
            perc = perc - percUnit;
        }
        // Caso tempo scaduto
        else {
            clearInterval(countdown);
            console.log("Tempo Scaduto");
            timer.innerText = "Tempo Scaduto";
            numbersContainer.style.display = "none";

            let userInput = [];

            // Inserimento numeri utente
            for (let i = 0; i < numbersNumber; i++) {

                do {
                    userInput[i] = parseInt(prompt(`Inserisci il ${i+1} numero:`));
                    if (isNaN(userInput)) {
                        console.log("Inserisci un numero valido!!");
                    }
                }
                while (isNaN(userInput[i]));

                // Controlla se il numero inserito e' corretto
                if (userInput[i] == numbers[i]) {
                    score++;
                    correctNumbers.push(userInput[i]);
                }
            };
            console.log("Hai inserito:", userInput);

            // Stampa quanti e quali sono i numeri indovinati
            console.log(`Hai indovinato ${correctNumbers.length} numeri:`);
            for (let i = 0; i < correctNumbers.length; i++) {
                console.log(correctNumbers[i]);
            };

            // Stampa punteggio
            console.log(`Hai totalizzato ${score} punto/i.`);

            playBtn.removeAttribute("disabled", "");
        };
    },1000);
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