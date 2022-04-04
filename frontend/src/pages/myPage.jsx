import React, {useState, useEffect} from 'react';
import axios from '../axios';

import leaf_menu_img from '../img/leaf_menu_img.jpg';
import leaf_favorite_img from '../img/leaf_favorite_img.jpg';
import leaf_history_img from '../img/leaf_history_img.jpg';
import normal_skin_img from '../img/normal_skin_img.jpg';
import innerDry_skin_img from '../img/innerDry_skin_img.jpg';
import dry_skin_img from '../img/dry_skin_img.jpg';
import oily_skin_img from '../img/oily_skin_img.jpg';
import combination_skin_img from '../img/combination_skin_img.jpg';
import sensitive_skin_img from '../img/sensitive_skin_img.jpg';
import rightArrow_img from '../img/rightArrow_yellow.jpg';
import leftArrow_img from '../img/leftArrow_yellow.jpg';
import header_img from '../img/headerMyPage.jpg';

import CircularProgress from '@mui/material/CircularProgress';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';


const useStyles = makeStyles({
    menu: {
        fontSize: '23px',
        color: 'white',
        listStyle: 'none',
        width: '200px',
        lineHeight: '200px',
        borderRadius: '50%',
        background: '#4dc9b2c9',
        margin: '4px',
        display: 'inline-block',
        underline: 'none',
        '&:hover':{
            background: '#4dc9b27d',          
        }
    },
    img: {
        maxWidth: '250px',
        margin: '90px auto 0',
    },
    header: {
        width: '100%',
    },
    arrow: {
        maxWidth: '50px',
        margin: 'auto 0',
        '&:hover':{
            cursor: 'pointer',
            opacity: '0.6',
        }
    },
    skinTypeForm: {
        margin: '0 auto',
    },
    // skinType: {
    //     // maxWidth: '500px',
    // },
    skinPaper: {
        backgroundSize: "90px auto",
        margin: '0 20px 10px',
        '&:hover':{
            cursor: 'pointer',
            opacity: '0.6',        
        }
    },
    p: {
        color: '#0c5b64',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign:'center',
        height:'90px',
        lineHeight:'90px',
        textShadow: '0 -1px 0 #cdeef1',
    },
    // cardBox: {
    //     maxWidth: '800px',
    //     margin: '0 auto',

    // },
    cardPaper: {

        '&:hover':{
            cursor: 'pointer', 
            opacity: '0.6',         
        }
    },
    styleParent: {
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 0 0 0',
    },
    // styleChild: {
    //     // flexGrow: '1',
    //     maxWidth: '200px',
    //     margin: 'auto 30px',
    // }

})

const onClickNormalSkin = () => {
    console.log('DrySkin')
    alert("スキンタイプをNormalSkinに変更しました")
}
const onClickInnerDrySkin = () => {
    console.log('DrySkin')
    alert("スキンタイプをInnerDrySkinに変更しました")
}
const onClickDrySkin = () => {
    console.log('DrySkin')
    alert("スキンタイプをDrySkinに変更しました")
}
const onClickOilySkin = () => {
    console.log('OilySkin')
    alert("スキンタイプをOilySkinに変更しました")
}
const onClickCombinationSkin = () => {
    console.log('CombinationSkin')
    alert("スキンタイプをCombinationSkinに変更しました")
}
const onClickSensitiveSkin = () => {
    console.log('SensitiveSkin')
    alert("スキンタイプをSensitiveSkinに変更しました")
}
const onClickRight = () => {
    console.log('onClickRight')
}
const onClickLeft = () => {
    console.log('onClickLeft')
}


export const MyPage = () => {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const [item, setItem] = useState(null);

    useEffect(async () => {
        const response = await axios.get('/me')
        const u = response.data
        setUser(u)
    }, [])
    
    
    useEffect(async () => {
        const response = await axios.get('/item')
        const i = response.data
        setItem(i)
    }, [])


    const userInformation = () => {
            if(user === null){
                return <CircularProgress color="success" size="35px" />
            }
            return(
                <div style={{margin: 'auto 0', width: '400px'}}>
                    <p style={{ fontSize: '30px', marginBottom: '15px' }}>{user.name}</p>
                    <p>{user.birthday_string}/{user.gender_name}</p>
                    <p>{user.skin_type_name}</p>
                </div>
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
    const itemBrand = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
                <p>{item.brand}</p>                
        )
    }
    // const itemPrice = () => {
    //     if(item === null){
    //         return <CircularProgress color="success" size="15px" />
    //     }
    //     return(
    //             <p>{item.price}</p>                
    //     )
    // }
    const itemImg = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
             <p>{item.img}</p>                
        )
    }

    
    return(
        <>
        <div className='MainContainer'>
            <img src={header_img} alt="header" className={classes.header}/>
            
            
            <div className={classes.styleParent}>

                {userInformation()}
                
                <div className={classes.skinTypeForm}>
                    <p style={{marginBottom: '20px'}}>＜自分のスキンタイプを変更する＞</p>
                    <Box
                    // className={classes.skinType}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        margin: '0 auto',
                        '& > :not(style)': {
                        width: 90,
                        height: 90,
                        },
                    }}
                    >
                        <Paper 
                            className={classes.skinPaper}
                            onClick={onClickNormalSkin} 
                            style={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${normal_skin_img})`
                            }}
                        >
                            <p className={classes.p}>Normal</p>
                        </Paper>
                        <Paper 
                            className={classes.skinPaper}
                            onClick={onClickInnerDrySkin} 
                            style={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${innerDry_skin_img})`
                            }}
                        >
                            <p className={classes.p}>InnerDry</p>
                        </Paper>
                        <Paper 
                            className={classes.skinPaper}
                            onClick={onClickDrySkin} 
                            style={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${dry_skin_img})`
                            }}
                        >
                            <p className={classes.p}>Dry</p>
                        </Paper>
                        <Paper 
                            className={classes.skinPaper}
                            onClick={onClickOilySkin} 
                            style={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${oily_skin_img})`
                                }}                
                        >
                            <p className={classes.p}>Oily</p>
                        </Paper>
                        <Paper 
                            className={classes.skinPaper}
                            onClick={onClickCombinationSkin}  
                            style={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${combination_skin_img})`
                                }}
                        >
                            <p className={classes.p}>Combination</p>
                        </Paper>
                        <Paper 
                            className={classes.skinPaper} 
                            onClick={onClickSensitiveSkin}
                            style={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${sensitive_skin_img})`
                                }}
                        >
                            <p className={classes.p}>Sensitive</p>
                        </Paper>
                    </Box>              
                </div>
            </div>

{/* favorite */}

            <div className='favorite'>
                <img src={leaf_favorite_img} alt="leaf_favorite_img" className={classes.img}/>
                
                <ImageList>
                <ImageListItem key="Subheader" cols={8}>
                    <ListSubheader component="div">お気に入りに登録中のアイテム</ListSubheader>
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
            
{/* history */}


            <div className='history'>
                <img src={leaf_history_img} alt="leaf_history_img" className={classes.img}/>
                
                <ImageList>
                <ImageListItem key="Subheader" cols={8}>
                    <ListSubheader component="div">最近チェックしたアイテム</ListSubheader>
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
            
{/* menu */}


            <div className='menu'>
                <img src={leaf_menu_img} alt="leaf_menu_img" className={classes.img}/>
                <div>
                    <Link 
                      className={classes.menu}
                      underline="none"
                      component={RouterLink} 
                      to='/fixAccount'                
                      >
                        お客様情報変更
                    </Link>
                    <Link 
                      className={classes.menu}
                      underline="none"
                      component={RouterLink} 
                      to='/requestPage'
                      >
                          リクエスト
                    </Link>
                    <Link 
                      className={classes.menu}
                      underline="none"
                      component={RouterLink} 
                      to='/confirm'
                      >
                        退会
                    </Link>
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
    {
      img: 'https://source.unsplash.com/random',
      brand: 'Dior',
      name: 'emulsion',
    //   rows: 2,
    //   cols: 2,
    //   featured: true,
    },
    // {
    //   img: 'https://source.unsplash.com/random',
    //   brand: 'Dior',
    //   name: 'skinToner',
    // },
    // {
    //   img: 'https://source.unsplash.com/random',
    //   brand: 'Dior',
    //   name: 'washCream',
    // },
    // {
    //   img: 'https://source.unsplash.com/random',
    //   brand: 'Dior',
    //   name: 'serum',
    //   rows: 2,
    //   cols: 2,
    // },
    // {
    //   img: 'https://source.unsplash.com/random',
    //   brand: 'Dior',
    //   name: 'cream',
    // },
    // {
    //   img: 'https://source.unsplash.com/random',
    //   brand: 'Dior',
    //   name: 'skinToner',
    // },
    // {
    //   img: 'https://source.unsplash.com/random',
    //   brand: 'Dior',
    //   name: 'serum',
    // //   cols: 2,
    // },
  ];
