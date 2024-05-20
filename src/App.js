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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Collections/>}/>
          <Route path="/busqueda" element={<Busqueda/>}/>
          <Route path="/detalles" element={<Details/>}/>
        </Routes>
      
      </BrowserRouter>        

    </>
  );
}

export default App;
