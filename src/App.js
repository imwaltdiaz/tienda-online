//import logo from './logo.svg';
import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import SearchBar from './components/common/searchBar';
import Collections from './components/Main/mainPage';
import Details from './components/Main/detailsPage';
import Busqueda from './components/Main/busquedaP';
function App() {
  return (
    <>
      <Header/>
      <Busqueda/>
      <Footer/>

    </>
  );
}

export default App;
