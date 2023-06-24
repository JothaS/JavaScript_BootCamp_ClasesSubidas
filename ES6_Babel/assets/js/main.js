var nombre = "Luis";
var nombre = "Pedro";
var apellido = "Jimenez";

const porcentaje = 40;
// const porcentaje = 50;

// console.log("porcentaje", porcentaje);

// No se puede modificar el valor de una constante, la siguiente línea genera error
// porcentaje = 15;

let edad = 25;

// console.log(nombre);

// console.log("apellido1", apellido);
if(true) {
    const porcentaje = 15
    // console.log("Constante bloque", porcentaje);

    // apellido = "López"
    // let edad = 30;
    // console.log("Edad bloque", edad);

    if(true) {

        // console.log("apellido - segundo bloque", apellido);
    }
} else {

}


// console.log("Constante Raiz:",porcentaje);

// console.log("Edad - raíz", edad);
// console.log("apellido2", apellido);





/****************************Ejemplos de concatenación e interpolación********************************/

// Concatenación tradicional
let saludo = "Hola "+nombre+" "+apellido+" ";
// Concatenación con interpolación
let saludo2 = `
    Hola ${nombre} ${apellido}
    sasdasd
    asdasd
    asd
`

// var n1 = prompt("Ingrese el número 1");
// var n2 = prompt("Ingrese el número 2");

// let suma = `El resultado de la suma es: ${ Number(n1) + Number(n2)}`

// let mensaje = `El resultado ${Number(n1) + Number(n2) > 20 ? 'si' : 'no'} supera el número 20`
// console.log(mensaje);
/****************************Fin Ejemplos de concatenación e interpolación********************************/




/****************************Ejemplos de Funciones flecha********************************/

// Definición de función con nombre EcmaScript5
function sumar(num1, num2) {
    return num1 + num2
}

// Definición de funciones Anónimas
const sumarAnonima = function (num1, num2) {
    return num1 + num2
}

//Primera variante de función flecha
const sumarFlecha1 = (num1, num2) => {
    return num1 + num2
}

// Segunda variante de función flecha 
const sumarFlecha2 = (num1, num2) => num1 + num2

//Tercera Variante de función flecha con 1 parámetro (Aqui NO es requeridos los paréntesis)
const saludar = nombre => console.log(`Hola ${nombre}`);
saludar("Juan Pérez")

// Cuarta variante función flecha sin parámetros (Aqui SI es requeridos los paréntesis)
const mostrarMensaje = () => console.log("Mensaje función sin parámetros"); 


mostrarMensaje()


// Ejemplo solicitado por Alvaro
// const sumarFlecha3 = (num1, num2) => ({ res1: function1(), res2: funcion2()})


let objetoFunciones = {
    sumarAnonima,
}


// var n1 = prompt("Ingrese el número 1");
// var n2 = prompt("Ingrese el número 2");

// console.log(`El resultado de la suma es: ${objetoFunciones.sumarAnonima(Number(n1), Number(n2))}`);

// console.log(objetoFunciones);
/****************************Fin Ejemplos de Funciones flecha********************************/