import React from 'react';

import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import green_leaf from '../img/green_leaf_img.jpg';
import rank_1 from '../img/rank_1.jpg';
import rank_2 from '../img/rank_2.jpg';
import rank_3 from '../img/rank_3.jpg';

const useStyles = makeStyles({
    TitleForm: {
        textAlign : 'left',
    },
    TitleImg: {
        maxWidth: '90px',
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    Title: {
        fontSize: '40px',
        display: 'inline-block',
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
})

export const Ranking = () => {
    const classes = useStyles();
    return(
        <>

        <div className='MainContainer'>
            <div className='TitleForm'>
                        <img src={green_leaf} alt="" className={classes.TitleImg} />
                        <span className={classes.Title}>人気ランキング</span>
                    </div>

                    <div className={classes.rankingForm}>
                        <p className={classes.rankingTitle}>～総合～</p>
                        <ul className={classes.rank}>
                            <li><img src={rank_1} alt="rank_1" className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                        <ul className={classes.rank}>
                            <li><img src={rank_2} alt="rank_2"  className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                        <ul className={classes.rank}>
                            <li><img src={rank_3} alt="rank_3" className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                    </div>



                    <div className={classes.rankingForm}>
                        <p className={classes.rankingTitle}>～口コミ数～</p>
                        <ul className={classes.rank}>
                            <li><img src={rank_1} alt="rank_1" className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                        <ul className={classes.rank}>
                            <li><img src={rank_2} alt="rank_2"  className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                        <ul className={classes.rank}>
                            <li><img src={rank_3} alt="rank_3" className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                    </div>



                    <div className={classes.rankingForm}>
                        <p className={classes.rankingTitle}>～乾燥肌タイプ～</p>
                        <ul className={classes.rank}>
                            <li><img src={rank_1} alt="rank_1" className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                        <ul className={classes.rank}>
                            <li><img src={rank_2} alt="rank_2"  className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                        <ul className={classes.rank}>
                            <li><img src={rank_3} alt="rank_3" className={classes.rankingImg}/></li>
                            <ImageListItem>
                                <li><img src='https://source.unsplash.com/random' alt="item_img"  className={classes.itemImg}/></li>
                                <ImageListItemBar
                                title='商品名'
                                subtitle='￥10,000'
                                />
                            </ImageListItem>
                        </ul>
                    </div>


        </div>
        </>
    )
}