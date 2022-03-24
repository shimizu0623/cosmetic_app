import React, {useState} from 'react';
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
// import ListSubheader from '@mui/material/ListSubheader';
import CircularProgress from '@mui/material/CircularProgress';

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
    const [checked, setChecked] = React.useState(false);
    
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
                    />EWGランクが３以下のアイテムで探す
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />肌に合わない成分が入っていないアイテムで探す
                {/* </div>

                <div> */}
                {/* <div className={classes.SearchBox}> */}
                    <h2 style={{marginBottom: '0'}}>ブランド名を選択すると、ブランドの中から条件に当てはまるアイテムを探すことができます。</h2>
                    {/* <Stack spacing={2} sx={{ width: 300 }} className={classes.SearchBox}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        style={{margin: '20px 0'}}
                        disableClearable
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="ブランド名を入力する"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                            />
                            )}
                            />
                    </Stack> */}
                    <Stack spacing={2} sx={{ width: 300 }} className={classes.SearchBox}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        style={{marginRight: '10px'}}
                        disableClearable
                        options={brands.map((option) => option.brand)}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="ブランドを選択する"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                            />
                        )}
                    />
                    </Stack>

                </div>

                <Btn message="この条件で検索する" />
            </div>


{/* search_results */}

            <div className='search_results' style={{marginTop: '50px'}}>
                {/* <img src={leaf_favorite_img} alt="leaf_favorite_img" className={classes.img}/> */}
                
                <p style={{fontSize: '20px', color: 'green'}}>条件に当てはまるアイテムが〇点見つかりました！</p>

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

const brands = [
    { brand: 'Dior'},
    { brand: '資生堂'},
    { brand: 'FANCL'},
];

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
