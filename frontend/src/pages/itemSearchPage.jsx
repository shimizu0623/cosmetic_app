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


const onClickRight = () => {
    console.log('onClickRight')
}
const onClickLeft = () => {
    console.log('onClickLeft')
}


const useStyles = makeStyles({
    arrow: {
        maxWidth: '50px',
        margin: 'auto 0',
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
    const [item, setItem] = useState(null);
    const [brands, setBrands] = useState([]);
    const [checked, setChecked] = React.useState(false);
    // const [brands, setBrands] = React.useState('');

    useEffect(async () => {
        const responseBrands = await axios.get('/brands')
        const b = responseBrands.data
        setBrands(b)
        console.log(brands)
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

    const onClickBrand = (event) => {
        console.log('selected brand')
        // setBrands(event.target.value);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />乾燥
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                {/* </div>

                <div> */}
                    <h2>お探しのカテゴリーはどちらですか？</h2>
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />化粧水
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
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
                        value={brands}
                        label="Brands"
                        // TODO: ↓ブランド検索できるように
                        onChange={onClickBrand}
                        style={{ marginRight: '10px' }}
                        >
                        {brands.map((brand) => (
                        <MenuItem value={brand.id} style={{ width: '100%' }}>{brand.name}</MenuItem>
                        ))}
                        {/* <MenuItem value={10} style={{width: '100%'}}>Dior</MenuItem>
                        <MenuItem value={20} style={{width: '100%'}}>資生堂</MenuItem>
                        <MenuItem value={30} style={{width: '100%'}}>FANCL</MenuItem> */}
                        </Select>
                    </FormControl>
                    </Box>
                </div>

                <Btn message="この条件で検索する" />
            </div>


{/* search_results */}

            <div className='search_results' style={{marginTop: '50px'}}>
                <ImageList>
                <ImageListItem key="Subheader" cols={8}>
                    <ListSubheader component="div">条件に当てはまるアイテムが見つかりました！</ListSubheader>
                </ImageListItem>

                <img src={leftArrow_img} className={classes.arrow} onClick={onClickLeft} />
                {itemData.map((item) => (
                    <ImageListItem key={item.img} className={classes.cardPaper}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={itemName()}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={itemBrand()}
                        subtitle={itemName()}
                    />
                    </ImageListItem>
                ))}
                <img src={rightArrow_img} className={classes.arrow} onClick={onClickRight} />
                </ImageList>
            </div>

{/* notFound_message */}
            <div style={{fontSize: '20px', color: 'green'}}>
                <p>申し訳ございません。条件に当てはまるアイテムが見つかりませんでした。</p>
                <p><Link component={RouterLink} to="/requestPage">リクエストページ</Link>にて、ご要望も承っております。</p>
                <p>○○様の貴重なご意見をお待ちしております。</p>
            </div>

{/* recommend */}
        
        <div>
            <h2>選択した肌悩みにおすすめのアイテム</h2>

            <ImageList>
                <ImageListItem key="Subheader" cols={8}>
                    {/* <ListSubheader component="div">条件に当てはまるアイテムが見つかりました</ListSubheader> */}
                </ImageListItem>

                <img src={leftArrow_img} className={classes.arrow} onClick={onClickLeft} />
                {itemData.map((item) => (
                    <ImageListItem key={item.img} className={classes.cardPaper}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={itemName()}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={itemBrand()}
                        subtitle={itemName()}
                    />
                    </ImageListItem>
                ))}
                <img src={rightArrow_img} className={classes.arrow} onClick={onClickRight} />
                </ImageList>

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
    //   rows: 2,
    //   cols: 2,
    //   featured: true,
    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'cream',
    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'skinToner',
    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'skinToner',
    //   cols: 2,
    },
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'skinToner',
    //   cols: 2,
    },
  ];
