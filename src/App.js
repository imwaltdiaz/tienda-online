import logo from './logo.svg';
import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import LoginPage from './components/pages/login_page';
function App() {
  return (
    <>
      <Header/>
      <LoginPage/>
      <Footer/>
    </>
  );
}

export default App;
