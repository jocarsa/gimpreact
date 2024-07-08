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
                Herramientas
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
