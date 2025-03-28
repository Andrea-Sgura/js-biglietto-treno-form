document.getElementById("genera").addEventListener("click", function(){
    // Recuper dei valori del form
    const nome = document.getElementById("nome").value;
    const km = parseFloat(document.getElementById("km").value);
    const fasciaEta = document.getElementById("fasciaEta").value;

    // Costante prezzo base per km
    const prezzoKm = 0.21;
    let prezzoFinale = km * prezzoKm;
    let offerta = "Biglietto Standard";

    // Applicazione degli sconti
    if (fasciaEta === "minorenne") {
        prezzoFinale *= 0.8;
        offerta = "Sconto Minorenni";
    }
    else if (fasciaEta === "over65") {
        prezzoFinale *= 0.6;
        offerta = "Sconto Over 65";
    }

    // Formattazzione del prezzo con due decimali
    prezzoFinale = prezzoFinale.toFixed(2);

    // Generazione dati casuali per carrozza e codice CP
    const carrozza = Math.floor(Math.random() * 10) +1;
    const codiceCp = Math.floor(Math.random() * 90000) + 10000;

    // aggiornamento della sezione biglietto
    document.getElementById("nomePasseggero").innerText = nome;
    document.getElementById("offerta").innerText = offerta;
    document.getElementById("carrozza").innerText = carrozza;
    document.getElementById("codiceCp").innerText = codiceCp;
    document.getElementById("costoBiglietto").innerText = prezzoFinale;
});

// Funzione per azzerare il form
document.getElementById("annulla").addEventListener("click", function(){
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("fasciaEta").value = "standard";
    document.getElementById("nomePasseggero").value = "";
    document.getElementById("offerta").value = "";
    document.getElementById("carrozza").value = "";
    document.getElementById("codiceCp").value = "";
    document.getElementById("costoBiglietto").value = "";
})



