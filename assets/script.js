const overlay = document.getElementById("overlay-contatti");
const apriContatti = document.getElementById("apri-contatti"); // Cerco il pulsante "Apri contatti"
const chiudiContatti = document.getElementById("chiudi-contatti"); // Cerco il pulsante "Chiudi contatti"
const myForm = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const preferredDate = document.getElementById("preferredDate");
const formResponse = document.querySelector(".formResponse");
const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");
const registerDate = document.getElementById("registerDate");

// Apertura della modale
apriContatti.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "block";
});

// Chiusura con il pulsante X
chiudiContatti.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "none";
});

// Chiusura cliccando sullo sfondo
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

// Chiusura cliccando il tasto Esc sulla tastiera
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.style.display = "none";
  }
});

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameRegistered = name.value; // intercetta i valori scritti
  let emailRegistered = email.value;
  let dateRegistered = preferredDate.value;

  formResponse.style.display = "block"; // aggiunge il blocco dove verranno scritti i campi
  registerName.textContent = nameRegistered;
  registerEmail.textContent = emailRegistered;
  registerDate.textContent = dateRegistered;
  myForm.reset(); // svuota il form
  overlay.style.display = "none"; // fa scomparire i valori nel form
});
