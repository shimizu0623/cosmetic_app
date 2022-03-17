import React from 'react';
import { Ewg } from "../components/aboutEwg";
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
            <Ewg HeaderEwg={headerEwg()} />
        </div>
        </>
    )
}