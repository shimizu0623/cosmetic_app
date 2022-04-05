import React, {useState, useEffect} from 'react';
import axios from '../axios';
import header_img from '../img/headerComparison.jpg';
import leaf_green from '../img/leaf_green.png';
import leaf_yellow from '../img/leaf_yellow.png';
import leaf_brown from '../img/leaf_brown.png';
import { GoBackBtn } from '../components/goBackBtn';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const useStyles = makeStyles({
    tableHeader: {
        background: '#e4e4e4',
        minWidth: '100px',
    },
})

export const ItemComparison = () => {
    const classes = useStyles();
    const [item, setItem] = useState(null);
    // const [ingredients, setIngredients] = useState(null);
    
    useEffect(async () => {
        const responseItem = await axios.get('/item')
        // const responseIngredients = await axios.get('/item_ingredients')
        const i = responseItem.data
        // const ingredient = responseIngredients.data
        setItem(i)
        // setIngredients(ingredient)
    }, [])

    const itemInformation = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
                // TODO: ↓item_ingredientsのデータ？
                <tr>
                    <td scope="row"><img src={item.img} alt="itemImg" style={{ maxWidth: '90px', height: '100%', margin: 'auto 30px' }} /></td>
                    <td>{item.brand}</td>
                    <td>{item.name}</td>
                    <td>{item.volume}</td>
                    <td>￥{item.price}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><Button 
                            variant="contained" 
                            style={{
                                marginTop: '10px',
                                color: 'white',
                                background: 'rgba(141, 203, 193)',
                                borderRadius: '7px',
                            }}
                            onClick={onClickDelete}>
                        削除
                        </Button>
                    </td>
                </tr>   
        )
    }

    const onClickDelete = () => {
        const confirmMessage = '削除してよろしいですか？'
        let result = window.confirm(confirmMessage);
        if(result){
            console.log('onClickDelete')       
        }else{
            return;
        }    
    }


    const explain_green = 'EWG 1~2等級（有害性が低い成分）'
    const explain_yellow = 'EWG 3~6等級（有害性が普通の成分）'
    const explain_red = 'EWG 7~10等級（有害性が高い成分）'


    return(
        <>
        <div className='MainContainer'>
        <GoBackBtn />
        <img src={header_img} alt="header" style={{ width: '100%' }}/>
        <div>
            <div style={{marginTop: '50px'}}>
                <p>商品の違いに悩む時はありませんか？</p>
                <p>そんな時は、このページでアイテム情報を比較してみることができます。</p>
                <p>また、アイテムの画像部分をクリックすると、詳細を確認することができます。</p>
                <p><Link component={RouterLink} to="/itemSearch">→比較したい商品を探す</Link></p>
            </div>


            <div style={ {margin: '50px 0 20px 0' }}>
                <table style={{ margin: '0 auto' }}>
                <tr>
                    <th className={classes.tableHeader}></th>
                    <th className={classes.tableHeader}>ブランド</th>
                    <th className={classes.tableHeader}>商品名</th>
                    <th className={classes.tableHeader}>容量</th>
                    <th className={classes.tableHeader}>価格</th>
                    <Tooltip title={explain_green} followCursor>
                    <th className={classes.tableHeader}><img src={leaf_green} alt="ewg_green" style={{ width: '30px' }} />成分数</th>
                    </Tooltip>
                    <Tooltip title={explain_yellow} followCursor>
                    <th className={classes.tableHeader}><img src={leaf_yellow} alt="ewg_yellow" style={{ width: '30px' }} />成分数</th>
                    </Tooltip>
                    <Tooltip title={explain_red} followCursor>
                    <th className={classes.tableHeader}><img src={leaf_brown} alt="ewg_red" style={{ width: '30px' }} />成分数</th>
                    </Tooltip>
                    <th className={classes.tableHeader}>発がん性</th>
                    <th className={classes.tableHeader}>発達/生殖毒性</th>
                    <th className={classes.tableHeader}>免疫毒性</th>
                </tr>

                {itemInformation()}


                </table>
            </div>

                <p>コスメ比較へ追加されたアイテムはありません。</p>
        </div>
        </div>
        </>
    )
}