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
import Main from './components/pages/main';
import UsersMain from './components/pages/main';


function App() {
  return (
    <>       
    <UsersMain/>
    </>
  );
}

export default App;
