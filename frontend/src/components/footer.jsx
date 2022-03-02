import React from 'react';
import Typography from '@mui/material/Typography';
// import TableFooter from '@mui/material/TableFooter';


export const Footer = (props) => {

    return(
        // <footer class="MuiBox-root css-1ejim2u">
        //     <p class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-rdifmp">
        //         Copyright © Shimizu Ayaka 2022.
        //     </p>
        // </footer>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center" {...props}
          sx={{
            margin: '20px auto 10px',
         }}
        >
        {'Copyright © Shimizu Ayaka '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>

    );
};
