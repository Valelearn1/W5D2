const overlay = document.getElementById("overlay-contatti");
const apriContatti = document.getElementById("apri-contatti"); // Cerco il pulsante "Apri contatti"
const chiudiContatti = document.getElementById("chiudi-contatti"); // Cerco il pulsante "Chiudi contatti"

// Apertura della modale
apriContatti.addEventListener("click", () => {
  // Quando clicco sul pulsante Apri contatti,
  overlay.removeAttribute("hidden"); // tolgo l'attributo hidden, quindi l'overlay diventa visibile
});

// Chiusura con il pulsante X
chiudiContatti.addEventListener("click", () => {
  // Quando clicco sul pulsante Chiudi contatti,
  overlay.setAttribute("hidden", ""); // aggiungo hidden, quindi l'overlay torna nascosto
});

// Chiusura cliccando sullo sfondo
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.setAttribute("hidden", "");
  }
});
