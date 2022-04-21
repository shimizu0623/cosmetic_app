
import React from 'react';
import header_img from '../img/headerThanks.jpg';
import { Btn } from '../components/btn';
import { Link as RouterLink } from "react-router-dom";

export const Thanks = () => {
    return(
        <>
        <div className='MainContainer'>
        <img src={header_img} alt="header" style={{ width: '100%' }}/>
        <div style={{ margin: '40px auto' }}>
            <h1>リクエスト送信完了</h1>
            <p>この度は貴重なご意見をお送りいただき、誠にありがとうございます。</p>
            <p>お寄せいただいた内容を参考に、サービス改善へ努めて参ります。</p>
            <p>今後ともどうぞよろしくお願いします。</p>
        </div>
            <Btn message='マイページへ戻る' component={RouterLink} to="/myPage" />
        </div>
        <p>内容によっては対応が難しいこともございます。</p>
        <p>恐れ入りますが、御理解賜りますようお願い申し上げます。</p>

        </>
    )
}