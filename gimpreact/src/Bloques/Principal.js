import './Principal.css';
import Herramientas from './Secciones/Herramientas'
import Dibujo from './Secciones/Dibujo'
import Parametros from './Secciones/Parametros'
function Principal() {
  return (
        <main>  
            <Herramientas />
            <Dibujo />
            <Parametros />
        </main>
  );
}

export default Principal;