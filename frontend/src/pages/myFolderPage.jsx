import React, {useState, useEffect} from 'react';
import axios from '../axios';
import header_img from '../img/headerMyFolder.jpg';
import green_leaf from '../img/green_leaf_img.jpg';
import { Btn } from '../components/btn';
import { GoBackBtn } from '../components/goBackBtn';
import Box from '@material-ui/core/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    StyleCreate: {
        margin: '30px auto',
        padding: '3%',
        background: '-webkit-gradient(linear,left top,left bottom,from(#cce9cc),to(#e1e9b8))',
        borderRadius: '10px',
        position: 'relative',
        maxWidth: '70%',
        // textAlign: 'center',
    },
    CreateMessage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        margin: 'auto',

    },
    CreateForm: {
        display: 'flex',
        margin: 'auto',
        textAlign: 'center',
    },

})

export const MyFolder = () => {
    const classes = useStyles();


    return(
        <>
        <div className='MainContainer'>
        <GoBackBtn />
        <img src={header_img} alt="header" style={{ width: '100%' }}/>

        <div style={{ margin: '30px auto' }}>
            <p>こちらのページでは、あなただけのオリジナル化粧品フォルダが作成することができます。</p>
            <p>季節や肌状態に合わせてお肌がその時必要とするお手入れを保存してみませんか？</p>
            <p>ファイルの総合的なEWG等級別成分割合を確認することもできます。</p>
            <p>どんな時でも健やかな肌で過ごせますように。</p>
        </div>

        <div className={classes.StyleCreate}>
        {/* <div className={classes.CreateMessage}> */}
            <div className={classes.CreateForm}>

            <Box
            component="form"
            // sx={{
            //     '& > :not(style)': { m: 5, width: '25ch' },
            // }}
            noValidate
            autoComplete="off"
            >
            <TextField id="standard-basic" label="ファイル名を入力する" variant="standard" />
            </Box>
            <Btn message='作成する' />

            </div>
        {/* </div> */}
        </div>








        <p>フォルダー内のアイテムの成分合計から、成分割合を出す（各アイテムページみたいに）</p>

        </div>
        </>
    )
}