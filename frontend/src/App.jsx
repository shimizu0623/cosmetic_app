import React from 'react';
import { Header } from './components/header';
import { HeaderLogoOnly } from './components/headerLogoOnly';
import { Footer } from './components/footer';
// import { TopPage } from './components/topPage';
// import { LoginPage } from './components/loginPage';
import { Outlet } from "react-router-dom";

import './style.css'
import './img/Whiteday2020-09.JPG';
import './img/cosmetic_background3.jpg';



const App = () =>{


  const webName = "Cosmetic Search";


  return (
    <>
 
      <Header />

      {/* <HeaderLogoOnly /> */}

      <Outlet />
      {/* <LoginPage /> */}


      {/* <TopPage
        webName={webName}
      />

       */}

      <Footer />
    
    </>
  );
};

export default App;