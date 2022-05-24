import React, {useState, useEffect} from 'react';
import axios from '../axios';
import header_img from '../img/headerComparison.jpg';
import leaf_green from '../img/leaf_green.png';
import leaf_yellow from '../img/leaf_yellow.png';
import leaf_brown from '../img/leaf_brown.png';
import { GoBackBtn } from '../components/goBackBtn';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
// import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
    tableHeader: {
        background: '#e4e4e4',
        minWidth: '100px',
    },
});

export const ItemComparison = () => {
    const classes = useStyles();
    const [item, setItem] = useState([]);
    const navigate = useNavigate();
    
    useEffect(async () => {
        const responseItem = await axios.get('/user_comparisonItems');
        const i = responseItem.data;
        setItem(i);
        console.log(item);
    }, []);

    // let green = 0;
    // const scoreGreen = () => {
    //     if (item === null){
    //         return <CircularProgress color="success" size="15px" />
    //     }
    //     const count = item.ingredients.map((ingredient) => {
    //         (()=>{
    //             if (ingredient.score === 1 || ingredient.score === 2){green++}
    //         })()
    //     });
    //     return(
    //         <span style={{ fontSize: '25px', fontWeight: 'bold', color: '#5ac9b4' }}>{green}</span>
    //     );
    // };

    // let yellow = 0;
    // const scoreYellow = () => {
    //     if (item === null){
    //         return <CircularProgress color="success" size="15px" />
    //     }
    //     const count = item.ingredients.map((ingredient) => {
    //         (()=>{
    //             if (ingredient.score === 3){yellow++}
    //             else if (ingredient.score === 4){yellow++}
    //             else if (ingredient.score === 5){yellow++}
    //             else if (ingredient.score === 6){yellow++}
    //         })()
    //     });
    //     return(
    //         <span style={{ fontSize: '25px', fontWeight: 'bold', color: '#f5c56b' }}>{yellow}</span>
    //     );
    // };
    
    // let red = 0;
    // const scoreRed = () => {
    //     if (item === null){
    //         return <CircularProgress color="success" size="15px" />
    //     }
    //     const count = item.ingredients.map((ingredient) => {
    //         (()=>{
    //             if (ingredient.score === 7){red++}
    //             else if (ingredient.score === 8){red++}
    //             else if (ingredient.score === 9){red++}
    //             else if (ingredient.score === 10){red++}
    //         })()
    //     });
    //     return(
    //         <span style={{ fontSize: '25px', fontWeight: 'bold', color: '#f04b4be7' }}>{red}</span>
    //     );
    // };
    
    const itemInformation = () => {
        if (item.length === 0){
            // return <CircularProgress color="success" size="15px" /> 
            return (
                <tbody>
                    <tr>
                        <td></td>
                        <td colspan="7" style={{ fontSize: '20px', paddingTop: '30px' }}>アイテムが登録されていません。</td>
                    </tr>
                </tbody>
            );
        }
        // if (item.length !== 0){
        return(
            <>
                {item.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <td scope="row">
                                <img 
                                  src={item.img} 
                                  alt="itemImg" 
                                  style={{ maxWidth: '90px', height: '100%', margin: 'auto 30px' }} 
                                  onClick={() => navigate(`/item/${item.item_id}`)} 
                                />
                            </td>
                            <td>{item.brand}</td>
                            <td>{item.name}</td>
                            <td>{item.volume}</td>
                            <td>￥{item.price}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <td>{scoreGreen()}</td>
                            <td>{scoreYellow()}</td>
                            <td>{scoreRed()}</td> */}
                            {/* <td>-</td> */}
                            <td><Button 
                                    variant="contained" 
                                    style={{
                                        marginTop: '10px',
                                        color: 'white',
                                        background: 'rgba(141, 203, 193)',
                                        borderRadius: '7px',
                                    }}
                                    onClick={(e) => handleDelete(e, item.item_id)}>
                                削除
                                </Button>
                            </td>
                        </tr>  
                    </tbody>
                ))}
            </>
        );
        // }
    };
    
    const handleDelete = async (e, id) => {
        // console.log('handleDeleteComparison');
        const confirmMessage = '削除してよろしいですか？';
        let result = window.confirm(confirmMessage);
        try {
            const response = await axios.delete(`/user_comparisonItems/${id}`);
            const responseItem = await axios.get('/user_comparisonItems');
            const i = responseItem.data;
            setItem(i);
            window.alert('コスメ比較から削除しました');
        } catch (e) {
            window.alert('削除に失敗しました');
            // console.error(e);
            return;
        }
    };



    const explain_green = 'EWG 1~2等級（有害性が低い成分）';
    const explain_yellow = 'EWG 3~6等級（有害性が普通の成分）';
    const explain_red = 'EWG 7~10等級（有害性が高い成分）';


    return(
        <>
        <div className='MainContainer'>
            <GoBackBtn />
            <img src={header_img} alt="header" style={{ width: '100%' }}/>
            <div>
                <div style={{ marginTop: '50px' }}>
                    <p>商品の違いに悩む時はありませんか？</p>
                    <p>そんな時は、このページでアイテム情報を比較してみることができます。</p>
                    <p>また、アイテムの画像部分をクリックすると、詳細を確認することができます。</p>
                    <p><Link component={RouterLink} to="/itemSearch">→比較したい商品を探す</Link></p>
                </div>


                <div style={{ margin: '50px 0 20px 0' }}>
                    <table style={{ margin: '0 auto' }}>
                        <thead>
                            <tr>
                                <th className={classes.tableHeader}></th>
                                <th className={classes.tableHeader}>ブランド</th>
                                <th className={classes.tableHeader}>商品名</th>
                                <th className={classes.tableHeader}>容量</th>
                                <th className={classes.tableHeader}>価格</th>
                                <Tooltip title={explain_green} followCursor>
                                    <th className={classes.tableHeader}>
                                        <img src={leaf_green} alt="ewg_green" style={{ width: '30px' }} />
                                        成分数
                                    </th>
                                </Tooltip>
                                <Tooltip title={explain_yellow} followCursor>
                                    <th className={classes.tableHeader}>
                                        <img src={leaf_yellow} alt="ewg_yellow" style={{ width: '30px' }} />
                                        成分数
                                    </th>
                                </Tooltip>
                                <Tooltip title={explain_red} followCursor>
                                    <th className={classes.tableHeader}>
                                        <img src={leaf_brown} alt="ewg_red" style={{ width: '30px' }} />
                                        成分数
                                    </th>
                                </Tooltip>
                                {/* <th className={classes.tableHeader}>評価レビュー</th> */}
                                <th className={classes.tableHeader}></th>
                            </tr>
                        </thead>

                        {itemInformation()}
                        
                    </table>
                </div>
                {/* <p>コスメ比較へ追加されたアイテムはありません。</p> */}
            </div>
        </div>
        </>
    );
};