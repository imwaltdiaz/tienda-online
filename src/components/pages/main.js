import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import CarritoDeCompras from './carritoDeCompras'; 
import Checkout from './checkout'; 
import PedidoCompleto from './pedidoCompleto';
import Principal from "../pages/paginaPrincipal";
import Busqueda from "../pages/busquedaProducto";
import Details from "../pages/detallesProducto";
import {Datos_Usuario} from "./datos_Usuario";
import {Cambiar_Contrasena} from "./cambiar_Contrasena";
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
          <Route path="/datosusuario" element={<Datos_Usuario />} />
          <Route path="/cambiarcontrasena" element={<Cambiar_Contrasena />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default UsersMain;
