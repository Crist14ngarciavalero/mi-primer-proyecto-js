const boton = document.querySelector("#boton");
const titulo = document.querySelector("#titulo");

boton.addEventListener("click", () => {
    titulo.textContent = "Has cambiado el texto";
});