import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
        <header>
            <nav>
                <ul>
                    <li>Archivo</li> 
                    <li>Editar</li> 
                    <li>Seleccionar</li> 
                    <li>Vista</li>
              </ul>  
            </nav>
        </header>
        <main>  
            <section id="herramientas">
                Herramientas<hr/>
                <button>Mover</button>
                <button>Seleccion</button>
                  <button>Lazo</button>
                  <button>Varita</button>
      <button>Mover</button>
                <button>Seleccion</button>
                  <button>Lazo</button>
                  <button>Varita</button>
      <button>Mover</button>
                <button>Seleccion</button>
                  <button>Lazo</button>
                  <button>Varita</button>
            </section>
            <section id="dibujo">
                Dibujo
            </section>
            <section id="parametros">
                Parametros
            </section>
        </main>
      </>
  );
}

export default App;
