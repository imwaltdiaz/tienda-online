//import logo from './logo.svg';
import "./App.css";
import AdminMain from "./components/admin/AdminMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Datos_Usuario } from "./components/pages/datos_Usuario";
import { Cambiar_Contrasena } from "./components/pages/cambiar_Contrasena";
import UsersMain from "./components/pages/UserMain";
import AppRouter from "./services/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
