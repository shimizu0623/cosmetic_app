import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { TopPage } from "./pages/topPage";
import { LoginPage } from "./pages/loginPage";
import { SignUpPage } from "./pages/signUpPage";
import { FixAccount } from "./pages/fixAccount";
import { Ewg } from "./components/aboutEwg";
import { EwgPage } from "./pages/ewgPage";
import { MyPage } from "./pages/myPage";
import { DeleteConfirm } from "./pages/deleteConfirm";
import { DeleteInformation } from "./pages/deletedInformation";
import { HomePage } from "./pages/homePage";
import { ItemSearch } from "./pages/itemSearchPage";
import { ItemDetail } from "./pages/itemDetail";
import { ItemComparison } from "./pages/itemComparison";
import { RequestPage } from "./pages/requestPage";
import { Ranking } from "./pages/ranking";
import { Btn } from "./components/btn";
import { LoginBtn } from "./components/loginBtn";

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
              path='/signUpPage'
              element={<SignUpPage />}
            />  
          <Route
              path='/fixAccount'
              element={<FixAccount />}
            />  
          <Route
              path='/login'
              element={<LoginPage />}
            />  
          <Route
              path='/ewg'
              element={<Ewg />}
            />  
          <Route
              path='/ewgPage'
              element={<EwgPage />}
            />  
          <Route
              path='/myPage'
              element={<MyPage />}
            />  
          <Route
              path='/confirm'
              element={<DeleteConfirm />}
            />  
          <Route
              path='/delete'
              element={<DeleteInformation />}
            />  
          <Route
              path='/homePage'
              element={<HomePage />}
            />  
          <Route
              path='/itemSearch'
              element={<ItemSearch />}
            />  
          <Route
              path='/itemDetail'
              element={<ItemDetail />}
            />  
          <Route
              path='/itemComparison'
              element={<ItemComparison />}
            />  
          <Route
              path='/requestPage'
              element={<RequestPage />}
            />  
          <Route
              path='/ranking'
              element={<Ranking />}
            />  
          <Route
              path='/btn'
              element={<Btn />}
            />  
          <Route
              path='/loginBtn'
              element={<LoginBtn />}
            />  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
