import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarritoDeCompras from './components/pages/carritoDeCompras';
import Checkout from './components/pages/checkout';
import PedidoCompleto from './components/pages/pedidoCompleto';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route index element={<CarritoDeCompras />} />
          <Route path='/carritoDeCompras' element={<CarritoDeCompras />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/pedidoCompleto' element={<PedidoCompleto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
