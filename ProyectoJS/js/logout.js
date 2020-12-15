import { login } from "./boxeo.js";
import { home } from "./main.js";



export { logout };
function logout() {
    document.getElementById("logout").addEventListener("click", () => {
        document.cookie = "usuario=; expires:Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        home();
        login();
    });
}