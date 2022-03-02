import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from "react-router-dom";


export const RegisterBtn = () => {

    return(
        <>
        <Button variant="contained" component={RouterLink} to='/'>
            登録する
        </Button>
        </>
    );
};
