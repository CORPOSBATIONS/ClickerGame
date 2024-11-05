//inizio dichiarazione delle variabili

let counter = 0;
let valueOnClick = 1;
let passiveValue = 0;
let priceItem1 = 10;
let priceItem2 = 30;
let priceItem3 = 500;
let bool1 = true;
let i = 0;
let item1TB = 0;
let item2TB = 0;
let item3TB = 0;
let it2M = 1;
let it1M = 1;
let spentOnItem1 = 0;
let spentOnItem2 = 0;
let clickDoubleSpeed = false;
let lastPriceI1 = 0;
let totalPointsMade = counter;
const achievement = [];
let ach1 = false;
let ach2 = false;
let ach3 = false;
let ach4 = false;
let ach5 = false;
let ach6 = false;
let ach7 = false;
let ach8 = false;
let cheatAchievement = false;
let msgAch1 = document.getElementById("ach1");
let msgAch2 = document.getElementById("ach2");
let msgAch3 = document.getElementById("ach3");
let msgAch4 = document.getElementById("ach4");
let msgAch5 = document.getElementById("ach5");
let msgAch6 = document.getElementById("ach6");
let msgAch7 = document.getElementById("ach7");
let msgAch8 = document.getElementById("ach8");
let count = document.getElementById("c");
let item1 = document.getElementById("bItem1");
let item2 = document.getElementById("bItem2");
let item3 = document.getElementById("bItem3");
let sitem1 = document.getElementById("bItem4");
let sitem2 = document.getElementById("bItem5");
let divSell1 = document.getElementById("bDiv1");
let divSell2 = document.getElementById("bDiv2");
let divSell3 = document.getElementById("bDiv3");
let container = document.getElementById("containerButton");
let countPps = document.getElementById("pps");
let valueForClick = document.getElementById("cppc")
let clicks = document.getElementById("clickMade");
let sellCheckBox = document.getElementById("checkSell");
let pForBuy = document.getElementById("pForBuy");
let pForSell = document.getElementById("pForSell");
let allBttDiv = document.getElementsByClassName("buyableItem");
let desc = document.getElementById("desc");

// Costanti
const mainButton = document.getElementById("clickme");

//fine dichiarazione delle variabili
//creazione oggetti globali

//fine creazione oggetti globali
//inizio "toggle" di vari 'd-none' e altre operazioni da fare una volta sola all' avvio della pagina

item1.classList.toggle("d-none");
item2.classList.toggle("d-none");
item3.classList.toggle("d-none");
pForBuy.classList.toggle("d-none");
divSell1.classList.toggle("sellableItem")
divSell2.classList.toggle("sellableItem")
divSell3.classList.toggle("sellableItem")
divRadio.classList.toggle("d-none")

achievement.push(10);
achievement.push(100);
achievement.push(1000);
achievement.push(100000);
achievement.push(1);
achievement.push(10);
achievement.push(25);
achievement.push(50);

//fine "toggle" di vari 'd-none' etc.

//INZIO CODICE=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Funzione di settaggio della finestra (non parte quando starta il codice ma è di già così)
document.addEventListener("DOMContentLoaded", function() {

    let keyPressed = false; // Variabile per tracciare se un tasto è premuto
    
    // Aggiungi l'event listener per il clic del mouse
    mainButton.addEventListener("click", clicked);

    // Aggiungi l'event listener per la pressione dei tasti
    document.addEventListener("keydown", function(event) {
        // Verifica se il tasto premuto è uno specifico tasto, ad esempio la barra spaziatrice (codice 32) o il tasto "Enter" (codice 13)
        if ((event.code === "Space" || event.code === "Enter")&& !keyPressed) {
            event.preventDefault();
            keyPressed = true; // Imposta la variabile a true quando un tasto è premuto
            clicked();
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.code === "Space" || event.code === "Enter") {
            keyPressed = false; // Resetta la variabile quando il tasto viene rilasciato
            event.preventDefault();
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            event.preventDefault();
        }
    }); 
});

function clicked() // funzione per l'aggiunta del punto quando si preme
{
    counter = counter + valueOnClick;
    count.innerHTML = "Points: " + counter.toFixed(1);
    i++;
    totalPointsMade+= valueOnClick;
}

function delay(time) { // serve per i timer
    return new Promise(resolve => setTimeout(resolve, time));
  }

function passiveIncrease(v) { // quando si compra l'upgrade per l' introito passivo
    if(item1TB == 0 ) {
        passiveValue = 0.2;
    }
    checkIncreasePricePassive(v);
    passiveValue = passiveValue * 1.15;
    item1TB ++;
}


function clickIncrease(v) { // funzione per l'upgrade del valore quando si clicca
    valueOnClick = valueOnClick*1.3;
    checkPriceIncreaseClick();
    item2TB++;
}

item3.disabled = true;

function checkPrices() { //funzione che controlla se si hanno i punti per comprare i vari upgrade
        if(priceItem1 > counter) {
            item1.disabled = true;
        } else {
            item1.disabled = false;
        }
        if(priceItem2 > counter) {
            item2.disabled = true;
        } else {
            item2.disabled = false;
        }
        if(priceItem3 <= counter && bool1 == true) {
            item3.disabled = false;
        } 
}

item3.innerHTML = "Double up the speed of passive increase - price: " + priceItem3.toFixed(1); // set del bottone che raddoppia la velocità di aggiunta dei punti

function rewards(bonus) {
    switch (bonus) {
        case 1:
            counter += 5;
        break;
        case 2:
            counter += 25;
        break;
        case 3:
            counter += 200;
        break;
        case 4:
            counter += 20000;
        break;
        case 5:
            passiveValue += 0.1;
        break;
        case 6:
            passiveValue += 1;
        break;
        case 7:
            passiveValue += 5;
        break;
        case 8:
            passiveValue += 30;
        break;
    }

}

function checkForAchievements() { // controlla per gli achievement
        for (let i = 0; i < 1; i++) {
            if(achievement[i] <= totalPointsMade && ach1 == false) {
                ach1 = true;
                msgAch1.innerHTML = "U only started buddy (farm 10 points! - reward: 5pt)";
                msgAch1.classList.add("text-red");
                rewards(1);
            }
            if(achievement[i+1] <= totalPointsMade && ach2 == false) {
                ach2 = true;
                msgAch2.innerHTML = "Ez points (farm 100 points! - reward: 25pt)";
                msgAch2.classList.add("text-red");
                rewards(2);
            }
            if(achievement[i+2] <= totalPointsMade && ach3 == false) {
                ach3 = true;
                msgAch3.innerHTML = "A whole lotta (red) points (farm 1000 points!- reward: 200pt)";
                msgAch3.classList.add("text-red");
                rewards(3);
            }
            if(achievement[i+3] <= totalPointsMade && ach4 == false) {
                ach4 = true;
                msgAch4.innerHTML = "Cosmic points (farm 100.000 points! - reward: 20.000pt)";
                msgAch4.classList.add("text-red");
                rewards(4);
            }
            if(achievement[i+4] <= item1TB && ach5 == false) {
                ach5 = true;
                msgAch5.innerHTML = "Auto-farm (buy 1 passive increase item! - reward: +0.1 passive - +0.2 if u bought the double speed upgrade)";
                msgAch5.classList.add("text-red");
                rewards(5);
            }
            if(achievement[i+5] <= item1TB && ach6 == false) {
                ach6 = true;
                msgAch6.innerHTML = "Company level, imma say (buy 10 passive increase item! - reward: +1 passive - +2 if u bought the double speed upgrade)"
                msgAch6.classList.add("text-red");
                rewards(6);
            }
            if(achievement[i+6] <= item1TB && ach7 == false) {
                ach7 = true;
                msgAch7.innerHTML = "That's slavery, i love it! <3 (buy 25 passive increase item! - reward: +5 passive - +10  if u bought the double speed upgrade)"
                msgAch7.classList.add("text-red");
                rewards(7);
            }
            if(achievement[i+7] <= item1TB && ach8 == false) {
                ach8 = true;
                msgAch8.innerHTML = "Child labour? Approved! :3(buy 50 passive increase item! - reward: +30 passive - +60 if u bought the double speed upgrade)";
                msgAch8.classList.add("text-red");
                rewards(8);
            }
        }
}

let counterDS = 0;
async function timer100() // primo timer, esegue le sue azioni una volta ogni 100ms
{
    do
    {
        item2.innerHTML = "Click Income will be: " + (valueOnClick * 1.3).toFixed(2) + " - price: " + priceItem2.toFixed(1) + " - Lvl. " + item2TB;
        if(bool1) {
            countPps.innerHTML = "Passive pps: " + passiveValue.toFixed(2);
            item1.innerHTML = "Passive Income will be: " + (item1TB == 0 ? "0,25" : (passiveValue * 1.15).toFixed(2)) + " per second " + " - price: " + priceItem1.toFixed(1) + " - Lvl. " + item1TB;
        } else {
            countPps.innerHTML = "pps: " + passiveValue.toFixed(2) * 2;
            item1.innerHTML = "Passive Income will be: " + (item1TB == 0 ? "0,25" : (passiveValue * 1.15).toFixed(2)) * 2 + " per second " + " - price: " + priceItem1.toFixed(1) + " - Lvl. " + item1TB;   
        }
        clicks.innerHTML = "Clicks: " + i;
        count.innerHTML = "Points: " + counter.toFixed(1);
        valueForClick.innerHTML = "Points per click: " + valueOnClick.toFixed(2);
        checkPrices();
        if(clickDoubleSpeed == false) {
                counter = counter + passiveValue/10;
                totalPointsMade += passiveValue/10;
        } else {
                counter = counter + passiveValue/5;
                totalPointsMade += passiveValue/5;
        }
        await delay(100);  
    }
    while(true);
}

timer100(); // chiamata del primo timer

async function timerHalfSec() // secondo timer, esegue le sue azioni ogni 500ms
{
    do
    {
        if(cheatAchievement = false) {
            checkForAchievements();
        }
        checkForAchievements();
        checkBuyMultiplier();
        await delay(500);  
    }
    while(true);
}

timerHalfSec();

let requestedLevel = 5;

async function timer1sec() // terzo timer, esegue le sue azioni ogni 1000 ms
{
    do
    {
        await delay(1000);  

        if(item1TB>=requestedLevel&&item2TB>=requestedLevel)
        {
            lockedSector.classList.remove("d-none"); 
            hint.classList.add("d-none"); 
        }
        
    }
    while(true);
}

timer1sec();

function checkIncreasePricePassive (v) { //controllo  per l'aumento del prezzo per quanto riguarda gli upgrade sui punti passivi
    if(v = 0.2) { // andrebbe fatto un' if per ogni upgrade creato, che semplicemente aumenterà il costo in base al valore, attualmente c'è solo un'upgrade per il passivo, ma se si aggiungesse un'altro upgrade avrebbe dei prezzi a parte che crescono in modo diverso da quello che di base ti da 0.25 (alla chiamata della funzione nella index, passa 0.2 per questo l'if con 0.2)
        counter = counter - priceItem1;
        spentOnItem1 = spentOnItem1 + priceItem1;
        lastPriceI1 = priceItem1;
        priceItem1 = priceItem1 * 1.2;
    }
}

function checkPriceIncreaseClick(v) { // stessa funzione di quello passivo, solo fatta per gli upgrade per il valore onclick
    if(v = 0.2) { // sempre uguale a quello passivo
        counter = counter - priceItem2;
        spentOnItem2 = spentOnItem2 + priceItem2;
        priceItem2 = priceItem2 * 1.75;
    }
}

function setDoubleSpeed() { // funzione che si occupa di aumentare del doppio la velocità con cui vengono dati i punti passivi
    clickDoubleSpeed = true;
    counter = counter - priceItem3
    bool1 =false;
    item3.disabled = true;
    item3.innerHTML = "Already bought!";
}

sitem1.addEventListener("click", function () { // per la vendita di tutti i miglioramenti acquistati sul campo passivo, resettando tutti i valori per quanto riguarda i campi passivi e restituendo l'80% dei soldi finora spesi 
    if(item1TB > 0) {
        item1TB = 0;
        passiveValue = 0;
        counter = counter + (spentOnItem1 * 0.8);
        spentOnItem1 = 0;
        priceItem1 = 10;
    }
});

let sellC = 0;
function sell () { // cambia la visualizzazione della pagina da la schermata per comprare a quella per vendere e viceversa
    sellC++;
    console.log("sellC: " + sellC)
    if(sellC%2 == 0) {
        item1.classList.toggle("d-none");
        item2.classList.toggle("d-none");
        item3.classList.toggle("d-none");
        pForBuy.classList.toggle("d-none");
        pForSell.classList.toggle("d-none");
        divSell1.classList.toggle("sellableItem")
        divSell1.classList.toggle("buyableItem")
        divSell2.classList.toggle("sellableItem")
        divSell2.classList.toggle("buyableItem")
        divSell3.classList.toggle("sellableItem")
        divSell3.classList.toggle("buyableItem")
        sitem1.classList.toggle("d-none");
        sitem2.classList.toggle("d-none");
        divRadio.classList.toggle("d-none")
        
    } else {
        item1.classList.toggle("d-none");
        item2.classList.toggle("d-none");
        item3.classList.toggle("d-none");
        pForSell.classList.toggle("d-none");
        pForBuy.classList.toggle("d-none");
        divSell1.classList.toggle("buyableItem")
        divSell1.classList.toggle("sellableItem")
        divSell2.classList.toggle("sellableItem")
        divSell2.classList.toggle("buyableItem")
        divSell3.classList.toggle("sellableItem")
        divSell3.classList.toggle("buyableItem")
        sitem1.classList.toggle("d-none");
        sitem2.classList.toggle("d-none");
        sitem1.innerHTML = "sell every level you have bought of 'Passive Increase'";     
        sitem2.innerHTML = "sell every level you have bought of 'Click Increase'";
        divRadio.classList.toggle("d-none")
    }

}


function checkBuyMultiplier () {

}

// inizio codice per i comandi

const gameCommands = {
    setPoints(value) {
        counter = value;
        console.log("points set to: " + value);
    },
    setPassiveValue(newPassiveValue) {
        passiveValue = newPassiveValue;
        console.log("passive value set to: " + newPassiveValue);
    }, 
    setValueOnClick(newValueOnClick) {
        valueOnClick = newValueOnClick;
        console.log("points on click set to: " + newPassiveValue);
    },
    getAllAchievement(confirm_true_or_false) {
        if(confirm_true_or_false) {
        ach1 = true;
        msgAch1.innerHTML = "U only started buddy (farm 10 points!)";
        msgAch1.classList.add("text-red");
        ach2 = true;
        msgAch2.innerHTML = "Ez points (farm 100 points!)";
        msgAch2.classList.add("text-red");
        ach3 = true;
        msgAch3.innerHTML = "A whole lotta (red) points (farm 1000 points!)";
        msgAch3.classList.add("text-red");
        ach4 = true;
        msgAch4.innerHTML = "Cosmic points (farm 100.000 points!)";
        msgAch4.classList.add("text-red");
        ach5 = true;
        msgAch5.innerHTML = "Auto-farm (buy 1 passive increase item!)";
        msgAch5.classList.add("text-red");
        ach6 = true;
        msgAch6.innerHTML = "Company level, imma say (buy 10 passive increase item!)"
        msgAch6.classList.add("text-red");
        ach7 = true;
        msgAch7.innerHTML = "That's slavery, i love it! <3 (buy 25 passive increase item!)"
        msgAch7.classList.add("text-red");
        ach8 = true;
        msgAch8.innerHTML = "Child labour? Approved! :3(buy 50 passive increase item!)";
        msgAch8.classList.add("text-red");
        }
        cheatAchievement = true;
        console.log("cheat activated, all achievements have been unlocked, however, you will not get any bonus from the normal achievement, even if you could unlock it")
    },
    help(){
        console.log("these are all the commands: \n getAllAchievement(put here true or false as a confirm)\n setValueOnClick(put here the new value on click)\n setPassiveValue(put here the new passive value)\n setPoints(put here the new number of points you want)")
    }
}

// fine codice per i comandi



/* fine codice ¯\_( ͡❛ ͜ʖ ͡❛)_/¯







────────────────────────────────
───────────────██████████───────
──────────────████████████──────
──────────────██────────██──────
──────────────██▄▄▄▄▄▄▄▄▄█──────
──────────────██▀███─███▀█──────
█─────────────▀█────────█▀──────
██──────────────────█───────────
─█──────────────██──────────────
█▄────────────████─██──████─────
─▄███████████████──██──██████ ──
────█████████████──██──█████████
─────────────████──██─█████──███
──────────────███──██─█████──███
──────────────███─────█████████─
──────────────██─────████████▀──
────────────────██████████──────
────────────────██████████──────
─────────────────████████───────
──────────────────██████████▄▄──
────────────────────█████████▀──
─────────────────────████──███──
────────────────────▄████▄──██──
────────────────────██████───█──
────────────────────▀▄▄▄▄▀──────

^^^letteralmente Matteo Ciaschi^^^
*/