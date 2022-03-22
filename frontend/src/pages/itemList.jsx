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
import ListSubheader from '@mui/material/ListSubheader';
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
        margin: '0 auto',
    },


})


export const ItemList = () => {
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
                <div>
                    <h3>改善したい肌の悩みはございますか？</h3>
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
                </div>

                <div>
                    <h3>お探しのカテゴリーはどちらですか？</h3>
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
                </div>

                <div>
                    <h3>他に条件はありますか？</h3>
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
                </div>

                <div>
                {/* <div className={classes.SearchBox}> */}
                    <h3>ブランド名を入力すると、ブランドの中から条件に当てはまるアイテムを探すことができます。</h3>
                    <Stack spacing={2} sx={{ width: 300 }} className={classes.SearchBox}>
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
                    </Stack>
                </div>

                <Btn message="この条件で検索する" />
            </div>


{/* search_results */}

            <div className='search_results' style={{marginTop: '50px'}}>
                {/* <img src={leaf_favorite_img} alt="leaf_favorite_img" className={classes.img}/> */}
                
                <p>条件に当てはまるアイテムが〇点見つかりました！</p>

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
            <h2>STEP1で選択した肌悩みにおすすめのアイテム</h2>

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
