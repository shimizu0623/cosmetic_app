import React, {useState, useEffect} from 'react';
import axios from '../axios';

import { Btn } from '../components/btn';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import green_leaf from '../img/green_leaf_img_clear.png';
import top_img from '../img/Whiteday2020-09.JPG';

const useStyles = makeStyles({
    TopImg: {
        margin: '0px auto',
        height: '400px',
        width: '100%',
        objectFit: 'cover',
        filter: 'blur(4px)',
      
    },
    TitleImg: {
        maxWidth: '90px',
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 auto 40px',

    },
    Title: {
        fontSize: '40px',
        display: 'inline-block',
    },
    CardPaper: {
        margin: '10px',
        '&:hover':{
            cursor: 'pointer', 
            opacity: '0.6',         
        }
    },
    message : {
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '2px 0 5px rgb(74, 86, 58)',
        position: 'relative',
    },
    TopMessage: {
        maxWidth: '1400px',
        position: 'absolute',
        top: '50%',
        left: '40%',
        transform: 'translate(-30%, -50%)',
    },
    guideMessage: {
        fontSize: '20px',
        paddingBottom: '20px',
        color: 'gray',
    },
    StyleSearch: {
        margin: '30px auto',
        height: '150px',
        background: '-webkit-gradient(linear,left top,left bottom,from(#cce9cc),to(#e1e9b8))',
        borderRadius: '10px',
        position: 'relative',
        maxWidth: '80%',
    },
    SearchMessage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
})


export const HomePage = () => {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const [item, setItem] = useState([]);
    const [id, setId] = useState([]);
    
    
    useEffect(async () => {
        const response = await axios.get('/me')
        const responseItem = await axios.get('/items')
        const responseId = await axios.get('/item')
        const u = response.data
        const i = responseItem.data
        const id = responseId.data
        setUser(u)
        setItem(i)
        setId(id)
    }, [])
    
    const userName = () => {
        if(user === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
                <p>{user.name}さんに</p>
        )
    }
    const homeMessage = () => {
        if(user === null){
            return <CircularProgress color="success" size="40px" />
        }
        return(
                <p>{user.name}さん、こんにちは！<br/>
                最近のお肌の調子はいかがですか？<br/>
                おすすめは、{user.name}さんのスキンタイプに合うアイテムの中から、<br/>
                過去にお肌に合わなかった商品の<br/>
                共通成分が含まれていないものを選んでおります。<br/>
                {user.name}さんのお肌に合ったアイテムが見つかりますように．．</p>
        )
    }

    const recommend = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <ImageList style={{gridTemplateColumns: '1, 1fr', gap: '1'}}>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">

            {item.map((item) => (
                <ImageListItem key={item.img} className={classes.CardPaper}>
                <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    style={{maxWidth: '250px', height: '100%', margin: '0 auto'}}
                />
                <ImageListItemBar
                    title={id.brand}
                    subtitle={id.name}
                />
                </ImageListItem>
            ))}
            </Grid>
            </ImageList>
        )
    }

    return(
        <>
        <div className='MainContainer'>
                <div className={classes.message}>
                    <img src={top_img} className={classes.TopImg}/>
                    <div className={classes.TopMessage}>
                        {homeMessage()}
                    </div>
                </div>
                <div className={classes.guideMessage}>
                    <p>スキンタイプは<Link component={RouterLink} to="/myPage">マイページ</Link>よりいつでも変更できます。</p>
                </div>

            {/* search */}
            <div className={classes.StyleSearch}>
            <div className={classes.SearchMessage}>
                <p style={{paddingBottom: '20px', fontSize: '20px'}}>あなたのスキンケアは安全ですか？</p>
                <p style={{fontSize: '20px'}}>お使いのスキンケアを<Link component={RouterLink} to="/itemSearch" style={{ fontSize: '30px' }}>検索ページ</Link>から探してみましょう。</p>
            </div>
            </div>
            
            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userName()}おすすめの化粧水</p>
                    </div>


                    {recommend()}

                </div>
                

            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userName()}おすすめの乳液</p>
                    </div>

                    {recommend()}

                </div>
                


            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userName()}おすすめの美容液</p>
                    </div>

                    {recommend()}

                </div>
                

        </div>
        </>
    )
}
