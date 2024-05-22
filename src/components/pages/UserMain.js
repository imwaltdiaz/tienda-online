import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CarritoDeCompras from "./carritoDeCompras";
import Checkout from "./checkout";
import PedidoCompleto from "./pedidoCompleto";
import Principal from "./paginaPrincipal";
import Busqueda from "./busquedaProducto";
import Details from "./detallesProducto";
import Datos_Usuario from "./datos_Usuario";

import Cambiar_Contrasena from './cambiar_Contrasena';

function UserMain() {
  return (
    <div>
    
        <Routes>
          <Route index element={<Principal />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/detalles" element={<Details />} />
          <Route path="/carritoDeCompras" element={<CarritoDeCompras />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pedidoCompleto" element={<PedidoCompleto />} />
          <Route path="/datosusuario" element={<Datos_Usuario/>} />
          <Route path="/cambiarcontrasena" element={<Cambiar_Contrasena />} />
        </Routes>
      
    </div>
  );
}

export default UserMain;
