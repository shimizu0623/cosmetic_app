import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { TopPage } from "./components/topPage";
import { EWG } from "./components/aboutEWG";
import { LoginPage } from "./components/loginPage";

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
              // element={<EWG />}
            />
          <Route
              path='/login'
              element={<LoginPage />}
            />  
          <Route
              path='/login'
              element={<LoginPage />}
            />  
          <Route
              path='/login'
              element={<LoginPage />}
            />  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
