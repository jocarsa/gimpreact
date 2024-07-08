import './Herramientas.css';
import Herramienta from './Herramientas/Herramienta'
function Herramientas() {
  return ( 
        <section id="herramientas">
            <Herramienta accion="Mover">M</Herramienta>
            <Herramienta accion="Seleccion">S</Herramienta>
            <Herramienta accion="Lazo">L</Herramienta>
            <Herramienta accion="Varita">V</Herramienta>
        </section>    
  );
}

export default Herramientas;