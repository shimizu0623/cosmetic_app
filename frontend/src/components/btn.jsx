// MEMO: スタイル調整済
import React from 'react';
import Button from '@mui/material/Button';

export const Btn = (props) => {
    const {message} = props;

    return(
        <Button
          variant="contained"
          style={{
            color: 'white',
            padding: '10px 25px', 
            fontSize: '17px',
            letterSpacing: 2,
            background: '#73baae',
            borderRadius: '5px',
          }}
          {...props}
        >{message}
        </Button>
    );
};
