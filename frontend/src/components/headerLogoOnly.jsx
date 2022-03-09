import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from "react-router-dom";


export const HeaderLogoOnly = () => {
    return(
        <>
        <header>
            <div className="headerLogo">
                <img src="" alt="Logo" />
            </div>
        <Button
            variant="outlined"
            sx={{
                color:'green',
                background: 'rgba(205, 226, 168, 0.612)',
                letterSpacing: 3,
                fontSize: 16,
                borderColor:'green',
                borderRadius: 3,
                margin: '10px 10px 10px auto',
                padding: '10px 40px',
                '&:hover': {
                    color: 'white',
                    borderColor:'green',
                    background: 'green',
                }
            }}
            component={RouterLink}
            to="/login"
            >
        ログイン</Button>
        </header>
        </>
    )
}