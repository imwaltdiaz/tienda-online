import logo from './logo.svg';
import './App.css';
import Dashboard from './components/pages/admin_paginaPrincipal';
import Header from './components/common/header';
import Footer from './components/common/footer';
import ItemsCheckOut, { BoxDireccion , MetodoEnvio, BoxPago, Prueba, BoxItem, BoxResOrd} from './components/pages/checkout';
import ItemsCarro, {ListaItemCarr, Compil, BtnPago} from './components/pages/carritoDeCompras';
import { Box } from '@mui/material';
import { CoPresent } from '@mui/icons-material';



function App() {
  return (
    <>
      <Header/>
      <Compil/>
      <BtnPago/>
      <Compil/>
      <Footer/>
    </>
  );
}

export default App;
