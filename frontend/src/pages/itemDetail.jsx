import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";


import sample_itemImg from '../img/sample_itemImg.PNG';


const useStyles = makeStyles({
    // arrow: {
    //     maxWidth: '50px',
    //     margin: 'auto 0',
    //     '&:hover':{
    //         cursor: 'pointer',
    //         opacity: '0.6',
    //     }
    // },
    styleParent: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0 0 0',
    },
    styleP: {
        display: 'flex',
        padding: '20px 0 0 0',
    },
    tableHeader: {
        background: '#4dc9b2c3',
        minWidth: '100px',
    },
    itemDetail: {
        fontSize: '15px',
        marginRight: '20px',
    },
    btn: {
        display: 'flex',
        padding: '5px 0 0 0',
    },

    


})

const onClickReview = () => {
    console.log('onClickReview')
}
const onClickAddFavorite = () => {
    console.log('onClickAddFavorite')
}
const onClickAddUnmatchedItems = () => {
    console.log('onClickAddUnmatchedItems')
}


export const ItemDetail = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(3);


    return(
        <>
        <div className='MainContainer'>


            <div className={classes.styleParent}>
                <img src={sample_itemImg} alt="sampleImg" style={{marginRight: '50px'}} />
                <div>
                    <p style={{textAlign: 'left'}}>CLINIQUE（ブランド名）</p>
                    <p style={{fontSize: '40px'}}>○○クリーム（商品名）</p>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>評価レビュー</p>
                        <Box borderColor="transparent">
                            {/* <Typography component="legend">Read only</Typography> */}
                            <Rating name="read-only" value={value} readOnly />
                        </Box>
                        <button onClick={onClickReview} style={{marginLeft: '20px'}}>この商品のレビューを見る</button>
                    </div>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>内容量：</p>
                        <p>○○ml</p>
                    </div>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>価格：</p>
                        <p>￥○○,000</p>
                    </div>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>カテゴリー：</p>
                        <p>例：化粧水</p>
                    </div>

                    <div className={classes.btn}>
                        <button onClick={onClickAddFavorite}>お気に入りへ追加</button>
                    </div>
                    <div className={classes.btn}>
                        <button onClick={onClickAddFavorite}>コスメ比較へ追加</button>
                    </div>
                        <p>→<Link component={RouterLink} to="/myPage">コスメ比較ページ</Link>を見る</p>
                    <div className={classes.btn}>
                        <button onClick={onClickAddUnmatchedItems}>肌に合わなかったアイテムへ追加</button>
                    </div>

                    
                </div>
            </div>

            <div style={{margin: '40px auto'}}>
                <p>EWG安全性</p>
            </div>

            <div style={{margin: '50px 0 20px 0'}}>
                <table style={{margin: '0 auto'}}>
                <caption style={{fontSize: '25px', marginBottom: '10px'}}>配合成分一覧</caption>
                <tr>
                    <th className={classes.tableHeader}>成分名</th>
                    <th className={classes.tableHeader}>配合目的</th>
                    <th className={classes.tableHeader}>EWG SCORE</th>
                    <th className={classes.tableHeader}>発がん性</th>
                    <th className={classes.tableHeader}>発達/生殖毒性</th>
                    <th className={classes.tableHeader}>免疫毒性</th>
                    <th className={classes.tableHeader}>成分説明</th>
                </tr>
                <tr>
                    <th scope="row">水</th>
                    <td>ベース成分</td>
                    <td>1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>撥水性及び分散性向上の目的で使用されています</td>
                </tr>
                <tr>
                    <th scope="row">ジメチコン</th>
                    <td>美白剤</td>
                    <td>1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>皮膚コンディショニング</td>
                </tr>
                </table>
            </div>

        </div>
        </>
    )
}