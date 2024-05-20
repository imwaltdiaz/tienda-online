//Dashboard
import Header from "../common/header";
import Footer from "../common/footer";
import { Container, Drawer, Stack } from "@mui/material";
import DrawerDev from "./DrawerDev";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import {Productos} from "./Productos";
import {Series} from "./Series";
import {Lista_Usuarios} from "./Lista_Usuarios";
import {Lista_Ordenes } from "./Lista_Ordenes";
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
          <Route path="/Lista_Usuarios" element={<Lista_Usuarios />} />
          <Route path="/Lista_Ordenes" element={<Lista_Ordenes />} />
          </Routes>
        </BrowserRouter>
      </Stack>
      <Footer/>
    </>
  );
}
