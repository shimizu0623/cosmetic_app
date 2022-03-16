import React from 'react';
import Button from '@mui/material/Button';
// import { Link as RouterLink } from "react-router-dom";


export const Btn = (props) => {
    const {onClick, message} = props;

    return(
        <>
        <Button
          variant="contained"
          // component={RouterLink}
          // to={pageLink}
          style={{
            color: 'white',
            // margin: '0 auto 4px 10px',
            padding: '10px 25px', 
            fontSize: '17px',
            letterSpacing: 2,
            background: '#73baae',
              //     '&:hover':{
              //         background: 'rgba(141, 203, 193)', 
              //     }
            }}
          onClick={onClick}
          >{message}
        </Button>
        </>
    );
};
