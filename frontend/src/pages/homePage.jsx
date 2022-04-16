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
        height: '300px',
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
        fontSize: '35px',
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
    // const [item, setItem] = useState([]);
    const [toner, setToner] = useState([]);
    const [emulsion, setEmulsion] = useState([]);
    const [serum, setSerum] = useState([]);
    
    useEffect(async () => {
        const response = await axios.get('/me');
        const u = response.data;
        setUser(u);

        const responseToner = await axios.get('/items', {
            params: {
                skin_type_id: response.data.skin_type_id,
                category_id: 3,
            }
        });
        const t = responseToner.data;
        setToner(t);
        
        const responseEmulsion = await axios.get('/items', {
            params: {
                skin_type_id: response.data.skin_type_id,
                category_id: 5,
            }
        });
        const e = responseEmulsion.data;
        setEmulsion(e);

        const responseSerum = await axios.get('/items', {
            params: {
                skin_type_id: response.data.skin_type_id,
                category_id: 4,
            }
        });
        const s = responseSerum.data;
        setSerum(s);
        console.log(serum)

    }, [])
    
    const userSkinType = () => {
        if(user === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <p>{user.skin_type_name}タイプの方に</p>
        );
    }
    const homeMessage = () => {
        if(user === null){
            return <CircularProgress color="success" size="40px" />
        }
        return(
            <p>{user.name}さん、こんにちは！<br/>
            最近のお肌の調子はいかがですか？<br/>
            {user.name}さんのお肌に合ったスキンケアが見つかりますように．．</p>
        )
    }

    const recommendToner = () => {
        // ↓エラーになったところUncaught Error:
        //  Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.

        // const responseItem = await axios.get('/items', {
        //     params: {
        //         skin_type_id: skinType,
        //         // category_id: category,
        //     }
        // });
        // const i = responseItem.data;
        // setItem(i);
        // console.log(item)
        if(toner === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <ImageList style={{ gridTemplateColumns: '1, 1fr', gap: '1' }}>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
            {toner.map((toner) => (
                <ImageListItem key={toner.img} className={classes.CardPaper}>
                <img
                    src={toner.img}
                    alt={toner.name}
                    loading="lazy"
                    style={{ maxWidth: '250px', height: '100%', margin: '0 auto' }}
                />
                <ImageListItemBar
                    title={toner.brand}
                    subtitle={toner.name}
                />
                </ImageListItem>
            ))}
            </Grid>
            </ImageList>
        )
    }

    const recommendEmulsion = () => {
        if(emulsion === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <ImageList style={{gridTemplateColumns: '1, 1fr', gap: '1'}}>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
            {emulsion.map((emulsion) => (
                <ImageListItem key={emulsion.img} className={classes.CardPaper}>
                <img
                    src={emulsion.img}
                    alt={emulsion.name}
                    loading="lazy"
                    style={{maxWidth: '250px', height: '100%', margin: '0 auto'}}
                />
                <ImageListItemBar
                    title={emulsion.brand}
                    subtitle={emulsion.name}
                />
                </ImageListItem>
            ))}
            </Grid>
            </ImageList>
        )
    }

    const recommendSerum = () => {
        if (serum === null){
            return <CircularProgress color="success" size="15px" />
        }
        if (serum.length === 0){
            return(
                <ImageList style={{gridTemplateColumns: '1, 1fr', gap: '1'}}>
                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                <p>アイテムが見つかりませんでした。</p>
                </Grid>
                </ImageList>
            )
        } else {
            return(
                <ImageList style={{gridTemplateColumns: '1, 1fr', gap: '1'}}>
                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                {serum.map((serum) => (
                    <ImageListItem key={serum.img} className={classes.CardPaper}>
                        {/* TODO: onClickで商品ページへ移動できるように */}
                    <img
                        src={serum.img}
                        alt={serum.name}
                        loading="lazy"
                        style={{maxWidth: '250px', height: '100%', margin: '0 auto'}}
                    />
                    <ImageListItemBar
                        title={serum.brand}
                        subtitle={serum.name}
                    />
                    </ImageListItem>
                ))}
                </Grid>
                </ImageList>
            )
        }   
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
                        <p className={classes.Title}>{userSkinType()}おすすめの化粧水</p>
                    </div>
                    
                    {recommendToner()}

                </div>
                

            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userSkinType()}おすすめの乳液</p>
                    </div>

                    {recommendEmulsion()}

                </div>
                


            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userSkinType()}おすすめの美容液</p>
                    </div>

                    {recommendSerum()}

                </div>
                

        </div>
        </>
    )
}
