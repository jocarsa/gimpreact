import './Herramienta.css';
function Herramienta({accion,children}) {
    function hazClick(){
        switch(accion){
            case "Mover":
                alert("Has hecho click en mover")
                break;
            case "Seleccion":
                alert("Seleccion")
                break;
            case "Lazo":
                alert("Has hecho click en lazo")
                break;
            case "Varita":
                alert("Has hecho click en varita")
                break;
        }
    }
    return ( 
        <button onClick={hazClick}>
            {children}
        </button>    
    );
}

export default Herramienta;