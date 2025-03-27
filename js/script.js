// Inserimento funzione di calcolo del prezzo del biglietto
function calcolaPrezzo() {
    // Dichiarazione e recupero degli elementi dal DOM
    const kmInput = document.getElementById("km");
    const etaInput = document.getElementById("eta");
    const risultatoOutput = document.getElementById("risultato");

    // Recupero dei valori inseriti dall'utente
    const km = parseFloat(kmInput.value);
    const eta = parseInt(etaInput.value);

    // Prezzo base per km
    const prezzoKm = 0.21;
    let prezzoFinale = km * prezzoKm;

    // Applicazione degli sconti
    if (eta < 18) {
        prezzoFinale *= 0.8;
    }

    else if (eta > 65){
        prezzoFinale *= 0.6;
    }

    // Sistemazione prezzo con 2 decimali
    prezzoFinale = prezzoFinale.toFixed(2);

    // Mostriamo il risultato nella pagina
    risultatoOutput.innerText = `Prezzo del biglietto: € ${prezzoFinale}`;
}



