import React, {useState, useEffect} from 'react';
import axios from '../axios';
import { GoBackBtn } from '../components/goBackBtn';

import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts'
import Grid from '@mui/material/Grid';
import sample_itemImg from '../img/sample_itemImg.PNG';
import leaf_green from '../img/leaf_green.png';
import leaf_yellow from '../img/leaf_yellow.png';
import leaf_brown from '../img/leaf_brown.png';
import Level_1 from "../img/level_1.png"
import Level_3 from "../img/level_3.png"
import Level_2 from "../img/level_2.png"
import Level_4 from "../img/level_4.png"
import Level_5 from "../img/level_5.png"
import Level_6 from "../img/level_6.png"
import Level_7 from "../img/level_7.png"
import Level_8 from "../img/level_8.png"
import Level_9 from "../img/level_9.png"
import Level_10 from "../img/level_10.png"


{/* <img src={Level_1} alt="Level_1_img" />
<img src={Level_2} alt="Level_2_img" />
<img src={Level_3} alt="Level_3_img" />
<img src={Level_4} alt="Level_4_img" />
<img src={Level_5} alt="Level_5_img" />
<img src={Level_6} alt="Level_6_img" />
<img src={Level_7} alt="Level_7_img" />
<img src={Level_8} alt="Level_8_img" />
<img src={Level_9} alt="Level_9_img" />
<img src={Level_10} alt="Level_10_img" /> */}




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
    ewgForm: {
        margin: '40px auto 0',
        background: '#cae1df',
        borderRadius: '20px',
        border: 'dashed 2px #019401b8',
        boxShadow: '0px 0px 0px 5px #cae1df',
        width: '70%',

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
    const [item, setItem] = useState(null);
    const [ingredients, setIngredients] = useState(null);

    const [value, setValue] = React.useState(3); //☆
    const navigate = useNavigate();

    useEffect(async () => {
        const responseItem = await axios.get('/item')
        const responseIngredients = await axios.get('/item_ingredients')
        const i = responseItem.data
        const ingredient = responseIngredients.data
        setItem(i)
        setIngredients(ingredient)
    }, [])

    const itemInformation = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <div className={classes.styleParent}>
                {/* <img src={sample_itemImg} alt="sampleImg" style={{marginRight: '50px'}} /> */}
                <img src={item.img} alt="itemImg" style={{maxWidth: '370px', height: '100%', margin: 'auto 30px'}} />
                <div>
                    <p style={{textAlign: 'left'}}>{item.brand}</p>
                    <p style={{fontSize: '40px'}}>{item.name}</p>
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
                        <p>{item.volume}</p>
                    </div>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>価格：</p>
                        <p>￥{item.price}</p>
                    </div>
                    <div>
                        <p style={{color: 'gray', fontSize: '13px'}}>※実際の価格と異なる場合がございますので、ご購入時はサイトをご確認ください。</p>
                    </div>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>カテゴリー：</p>
                        <p>{item.category}</p>
                    </div>

                    <div className={classes.btnForm}>
                        <button className={classes.btn} onClick={onClickAddFavorite}>お気に入りへ追加</button>
                    </div>
                    <div className={classes.btnForm}>
                        <button className={classes.btn} onClick={onClickAddComparison}>コスメ比較へ追加</button>
                    </div>
                        <p>→<Link component={RouterLink} to="/itemComparison">コスメ比較ページ</Link>を見る</p>
                    <div className={classes.btnForm}>
                        <button className={classes.btn} onClick={onClickAddUnmatchedItems}>肌に合わなかったアイテムへ追加</button>
                    </div>
                </div>
            </div>
               
        )
    }

    const ingredientsInformation = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <>
            {ingredients.map((ingredient) => (
            <tr>
                <th scope="row">{ingredient.name}</th>
                <td>{ingredient.score}</td>
                <td>{ingredient.safety}</td>
                <td>{ingredient.purpose}</td>
                <td>{ingredient.cancer}</td>
                <td>{ingredient.developmental}</td>
                <td>{ingredient.allergies}</td>
                <td>{ingredient.explain}</td>
            </tr>
            ))}
            </>
        )

    }
    
    
    return(
        <>
        <div className='MainContainer'>
            
        <GoBackBtn />

        {itemInformation()}

            <div className={classes.alertForm}>
                <h4 style={{color: 'red', paddingTop: '10px'}}>注意！</h4>
                <p>肌に合わなかった共通成分があります</p>
                <div style={{paddingBottom: '10px'}}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>○○酸</li>
                </ul>
            </div>
            </div>

            <div className={classes.ewgForm}>
                <p style={{fontSize: '30px', color: 'green', textShadow: '2px 2px 1px white', margin: '20px auto'}}>EWG安全性</p>
                <Grid container spacing={1}>
                <Grid item xs={6}>
                <div>
                    <p style={{color: 'green', textShadow: '2px 2px 1px white'}}>配合成分合計： 28種類</p>
                    <div className={classes.styleParent}>
                        <img src={leaf_green} alt="sampleImg" style={{width: '80px', marginRight: '30px'}} />
                        <div style={{fontSize: '15px', marginTop: '20px'}}><span style={{fontSize: '25px', fontWeight: 'bold', color: '#5ac9b4'}}>20</span> / 28</div>
                    </div>
                    <div className={classes.styleParent}>
                        <img src={leaf_yellow} alt="sampleImg" style={{width: '80px', marginRight: '30px'}} />
                        <div style={{fontSize: '15px', marginTop: '20px'}}><span style={{fontSize: '25px', fontWeight: 'bold', color: '#f5c56b'}}>7</span> / 28</div>
                    </div>
                    <div className={classes.styleParent}>
                        <img src={leaf_brown} alt="sampleImg" style={{width: '80px', marginRight: '30px'}} />
                        <div style={{fontSize: '15px', marginTop: '20px'}}><span style={{fontSize: '25px', fontWeight: 'bold', color: '#f04b4be7'}}>1</span> / 28</div>
                    </div>
                </div>
                </Grid>
                <Grid item xs={6}>
                <div style={{display: 'inline-block'}}>
                    <p style={{color: 'green', textShadow: '2px 2px 1px white'}}>EWG等級別成分割合(％)</p>
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
                <caption style={{fontSize: '25px', marginBottom: '10px'}}>配合成分詳細</caption>
                <tr>
                    <th className={classes.tableHeader}>成分名</th>
                    <th className={classes.tableHeader}>EWG SCORE</th>
                    <th className={classes.tableHeader}>安全度</th>
                    <th className={classes.tableHeader}>配合目的</th>
                    <th className={classes.tableHeader}>発がん性</th>
                    <th className={classes.tableHeader}>発達/生殖毒性</th>
                    <th className={classes.tableHeader}>免疫毒性</th>
                    <th className={classes.tableHeader}>成分説明</th>
                </tr>
                {/* TODO: ↓画面真っ白になるの直す */}
                {/* {ingredientsInformation()} */}
                <tr>
                    <th scope="row">ジメチコン</th>
                    <td>1</td>
                    <td>高</td>
                    <td>美白剤</td>
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