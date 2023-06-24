const { error } = require("console");
const fs = require("fs");
const axios = require("axios");

// console.log("Probando APP");


//Ruta(files),Data(string, info a guardar en archivo),utf8(Codificacion de caracteres),callback(identif error)
/* fs.writeFile("files/saludo.txt", "Hola Mundo", "utf8", (error) => {
    console.log(error);
})
 */

//Lectura de archivo de manera asincrona
//data: es la info que esta dentro del archivo saludo.txt//readFile espera 3 parametros: Ruta, Codif caracter, error y data.
// fs.readFile("files/saludo.txt", "utf8", (error, data) => {
//     if (error)
//         return console.log("Ocurrio un error al leer el archivo");

//     console.log("Info del archivo es:", data);
// })


//Lectura de archivo de manera Sincrona//No existe callback en caso de error, pero se puede solucionar con TryCatch
// try {
//     const info = fs.readFileSync("files/saludo.txt", "utf8")
//     console.log(info);
// } catch (error) {
//     console.log("Ocurrio un error");
// }


// Eliminación de archivo de manera Asíncrona
// fs.unlink("files/saludo.txt",(error) => {
//     if(error)
//         console.log("Ocurrió un error eliminando el archivo");
//     else
//         console.log("Archivo eliminado con éxito");
// })


(async () => {
    try { //Eliminar archivo en caso de que exista, para no duplicar información con el appendFileSync
        fs.unlinkSync("files/personajes.txt")
    } catch (error) {
        console.log("No se pudo eliminar el archivo");
    }// Fin eliminación de archivo

    //Ejemplo de Proceso Síncrono
    /*   for (let index = 1; index <= 10; index++) {
          const personaje = await axios.get(`https://swapi.dev/api/people/${index}`)
          const { name, hair_color, skin_color, eye_color } = personaje.data
          let info = `Nombre: ${name}\n`
          info += `Color de cabello: ${hair_color}\n`
          info += `Color de piel: ${skin_color}\n`
          info += `Color de ojos: ${eye_color}\n`
          info += "-------------------------------------------\n"
          fs.appendFileSync("files/personajes.txt", info, "utf8")
      }
  })() */



    //Ejemplo de Proceso Aaíncrono, con promesa(peticiones.push)
    let peticiones = []
    for (let index = 1; index <= 10; index++) {
        const personaje = axios.get(`https://swapi.dev/api/people/${index}`)
        peticiones.push(personaje)

    }
    Promise.all(peticiones).then(resp => {
        for (const personaje of resp) {
            const { name, hair_color, skin_color, eye_color } = personaje.data
            let info = `Nombre: ${name}\n`
            info += `Color de cabello: ${hair_color}\n`
            info += `Color de piel: ${skin_color}\n`
            info += `Color de ojos: ${eye_color}\n`
            info += "-------------------------------------------\n"
            fs.appendFileSync("files/personajes.txt", info, "utf8")
        }
    })

})()



