function consultar(longitud) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${longitud}`).then((resp) => {
        return resp.json()
    }).then((data) => {
        $("#tabla-posts tbody").html("");
        for (const post of data) {
            $("#tabla-posts tbody").append(`
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>
            `)
        }
    })
}



$(document).ready(function(){
    consultar(5);

    $(document).on("click", "#btn-buscar", function() {
        let cantidad = $("#cantidad").val()
        consultar(cantidad)
    })
})