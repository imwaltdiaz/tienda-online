import logo from './logo.svg';
import './App.css';
import Dashboard from './components/pages/admin_paginaPrincipal';
import ItemsCarro from './components/pages/carritoDeCompras';
import Header from './components/common/header';
import Footer from './components/common/footer';
import ItemsCheckOut, { BoxDireccion , MetodoEnvio, BoxPago, Prueba, BoxItem, BoxResOrd} from './components/pages/checkout';
import { Box } from '@mui/material';



function App() {
  return (
    <>
      <Header/>
      <ItemsCarro/>
      <Footer/>
    </>
  );
}

export default App;
