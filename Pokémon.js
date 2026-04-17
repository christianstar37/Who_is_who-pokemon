function cambiarImagen(ImgCambio) {
    let ImgInspired = ImgCambio.getAttribute('data-original');
    let ImgSad = ImgCambio.getAttribute('data-toggled');
    if (ImgCambio.src.includes(ImgInspired)) {
        ImgCambio.src = ImgSad;
    } else {
        ImgCambio.src = ImgInspired;
    }
}

function actualizarPokemon() {
    let selector = document.getElementById("pokemonElegido");
    let pokemonSeleccionado = selector.value;
    let miImagen = document.getElementById("imagenPokemon")
    miImagen.src = "Retratos/" + pokemonSeleccionado + "/Inspired.png"
    if (pokemonSeleccionado == "Primarina") {
        miImagen.src = "Retratos/" + pokemonSeleccionado + "/Special1.png";
    }
    if (pokemonSeleccionado == "Decidueye") {
        miImagen.src = "Retratos/" + pokemonSeleccionado + "/Special0.png";
    }
}