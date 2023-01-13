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

    console.clear();
    numbersContainer.innerHTML = "";

    let numbers = [];

    // Crea e stampa i numeri casuali
    for (let i = 0; i <= numbersNumber; i++) {

        numbers.push(getUniqueRandomNumber(numbers));

        const newElement = document.createElement("span");
        newElement.classList.add("number");
        newElement.innerText = numbers[i];

        numbersContainer.append(newElement);
    }
    console.log("L'array da indovinare e'", numbers);

    // Countdown
    let seconds = 5;
    let percUnit = 100 / seconds;
    let perc = 100;

    const countdown = setInterval(function(){

        if (seconds >= 0) {
            console.log(seconds);
            timer.innerText = seconds;
            root.style.setProperty("--progressBarWidth", `${perc}%`)

            seconds--;
            perc = perc - percUnit;
        }
        else {
            clearInterval(countdown);
            console.log("FINE");
            numbersContainer.style.display = "none";
        }
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