//funcion que me aplica el estilo a la opcion selccionada en el menu quita la previamnte seleccionada
function seleccionar(link) {
var opciones = document.querySelectorAll('#links a');
opciones[0].className="";
opciones[1].className="";
opciones[2].className="";
opciones[3].className="";
opciones[4].className="";
link.className="seleccionado"

//hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive

var x=document.getElementById("nav");
x.className="";
    
}





//funciones del menu responsive 

function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive"
    } else {
        x.className="";
    }
}




//detecta el scroll para activar la animacion

window.onscroll = function() {
    efectoHabilidades()
} ;

// funcion que aplica la animaccion en la barra

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ph").classList.add("barra-progreso4");
    }
}




//ver errores de la primera funcion, no funciona el click en responsive
// error de centrado en la parte de mensajes pero ya estaria para en tregar me parece