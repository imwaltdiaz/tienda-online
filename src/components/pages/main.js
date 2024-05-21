import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import CarritoDeCompras from './carritoDeCompras'; 
import Checkout from './checkout'; 
import PedidoCompleto from './pedidoCompleto';
function UsersMain() {
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

export default UsersMain;
