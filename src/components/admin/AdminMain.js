//Dashboard
import Header from "../common/header";
import Footer from "../common/footer";
import { Container, Drawer, Stack } from "@mui/material";
import DrawerDev from "./DrawerDev";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import {Productos} from "./Productos"
import Agregar from "./Agregar";

export default function AdminMain() {
  return (
    <>
      <Header/>
      <Stack
        direction="row"
        justifyContent="space-between"
        
      >
        <DrawerDev />
        
        <BrowserRouter>
          <Routes>
          <Route index element = {<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/agregar" element={<Agregar/>} />
          </Routes>
        </BrowserRouter>
      </Stack>
      <Footer/>
    </>
  );
}
