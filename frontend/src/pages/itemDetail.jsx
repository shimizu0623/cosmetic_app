import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Text } from 'recharts'

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
        borderRadius: '10px',
        fontWeight: 'bold',
        padding: '7px',
        color: '#459319ef',
        background: '#e3f5a4ef',
        border: 'none',
        textShadow: '1px 1px 1px white',
        '&:hover':{
            cursor: 'pointer',
            color: 'green',
            background: '#deeca5ef',
            borderColor: 'green',
            textShadow: 'none',
        }
    },
    btnForm: {
        display: 'flex',
        padding: '5px 0 0 0',
    },
    back: {
        textAlign: 'left',
        color: 'gray',
        '&:hover':{
            cursor: 'pointer',
            color: 'black',
            textDecoration: 'underline',
        }
    },
    ewgForm: {
        margin: '40px',
        background: '#cae1df',
        borderRadius: '20px',
        border: 'dashed 2px #019401b8',
        boxShadow: '0px 0px 0px 5px #cae1df',

    },
    reviewBtn: {
        color: '#60501c',
        background: '#f6dd89f5',
        marginLeft: '40px',
        padding: '5px',
        borderRadius: '4px',
        borderColor: '#f5d97ff5',
        border: '2px solid',
        '&:hover':{
            cursor: 'pointer',
            background: '#f5d56d',

        }
    },

})

const onClickReview = () => {
    console.log('onClickReview')
}
const onClickAddFavorite = () => {
    console.log('onClickAddFavorite')
}
const onClickAddComparison = () => {
    console.log('ClickAddComparison')
}
const onClickAddUnmatchedItems = () => {
    console.log('onClickAddUnmatchedItems')
}


export const ItemDetail = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(3); //☆
    const navigate = useNavigate();

    return(
        <>
        <div className='MainContainer'>
        <div  className={classes.back}>
            <span onClick={() => navigate(-1)}>前のページへ戻る</span>
        </div>

        {/* <button onClick={() => navigate(-1)}>検索結果へ戻る</button> */}

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
                        <button onClick={onClickReview} className={classes.reviewBtn}>この商品のレビューを見る</button>
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

                    <div className={classes.btnForm}>
                        <button  className={classes.btn} onClick={onClickAddFavorite}>お気に入りへ追加</button>
                    </div>
                    <div className={classes.btnForm}>
                        <button  className={classes.btn} onClick={onClickAddComparison}>コスメ比較へ追加</button>
                    </div>
                        <p>→<Link component={RouterLink} to="/myPage">コスメ比較ページ</Link>を見る</p>
                    <div className={classes.btnForm}>
                        <button  className={classes.btn} onClick={onClickAddUnmatchedItems}>肌に合わなかったアイテムへ追加</button>
                    </div>

                    
                </div>
            </div>

            <div className={classes.ewgForm}>
                <p style={{fontSize: '30px', color: 'green', textShadow: '2px 2px 1px white'}}>EWG安全性</p>
                <PieChart width={1000} height={250}>
                <Pie data={data} dataKey="value" cx="90%" cy="50%" outerRadius={100} fill="#4aab9980" label/>
                </PieChart>
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

const data = [
    {
      index: 0,
      name: 'データ1',
      value: 300,
    },
    {
      index: 1,
      name: 'データ2',
      value: 200,
    },
    {
      index: 2,
      name: 'データ3',
      value: 380,
    },
  ];
  
  const COLORS = [
    '#2250A2',
    '#da50a2',
  ];