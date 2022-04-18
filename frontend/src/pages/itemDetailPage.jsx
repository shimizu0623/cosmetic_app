// MEMO: スタイル調整済

import React, {useState, useEffect} from 'react';
import axios from '../axios';
import { GoBackBtn } from '../components/goBackBtn';
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import leaf_green from '../img/leaf_green.png';
import leaf_yellow from '../img/leaf_yellow.png';
import leaf_brown from '../img/leaf_brown.png';
import Level_1 from "../img/level_1.png";
import Level_3 from "../img/level_3.png";
import Level_2 from "../img/level_2.png";
import Level_4 from "../img/level_4.png";
import Level_5 from "../img/level_5.png";
import Level_6 from "../img/level_6.png";
import Level_7 from "../img/level_7.png";
import Level_8 from "../img/level_8.png";
import Level_9 from "../img/level_9.png";
import Level_10 from "../img/level_10.png";

const useStyles = makeStyles({
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

});


export const ItemDetail = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(3); //☆
    const [isAnimation, setIsAnimation] = useState(false);
    const navigate = useNavigate();

    useEffect(async () => {
        const responseItem = await axios.get(`/items/${id}`);
        const i = responseItem.data;
        const c = responseItem.data.ingredients.length;
        setItem(i);
        setCount(c);
        

        // ↓履歴
        try {
            const response = await axios.post('/user_histories', {
                item_id: id,
            });
            console.log(response);
            console.log('ok')
        } catch (e) {
            window.alert('登録に失敗しました');
            console.error(e)
            return;
        }

        // console.log('count=' + count)
        // setIngredients(ingredient)
    }, []);


    // TODO: ↓既に登録していたらはじくorお気に入りから外すBtnに切り替える
    const handleAddFavorite = async() => {
        console.log('handleAddFavorite');
        console.log(item.id);
        try {
            const response = await axios.post('/user_favorites', {
                item_id: id,
            });
            window.alert('お気に入りへ追加しました');
            // console.log(response);
            // console.log('ok')
        } catch (e) {
            window.alert('登録に失敗しました');
            console.error(e)
            return;
        }
    }

    const handleAddFolder = () => {
        console.log('handleAddFolder');
    }

    const handleAddComparison = () => {
        console.log('handleAddComparison');
    }

    // TODO: ↓既に登録していたらはじくorアイテムから外すBtnに切り替える
    const handleAddUnmatchedItems = async () => {
        console.log('handleAddUnmatchedItems');
        try {
            const response = await axios.post('/user_unmatchedItems', {
                item_id: id,
            });
            window.alert('肌に合わなかったアイテムへ追加しました');
            // console.log(response);
            // console.log('ok')
        } catch (e) {
            window.alert('登録に失敗しました');
            console.error(e)
            return;
        }

    }    

    const handleReview = () => navigate("/reviewPage");

    const itemInformation = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <div className={classes.styleParent}>
                <img src={item.img} alt="itemImg" style={{ maxWidth: '370px', height: '100%', margin: 'auto 30px' }} />
                <div>
                    <p style={{ textAlign: 'left', fontSize: '25px' }}>{item.brand}</p>
                    <p style={{ fontSize: '40px' }}>{item.name}</p>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>評価レビュー</p>
                        <Box borderColor="transparent">
                            <Rating name="read-only" value={value} readOnly />
                        </Box>
                        <button onClick={handleReview} className={classes.reviewBtn}>この商品のレビューを見る</button>
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
                        <p style={{ color: 'gray', fontSize: '13px' }}>※実際の価格と異なる場合がございますので、ご購入時はサイトをご確認ください。</p>
                    </div>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>カテゴリー：</p>
                        <p>{item.category}</p>
                    </div>
                    <div className={classes.btnForm}>
                        <button className={classes.btn} onClick={handleAddFavorite}>お気に入りへ追加</button>
                    </div>
                    <div className={classes.btnForm}>
                        <button className={classes.btn} onClick={handleAddFolder}>マイフォルダへ追加</button>
                    </div>
                    <div className={classes.btnForm}>
                        <button className={classes.btn} onClick={handleAddUnmatchedItems}>肌に合わなかったアイテムへ追加</button>
                    </div>
                    <div className={classes.btnForm}>
                        <button className={classes.btn} onClick={handleAddComparison}>コスメ比較へ追加</button>
                    </div>
                        <p>→<Link component={RouterLink} to="/itemComparison">コスメ比較ページ</Link>を見る</p>
                </div>
            </div>     
        );
    }    

    const ingredientsInformation = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <>
            {item.ingredients.map((ingredient) => (
                <tr>
                    <td scope="row">{ingredient.name}</td>
                    {(()=>{
                        if (ingredient.score === 1){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_1} alt="Level_1_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 2){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_2} alt="Level_2_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 3){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_3} alt="Level_3_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 4){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_4} alt="Level_4_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 5){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_5} alt="Level_5_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 6){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_6} alt="Level_6_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 7){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_7} alt="Level_7_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 8){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_8} alt="Level_8_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 9){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_9} alt="Level_9_img" style={{ width: '30px' }} /></td>)}
                        else if (ingredient.score === 10){return (<td style={{ display:'flex', justifyContent: 'center' }}><img src={Level_10} alt="Level_10_img" style={{ width: '30px' }} /></td>)}
                        else {return (<td><p>no information</p></td>)}
                    })()}

                        {/* {ingredient.score === 1 ? (<td><img src={Level_1} alt="Level_1_img" style={{ width: '20px' }} /></td>) : (<td><p>error</p></td>)}
                        {ingredient.score === 2 ? (<td><img src={Level_2} alt="Level_2_img" style={{ width: '20px' }} /></td>) : (<td><p>error</p></td>)}
                        {ingredient.score === 3 ? (<td><img src={Level_3} alt="Level_3_img" style={{ width: '20px' }} /></td>) : (<td><p>error</p></td>)}
                        {ingredient.score === 4 ? (<td><img src={Level_4} alt="Level_4_img" style={{ width: '20px' }} /></td>) : (<td><p>error</p></td>)}
                        {ingredient.score === 5 ? (<td><img src={Level_5} alt="Level_5_img" style={{ width: '20px' }} /></td>) : (<td><p>error</p></td>)} */}
                    <td>{ingredient.safety}</td>
                    <td>{ingredient.purpose}</td>
                    <td>{ingredient.cancer}</td>
                    <td>{ingredient.developmental}</td>
                    <td>{ingredient.allergies}</td>
                    <td>{ingredient.explain}</td>
                </tr>
            ))}
            </>
        );

    }

    let data = [
        //データないor不明時↓
        {
          index: 3,
          name: 'High Hazard',
          value: 0,
        },
          
      ];
    const ChartColors = [
        '#cae1df7d',
        '#5ac9b4',
        '#f5c56b',
        '#f04b4be7',
      ];
    
    let green = 0;
    const scoreGreen = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        const count = item.ingredients.map((ingredient) => {
            (()=>{
                if (ingredient.score === 1 || ingredient.score === 2){green++}
            })()
        });
        return(
            <span style={{ fontSize: '25px', fontWeight: 'bold', color: '#5ac9b4' }}>{green}</span>
            );
        }

    const rateGreen = () => {
        const calc = Math.round(green / 3 * 100);
        //TODO: ↓valueを数字からcalcに変えたら、ブラウザに表示されなくなった
        const add = { index: 0, name: 'Low Hazard', value: calc };
        console.log(calc);
        data.push(add);
        console.log(data);
    }

    let yellow = 0;
    const scoreYellow = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        const count = item.ingredients.map((ingredient) => {
            (()=>{
                if (ingredient.score === 3){yellow++}
                else if (ingredient.score === 4){yellow++}
                else if (ingredient.score === 5){yellow++}
                else if (ingredient.score === 6){yellow++}
            })()
        });
        return(
            <span style={{ fontSize: '25px', fontWeight: 'bold', color: '#f5c56b' }}>{yellow}</span>
            );
        }

    const rateYellow = () => {
        const calc = Math.round(yellow / 3 * 100);
        const add = { index: 1, name: 'Moderate Hazard', value: calc };
        console.log(calc);
        data.push(add);
        console.log(data);

    }
    
        
    let red = 0;
    const scoreRed = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        const count = item.ingredients.map((ingredient) => {
            (()=>{
                if (ingredient.score === 7){red++}
                else if (ingredient.score === 8){red++}
                else if (ingredient.score === 9){red++}
                else if (ingredient.score === 10){red++}
            })()
        });
        return(
            <span style={{ fontSize: '25px', fontWeight: 'bold', color: '#f04b4be7' }}>{red}</span>
            );
    }

    const rateRed = () => {
        const calc = Math.round(red / 3 * 100);
        const add = { index: 2, name: 'High Hazard', value: calc };
        console.log(calc);
        data.push(add);
        console.log(data);

    }


    
        
    const explain_green = 'EWG 1~2等級（有害性が低い成分）';
    const explain_yellow = 'EWG 3~6等級（有害性が普通の成分）';
    const explain_red = 'EWG 7~10等級（有害性が高い成分）';

    
    return(
        <>
        <div className='MainContainer'>
            
        <GoBackBtn />

        {itemInformation()}

            {/* TODO: 表示切替 */}
            <div className={classes.alertForm}>
                <h4 style={{ color: 'red', paddingTop: '10px' }}>注意！</h4>
                <p>肌に合わなかった共通成分があります</p>
                <div style={{ paddingBottom: '10px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>○○酸</li>
                </ul>
            </div>
            </div>

            <div className={classes.ewgForm}>
                <p style={{ fontSize: '30px', color: 'green', textShadow: '2px 2px 1px white', margin: '20px auto' }}>EWG安全性</p>
                <Grid container spacing={1}>
                <Grid item xs={6}>
                <div>
                    <p style={{ color: 'green', textShadow: '2px 2px 1px white' }}>配合成分合計： {count}種類</p>
                    <Tooltip title={explain_green} followCursor>
                    <div className={classes.styleParent}>
                        <img src={leaf_green} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                    <div style={{ fontSize: '15px', marginTop: '20px' }}>{scoreGreen()} / {count}</div>
                    </div>
                    </Tooltip>
                    <Tooltip title={explain_yellow} followCursor>
                    <div className={classes.styleParent}>
                        <img src={leaf_yellow} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                        <div style={{ fontSize: '15px', marginTop: '20px' }}>{scoreYellow()} / {count}</div>
                    </div>
                    </Tooltip>
                    <Tooltip title={explain_red} followCursor>
                    <div className={classes.styleParent}>
                        <img src={leaf_brown} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                        <div style={{ fontSize: '15px', marginTop: '20px' }}>{scoreRed()} / {count}</div>
                    </div>
                    </Tooltip>
                </div>
                </Grid>
                {rateGreen()}
                {rateYellow()}
                {rateRed()}
                {/* TODO: 不明のものも足す{rateNotInformation()} */}
                <Grid item xs={6}>
                <div style={{ display: 'inline-block'}} >
                    <p style={{ color: 'green', textShadow: '2px 2px 1px white' }} >EWG等級別成分割合(％)</p>
                    <PieChart width={300} height={300}>
                    <Pie 
                        data={data} 
                        dataKey="value" 
                        outerRadius={100} 
                        label 
                        isAnimationActive={ isAnimation }
                        // onAnimationEnd={() => setIsAnimation(false)}
                    >
                    {data.map((entry, index) => (
                        <Cell key={entry.name} fill={ChartColors[index % ChartColors.length]} />
                    ))}
                    </Pie>
                    </PieChart>
                </div>
                </Grid>
            </Grid>
            </div>

            <div style={{ margin: '50px 0 20px 0' }}>
                <table style={{ margin: '0 auto' }}>
                <caption style={{ fontSize: '25px', marginBottom: '10px' }}>配合成分詳細</caption>
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
                {ingredientsInformation()}
                </table>
            </div>

        </div>
        </>
    );
}

