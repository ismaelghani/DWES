export {boxing};
import {video} from './main.js'

function boxing(){
    document.getElementById("boxing").addEventListener("click",  () => {
        document.querySelector("#main").innerHTML = ``;
        video();
    });
    }