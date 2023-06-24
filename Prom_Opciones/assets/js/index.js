var operacion = Number(prompt(`
    Seleccione que desea hacer:
    1.-=Calcular cual número es mayor
    2.-=Sumar
    3.-=Restar
    4.-=Multiplicar
    5.-=Dividir
    6.-=Mostrar los números ingresados
    7.-=Salir
`))






var n1 = Number(prompt("Por favor ingresar el primer número"))
var n2 = Number(prompt("Por favor ingresar el segundo número"))





function sumar(n1, n2) {
    return n1 + n2
}

function restar(n1, n2) {
    return n1 - n2
}

function multiplicar(n1, n2) {
    return n1 * n2
}

function dividir(n1, n2) {

    if (n2 == 0) {
        return "error"
    } else {
        return n1 / n2
    }
}
function comparar(n1, n2) {
    if (n1 > n2) {
        return "El número mayor es " + n1
    } else if (n2 > n1) {
        return "El número mayor es " + n2
    } else {
        return "Los números son iguales"
    }
}





if (operacion == 1) {
    var resultado = comparar(n1, n2)
    alert(resultado)
}
else if (operacion == 2) {
    var resultado = sumar(n1, n2)
    alert("La suma de " + n1 + " y " + n2 + " es igual a " + resultado)
}
else if (operacion == 3) {
    var resultado = restar(n1, n2)
    alert("La resta de " + n1 + " y " + n2 + " es igual a " + resultado)
}
else if (operacion == 4) {
    var resultado = multiplicar(n1, n2)
    alert("La multiplicación de " + n1 + " y " + n2 + " es igual a " + resultado)
}
else if (operacion == 5) {
    var resultado = dividir(n1, n2)
    if (resultado == "error") {
        alert("No es posible realizar la división")
    } else {
        alert("La división de " + n1 + " y " + n2 + " es igual a " + resultado)
    }
}
else if (operacion == 6) {
    var resultado = ("Sus números ingresados son " + n1 + " y " + n2)
    alert(resultado)
}
else if (operacion == 7) {
    alert("Gracias por participar") /*No se como hacerlo para que salte lo de pedir los 2 numeros , me imagino que deberia salir de inmediato , pero no se como*/
}
else {
    alert("Eleccion incorrecta. Adios!")
}


