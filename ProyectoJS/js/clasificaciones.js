export { dibujarClasificacion }
function dibujarClasificacion() {

    let boxeadores = [];
    document.getElementById("clasificaciones").addEventListener("click", async () => {

        document.querySelector('#main').innerHTML = '';


        await fetch('./json/boxeo.json')
            .then(response => response.json())
            .then((data) => {
                // console.log(data);
                boxeadores = data;


            });


        document.querySelector("#main").innerHTML = `<div class="container text-center cont">
                     <button class="btn btn-primary" id="obtener">Obtener</button>
                    <h1>TABLA POR ORDEN DE VICTORIAS</h1>
                     <table class="table">
                         <thead>
                         <tr>
                                 <th scope="col">Nombre</th> 
                                 <th scope="col">Altura</th>
                                 <th scope="col">Peso</th>
                                 <th scope="col">Victorias</th>
                                 <th scope="col">Derrotas</th>
                             </tr>
                         </thead>
                         <tbody id="contenido">
                             </tbody>
                             </table>
                             </div>`;
        let boxeadoresOrdenados = boxeadores.sort((a, b) => b.victorias - a.victorias);
        console.log(boxeadoresOrdenados);
        for (const boxeador of boxeadoresOrdenados) {

            document.getElementById("obtener").addEventListener("click", () => {
                contenido.innerHTML += ` <tr>
                             <td>${boxeador.name} &nbsp; ${boxeador.lastname}</td>
                             
                             <td>${boxeador.height}</td>
                             <td>${boxeador.weight}</td>
                             <td>${boxeador.victorias}</td>
                             <td>${boxeador.derrotas}</td>
                         </tr>`;
            });

        }



    });
}


