import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from "react-router-dom";


export const RegisterBtn = (props) => {
    const {onClick} = props;



    return(
        <>
        <Button 
          variant="contained"
          sx={{
            letterSpacing: 3,
            fontSize: 16,
            borderRadius: 2,
            margin: '20px auto 10px',
            padding: '10px 40px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
         }}
        //   component={RouterLink} 
        //   to='/test'
          onClick={onClick}>
            登録する
        </Button>
        </>
    );
};
