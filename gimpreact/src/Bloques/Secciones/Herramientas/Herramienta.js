import './Herramienta.css';
function Herramienta() {
    function hazClick(){
        alert("Has hecho click")
    }
    return ( 
        <button onClick={hazClick}>
            F 
        </button>    
    );
}

export default Herramienta;