import React from 'react';
import { Btn } from '../components/btn';
import { Link as RouterLink } from "react-router-dom";
import green_leaf from '../img/green_leaf_img_clear.png';

export const DeleteInformation = () => {
    return (
        <>
            <div className='MainContainer'>
                <img src={green_leaf} alt="" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '0 auto 40px' }} />
                <h1 style={{ fontSize: '40px', display: 'inline-block' }}>退会完了</h1>
                <p>ご利用いただき、誠にありがとうございました。</p>
                <p>またのご利用をお待ちしております。</p>
            </div>
            <Btn message='TOPへ戻る' component={RouterLink} to="/" />
        </>
    );
}