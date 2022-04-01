import React, {useState, useEffect} from 'react';
import axios from '../axios';

import {Btn} from '../components/btn';
import header_img from '../img/headerSearch.jpg';
import rightArrow_img from '../img/rightArrow_yellow.jpg';
import leftArrow_img from '../img/leftArrow_yellow.jpg';

import { makeStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import Grid from '@mui/material/Grid';


const onClickRight = () => {
    console.log('onClickRight')
}
const onClickLeft = () => {
    console.log('onClickLeft')
}


const useStyles = makeStyles({
    arrow: {
        maxWidth: '50px',
        margin: '10px 0',
        '&:hover':{
            cursor: 'pointer',
            opacity: '0.6',
        }
    },
    SearchBox: {
        display: 'flex',
        margin: '20px auto 0',
    },


})


export const ItemSearch = () => {
    const classes = useStyles();
    const [item, setItem] = useState([]);
    const [user, setUser] = useState(null);
    const [brands, setBrands] = useState([]);
    const [select, setSelect] = useState([]);
    const [skinTroubles, setSkinTroubles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checkedSkinTrouble, setCheckedSkinTrouble] = React.useState(false);
    const [checkedCategory, setCheckedCategory] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    useEffect(async () => {
        const responseItem = await axios.get('/items')
        const responseUser = await axios.get('/me')
        const responseBrands = await axios.get('/brands')
        const responseSkinTroubles = await axios.get('/skin_troubles')
        const responseCategories = await axios.get('/categories')
        const i = responseItem.data
        const u = responseUser.data
        const b = responseBrands.data
        const s = responseSkinTroubles.data
        const c = responseCategories.data
        // console.log(s)
        // console.log(c)
        // console.log(i)
        setItem(i)
        setUser(u)
        setBrands(b)
        setSkinTroubles(s)
        setCategories(c)
        // console.log(skinTroubles)
        // console.log(categories)
        // console.log(item)
    }, [])

    const itemName = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
                <p>{item.name}</p>                
        )
    }
    
    const itemBrand = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
                <p>{item.brand}</p>                
        )
    }

    const message = () => {
        if(user === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
          <>
            <p>{user.name}様の貴重なご意見をお待ちしております。</p>
          </>
        )
      }
    

    const onClickBrand = (event) => {
        console.log('selected brand')
        setSelect(event.target.value);
    };

    const handleChangeSkinTrouble = (event) => {
        setCheckedSkinTrouble(event.target.checked);
        console.log(checkedSkinTrouble)
        console.log(skinTroubles)
    };
    const handleChangeCategory = (event) => {
        setCheckedCategory(event.target.checked);
        // console.log(checkedCategory)
        // console.log(categories)
        // {categories.map((category) => {
        //     console.log(category.name)
        // })}
    };
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const categoryName = () => {
        {categories.map((category) => {
            <Checkbox
            value={category.id}
            checked={checkedCategory}
            onChange={handleChangeCategory}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            >
            {category.name}
            </Checkbox>
        })}
    }

    return(
        <>
        <div className='MainContainer'>
            <div className='conditionForm'>
                <img src={header_img} alt="header" style={{width: '100%'}}/>
                <p>ここでは条件検索することができます</p>
                <p>当てはまる項目をチェックしてください</p>
                <div style={{background: '#c8eee8af', borderRadius: '20px', padding: '20px 0', margin: '30px auto'}}>
                {/* <div> */}
                    <h2 style={{marginTop: '0'}}>改善したい肌の悩みはございますか？</h2>

                    <Checkbox
                    checked={checkedSkinTrouble}
                    onChange={handleChangeSkinTrouble}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />乾燥

                    {categoryName()}

                {/* </div>

                <div> */}
                    <h2>お探しのカテゴリーはどちらですか？</h2>
                    <Checkbox
                    checked={checkedCategory}
                    onChange={handleChangeCategory}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />化粧水
                    <Checkbox
                    checked={checkedCategory}
                    onChange={handleChangeCategory}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                        <>
                            <Checkbox
                            checked={checkedCategory}
                            onChange={handleChangeCategory}
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            {categories.map((category) => {
                            <p>{category.name}</p>
                            })}
                        </>         
                    {/* <div>
                    {categories.map((category) => {
                        <>
                        <p>{category.name}</p>
                        <p>aaa</p>
                        </>
                    })}
                    </div> */}


                {/* </div>

                <div> */}
                    <h2>他に条件はありますか？</h2>
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />EWGランクが１のアイテムだけを表示
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />肌に合わない成分が入っていないアイテムで探す
                {/* </div>

                <div> */}
                {/* <div className={classes.SearchBox}> */}
                    <h2 style={{ marginBottom: 0 }}>ブランド名を選択すると、ブランドの中から条件に当てはまるアイテムを探すことができます。</h2>
                    <Box sx={{ width: 300 }} className={classes.SearchBox}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">ブランドを選択する</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={select}
                        label="Brands"
                        // TODO: ↓ブランド検索できるように
                        onChange={onClickBrand}
                        style={{ marginRight: '10px' }}
                        >
                        {brands.map((brand) => (
                        <MenuItem value={brand.id} style={{ width: '100%' }}>{brand.name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Box>
                </div>

                <Btn message="この条件で検索する" />
            </div>


{/* search_results */}

            <div className='search_results' style={{margin: '50px'}}>
                <ImageList style={{width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">条件に当てはまるアイテムが見つかりました！</ListSubheader>
                </ImageListItem>

                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" style={{gridTemplateColumns: '1, 1fr', gap: '1',}}>
                    <Grid item xs={1}>
                        <img src={leftArrow_img} className={classes.arrow} onClick={onClickLeft} />
                    </Grid>
                        {/* TODO: データ5つ以上の時は、矢印ボタンで見られるようにする */}
                        {item.map((item) => (
                        <Grid item xs={2}>
                            <ImageListItem key={item.img} className={classes.cardPaper}>
                            <img
                                src={item.img}
                                // src={`${item.img}?w=248&fit=crop&auto=format`}
                                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.name}
                                loading="lazy"
                                style={{maxWidth: '300px', height: '100%', margin: '0 auto'}}
                            />
                            <ImageListItemBar
                                title={item.name}
                                subtitle={`￥${item.price}`}
                            />
                            </ImageListItem>
                        </Grid>
                        ))}
                    <Grid item xs={1}>
                        <img src={rightArrow_img} className={classes.arrow} onClick={onClickRight} />
                    </Grid>
                </Grid>
                </ImageList>
            </div>

{/* notFound_message */}
            <div style={{fontSize: '20px', color: 'green'}}>
                <p>申し訳ございません。条件に当てはまるアイテムが見つかりませんでした。</p>
                <p><Link component={RouterLink} to="/requestPage">リクエストページ</Link>にて、ご要望も承っております。</p>
                {message()}
            </div>

{/* recommend */}
        
        <div>
            <h2>選択した肌悩みにおすすめのアイテム</h2>

            <div className='recommend_results' style={{margin: '50px'}}>
                <ImageList style={{width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>

                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" style={{gridTemplateColumns: '1, 1fr', gap: '1',}}>
                    <Grid item xs={1}>
                        <img src={leftArrow_img} className={classes.arrow} onClick={onClickLeft} />
                    </Grid>
                    {/* TODO: データ5つ以上の時は、矢印ボタンで見られるようにする */}
                        {item.map((item) => (
                        <Grid item xs={2}>
                            <ImageListItem key={item.img} className={classes.cardPaper}>
                            <img
                                src={item.img}
                                alt={item.name}
                                loading="lazy"
                                style={{maxWidth: '200px', height: '100%', margin: '0 auto'}}
                            />
                            <ImageListItemBar
                                title={item.name}
                                subtitle={`￥${item.price}`}
                            />
                            </ImageListItem>
                        </Grid>
                        ))}
                    <Grid item xs={1}>
                        <img src={rightArrow_img} className={classes.arrow} onClick={onClickRight} />
                    </Grid>
                </Grid>
                </ImageList>
            </div>
        </div>

        </div>
        </>
    )
}
