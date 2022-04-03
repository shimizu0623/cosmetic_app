import React from 'react';
import header_img from '../img/headerRequest.jpg';

import { Btn } from '../components/btn';
import { Link as RouterLink } from "react-router-dom";
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const RequestPage = () => {
    return(
        <>
        <div className='MainContainer'>
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
                    aria-label="minimum height"
                    minRows={20}
                    style={{ width: 400 }}
                    />
                </div>
            </div>

            {/* TODO: リクエストデータベースに登録する */}
            <Btn message='リクエストを送信する' component={RouterLink} to="/thanks"/>












        </div>
        </>
    )
}