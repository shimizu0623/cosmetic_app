import React, {useState, useEffect} from 'react';
import axios from '../axios';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { GoBackBtn } from '../components/goBackBtn';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import green_leaf from '../img/green_leaf_img.jpg';
import header_img from '../img/headerUnmatchedes.jpg';

const useStyles = makeStyles({
    tableHeader: {
        background: '#4dc9b2c3',
        minWidth: '100px',
    },
    alertForm: {
        background: '#ffeaea',
        maxWidth: '300px',
        margin: '0 auto',
    },

})

export const UnmatchedItem = () => {
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
                    <td><TextareaAutosize aria-label="minimum height" minRows={10} placeholder='例：使用後、肌がかゆくなった' style={{ width: 250 }} /></td>
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



    return(
        <>
        <div className='MainContainer'>
        <GoBackBtn />
        <img src={header_img} alt="header" style={{ width: '100%' }}/>

        <div>
            <p>ここでは、肌に合わなかったアイテムを確認することができます。</p>
            <p>共通成分が見つかると、その成分が含まれない化粧品を探すことができるようになります。</p>
            <p>過去に合わなかったアイテムを登録して、自分の肌に合わない成分を見つけましょう。</p>
        </div>

        <div className={classes.alertForm}>
            <h4 style={{color: 'red', paddingTop: '10px'}}>共通成分が見つかりました！</h4>
            <div style={{paddingBottom: '10px'}}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>○○酸</li>
                </ul>
            </div>
        </div>
        
        <div className={classes.alertForm}>
            <h4 style={{color: 'black', padding: '10px'}}>共通成分はありません</h4>
        </div>


        <img src={green_leaf} alt="" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '0 auto 40px' }} />
        <h1 style={{ fontSize: '40px', display: 'inline-block' }}>登録中の肌に合わなかったアイテム</h1>
        <div style={ {margin: '50px 0 20px 0' }}>
            <table style={{ margin: '0 auto' }}>
                <tr>
                    <th className={classes.tableHeader}></th>
                    <th className={classes.tableHeader}>ブランド</th>
                    <th className={classes.tableHeader}>商品名</th>
                    <th className={classes.tableHeader}>メモ</th>
                </tr>

                    {itemInformation()}

            </table>
        </div>

        <div>
            <p>登録中のアイテムはありません。</p>
        </div>



        </div>
        </>
    )
}