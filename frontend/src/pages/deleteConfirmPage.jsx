import React from 'react';
import { GoBackBtn } from '../components/goBackBtn';
import { Btn } from '../components/btn';
import { Link as RouterLink } from "react-router-dom";
import TextareaAutosize from '@mui/material/TextareaAutosize';

import green_leaf from '../img/green_leaf_img.jpg';

export const DeleteConfirm = () => {
    return(
        <>
        <div className='MainContainer'>
        <GoBackBtn />
            <img src={green_leaf} alt="" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '0 auto 40px' }} />
            <h1 style={{ fontSize: '40px', display: 'inline-block' }}>退会フォーム</h1>
            <div>
                <p>いつもご利用いただき、ありがとうございます。</p>
                <p>よろしければ、退会の理由をお聞かせください。</p>
                {/* TODO: 退会理由データベースに登録する */}
                <TextareaAutosize
                aria-label="minimum height"
                minRows={20}
                style={{ width: 400 }}
                />
            </div>
            <div style={{margin: '30px auto'}}>
                <p>下のボタンより退会手続きを行ってください。</p>
                <p>退会すると、登録データは全て削除されます。</p>
            </div>

            <Btn message='退会する' component={RouterLink} to="/delete"/>
        </div>
        </>
    )
}

