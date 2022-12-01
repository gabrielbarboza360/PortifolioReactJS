
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//Importar as Paginas

import Home from './pag/home/index.js';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        
        <Routes>
              <Route path='/Home' element={<Home/>} />

        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
