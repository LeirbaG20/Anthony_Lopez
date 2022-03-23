let p1;         //Declaramos variable p1
p1 = 4;         //Asignamos variable p1
let p2 = 3;     //Declaramos y Asignamos a la vez variable p2

//Declaramos la función indicando que hacer con los parámetros recibidos
function myFunction(p1, p2) {
    let p3 = p1 * p2;             //Operamos con los parámetros
    return p3;                    //Devolvemos el resultado
}
//Llamamos a la función y le pasamos como parámetro las dos variables
//...y pasamos el resultado a otra variable:
let p4 = myFunction(p1, p2);
//Mostramos el resultado en una etiqueta del html con id = "demo"
document.getElementById("demo").innerHTML = p4;

myFunction1();

function myFunction1() {
    var carName = "Volvo";

    var queTipoDeDatoUtiliza = typeof carName;

    document.getElementById("demo1").innerHTML = queTipoDeDatoUtiliza + " " + carName;
}

//Arrays
//Array es una variable que puede tener muchos valores distintos a la vez
let person = ["John", "Doe", 46];
document.getElementById("demo2").innerHTML = typeof person[0] + " " + person[0];
document.getElementById("demo3").innerHTML = typeof person[2] + " " + person[2];

//Añadir Modificar valores
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
document.getElementById("demo4").innerHTML = fruits.toString();

document.getElementById("demo5").innerHTML = fruits.length;

fruits[5] = "Kiwi";
document.getElementById("demo6").innerHTML = fruits.toString();

fruits[fruits.length] = "Pear";
document.getElementById("demo7").innerHTML = fruits.toString();

fruits[4] = "Strawberry";
document.getElementById("demo8").innerHTML = fruits.toString();

//Seleccionar o eliminar valores
const citrus = fruits.slice(1, 3); //crea un array nuevo con los elementos seleccionados
document.getElementById("demo9").innerHTML = fruits + "<br><br>" + citrus;
fruits.splice(3, 1); //MODIFICA el array eliminando estos elmentos
document.getElementById("demo10").innerHTML = fruits;

// Primer bucle
//Creamos variable tipo texto
let txt = "";
//Por cada elemento de la arrat llamas a la funcion 02 y le pasa el valor, Ìndice, Array entero
fruits.forEach(myFunction);

document.getElementById("demo11").innerHTML = txt;
function myFunction02(value, index, array) {
    txt = txt + index + " " + value + "<br>";

};