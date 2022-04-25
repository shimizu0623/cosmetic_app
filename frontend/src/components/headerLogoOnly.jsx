// MEMO: スタイル調整済
import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import logo_img from "../img/CS_logo.png";

const useStyles = makeStyles({
    headerRight: {
        position: 'fixed',
        textAlign: 'right',
        top: '0',
        width: '100%',
        height: '60px',
        lineHeight: '60px',
        background: 'rgba(243, 240, 240, 0.734)',
    },
    headerLeft: {
        position: 'fixed',
        textAlign: 'left',
        top: '0',
        zIndex: '2147483647',
    },
});
  
export const HeaderLogoOnly = () => {
    const classes = useStyles();

    return(
        <header>
            <div className={classes.headerLeft}>
                <img src={logo_img} alt="Logo" style={{ margin: '0 30px', height: '60px' }} />
            </div>
            <div className={classes.headerRight}>
                <Button
                    variant="outlined"
                    style={{
                        color:'green',
                        letterSpacing: '3',
                        fontSize: '16',
                        borderColor:'green',
                        borderRadius: '3',
                        margin: '0 30px 0 auto',
                        padding: '10px 40px',
                    }}
                    component={RouterLink}
                    to="/login">
                ログイン
                </Button>
            </div>
        </header>
    );
};