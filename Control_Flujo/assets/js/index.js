const valorDolar = 791.64;
const valorEuro = 868.12;
const valorUF = 35721.12;

//Ejemplo ciclo Do While
// do {
//     var montoCLP = prompt("Ingrese un monto en peso chileno");
//     if(montoCLP === ""){
//         alert("El monto no puede ser vacío")
//     } else if(isNaN(montoCLP)){
//         alert("El monto debe ser numérico")
//     } else if(Number(montoCLP) <= 0){
//         alert("El monto debe ser mayor a 0")
//     }
// } while (montoCLP === "" || isNaN(montoCLP) || Number(montoCLP) <= 0);



//El ciclo Do While se ejecuta al menos 1 vez.
// do {
//     var montoCLP = prompt("Ingrese un monto en peso chileno");
//     var repetir = false
//     if(montoCLP === ""){
//         repetir = true
//         alert("El monto no puede ser vacío")
//     } else if(isNaN(montoCLP)){
//         repetir = true
//         alert("El monto debe ser numérico")
//     } else if(Number(montoCLP) <= 0){
//         repetir = true
//         alert("El monto debe ser mayor a 0")
//     }
// } while (repetir);


// var opcion = prompt(`
//     Ingrese el indicador de destino del cálculo:
//     1: UF
//     2: Dolar Americano
//     3: Euro
// `)
// console.log("Monto", montoCLP);
// console.log("Opción", opcion);

// let respuesta = calcular3(montoCLP, opcion)
// alert(respuesta.toFixed(2));


function calcular(montoCLP, opcion) {
    if(Number(opcion) === 1) { //Cálculo de CLP a UF
        return montoCLP / valorUF
    }
    if(Number(opcion) === 2) { //Cálculo de CLP a Dolar Americano
        return montoCLP / valorDolar
    }
    if(Number(opcion) === 3) { //Cálculo de CLP a Euro
        return montoCLP / valorEuro
    }
    //Esto se va a ejecutar cuando el usuario selecione una opción diferente a 1, 2 o 3
    return "Opción inválida"
}

function calcular2(montoCLP, opcion) {
    var resultado;
    if(Number(opcion) === 1){ //Cálculo de CLP a UF
        resultado = montoCLP / valorUF
    } else if(Number(opcion) === 2) { //Cálculo de CLP a Dolar Americano
        resultado = montoCLP / valorDolar
    } else if(Number(opcion) === 3) { //Cálculo de CLP a Euro
        resultado = montoCLP / valorEuro
    } else {
        resultado = "Opción inválida"   
    }
    return resultado
}

function calcular3(montoCLP, opcion) {
    var resultado;
    opcion = Number(opcion)
    switch (opcion) {
        case 1: //Cálculo de CLP a UF
            resultado = montoCLP / valorUF
        break;

        case 2: //Cálculo de CLP a Dolar Americano
            resultado = montoCLP / valorDolar
        break;

        case 3: //Cálculo de CLP a Euro
            resultado = montoCLP / valorEuro
        break;
    
        default: //Opción inválida
            resultado = "Opción inválida"
        break;
    }
    return resultado
}



var cantidad = prompt("Ingrese la cantidad de UF que desea calcular");

// Ejemplo ciclo For
// for (let index = 1; index <= cantidad; index+=1) {
//     var calculo = index * valorUF;
//     console.log(index, " - " ,calculo);
// }

//Usuario ingresa valor 4

var numero = 0;
// Ejemplo ciclo While
while(numero < cantidad) {
    numero++;
    var calculo = numero * valorUF
    console.log(numero, " - ", calculo);
}