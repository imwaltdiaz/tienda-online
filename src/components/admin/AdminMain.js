import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { Stack } from "@mui/material";
import DrawerDev from "./DrawerDev";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Productos from "./Productos";
import Series from "./Series";
import AgregarSerie from "./AgregarSerie";
import Agregar from "./Agregar";
import AgregarProducto from "./AgregarProducto";
import ListaUsuarios from "./Lista_Usuarios";
import data from './data.json';

export default function AdminMain() {
  return (
    <>
      <Header />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignContent="flex-start"
        paddingLeft="1vw"
      >
        <DrawerDev />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lista-usuarios" element={<ListaUsuarios />} />
          <Route path="productos" element={<Productos data={data} />} />
          <Route path="series" element={<Series />} />
          <Route path="agregar" element={<Agregar />} />
          <Route path="agregarproducto" element={<AgregarProducto />} />
          <Route path="agregarserie/:id" element={<AgregarSerie />} />
        </Routes>
      </Stack>
      <Footer />
    </>
  );
}
