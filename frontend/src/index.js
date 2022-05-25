import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { TopPage } from "./pages/topPage";
import { LoginPage } from "./pages/loginPage";
import { SignUpPage } from "./pages/signUpPage";
import { FixAccount } from "./pages/fixAccountPage";
import { Ewg } from "./components/aboutEwg";
import { EwgPage } from "./pages/ewgPage";
import { MyPage } from "./pages/myPage";
import { DeleteConfirm } from "./pages/deleteConfirmPage";
import { DeleteInformation } from "./pages/deletedMessagePage";
import { HomePage } from "./pages/homePage";
import { ItemSearch } from "./pages/itemSearchPage";
import { ItemDetail } from "./pages/itemDetailPage";
import { ItemComparison } from "./pages/itemComparisonPage";
import { RequestPage } from "./pages/requestPage";
import { Thanks } from "./pages/thanksPage";
import { MyFolder } from "./pages/myFolderPage.jsx";
import { UnmatchedItem } from "./pages/unmatchedItemPage.jsx";
import { HelpPage } from "./pages/helpPage";
import { ReviewPage } from "./pages/reviewPage";
import { Ranking } from "./pages/rankingPage";
import { Btn } from "./components/btn";
import { LoginBtn } from "./components/loginBtn";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


const webName = "Cosmetic Search";

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route
              path='/'
              element={<TopPage webName={webName} />}
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
              element={<EwgPage webName={webName} />}
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
              path='/item/:id'
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
              path='/thanks'
              element={<Thanks />}
            />  
          <Route
              path='/myFolder'
              element={<MyFolder />}
            />  
          <Route
              path='/unmatchedItem'
              element={<UnmatchedItem />}
            />  
          <Route
              path='/helpPage'
              element={<HelpPage />}
            />  
          <Route
              path='/reviewPage'
              element={<ReviewPage />}
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
