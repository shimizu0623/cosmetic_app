import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';


import green_leaf from '../img/green_leaf_img.jpg';
import top_img from '../img/Whiteday2020-09.JPG';
import { borderRadius } from '@mui/system';

const useStyles = makeStyles({
    TopImg: {
        margin: '0px auto 0',
        height: '400px',
        width: '100%',
        objectFit: 'cover',
        filter: 'blur(4px)',
      
    },
    Form: {
        maxWidth: '1400px',
    },
    TitleImg: {
        maxWidth: '90px',
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '40px auto',

    },
    Title: {
        fontSize: '40px',
        display: 'inline-block',
    },
    CardPaper: {

        '&:hover':{
            cursor: 'pointer', 
            opacity: '0.6',         
        }
    },
    rankingTitle: {
        fontSize: '25px',
    },
    rankingImg: {
        maxWidth: '120px',
    },
    itemImg : {
        maxWidth: '350px',
    },
    rank : {
        margin: '0 auto',
        display: 'inline-block',
        listStyle: 'none',
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
        margin: '0 auto',
        height: '200px',
        background: '-webkit-gradient(linear,left top,left bottom,from(#cce9cc),to(#e1e9b8))',
        borderRadius: '10px',
        position: 'relative',
        maxWidth: '1100px',

    },
    SearchMessage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    SearchForm: {
        display: 'flex',
        margin: '0 15%',

    },

})


export const HomePage = () => {
    const classes = useStyles();

    return(
        <>
        <div className='MainContainer'>
                <div className={classes.message}>
                    <img src={top_img} className={classes.TopImg}/>
                    <div className={classes.TopMessage}>
                        <p>〇〇さん、こんにちは！<br/>
                        最近のお肌の調子はいかがですか？<br/>
                        おすすめは、〇〇さんのスキンタイプに合うアイテムの中から、<br/>
                        過去にお肌に合わなかった商品の<br/>
                        共通成分が含まれていないものを選んでおります。<br/>
                        〇〇さんのお肌に合ったアイテムが見つかりますように．．</p>
                    </div>
                </div>
                <div className={classes.guideMessage}>
                    <p>スキンタイプは<Link component={RouterLink} to="/myPage">マイページ</Link>よりいつでも変更できます。</p>
                    <p>肌に合わなかったアイテムは各商品ページより登録できます。</p>
                </div>

            {/* search */}
            <div className={classes.StyleSearch}>
            <div className={classes.SearchMessage}>
                <p style={{paddingBottom: '20px', fontSize: '20px'}}>あなたのスキンケアは安全ですか？<br />
                商品ページからひとつひとつの成分を確認することができます。</p>
                <div className={classes.SearchForm}>

                <Stack spacing={2} sx={{ width: 250,}}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={top100Films.map((option) => option.brand)}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="ブランドや商品から探す"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                            />
                        )}
                    />
                </Stack>
                <Button
                variant="contained"
                className={classes.SearchBtn}
                sx={{
                    margin: '0 auto 4px 10px',
                    padding: '10px 25px', 
                    fontSize: '17px',
                    background: '#73baae',
                    '&:hover':{
                        background: 'rgba(141, 203, 193)', 
                    }
                    
                }}
                
                //   component={RouterLink}
                //   to="/homePage"
                >検索
                </Button>
                </div>
                <p>肌悩みやEWG等級などもっと詳しく探すなら、<Link component={RouterLink} to="/myPage">こちら</Link></p>
            </div>
            </div>
            
            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="" className={classes.TitleImg} />
                        <p className={classes.Title}>○○さんにおすすめの化粧水</p>
                    </div>
                    <div className='Form'>
                    <ImageList>
                    <ImageListItem cols={6}>
                    {/* <ListSubheader component="div">お気に入りに登録中のアイテム</ListSubheader> */}
                    </ImageListItem>

                    {itemData.map((item) => (
                        <ImageListItem key={item.img} className={classes.CardPaper}>
                        <img
                            className={classes.img}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.name}
                            subtitle={`￥${item.price}`}
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                    </div>
                </div>
                

            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="" className={classes.TitleImg} />
                        <p className={classes.Title}>○○さんにおすすめの乳液</p>
                    </div>
                    <div className='Form'>
                    <ImageList>
                    <ImageListItem cols={6}>
                    </ImageListItem>

                    {itemData.map((item) => (
                        <ImageListItem key={item.img} className={classes.CardPaper}>
                        <img
                            className={classes.img}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.name}
                            subtitle={`￥${item.price}`}
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                    </div>
                </div>
                


            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="" className={classes.TitleImg} />
                        <p className={classes.Title}>○○さんにおすすめの美容液</p>
                    </div>
                    <div className='Form'>
                    <ImageList>
                    <ImageListItem cols={6}>
                    </ImageListItem>

                    {itemData.map((item) => (
                        <ImageListItem key={item.img} className={classes.CardPaper}>
                        <img
                            className={classes.img}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.name}
                            subtitle={`￥${item.price}`}
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                    </div>
                </div>
                



        </div>
        </>
    )
}

const top100Films = [
    { brand: 'Dior'},
    { brand: '資生堂'},
    { brand: 'FANCL'},
];

const itemData = [
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'emulsion',
      price: '3,000'
    //   rows: 2,
    //   cols: 2,
    //   featured: true,
    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'cream',
      price: '5,000'

    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'skinToner',
      price: '2,000'

    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'skinToner',
      price: '9,000'

    //   cols: 2,
    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'skinToner',
      price: '8,000'

    //   cols: 2,
    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'emulsion',
      price: '3,000'

    //   rows: 2,
    //   cols: 2,
    //   featured: true,
    },
  ];
