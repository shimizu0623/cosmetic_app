import React from 'react';
import { Ewg } from "../components/aboutEWG";
import headerAboutEwg from "../img/headerAboutEWG.jpg";


export const EwgPage = () => {

    const headerEwg = () => {
        return (
            <>
              <img 
                src={headerAboutEwg} 
                alt="header_img" 
                // style={{
                //     width: '100%',
                //     height: '100%',
                // }} 
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