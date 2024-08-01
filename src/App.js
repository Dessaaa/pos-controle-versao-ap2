import './App.css';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import PageNotFound from './pages/PageNotFound';
import Produto from './pages/Produto';
import { useState } from 'react';
import { ProdutoContext } from './contexts/produtoContext';

function App() {

  const [produtos, setProdutos] = useState();

  return (
    <ProdutoContext.Provider value={{produtos, setProdutos}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/produto/:id' element={<Produto />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>      
      </BrowserRouter>
    </ProdutoContext.Provider>
  );
}

export default App;
