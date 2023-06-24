// console.log("Funciones Cadenas de Caracteres")
// var nombreApellido = prompt("Ingrese su nombre y apellido")

//ReplaceAll
// console.log(nombreApellido.replaceAll(" ",""))
// console.log(nombreApellido.replaceAll("O","1"))
// console.log(nombreApellido.replaceAll("Carlos","Luis"))
// console.log(nombreApellido.replaceAll("é","e").replaceAll("í","i"))

//Replace
// console.log(nombreApellido.replace("Carlos","Luis"));


//Trim
// console.log(nombreApellido.trim());

//TrimStart
// console.log(nombreApellido.trimStart());

//TrimEnd
// console.log(nombreApellido.trimEnd());




// var numero = prompt("Ingrese un número");

// Ejemplo de separador numérico
// var numero2 = 1_500_000
// console.log(numero2);


// Ejemplo de condiciones con separador numérico
// if(numero > 1_000_000) {
//     alert("El número es mayor a 1 millón")
// } else {
//     alert("El número es menor o igual a 1 millón")
// }




//Operador de fusión nula
var colaboradores = [
    { 
        rut: '12345678-5', 
        nombre: "María Morales", 
        departamento: "Talento Humano", 
        jornada:"Completa", 
        fecha_ingreso: "2021-01-16",
        direccion: {
            region: 'Bio-Bio',
            comuna: 'Hualpén',
        },
        salario: {
            salario_bruto: 1_800_000,
            retenciones: {
                AFP: 1_200,
                SALUD: 1_500
            },
            salario_neto: 1_797_300
        }
    },
    { rut: '22333444-1', nombre: "José Medina", departamento: "Informática", jornada:"Medio Tiempo"},
    { rut: '33222555-2', nombre: "Carlos López" }, // Caso Undefined
    { rut: '55333444-1', nombre: "Pedro Molina", departamento: "", jornada:"Completa"}, //Caso cadena vacía
    { rut: '66333444-1', nombre: "Juan Pérez", departamento: null }, //Caso valor null
]
// console.log(colaboradores)

colaboradores.map(colaborador => {
    var retencionAFP = colaborador?.salario?.retenciones?.AFP || 0
    console.log("AFP", retencionAFP);
    // var direccion = (colaborador.direccion && colaborador.direccion.region) ? colaborador.direccion.region : '-'
    var direccion = colaborador?.direccion?.region || ''
    console.log(direccion);
    colaborador.salario = 2_500_000
    colaborador.departamento = colaborador.departamento ?? "Servicios Generales"
    // Operador lógico de asignación AND
    colaborador.jornada &&= colaborador.jornada.toUpperCase()
    // Operador lógico de asignación OR
    colaborador.fecha_ingreso ||= "2023-01-01"
    return colaborador
})

// console.log(colaboradores)














