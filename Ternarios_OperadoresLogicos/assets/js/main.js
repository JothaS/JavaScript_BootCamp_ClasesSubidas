var listadoDeportistasBody = document.querySelector("#listado-deportistas tbody");

function ejercicio40(){
    for (let index = 1; index <= 2; index++) {
        alert("Vamos a capturar los valores del deportista " + index)
        var nombre = prompt(`Ingrese el nombre(${index})`);
        var apellido = prompt(`Ingrese el apellido(${index})`);
        var edad = prompt(`Ingrese la edad(${index})`);
        var estatura = prompt(`Ingrese la estatura en cm(${index})`);
        var peso = prompt(`Ingrese el peso(${index})`);

        var estatus = edad <= 18 && estatura >= 180 && peso <= 80
        var estatusTexto = estatus ? 'Admitido' : 'No admitido'
        var claseTexto = estatus ? 'text-success' : 'text-danger'

        listadoDeportistasBody.innerHTML += `
            <tr>
                <td>${nombre} ${apellido}</td>
                <td>${edad}</td>
                <td>${estatura}</td>
                <td>${peso}</td>
                <td class="${claseTexto}">${estatusTexto}</td>
            </tr>
        `
    }
}
// ejercicio40();


function ejercicio7() {
    var repetir;
    do {
        var nombre = prompt("Ingrese su nombre");
        repetir = nombre === "" || !isNaN(nombre)
        if(repetir){
            alert("Dato inválido para nombre, vuelva a ingresar");
        }
    } while (repetir);

    do {
        var edad = prompt("Ingrese su edad");
        repetir = isNaN(edad) || edad === "";
        if(repetir){
            alert("Dato inválido para edad, vuelva a ingresar");
        }
    } while (repetir);
    
    do {
        var sexo = prompt("Ingrese su sexo (1: Masculino, 2: Femenino)");
        repetir = !(sexo == 1 || sexo == 2)
        if(repetir){
            alert("Dato inválido para sexo, vuelva a ingresar");
        }
    } while (repetir);

    do {
        var edo_civil = prompt("Ingrese su estado civil (1: Soltero, 2:Casado, 3:Otro)");
        // repetir = edo_civil === "" || (edo_civil != 1 && edo_civil != 2 && edo_civil != 3)
        repetir = !(edo_civil == 1 || edo_civil == 2 || edo_civil == 3)
        if(repetir){
            alert("Dato inválido para estado civil, vuelva a ingresar");
        }
    } while (repetir);

    var noSeManda = (edad < 18) || (sexo == 1 && edo_civil == 2) 
    var mensaje = `${nombre} usted ${noSeManda ? 'NO' : 'SI'} se manda`

    alert(mensaje)
}
ejercicio7();



