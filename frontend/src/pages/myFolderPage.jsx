import React from 'react';
import { GoBackBtn } from '../components/goBackBtn';

export const MyFolder = () => {
    return(
        <>
        <div className='MainContainer'>
        <GoBackBtn />
         <p>MyFolder</p>
         <p>フォルダー内のアイテムの成分合計から、成分割合を出す（各アイテムページみたいに）</p>

        </div>
        </>
    )
}