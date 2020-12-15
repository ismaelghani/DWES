export { home, video };

function home() {
    document.querySelector("#main").innerHTML = '';

}

function video() {
    document.getElementById("main").innerHTML = `<div id="video"><iframe width="500" height="350" src="https://www.youtube.com/embed/k8ikUBtUvdA" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>

    <iframe width="500" height="350" src="https://www.youtube.com/embed/njjgQs3ZHVQ" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe> </div>`;

}