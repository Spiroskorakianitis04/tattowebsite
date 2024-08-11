// Récupérer le bouton et le div du message de cookie
var acceptButton = document.getElementById("acceptButton");
var cookieBanner = document.getElementById("cookieBanner");

// Fonction pour cacher la div du message de cookie et définir un cookie avec une durée de 30 jours
function acceptCookies() {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);
  document.cookie =
    "cookiesAccepted=true; expires=" +
    expirationDate.toUTCString() +
    "; path=/";
  cookieBanner.style.display = "none";
}

// Vérifier si le cookie "cookiesAccepted" existe
function checkCookie() {
  if (document.cookie.indexOf("cookiesAccepted=true") === -1) {
    cookieBanner.style.display = "block";
  }
}

// Ajouter un gestionnaire d'événement au bouton
acceptButton.addEventListener("click", acceptCookies);

// Vérifier le cookie lors du chargement de la page
window.addEventListener("load", checkCookie);
