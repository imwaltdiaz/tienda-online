import React, { useState } from 'react';
import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import LoginPage from './components/pages/login_page';
import NuevaCuenta from './components/pages/nueva_cuenta';
import ForgotPasswordPage from './components/pages/perdida_contra';
import MainPage from './components/pages/pantalla_principal';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleForgotPassword = () => {
    setCurrentPage('perdida-contra');
  };

  const handleBackToLogin = () => {
    setCurrentPage('login');
  };

  const handleCreateAccount = () => {
    setCurrentPage('crear-cuenta');
  };

  const handleBackToMain = () => {
    setCurrentPage('main');
  };

  return (
    <>
      <Header />
      {currentPage === 'login' && (
        <LoginPage
          onForgotPassword={handleForgotPassword}
          onCreateAccount={handleCreateAccount}
          onLoginSuccess={handleBackToMain}
        />
      )}
      {currentPage === 'perdida-contra' && (
        <ForgotPasswordPage onBackToLogin={handleBackToLogin} />
      )}
      {currentPage === 'crear-cuenta' && (
        <NuevaCuenta onBackToLogin={handleBackToLogin} />
      )}
      {currentPage === 'main' && (
        <MainPage />
      )}
      <Footer />
    </>
  );
}

export default App;
