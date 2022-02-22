import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { TopPage } from './components/topPage';
import { EWG } from './components/aboutEWG';
import { LoginPage } from './components/loginPage';
import { Outlet } from "react-router-dom";

import './style.css'
import './img/Whiteday2020-09.JPG';
import './img/cosmetic_background3.jpg';



const App = () =>{


  const webName = "(サイトの名前)";


  const onClickSearch = () => {
    alert('search');
  }
  const onClickMenu = () => {
    alert('menu');
  }

  return (
    <>
 
      <Header
        onClickMenu={onClickMenu}
        onClickSearch={onClickSearch}
      />

      <Outlet />
      {/* <LoginPage /> */}


      {/* <TopPage
        webName={webName}
      />


      <EWG
        webName={webName}
      /> */}



      <Footer />
    
    </>
  );
};

export default App;