import React from 'react';
import Button from '@mui/material/Button';

export const Btn = (props) => {
    const {message} = props;

    return(
        <>
        <Button
          variant="contained"
          style={{
            color: 'white',
            // margin: '0 auto 4px 10px',
            padding: '10px 25px', 
            fontSize: '17px',
            letterSpacing: 2,
            background: '#73baae',
            borderRadius: '5px',
              //     '&:hover':{
              //         background: 'rgba(141, 203, 193)', 
              //     }
            }}
            {...props}
          >{message}
        </Button>
        </>
    );
};
