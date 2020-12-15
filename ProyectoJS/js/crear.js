export { crear }
function crear() {

    document.getElementById("crear").addEventListener("click",  () => {



        document.querySelector("#main").innerHTML = `<header>
        <h2>Nuevo Boxeador</h2>
        </header><main class="mainpl">
        <div class="pop">
        <form id="miForm">

              <label for="fname" class="labelname">Nombre :</label>
              <input type="text" id="nombre" name="nombre" placeholder="Name of boxer" required class="inpf">
          
              <label for="country" class="labelname">Numero de Victorias :</label>
              <input type="number" id="victorias" name="victorias" required class="inpf">

              <label for="country" class="labelname">Numero de Derrotas :</label>
              <input type="number" id="derrotas" name="derrotas" required class="inpf">
          
              <label for="quantity" class="labelname">Altura (cm) :</label>
              <input type="number" required id="height" name="altura" min="1" max="200" class="inpcon">

              <label for="quantity" class="labelname">Peso (kg) :</label>
              <input type="number" required id="height" name="peso" min="1" max="200" class="inpcon">
            
              <input type="submit" id="enviar" value="Enviar">
            </form>
            </div>
          
            </main>`;

        const formulario = document.getElementById('miForm');

        formulario.addEventListener('submit', copiarDatos);

        function copiarDatos(event) {
            event.preventDefault();
            const nombre = document.querySelector('input[name=nombre]').value;
            const victorias = document.querySelector('input[name=victorias]').value;
            const derrotas = document.querySelector('input[name=derrotas]').value;
            const altura = document.querySelector('input[name=altura]').value;
            const peso = document.querySelector('input[name=peso]').value;
            document.querySelector("#main").innerHTML = ``;
            document.querySelector('#main').innerHTML += `<div class="datos1">--Nombre:`  + nombre + "</div>";
            document.querySelector('#main').innerHTML += `<div class="datos">--Victorias totales :` + victorias +"</div>";
            document.querySelector('#main').innerHTML += `<div class="datos">--Derrotas totales :` + derrotas+"</div>";
            document.querySelector('#main').innerHTML += `<div class="datos">--Altura :` + altura+"</div>";
            document.querySelector('#main').innerHTML += `<div class="datos">--Peso : `+ peso + "</div>";

        }

    });
}