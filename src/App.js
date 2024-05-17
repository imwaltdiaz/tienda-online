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
      <ItemsCheckOut/>
      <Box display={'flex'} justifyContent="space-evenly">
        <BoxDireccion/>
        <BoxPago/>
      </Box>
      <MetodoEnvio/>
      <Box display={'flex'} justifyContent= "space-evenly">
        <BoxItem/>
        <BoxResOrd/>
      </Box>
      <Footer/>
    </>
  );
}

export default App;
