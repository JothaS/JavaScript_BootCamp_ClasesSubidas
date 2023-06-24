import funciones from "./utils/funciones.js";
const { peticiones } = funciones

$(document).ready(function () {

    $("#formulario").submit(async function (event) {
        event.preventDefault();
        $("#listado-supers").html("")
        $("#msg-error").addClass("d-none")
        let busqueda = $("#txt-busqueda").val()
        let url = `https://superheroapi.com/api.php/10225832066284806/search/${busqueda}`

        //option 1 sin espera a que termine de ejecutar la peticion sin el async y el await
        //let respuesta = peticiones(url)
        //respuesta.then((data) => console.log(data))

        //opcion 2 espera a que termine de ejecutar la peticion
        let respuesta = await peticiones(url)


        if (respuesta.response === "error") {
            return $("#msg-error").removeClass("d-none")
        }




        respuesta.results.forEach(element => {
            let raza = element.appearance.race === "null" ? "Human" : element.appearance.race
            let [, peso] = element.appearance.weight

            $("#listado-supers").append(`
                        <div class="col-12 col-sm-4 col-lg-4" >
                <div class="card" ">
                    <img src="${element.image.url}" class="card-img-top" alt="${element.name}">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <div><span class="fw-bold">Genero: </span>${element.appearance.gender}</div>
                            <div><span class="fw-bold">Raza: </span>${raza}</div>
                            <div><span class="fw-bold">Peso: </span>${peso}</div>
                            <div><span class="fw-bold">Altura: </span>${element.appearance.height[1]}</div>
                        </div>
                </div>
            </div>
            `)
        })
    })
})