import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { TopPage } from "./components/topPage";
import { LoginPage } from "./components/loginPage";
import { SignUpPage } from "./components/signUpPage";
import { FixAccount } from "./components/fixAccount";
import { EWG } from "./components/aboutEWG";
import { MyPage } from "./components/myPage";
import { DeleteConfirm } from "./components/deleteConfirm";
import { DeleteInformation } from "./components/deletedInformation";
import { HomePage } from "./components/homePage";
import { ItemList } from "./components/itemList";
import { ItemDetail } from "./components/itemDetail";
import { ItemComparison } from "./components/itemComparison";
import { RequestPage } from "./components/requestPage";
import { Ranking } from "./components/ranking";

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
              element={<EWG />}
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
              path='/itemList'
              element={<ItemList />}
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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
