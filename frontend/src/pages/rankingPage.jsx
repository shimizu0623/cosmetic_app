import React from 'react';
import header_img from '../img/headerRanking.jpg';
import { GoBackBtn } from '../components/goBackBtn';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import green_leaf from '../img/green_leaf_img.jpg';
import rank_1 from '../img/rank_1.jpg';
import rank_2 from '../img/rank_2.jpg';
import rank_3 from '../img/rank_3.jpg';

const useStyles = makeStyles({
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

    const rankingForm = (category) => {
        return(
            <div>
            <img src={green_leaf} alt="" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '10px auto 40px' }} />
            <h1 style={{ fontSize: '35px', display: 'inline-block' }}>{category}</h1>
            </div>
        )
}

    return(
        <>
        <div className='MainContainer'>
        <GoBackBtn />
        <img src={header_img} alt="header" style={{ width: '100%' }}/>


                    <div className={classes.rankingForm}>
                        {rankingForm('総合')}
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
                        {rankingForm('口コミ数')}
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
                        {rankingForm('乾燥肌タイプ')}
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