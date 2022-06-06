import React, {useState, useEffect} from 'react';
import axios from 'axios';
import userAtom from './recoil/user';
import { useRecoilState } from 'recoil';
import { Header } from './components/header';
import { HeaderLogoOnly } from './components/headerLogoOnly';
import { Footer } from './components/footer';
// import { TopPage } from './pages/topPage';
// import { LoginPage } from './components/loginPage';
import { Outlet } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import './style.css'
import './img/Whiteday2020-09.JPG';
import './img/cosmetic_background3.jpg';



const App = () =>{
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(async () => {
      const responseUser = await axios.get('/me');
      console.log(responseUser.data)
      if (responseUser.data !== null) {
        setUser(responseUser.data);
      } else {
        setUser(false);
      }
  }, []);


  return (
    <>
      {user === null ? (<CircularProgress color="success" size="35px" />) : 
      (
        <>
        {(() => {
          if (user === false){
            return (<HeaderLogoOnly />)
          }
        return (<Header />)
        })()}


        <Outlet />
        {/* <LoginPage /> */}

        <Footer />
        </>
      )}
    
    </>
  );
};

export default App;