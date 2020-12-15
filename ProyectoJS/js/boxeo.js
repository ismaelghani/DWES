import { home, video } from './main.js';
import { muestraCarta } from './cartas.js';
import { getCookie } from './cookies.js';
import { boxing } from './boxing.js';
import { logout } from './logout.js';
import{dibujarClasificacion} from './clasificaciones.js';
import{crear} from './crear.js';


window.addEventListener("load", () => {
  console.log("cookie=" + getCookie("usuario"));
  if (getCookie("usuario") == "") {

    login();
    validar();
    
  } else {
    document.body.style.background = " url('img/boxing.jpg') ";
    home();
    video();
    muestraCarta();
    boxing();
    logout();
    dibujarClasificacion();
    crear();
  }

});

export {login}
function login() {
  document.querySelector("#main").innerHTML = `
<div class="login-box">
<form id="ingresar">
        <h3>Login</h3>
      
        <!-- ======= Username ======= -->

        <div class="textbox">
          <i class="fa fa-user" aria-hidden="true"></i>
          <input type="text" placeholder="Nombre" name="usuario" id="usuario"/>
        </div>
      
        <!-- ======= Password ======= -->
        <div class="textbox">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input type="password" placeholder="Password" name="contraseña" id="contraseña"/>
        </div>
      
        <!-- ======= Sign in ======= -->
        <input class="btn" type="submit" name=""  value="Sign In" />
        </form>
      </div>
`;
}

async function validar() {
  // setTimeout(async () => {
  let response = await fetch("./json/login.json");
  let users = await response.json();


  document.querySelector("#ingresar").addEventListener("submit", (event) => {
    event.preventDefault();
    let userValid = false;

    for (const user of users) {
      if (user.usuario == event.target[0].value && user.contraseña == event.target[1].value) {
        userValid = true;
        document.cookie = "usuario=ismael; expires=friday, 04 Dec 2121 12:00:00 UTC";
        document.body.style.background = " url('img/boxing.jpg')";
        home();
        video();
        muestraCarta();
        boxing();
        logout();
        dibujarClasificacion();
        crear();

        //utils.clearPage();

      }

    }
    if (!userValid) {
      let p = document.createElement("p");
      let error = document.createTextNode("Usuario o contraseña incorrectos");
      p.appendChild(error);
      p.style.color = "yellow";
      p.style.fontSize = "25px";
      p.style.fontWeight = "bold";
      document.querySelector("form").appendChild(p);

    }

  })
  // }, 50);


}
