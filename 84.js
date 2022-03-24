//DECLARAR INICIALIZAR ARRAY
const flores = ["AMAPOLA", "MARGARITA", "ROSA"];
//VARIABLE
let mitxt = flores + "<br>";
//BUCLE=ITERACIÓN
for (let i = 0; i < flores.length; i++) {

    var lafrorEliminada = flores.splice(0, 1);
    flores[flores.length] = lafrorEliminada;
    mitxt = mitxt + flores.toString() + "<br>";
}
document.getElementById("demo1").innerHTML = mitxt;

//DECLARAR INICIALIZAR ARRAY
const flores2 = ["AMAPOLA", "MARGARITA", "ROSA"];
//VARIABLE
let mitxt2 = flores2 + "<br>";
//BUCLE=ITERACIÓN DO WHILE

let j = 0;
do {
    var lafrorEliminada = flores2.splice(0, 1);
    flores2[flores2.length] = lafrorEliminada;
    mitxt2 = mitxt2 + flores2.toString() + "<br>";
    j++;
} while (j < flores2.length);
document.getElementById("demo2").innerHTML = mitxt2;

