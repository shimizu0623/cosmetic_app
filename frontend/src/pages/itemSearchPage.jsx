import React, {useState, useEffect} from 'react';
import axios from '../axios';
import { GoBackBtn } from '../components/goBackBtn';
import {Btn} from '../components/btn';
import header_img from '../img/headerSearch.jpg';

import { makeStyles } from "@material-ui/core/styles";
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
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    SearchBox: {
        display: 'flex',
        margin: '20px auto 0',
    },
});

export const ItemSearch = () => {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const [item, setItem] = useState([]);
    const [skinTroubles, setSkinTroubles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedSkinTrouble, setSelectedSkinTrouble] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSafeOnly, setSelectedSafeOnly] = useState(0);
    const [selectedMatchingOnly, setSelectedMatchingOnly] = useState(0);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const navigate = useNavigate();

    useEffect(async () => {
        const responseUser = await axios.get('/me');
        const responseItem = await axios.get('/items');
        const responseSkinTroubles = await axios.get('/skin_troubles');
        const responseCategories = await axios.get('/categories');
        const responseBrands = await axios.get('/brands');
        const u = responseUser.data;
        const i = responseItem.data;
        const s = responseSkinTroubles.data;
        const c = responseCategories.data;
        const b = responseBrands.data;
        setUser(u);
        setItem(i);
        setSkinTroubles(s);
        setCategories(c);
        setBrands(b);
    }, []);
    
    const message = () => {
        if(user === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
          <>
            <p>{user.name}様の貴重なご意見をお待ちしております。</p>
          </>
        );
    };

    const handleSkinTroubleChecked = (event, id) => {
        if (event.target.checked) {
            setSelectedSkinTrouble([...selectedSkinTrouble, id]);
        } else {
            setSelectedSkinTrouble(selectedSkinTrouble.filter(selectedSkinTroubleId => selectedSkinTroubleId !== id));
        }
    };

    const handleCategoryChecked = (event, id) => {
        if (event.target.checked) {
            setSelectedCategory([...selectedCategory, id]);
        } else {
            setSelectedCategory(selectedCategory.filter(selectedCategoryId => selectedCategoryId !== id));
        }
    };

    const handleSafeOnlyChecked = (event) => {
        if (event.target.checked) {
            setSelectedSafeOnly(1);
        } else {
            setSelectedSafeOnly(0);
        }
    };

    const handleMatchingOnlyChecked = (event) => {
        if (event.target.checked) {
            setSelectedMatchingOnly(1);
        } else {
            setSelectedMatchingOnly(0);
        }
    };

    const handleBrandChecked = (event) => {
        setSelectedBrand(event.target.value);
    };

    const handleSearch = async () => {
        const responseItem = await axios.get('/items', {
            params: {
                skin_trouble_id: selectedSkinTrouble,
                category_id: selectedCategory,
                is_safe_only: selectedSafeOnly,
                is_matching_only: selectedMatchingOnly,
                brand_id: selectedBrand,
              }
        });
        const i = responseItem.data;
        setItem(i);
    };


    return(
        <>
        <div className='MainContainer'>
            <GoBackBtn />
            <div className='conditionForm'>
                <img src={header_img} alt="header" style={{ width: '100%' }}/>
                <div style={{ margin: '30px auto' }}>
                    <p>ここでは条件検索をすることができます。</p>
                    <p>当てはまる項目をチェックして、検索するボタンをクリックして下さい。</p>
                    {/* TODO: <p>肌に合わなかったアイテムは各商品ページより登録できます。</p> */}

                </div>
                <div style={{ background: '#c8eee8af', borderRadius: '20px', padding: '20px 0', margin: '30px auto' }}>
                    <h2 style={{ marginTop: '0' }}>改善したい肌の悩みはございますか？</h2>

                    <FormGroup sx={{ justifyContent: 'center',display: 'grid', gap: 1, gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    {skinTroubles.map((skinTrouble, index) => (
                    <FormControlLabel 
                      key={index} 
                      sx={{ mx: 'auto' }} 
                      control={<Checkbox 
                        checked={selectedSkinTrouble.includes(skinTrouble.id)}
                        onChange={(e) => { handleSkinTroubleChecked(e, skinTrouble.id) }} 
                        />} 
                      label={skinTrouble.name} />
                    ))}
                    </FormGroup>

                
                    <h2>お探しのカテゴリーはどちらですか？</h2>

                    <FormGroup sx={{ justifyContent: 'center',display: 'grid', gap: 1, gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    {categories.map((category, index) => (
                    <FormControlLabel
                      key={index}
                      sx={{ mx: 'auto' }} 
                      control={<Checkbox 
                        checked={selectedCategory.includes(category.id)}
                        onChange={(e) => { handleCategoryChecked(e, category.id) }} 
                      />} 
                      label={category.name} />
                    ))}
                    </FormGroup>


                    <h2>他に条件はありますか？</h2>
                    <FormGroup sx={{ justifyContent: 'center', display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <FormControlLabel 
                          sx={{ mx: 'auto' }} 
                          control={<Checkbox
                            checked={selectedSafeOnly}
                            onChange={handleSafeOnlyChecked}                          
                          />} 
                          label='EWGランクが１のアイテムだけを表示' />
                        <FormControlLabel 
                          sx={{ mx: 'auto' }} 
                          control={<Checkbox
                            checked={selectedMatchingOnly}
                            onChange={handleMatchingOnlyChecked}                          
                          />} 
                          label='肌に合わない成分が入っていないアイテムで探す' />
                    </FormGroup>



                    <h2 style={{ marginBottom: 0 }}>ブランド名を選択すると、ブランドの中から条件に当てはまるアイテムを探すことができます。</h2>
                    <Box sx={{ width: 300 }} className={classes.SearchBox}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">ブランドを選択する</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Brands"
                        value={selectedBrand}
                        onChange={handleBrandChecked}
                        style={{ marginRight: '10px' }}
                        >
                        <MenuItem value={null} style={{ width: '100%' }}>選択しない</MenuItem>
                        {brands.map((brand, index) => (
                        <MenuItem value={brand.id} key={index} style={{ width: '100%' }}>{brand.name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Box>
                </div>

                <Btn message="この条件で検索する" onClick={handleSearch} />
            </div>


{/* search_results */}

            <div className='search_results' style={{ margin: '50px' }}>
                <ImageList style={{ width: '100%', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">条件に当てはまるアイテムが見つかりました！</ListSubheader>
                </ImageListItem>

                <Grid container spacing={1} direction="row" alignItems="center" style={{ gridTemplateColumns: '1, 1fr', gap: '1' }}>
                        {item.map((item, index) => (
                        <Grid item xs={2} key={index} onClick={() => { navigate(`/item/${item.id}`) }}>
                            <ImageListItem key={item.img} className={classes.cardPaper}>
                            <img
                                src={item.img}
                                alt={item.name}
                                loading="lazy"
                                style={{ maxWidth: '300px', height: '100%', margin: '0 auto' }}
                            />
                            <ImageListItemBar
                                title={item.brand}
                                subtitle={item.name}
                            />
                            </ImageListItem>
                        </Grid>
                        ))}
                </Grid>
                </ImageList>
            </div>

{/* notFound_message */}
            <div style={{ fontSize: '20px', color: 'green' }}>
                <p>申し訳ございません。条件に当てはまるアイテムが見つかりませんでした。</p>
                <p><Link component={RouterLink} to="/requestPage">リクエストページ</Link>にて、ご要望も承っております。</p>
                {message()}
            </div>

{/* recommend */}
        
        <div>
            <h2>選択した肌悩みにおすすめのアイテム</h2>

            <div className='recommend_results' style={{ margin: '50px' }}>
                <ImageList style={{ width: '100%', gridTemplateColumns: 'repeat(1, 1fr)' }}>

                <Grid container spacing={1} direction="row" alignItems="center" style={{ gridTemplateColumns: '1, 1fr', gap: '1' }}>
                        {item.map((item, index) => (
                        <Grid item xs={2} key={index} onClick={() => { navigate(`/item/${item.id}`) }}>
                            <ImageListItem key={item.img} className={classes.cardPaper}>
                            <img
                                src={item.img}
                                alt={item.name}
                                loading="lazy"
                                style={{ maxWidth: '200px', height: '100%', margin: '0 auto' }}
                            />
                            <ImageListItemBar
                                title={item.brand}
                                subtitle={item.name}
                            />
                            </ImageListItem>
                        </Grid>
                        ))}
                </Grid>
                </ImageList>
            </div>
        </div>
        </div>
        </>
    );
};
