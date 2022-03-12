import React from 'react';

import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import green_leaf from '../img/green_leaf_img.jpg';
import rightArrow_img from '../img/rightArrow_yellow.jpg';
import leftArrow_img from '../img/leftArrow_yellow.jpg';
import rank_1 from '../img/rank_1.jpg';
import rank_2 from '../img/rank_2.jpg';
import rank_3 from '../img/rank_3.jpg';

const useStyles = makeStyles({
    Form: {
        maxWidth: '1400px',
    },
    TitleForm: {
        // lineHeight: '40px',
        textAlign : 'left',
    },
    TitleImg: {
        maxWidth: '90px',
        display: 'inline-block',
        verticalAlign: 'middle',
        // fontSize: '40px',

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
    Arrow: {
        maxWidth: '50px',
        margin: 'auto 0',
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
        maxWidth: '350px',
    },
    rank : {
        margin: '0 auto',
        display: 'inline-block',
        listStyle: 'none',
    },
    guideMessage : {
        color: 'rgba(243, 240, 240)',
    },

})

const onClickRight = () => {
    console.log('onClickRight')
}
const onClickLeft = () => {
    console.log('onClickLeft')
}


export const HomePage = () => {
    const classes = useStyles();

    return(
        <>
        <div className='MainContainer'>
                <div className='message'>
                    <p>〇〇さん、こんにちは！</p>
                    <p>最近のお肌の調子はいかがですか？</p>
                    <p>おすすめアイテムは、〇〇さんのスキンタイプに合うように設定されています。</p>
                    <p>また、過去にお肌に合わなかった商品の中で共通成分がある時は、その成分が含まれていないものを選んでおります。</p>
                    <p>〇〇さんのお肌に合ったアイテムが見つかりますように。</p>
                </div>
                <div className='guideMessage'>
                    <p className='guideMessage'>スキンタイプはマイページよりいつでも変更できます。</p>
                    <p>肌に合わなかったアイテムは各商品のページより登録できます。</p>
                </div>
            
            {/* recommend */}
                <div className='recommend'>
                    <div className='TitleForm'>
                        <img src={green_leaf} alt="" className={classes.TitleImg} />
                        <p className={classes.Title}>○○さんにおすすめ化粧品5選！</p>
                    </div>
                    <div className='Form'>
                    <ImageList>
                    <ImageListItem cols={8}>
                    {/* <ListSubheader component="div">お気に入りに登録中のアイテム</ListSubheader> */}
                    </ImageListItem>

                    <img src={leftArrow_img} className={classes.Arrow} onClick={onClickLeft} />
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
                            title={item.name}
                            subtitle={`￥${item.price}`}
                        />
                        </ImageListItem>
                    ))}
                    <img src={rightArrow_img} className={classes.Arrow} onClick={onClickRight} />
                    </ImageList>
                    </div>
                </div>


            {/* ranking */}
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
