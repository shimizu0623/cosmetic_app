import React, {useState, useEffect} from 'react';
import axios from '../axios';

import { Btn } from '../components/btn';
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
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import rank_1 from '../img/rank_1.jpg';
import rank_2 from '../img/rank_2.jpg';
import rank_3 from '../img/rank_3.jpg';
import green_leaf from '../img/green_leaf_img.jpg';
import top_img from '../img/Whiteday2020-09.JPG';
// import { borderRadius } from '@mui/system';

const useStyles = makeStyles({
    TopImg: {
        margin: '0px auto',
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
        margin: '0 auto 40px',

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
        maxWidth: '300px',
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
        margin: '30px auto',
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
        margin: '0 10%',

    },

})


export const HomePage = () => {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const [item, setItem] = useState(null);
    const [brands, setBrands] = useState([]);
    
    
    useEffect(async () => {
        const response = await axios.get('/me')
        const responseItem = await axios.get('/item')
        const responseBrands = await axios.get('/brands')
        const u = response.data
        const i = responseItem.data
        const b = responseBrands.data
        setUser(u)
        setItem(i)
        setBrands(b)
    }, [])
    
    const userName = () => {
        if(user === null){
            // return console.log(user)
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

    const itemName = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
                <p>{item.name}</p>                
        )
    }
    const itemPrice = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
                <p>{item.price}</p>                
        )
    }
    const itemImg = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
             <p>{item.img}</p>                
        )
    }

    const onClickBrand = (event) => {
        console.log('selected brand')
        // setBrands(event.target.value);
    };
    
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
                    <p>肌に合わなかったアイテムは各商品ページより登録できます。</p>
                </div>

            {/* search */}
            <div className={classes.StyleSearch}>
            <div className={classes.SearchMessage}>
                <p style={{paddingBottom: '20px', fontSize: '20px'}}>あなたのスキンケアは安全ですか？<br />
                商品ページからひとつひとつの成分を確認することができます。</p>
                <div className={classes.SearchForm}>

                <Box sx={{ width: 300 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">ブランドを選択する</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={brands}
                    label="Brands"
                    // TODO: ↓ブランド検索できるように
                    onChange={onClickBrand}
                    style={{marginRight: '10px'}}
                    >
                    {brands.map((brand) => (
                    <MenuItem value={brand.id} style={{width: '100%'}}>{brand.name}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                </Box>

                <Btn message='検索' component={RouterLink} to="/itemSearch" />
                {/* TODO: あとで↓できるように修正する */}
                {/* component={RouterLink}
                to="/itemSearch" */}

                </div>
                <p style={{fontSize: '20px'}}>肌悩みやEWG等級別など<Link component={RouterLink} to="/itemSearch">条件検索する</Link>こともできます</p>
            </div>
            </div>

            {/* ranking */}
            <div className='ranking'>
                <div className='TitleForm'>
                    <img src={green_leaf} alt="" className={classes.TitleImg} />
                    <p className={classes.Title}>本日の総合ランキング</p>
                </div>
                <div className='RankingForm'>
                    <ul className={classes.rank} style={{padding: 0}}>
                        <li><img src={rank_1} alt="rank_1" className={classes.rankingImg}/></li>
                        <ImageListItem>
                            <li><img src={itemImg()} alt="item_img"  className={classes.itemImg}/></li>
                            <ImageListItemBar
                            title={itemName()}
                            subtitle={itemPrice()}
                            />
                        </ImageListItem>
                    </ul>
                    <ul className={classes.rank}>
                        <li><img src={rank_2} alt="rank_2"  className={classes.rankingImg}/></li>
                        <ImageListItem>
                            <li><img src={itemImg()} alt="item_img"  className={classes.itemImg}/></li>
                            <ImageListItemBar
                            title={itemName()}
                            subtitle={itemPrice()}
                            />
                        </ImageListItem>
                    </ul>
                    <ul className={classes.rank}>
                        <li><img src={rank_3} alt="rank_3" className={classes.rankingImg}/></li>
                        <ImageListItem>
                            <li><img src={itemImg()} alt="item_img"  className={classes.itemImg}/></li>
                            <ImageListItemBar
                            title={itemName()}
                            subtitle={itemPrice()}
                            />
                        </ImageListItem>
                    </ul>
                </div>
                <div className='SeeMoreBtn' style={{textAlign: 'right'}}>

                    {/* <Btn message='ランキングをもっと見る' /> */}
                    {/* TODO: あとで↓できるように修正する */}
                    <Btn message='ランキングをもっと見る' component={RouterLink} to="/ranking" />
                </div>
            </div>
            
            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userName()}おすすめの化粧水</p>
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
                            title={itemName()}
                            subtitle={itemPrice()}
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                    </div>
                </div>
                

            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userName()}おすすめの乳液</p>
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
                            title={itemName()}
                            subtitle={itemPrice()}
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                    </div>
                </div>
                


            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                        <p className={classes.Title}>{userName()}おすすめの美容液</p>
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
                            title={itemName()}
                            subtitle={itemPrice()}
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
