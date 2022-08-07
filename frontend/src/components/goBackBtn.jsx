import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    back: {
        textAlign: 'left',
        color: 'gray',
        position: 'absolute',
        '&:hover': {
            cursor: 'pointer',
            color: 'black',
            textDecoration: 'underline',
        }
    },
});

export const GoBackBtn = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    
    return (
        <div className={classes.back}>
            <span onClick={() => navigate(-1)}>&lt;&lt;前のページへ戻る</span>
        </div>
    );
};