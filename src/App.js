import logo from './logo.svg';
import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import ListadoDeSeries from './components/pages/admin_listadoDeSeries';

function App() {
  return (
    <>
      <Header/>
      <ListadoDeSeries/>
      <Footer/>
    </>
  );
}

export default App;
