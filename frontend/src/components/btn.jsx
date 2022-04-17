// MEMO: スタイル調整済
import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
    padding: '10px 25px', 
    fontSize: '17px',
    letterSpacing: 2,
    borderRadius: '5px',
    background: '#73baae',
    '&:hover': {
      background: 'rgba(141, 203, 193)', 
    },
}});


export const Btn = (props) => {
  const classes = useStyles();
  const {message} = props;

  return(
      <>
      <Button
        variant="contained"
        className={classes.root}
        {...props}
      >
        {message}
      </Button>
      </>
  );
};
