import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import CarritoDeCompras from './carritoDeCompras'; 
import Checkout from './checkout'; 
import PedidoCompleto from './pedidoCompleto';
import Principal from "../pages/paginaPrincipal";
import Busqueda from "../pages/busquedaProducto";
import Details from "../pages/detallesProducto";
function UsersMain() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route index element={<Principal/>} />
          <Route path="/busqueda" element={<Busqueda/>}/>
          <Route path="/detalles" element={<Details/>}/>
          <Route path='/carritoDeCompras' element={<CarritoDeCompras />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/pedidoCompleto' element={<PedidoCompleto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default UsersMain;
