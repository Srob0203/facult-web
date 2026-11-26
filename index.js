document.addEventListener("DOMContentLoaded", function() {
const externalLink = document.getElementById("externalLink");
const modal = document.getElementById("redirectModal");

const cancelButton = document.getElementById("cancelRedirect");
const confirmButton = document.getElementById("confirmRedirect");

let destination = "https://ausme.auburn.edu/public/profile/hendrtd";

externalLink.addEventListener("click", function(event) {
    event.preventDefault();

    destination = this.href;
    modal.style.display = "flex";
});

cancelButton.addEventListener("click", function() {
    modal.style.display = "none";
});

confirmButton.addEventListener("click", function() {
    window.location.href = destination;
});
});