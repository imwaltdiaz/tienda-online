import Header from "../common/header";
import Footer from "../common/footer";
import {Container, Drawer, Stack } from "@mui/material";
import DrawerDev from "./DrawerDev";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import {Productos} from "./Productos"
import { Usuarios } from "./Lista_Usuarios";

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
            <Route path="/Lista_Usuarios" element={<Usuarios/>} />
            </Routes>
          </BrowserRouter>
        </Stack>
        <Footer/>
      </>
    );
  }