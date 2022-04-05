import React, { useState } from 'react';
import axios from '../axios';
import header_img from '../img/headerRequest.jpg';
import { GoBackBtn } from '../components/goBackBtn';
import { Btn } from '../components/btn';
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const RequestPage = () => {
    const [requestForm, setRequestForm] = useState({detail:''})
    const navigate = useNavigate();

    const handleRequestFormChange = (event) => {
        console.log(requestForm)
        setRequestForm({...requestForm, detail: event.target.value})
      };
    

    const onClickSend = async () => {
        // TODO: ↓スペースだけ入力しても進んじゃう
        // if(requestForm.request === '' || requestForm.request === '\n'){
        if(requestForm.detail === ''){
            window.alert('枠内にメッセージのご入力をお願いします。')
            return;
        }
        console.log(requestForm.detail)
        
        try {
          console.log('onClickSend');
          console.log(requestForm);
          const response = await axios.post('/requests', requestForm);
          console.log(response);
        //   navigate("/thanks");
        } catch (e) {
          window.alert('送信に失敗しました');
          console.error(e)
          return;
        }
        
      }
    
    return(
        <>
        <div className='MainContainer'>
        <GoBackBtn />
        <img src={header_img} alt="header" style={{ width: '100%' }}/>
            <div>
                <div style={{ margin: '40px auto' }}>
                    <p>いつもご利用いただき、誠にありがとうございます。</p>
                    <p>こちらのページでは、リクエストをお伺いしております。</p>
                    <p><span>この商品の情報が知りたい！こういう機能が欲しい！</span>等々</p>
                    <p>たくさんのご意見、ご要望を心よりお待ちしております。</p>
                </div>
                <div style={{margin: '40px auto'}}>
                    <TextareaAutosize
                    value={requestForm.detail}
                    aria-label="minimum height"
                    minRows={20}
                    style={{ width: 400 }}
                    onChange={handleRequestFormChange}
                    />
                </div>
            </div>

            {/* TODO: リクエストデータベースに登録する */}
            <Btn 
              onClick={onClickSend} 
              message='リクエストを送信する' 
            />












        </div>
        </>
    )
}