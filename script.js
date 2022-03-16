let listaFoto = ["assets/img/008.png ", "assets/img/004.jpg", "assets/img/010.jpg"];
let listaTexto = ["Abby está feliz", "Abby está irada", "Abby está triste"];
let foto = document.querySelector("#foto");
let texto = document.querySelector("h3");
let contador = 0;


function mudarMain() {
    if (contador == 0) {
        texto.innerHTML = listaTexto[0]
        foto.src = listaFoto[0];
        contador++;
    } else if (contador == 1) {
        texto.innerHTML = listaTexto[1]
        foto.src = listaFoto[1];
        contador++;
    } else if (contador == 2) {
        texto.innerHTML = listaTexto[2]
        foto.src = listaFoto[2];
        contador = 0;
    }
}