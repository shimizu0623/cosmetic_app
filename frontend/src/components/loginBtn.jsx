import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from "react-router-dom";

export const LoginBtn = () => {
  return (
    <Button
      variant="contained"
      component={RouterLink}
      to="/login"
      style={{
        color: 'white',
        height: 60,
        maxWidth: '300px',
        margin: '20px auto',
        letterSpacing: 3, 
        fontSize: 16, 
        borderRadius: 5, 
        padding: '10px 40px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        background: 'linear-gradient(45deg, #00bcd4 30%, #1de9b6 90%)',
        '&:hover': {
          background: 'linear-gradient(45deg, #00bcd4 10%, #1de9b6 70%)',
        },
      }}>
    無料ではじめる
    </Button>
  );
};