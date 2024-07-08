import './Herramientas.css';
import Herramienta from './Herramientas/Herramienta'
function Herramientas() {
    function clickVentana(){
        alert("Has hecho click en la ventana de herramientas")
    }
  return ( 
        <section id="herramientas" onClick={clickVentana}>
            <Herramienta accion="Mover">M</Herramienta>
            <Herramienta accion="Seleccion">S</Herramienta>
            <Herramienta accion="Lazo">L</Herramienta>
            <Herramienta accion="Varita">V</Herramienta>
        </section>    
  );
}

export default Herramientas;