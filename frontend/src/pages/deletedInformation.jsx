import React from 'react';
import { Btn } from '../components/btn';
import { Link as RouterLink } from "react-router-dom";

export const DeleteInformation = () => {
    return(
        <>
        <div className='MainContainer'>
            <h1>退会完了</h1>
            <p>ご利用いただき、ありがとうございました。</p>
            <p>またのご利用をお待ちしております。</p>
        </div>
            <Btn message='TOPへ戻る' component={RouterLink} to="/" />
        </>
    )
}