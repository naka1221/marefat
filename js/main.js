
const dark = document.querySelector(".dark-mode")
const logoRight= document.querySelector(".top-nav_right-logo")
const  light= document.querySelector(".light-mode")
var rootbee = document.querySelector(':root');

let flags = 1;


logoRight.addEventListener("click", function(){
    dark.classList.toggle("show")
    light.classList.toggle("show")

    if(flags == 1){
        // rootbee.style.setProperty('--bs-gray-dark',"white");
        rootbee.style.setProperty('--bs-light',"#333");
        rootbee.style.setProperty('--primary-color',"#25968b");
        // rootbee.style.setProperty('--color-light',"#111");
        flags =0;
    }
     else if(flags == 0){
        // rootbee.style.setProperty('--bs-gray-dark',"#111");
        rootbee.style.setProperty('--bs-light',"#FFF");
        rootbee.style.setProperty('--primary-color',"#25966d");
        // rootbee.style.setProperty('--color-light',"#fff");
        flags=1;
     }

})