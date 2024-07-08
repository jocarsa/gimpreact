import mover from './Funciones/funciones'
import './Herramienta.css';

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
    function hazClick(e){
        e.stopPropagation();
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