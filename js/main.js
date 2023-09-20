function toggleMenuIcon(x) {
  x.classList.toggle("change");
}

function rickrollAlert() {
  alert("You did it");
}
function main() {
  const menuToggle = document.getElementById("menu-toggle");
  menuToggle.addEventListener("click", () => toggleMenuIcon(menuToggle));
}

document.addEventListener("DOMContentLoaded", main);
