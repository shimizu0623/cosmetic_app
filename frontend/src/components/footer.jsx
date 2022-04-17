// MEMO: スタイル調整済
import React from 'react';
import Typography from '@mui/material/Typography';

export const Footer = (props) => {
  return(
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
