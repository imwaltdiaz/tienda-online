//import logo from './logo.svg';
import './App.css';
import AdminMain from './components/admin/AdminMain';
import Header from './components/common/header';
import Footer from './components/common/footer';
import SearchBar from './components/common/searchBar';
import Collections from './components/Main/mainPage';
import Details from './components/Main/detailsPage';
import Busqueda from './components/Main/busquedaP';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Datos_Usuario } from './components/pages/datos_Usuario';
import { Cambiar_Contrasena } from './components/pages/cambiar_Contrasena';
import Main from './components/pages/main';
import UsersMain from './components/pages/main';


function App() {
  return (
    <>
      <UsersMain/>

      <BrowserRouter>
      
        <Routes>
          <Route index element={<Collections/>}/>
          <Route path="/busqueda" element={<Busqueda/>}/>
          <Route path="/detalles" element={<Details/>}/>
          <Route path="/datos_usuario" element={<Datos_Usuario/>}/>
          <Route path="/cambiar_contrasena" element={<Cambiar_Contrasena/>}/>
        </Routes>
      </BrowserRouter>      

      <AdminMain></AdminMain>
           
    </>
  );
}

export default App;
