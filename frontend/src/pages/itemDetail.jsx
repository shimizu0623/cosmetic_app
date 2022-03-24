import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts'
import Grid from '@mui/material/Grid';
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
    alertForm: {
        background: '#ffeaea',
        maxWidth: '300px',
        margin: '0 auto',
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

            <div  className={classes.alertForm}>
                <h4 style={{color: 'red', paddingTop: '10px'}}>注意！</h4>
                <p>肌に合わなかった共通成分があります</p>
                <div style={{padding: '10px'}}>
                    <p>○○酸</p>
                </div>
            </div>

            <div className={classes.ewgForm}>
                <p style={{fontSize: '30px', color: 'green', textShadow: '2px 2px 1px white', margin: '20px auto'}}>EWG安全性</p>
                <Grid container spacing={1}>
                <Grid item xs={4}>
                <div>
                    <div className={classes.styleParent}>
                        <img src={sample_itemImg} alt="sampleImg" style={{width: '80px'}} />
                        <p>20 / 28</p>
                    </div>
                    <div className={classes.styleParent}>
                        <img src={sample_itemImg} alt="sampleImg" style={{width: '80px'}} />
                        <p>7 / 28</p>
                    </div>
                    <div className={classes.styleParent}>
                        <img src={sample_itemImg} alt="sampleImg" style={{width: '80px'}} />
                        <p>1 / 28</p>
                    </div>
                </div>
                </Grid>
                <Grid item xs={8}>
                <div style={{display: 'inline-block'}}>
                    <PieChart width={300} height={300}>
                    <Pie data={data} dataKey="value" outerRadius={100} label>
                    {data.map((entry, index) => (
                        <Cell key={entry.name} fill={ChartColors[index % ChartColors.length]} />
                    ))}
                    </Pie>
                    </PieChart>
                </div>
                </Grid>
            </Grid>
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
      name: 'Low Hazard',
      value: 70,
    },
    {
      index: 2,
      name: 'Moderate Hazard',
      value: 20,
    },
    {
      index: 1,
      name: 'High Hazard',
      value: 10,
    },
  ];
const ChartColors = [
    '#5ac9b4',
    '#f5c56b',
    '#f04b4be7',
  ];
  
//   const COLORS = [
//     '#2250A2',
//     '#da50a2',
//   ];