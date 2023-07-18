import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './components/VisualizarDatos'
import Personaje from './components/Personaje'
import AgregarDatos from './components/AgregarDatos'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path="/" element={<Inicio></Inicio>}></Route>
<Route path="/personaje/:id" element={<Personaje></Personaje>}></Route>
<Route path="/agregar" element={<AgregarDatos></AgregarDatos>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
