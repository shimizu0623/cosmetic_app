import React from 'react';
import { Header } from './components/header';
import { EWG } from './components/aboutEWG';
import './style.css'
import './img/Whiteday2020-09.JPG';


const App = () =>{


  const webName = "(サイトの名前)"


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
      <EWG
        webName={webName}
      />

  






      <div className>

      </div>
    </>
  )
}

export default App;