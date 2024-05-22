import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import CarritoDeCompras from './carritoDeCompras'; 
import Checkout from './checkout'; 
import PedidoCompleto from './pedidoCompleto';
import Principal from "../pages/paginaPrincipal";
import Busqueda from "../pages/busquedaProducto";
import Details from "../pages/detallesProducto";
import { Datos_Usuario } from "./datos_Usuario";
import CambiarContrasena from "./cambiar_contrasena";
import LoginPage from './login_page';
import NuevaCuenta from './nueva_cuenta';
import ForgotPasswordPage from './perdida_contra';
import MainPage from './pantalla_principal';

function UsersMain() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route index element={<Principal />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/detalles" element={<Details />} />
          <Route path='/carritoDeCompras' element={<CarritoDeCompras />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/pedidoCompleto' element={<PedidoCompleto />} />
          <Route path="/datosusuario" element={<Datos_Usuario />} />
          <Route path="/cambiarcontrasena" element={<CambiarContrasena />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/perdida-contra" element={<ForgotPasswordPage />} />
          <Route path="/crear-cuenta" element={<NuevaCuenta />} />
          <Route path="/pantalla-principal" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default UsersMain;
