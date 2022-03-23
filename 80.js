let p1 = " ";   //Declaramos variable p1
p1 = 4;         //Asignamos variable p1
let p2 = 3;     //Declaramos y asignamos p2
// Declaramos la funcion indicando que hacer con los parametros recibidos
function myFunction(p1, p2) {
    let p3 = p1 * p2;
    return p3;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
//Lamamos a la funcion y le pasamos como parametros las dos variables
document.getElementById("demo3").innerHTML = myFunction2(p1, p2);
//
let p4 = myFunction(p1 * p2);
//


//Array
//Array es una variable que puede tener muchos valores distintos a la vez-
let person = ["Joe", "Doe", 46];
document.getElementById("demo3").innerHTML = person;
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo8").innerHTML = fruits;
//Cambiar el valor segun su posicion en la array
fruits[0] = "Strawberry";

//Seleccionar o elimar valores
const fruits = ["Banana", "Orange", "Lemon","Apple", "Mango"];
const citrus=fruits.slice(1,3);//crea un array nuev con los elementos seleccionados
document.getElementById("demo9").innerHTML) = fruits + "<br></br>"+ citrus;
fruits.splice(3,1);//Modifica 

