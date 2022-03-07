import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import Button from '@mui/material/Button';


export const DeleteInformation = () => {
    return(
        <>
        <div className='MainContainer'>
            <h1>退会完了</h1>
            <p>ご利用いただき、ありがとうございました。</p>
            <p>またのご利用をお待ちしております。</p>
            <Button 
                 variant="contained"
                 sx={{
                   marginTop: "20px",
                 }}
                 component={RouterLink}
                 to="/">
            TOPへ戻る
            </Button>
        </div>
        </>
    )
}