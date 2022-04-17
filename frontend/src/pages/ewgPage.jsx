// MEMO: スタイル調整済
import React from 'react';
import { Ewg } from "../components/aboutEwg";
import { GoBackBtn } from '../components/goBackBtn';
import headerAboutEwg from "../img/headerAboutEWG.jpg";


export const EwgPage = () => {

    const headerEwg = () => {
        return (
            <>
              <img 
                src={headerAboutEwg} 
                alt="header_img" 
              />
            </>
        )
    }

    return(
        <>
        <div className='MainContainer'>
            <GoBackBtn />
            <Ewg HeaderEwg={headerEwg()} />
        </div>
        </>
    )
}