
export { muestraCarta }
function muestraCarta() {

    let boxeadores = [];
    document.getElementById("cartas").addEventListener("click", async () => {

        document.querySelector('#main').innerHTML = '';
        await fetch('./json/boxeo.json')
            .then(response => response.json())
            .then((data) => {
                // console.log(data);
                boxeadores = data;

            });


        for (const boxeador of boxeadores) {
            document.querySelector("#main").innerHTML += `<div class="cartasBox img" style="background-image: url('./img/${boxeador.img}');" ;>
                    <div class="blog-card spring-fever">
                    <div class="title-content">
                    <h4>${boxeador.name} ${boxeador.lastname}</h4>
                    <hr/>
                    <div class="intro">${boxeador.frase}
                    </div>
                    </div>
                    <div class="card-info">
                    -${boxeador.nationality}<br>
                    -${boxeador.height}<br>
                    -${boxeador.weight}<br>
                    -${boxeador.combates} combates<br>
                    -${boxeador.victorias} victorias<br>
                    -${boxeador.derrotas} derrotas
                    </div><!-- /.card-info -->
                    <div class="utility-info">
                    <ul class="utility-list">
                    
                    <li class="date">${boxeador.nacimiento}</li>
                    </ul>
                    </div>
                    <div class="gradient-overlay"></div>
                    <div class="color-overlay"></div>`;
                    document.querySelector("#main").style.padding ="5%";
        }



    });
}