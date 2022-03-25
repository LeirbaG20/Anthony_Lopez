var miTiempo = 0;

function CambiaNumero() {
    var miNumeroString = document.getElementById("miNumero").value;
    var miNumero = parseInt(miNumeroString, 10);

    miNumero = miNumero + 1;
    if (miNumero > 3) {
        miNumero = 0;
    }
    document.getElementById("miNumero").value = miNumero;
    cambiaImagen(miNumero);
    cambiaNumeroReloj(miNumero);
    Cronometro(miTiempo);
}
function cambiaImagen(miNumero) {
    imagenes = [];
    var ima00 = "https://images.vexels.com/media/users/3/139880/isolated/preview/5c7018165ca328f070d73ea0b92c61e7-gato-corriendo-secuencia-3-by-vexels.png";
    var ima01 = "https://images.vexels.com/media/users/3/139884/isolated/preview/7ffed8bcebaa6bbcba2d11bae1d6f5d5-gato-corriendo-secuencia-7-by-vexels.png";
    var ima02 = "https://images.vexels.com/media/users/3/139874/isolated/preview/a1ed019282a0573875216eddc0dc697b-gato-corriendo-secuencia-15-by-vexels.png";
    var ima03 = "https://images.vexels.com/media/users/3/139878/isolated/preview/ef0393ca5af17e8c22cdbca3fd3889a4-gato-corriendo-secuencia-19-by-vexels.png";
    imagenes = [ima00, ima01, ima02, ima03];
    imagenToca = imagenes[miNumero];
    document.getElementById("MiImagen").src = imagenToca;

}

function cambiaNumeroReloj() {
    setTimeout(CambiaNumero, 1000);
    miTiempo++;
    return miTiempo, Cronometro(miTiempo);
}
function Cronometro(miTiempo) {
    var seg = miTiempo, minu = 0, hora = 0, dias = 0;
    if (seg > 59) {
        seg = 0;
        minu++;
    } if (minu > 59) {
        minu = 0;
        hora++;
    }
    document.getElementById("misSeg") = seg;
    document.getElementById("misMinu") = minu;
    document.getElementById("misHora") = hora;


}
