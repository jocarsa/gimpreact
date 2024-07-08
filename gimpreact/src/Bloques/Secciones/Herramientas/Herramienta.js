import './Herramienta.css';

function mover(){
    alert("Has hecho click en mover")
}
function seleccion(){
    alert("Has hecho click en seleccion")
}
function lazo(){
    alert("Has hecho click en lazo")
}
function varita(){
    alert("Has hecho click en varita")
}

function Herramienta({accion,children}) {
    function hazClick(){
        switch(accion){
            case "Mover":       mover();break;
            case "Seleccion":   seleccion();break;
            case "Lazo":        lazo();break;
            case "Varita":      varita();break;
        }
    }
    return ( 
        <button onClick={hazClick}>
            {children}
        </button>    
    );
}

export default Herramienta;