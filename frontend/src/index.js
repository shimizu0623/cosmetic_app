import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { TopPage } from "./components/topPage";
import { LoginPage } from "./components/loginPage";
import { CreateAccount } from "./components/createAccountPage";
import { EWG } from "./components/aboutEWG";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route
              path='/'
              element={<TopPage />}
            />
          <Route
              path='/createAccount'
              element={<CreateAccount />}
            />  
          <Route
              path='/login'
              element={<LoginPage />}
            />  
          <Route
              path='/ewg'
              element={<EWG />}
            />  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
