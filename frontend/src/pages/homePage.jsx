import React, {useState, useEffect} from 'react';
import axios from '../axios';
import userAtom from '../recoil/user';
import { useRecoilState } from 'recoil';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';
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
        // position: 'relative',
        // zIndex: '-2147483647',
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
        // zIndex: '-2147483647',
    },
    SearchMessage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    StyleImg: {
        maxWidth: '250px', 
        height: '100%', 
        margin: '0 auto',
        // position: 'relative',
        // zIndex: '-2147483647',
    },
    StyleBar: {
        // zIndex: '-2147483647',
    }
});

export const HomePage = () => {
    const classes = useStyles();
    const [user, setUser] = useRecoilState(userAtom);
    const [toner, setToner] = useState([]);
    const [emulsion, setEmulsion] = useState([]);
    const [serum, setSerum] = useState([]);
    const navigate = useNavigate();

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
    }, []);
    
    const userSkinType = () => {
        if (user === null){
            return <CircularProgress color="success" size="15px" />
        }
        return (
            <p>{user.skin_type_name}タイプの方に</p>
        );
    };

    const homeMessage = () => {
        if (user === null){
            return <CircularProgress color="success" size="40px" />
        }
        return (
            <p>{user.name}さん、こんにちは！<br/>
            最近のお肌の調子はいかがですか？<br/>
            {user.name}さんのお肌に合ったスキンケアが見つかりますように．．</p>
        );
    };

    const recommendToner = () => {
        if (toner === null){
            return <CircularProgress color="success" size="15px" />
        }
        return (
            <ImageList style={{ gridTemplateColumns: '1, 1fr', gap: '1' }}>
                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                    {toner.map((toner, index) => (
                        <ImageListItem 
                            key={index} 
                            className={classes.CardPaper} 
                            onClick={() => { navigate(`/item/${toner.id}`) }}
                        >
                            <img
                                src={toner.img}
                                alt={toner.name}
                                loading="lazy"
                                className={classes.StyleImg} 
                            />
                            <ImageListItemBar
                                title={toner.brand}
                                subtitle={toner.name}
                                className={classes.StyleBar} 
                            />
                        </ImageListItem>
                    ))}
                </Grid>
            </ImageList>
        );
    };

    const recommendEmulsion = () => {
        if (emulsion === null){
            return <CircularProgress color="success" size="15px" />
        }
        return (
            <ImageList style={{ gridTemplateColumns: '1, 1fr', gap: '1' }}>
                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                    {emulsion.map((emulsion, index) => (
                        <ImageListItem 
                            key={index} 
                            className={classes.CardPaper}
                            onClick={() => { navigate(`/item/${emulsion.id}`) }}
                        >
                            <img
                                src={emulsion.img}
                                alt={emulsion.name}
                                loading="lazy"
                                style={{
                                    maxWidth: '250px', 
                                    height: '100%',
                                    margin: '0 auto'
                                }}
                                className={classes.StyleImg} 
                            />
                            <ImageListItemBar
                                title={emulsion.brand}
                                subtitle={emulsion.name}
                                className={classes.StyleBar} 
                            />
                        </ImageListItem>
                    ))}
                </Grid>
            </ImageList>
        );
    };

    const recommendSerum = () => {
        if (serum === null){
            return <CircularProgress color="success" size="15px" />
        }
        if (serum.length === 0){
            return (
                <ImageList style={{ gridTemplateColumns: '1, 1fr', gap: '1' }}>
                    <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                        <p>アイテムが見つかりませんでした。</p>
                    </Grid>
                </ImageList>
            )
        } else {
            return(
                <ImageList style={{ gridTemplateColumns: '1, 1fr', gap: '1' }}>
                    <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                        {serum.map((serum, index) => (
                            <ImageListItem 
                                key={index} 
                                className={classes.CardPaper}
                                onClick={() => { navigate(`/item/${serum.id}`) }}
                            >
                                <img
                                    src={serum.img}
                                    alt={serum.name}
                                    loading="lazy"
                                    className={classes.StyleImg} 
                                />
                                <ImageListItemBar
                                    title={serum.brand}
                                    subtitle={serum.name}
                                    className={classes.StyleBar} 
                                />
                            </ImageListItem>
                        ))}
                    </Grid>
                </ImageList>
            );
        };  
    };

    return (
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
                        <p style={{ paddingBottom: '20px', fontSize: '20px' }}>あなたのスキンケアは安全ですか？</p>
                        <p style={{ fontSize: '20px' }}>お使いのスキンケアを<Link component={RouterLink} to="/itemSearch" >検索ページ</Link>から探してみましょう。</p>
                    </div>
                </div>
                
                {/* lotion */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userSkinType()}おすすめの化粧水</p>
                    </div>
                    {recommendToner()}
                </div>
                    
                {/* emulsion */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userSkinType()}おすすめの乳液</p>
                    </div>
                    {recommendEmulsion()}
                </div>                

                {/* serum */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userSkinType()}おすすめの美容液</p>
                    </div>
                    {recommendSerum()}
                </div>                
            </div>
        </>
    );
};