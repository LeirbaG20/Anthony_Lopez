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

let mitexto = "";
// for (let i in flores) {
//     var lafloreliminada = flores.splice(0, 1);
//     flores[flores.length] = lafloreliminada;

//     mitexto = mitexto + flores.toString() + "<br>";
// }

// document.getElementById("quelindasflores").innerHTML = mitexto;

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

let i = 0;
mitxt = flores + "<br>";
do {
    var lafrorEliminada = flores.splice(0, 1);
    flores[flores.length] = lafrorEliminada;
    mitxt = mitxt + flores.toString() + "<br>";
    break;
} while (i < flores.length);

document.getElementById("demo3").innerHTML = mitxt;

const hour = new Date().getHours();
let greeting;
if (hour > 6 && hour < 12) {
    greeting = "Buenos dias";
} else if (hour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}
document.getElementById("demo7").innerHTML = greeting;

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo8").innerHTML = "Today is " + day;
document.getElementById("demo9").innerHTML = flores.toString();

mitexto = "";
for (let i = 0; i < flores.length; i++) {

    var lafrorEliminada = flores.splice(0, 1);
    flores[flores.length] = lafrorEliminada;
    if (flores[0] == "MARGARITA") {
        break;
    }
    mitexto = mitexto + flores.toString() + "<br>";
}
document.getElementById("demo10").innerHTML = mitexto;

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const orden = [2, 3, 1, 5, 4];
const fruitsOrd = [];

for (let i = 0; i < orden.length; i++) {
    var frutaquetoca = fruits[i];
    var ordenFruta = orden[i] - 1;
    fruitsOrd[ordenFruta] = frutaquetoca;
}
document.getElementById("demo11").innerHTML = fruitsOrd;

const nuvArray = [];
for (let i = 0; i < fruits.length; i++) {
    //metemos el valor de la misma posicion en nuestro nuevo array
    nuvArray[i] = fruits[i];
}
document.getElementById("demo12").innerHTML = nuvArray;

nuvArray2 [""] = fruitsOrd;
for (let index = 0; index < fruitsOrd.length; index++) {
    var elemento = orden[i];
    nuvArray2[fruitsOrd.length] = elemento;
}
document.getElementById("demo13").innerHTML = nuvArray2;
