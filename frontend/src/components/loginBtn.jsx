// MEMO: スタイル調整済
import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: 'white',
    letterSpacing: 3,
    fontSize: 16,
    borderRadius: 5,
    margin: '10px auto',
    padding: '10px 40px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 60,
    maxWidth: '300px',
    background: 'linear-gradient(45deg, #00bcd4 30%, #1de9b6 90%)',
    '&:hover': {
      background: 'linear-gradient(45deg, #00bcd4 10%, #1de9b6 70%)',
    },
  }
});

export const LoginBtn = () => {
  const classes = useStyles();

  return(
    <Button
      variant="contained"
      className={classes.root}
      component={RouterLink}
      to="/login">
    無料ではじめる
    </Button>
  );
}
