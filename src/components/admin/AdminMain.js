//Dashboard
import Header from "../common/header";
import Footer from "../common/footer";
import { Container, Drawer, Stack } from "@mui/material";
import DrawerDev from "./DrawerDev";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import {Productos} from "./Productos"
import Agregar from "./Agregar";
import AgregarProducto from "./AgregarProducto";
import {Series} from "./Series"

export default function AdminMain() {
  return (
    <>
      <Header/>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignContent="flex-start"    
        paddingLeft="1vw"   
      >
        <DrawerDev />
        
        <BrowserRouter>
          <Routes>
          <Route index element = {<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/series" element={<Series />} />
          <Route path="/agregar" element={<Agregar/>} />
          <Route path="/agregarproducto" element={<AgregarProducto/>} />

          </Routes>
        </BrowserRouter>
      </Stack>
      <Footer/>
    </>
  );
}
