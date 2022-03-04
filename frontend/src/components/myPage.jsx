import React from 'react';
import leaf_menu_img from '../img/leaf_menu_img.jpg';
import leaf_favorite_img from '../img/leaf_favorite_img.jpg';
import leaf_history_img from '../img/leaf_history_img.jpg';
import dry_skin_img from '../img/dry_skin_img.jpg';
import oily_skin_img from '../img/oily_skin_img.jpg';
import combination_skin_img from '../img/combination_skin_img.jpg';
import sensitive_skin_img from '../img/sensitive_skin_img.jpg';

import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import smile_img from '../img/smile.jpg';


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
        maxWidth: '200px',
        margin: '60px auto 30px',
    },
    skinTypeForm: {
        margin: '0 auto',
    },
    // skinType: {
    //     // maxWidth: '500px',
    // },
    skinPaper: {
        backgroundSize: "90px auto",
        margin: '0 20px',
        '&:hover':{
            cursor: 'pointer',          
        }
    },
    p: {
        color: '#0c5b64',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign:'center',
        height:'90px',
        lineHeight:'90px',
        textShadow: '0 -1px 0 #cdeef1',
    },
    cardBox: {
        maxWidth: '800px',
        margin: '0 auto',

    },
    cardPaper: {
        
        '&:hover':{
            cursor: 'pointer',          
        }
    },
    styleParent: {
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 0 0 0',
    },
    styleChild: {
        // flexGrow: '1',
        maxWidth: '200px',
        margin: '0 50px',

    }

})

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


export const MyPage = () => {
    const classes = useStyles();

    return(
        <>
        <div className='MainContainer'>
            <div className={classes.styleParent}>
                <div className={classes.styleChild} >
                    <Avatar 
                    //   src="/broken-image.jpg"
                        // src={smile_img}
                        sx={{ width: 150, height: 150 }}
                        variant="rounded"
                    >
                    <AssignmentIcon />
                    </Avatar>
                </div>
                <div style={{margin: 'auto 0'}}>
                    <p>名前</p>
                    <p>DRYスキンタイプ</p>
                    <p>20代/女性</p>
                </div>
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
                            onClick={onClickDrySkin} 
                            sx={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${dry_skin_img})`
                            }}
                        >
                            <p className={classes.p}>Dry</p>
                        </Paper>
                        <Paper 
                            className={classes.skinPaper}
                            onClick={onClickOilySkin} 
                            sx={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${oily_skin_img})`
                                }}                
                        >
                            <p className={classes.p}>Oily</p>
                        </Paper>
                        <Paper 
                            className={classes.skinPaper}
                            onClick={onClickCombinationSkin}  
                            sx={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${combination_skin_img})`
                                }}
                        >
                            <p className={classes.p}>Combination</p>
                        </Paper>
                        <Paper 
                            className={classes.skinPaper} 
                            onClick={onClickSensitiveSkin}
                            sx={{
                                borderRadius: '50%', 
                                backgroundImage: `url(${sensitive_skin_img})`
                                }}
                        >
                            <p className={classes.p}>Sensitive</p>
                        </Paper>
                    </Box>              
                </div>
            </div>


            <div className='favorite'>
                <img src={leaf_favorite_img} alt="leaf_favorite_img" className={classes.img}/>
                <Box
                    className={classes.cardBox}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        margin: '0 auto',
                        width: 128,
                        height: 128,
                        },
                    }}
                >
                    <Paper className={classes.cardPaper}></Paper>
                    <Paper className={classes.cardPaper}></Paper>
                    <Paper className={classes.cardPaper}></Paper>
                    <Paper className={classes.cardPaper}></Paper>
                    <Paper className={classes.cardPaper}></Paper>
                </Box>

            </div>
            
            <div className='history'>
                <img src={leaf_history_img} alt="leaf_history_img" className={classes.img}/>
                <Box
                    className={classes.cardBox}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        margin: '0 auto',
                        width: 128,
                        height: 128,
                        },
                    }}
                >
                    <Paper className={classes.cardPaper}></Paper>
                    <Paper className={classes.cardPaper}></Paper>
                    <Paper className={classes.cardPaper}></Paper>
                    <Paper className={classes.cardPaper}></Paper>
                    <Paper className={classes.cardPaper}></Paper>
                </Box>







            </div>
            
            <div className='menu'>
                <img src={leaf_menu_img} alt="leaf_menu_img" className={classes.img}/>
                <div>
                    <Link 
                      className={classes.menu}
                      underline="none"
                      component={RouterLink} 
                      to=''                
                      >
                        お客様情報変更
                    </Link>
                    {/* <Link style={StyleLink} component={RouterLink} to='/'>リクエスト</Link> */}
                    <Link 
                      className={classes.menu}
                      underline="none"
                      component={RouterLink} 
                      to=''
                      >
                        退会
                    </Link>
                </div>

            </div>


        </div>
        </>
    )
}