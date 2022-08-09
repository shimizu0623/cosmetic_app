import React, {useState, useEffect} from 'react';
import axios from '../axios';
import { GoBackBtn } from '../components/goBackBtn';
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import green_leaf from '../img/green_leaf_img_clear.png';
import header_img from '../img/headerUnmatchedes.jpg';

const useStyles = makeStyles({
    tableHeader: {
        background: '#4dc9b2c3',
        minWidth: '100px',
    },
    alertForm: {
        background: '#ffeaea',
        maxWidth: '300px',
        margin: '0 auto 50px',
    },
});

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;
// const condition = [
//     { title: 'かゆみがでた' },
//     { title: '肌が赤くなった' },
//     { title: '肌が熱くなった' },
//     { title: 'ひりひりした' },
//     { title: '発疹が出た' },
//     { title: '皮がむけた' },
//     { title: '腫れた' },
//     { title: 'かぶれた' },
//     { title: '肌がかさついた' },
//     { title: '肌がごわついた' },
//     { title: '肌が固くなった' },
//     { title: '吹き出物ができた' },
//     { title: '毛穴が開いた' },
//     { title: 'その他' },
// ];

export const UnmatchedItem = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [attention, setAttention] = useState([]);

    useEffect(async () => {
        const responseItems = await axios.get('/user_unmatchedItems');
        const responseIngredients = await axios.get('/user_unmatchedItems');
        const i = responseItems.data.unmatched_items;
        const ing = responseIngredients.data.unmatched_ingredients;
        setItems(i);
        setAttention(ing);
    }, []);

    const attentionMessage = (attention) => {
        if (attention === null){
            return <CircularProgress color="success" size="15px" />
        }
        if (attention.length === 0){
            return (
                <div className={classes.alertForm}>
                    <h4 style={{ color: 'black', padding: '10px' }}>共通成分はありません</h4>
                </div>
            )
        }
        return (
            <>
                <div className={classes.alertForm}>
                    <h4 style={{ color: 'red', paddingTop: '10px', fontSize: '20px' }}>共通成分が見つかりました！</h4>
                    <div style={{ paddingBottom: '10px' }}>
                        <ul style={{ listStyle: 'none', padding: 0, fontWeight: 'bold', fontSize: '20px' }}>
                            {attention.map(ingredient => (<li>{ingredient}</li>))}
                        </ul>
                    </div>
                </div>            
            </>
        );
    }

    const handleSave = async (index, id) => {
        const confirmMessage = 'メモを保存しますか？'
        let result = window.confirm(confirmMessage);
        if (result){
            try {
                const responsePut = await axios.put(`/user_unmatchedItems/${id}`, {
                    memo: items[index].memo,
                });
                const responseItems = await axios.get('/user_unmatchedItems');
                const i = responseItems.data.unmatched_items;
                setItems(i);
                window.alert('保存しました');
            } catch (e) {
                window.alert('保存できませんでした');
                return;
            }                
        } else {
            return;
        }    
    };

    const handleDelete = async (e, id) => {
        const confirmMessage = '削除してよろしいですか？'
        let result = window.confirm(confirmMessage);
        if (result){
            try {
                const response = await axios.delete(`/user_unmatchedItems/${id}`);
                const responseItems = await axios.get('/user_unmatchedItems');
                const i = responseItems.data.unmatched_items;
                setItems(i);
                window.alert('削除しました');
            } catch (e) {
                window.alert('削除できませんでした');
                console.error(e)
                return;
            }                
        } else {
            return;
        }    
    };

    const handleEdit = (index, value) => {
        const newMemo = [...items];
        newMemo[index].memo = value;
        setItems(newMemo);
    }

    const itemInformation = () => {
        if (items === null){
            return <CircularProgress color="success" size="15px" />
        }    
        if (items.length === 0){
            return (
                <div style={{ paddingBottom: '100px' }}>
                    <p>登録中のアイテムはありません。</p>
                </div>
            );
        }

        return (
            <>
            <table style={{ margin: '0 auto' }}>
                <tr>
                    <th className={classes.tableHeader}></th>
                    <th className={classes.tableHeader}>商品名</th>
                    <th className={classes.tableHeader}>ブランド</th>
                    {/* TODO: ↓後程実装する */}
                    {/* <th className={classes.tableHeader}>使用後の肌状態</th> */}
                    <th className={classes.tableHeader}>メモ</th>
                    <th className={classes.tableHeader}></th>
                    <th className={classes.tableHeader}></th>
                </tr>

                {items.map((item, index) => (
                    <tr key={index}>
                    <td scope="row">
                        <img
                            src={item.img}
                            alt="itemImg"
                            style={{ maxWidth: '90px', height: '100%', margin: 'auto 30px', cursor: 'pointer' }}
                            onClick={() => navigate(`/item/${item.item_id}`)}
                        />
                    </td>
                    <td onClick={() => navigate(`/item/${item.item_id}`)} style={{ cursor: 'pointer' }}>{item.name}</td>
                    <td>{item.brand}</td>
                    {/* <td>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={condition}
                        sx={{ margin: '8px' }}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                // onClick={(e) => {handleChangeMemo(e, condition.id)}}
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ minWidth: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label="使用後の肌状態" />
                        )}
                    />
                    </td> */}
                    <td>
                        <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={2}
                        label="使用後の肌"
                        value={item.memo ? item.memo : ''}
                        onChange={(e) => handleEdit(index, e.target.value)}                    
                        />
                    </td>
                    <td><Button 
                            variant="contained"
                            style={{
                                marginTop: '10px',
                                color: 'white',
                                background: 'rgba(141, 203, 193)',
                                borderRadius: '7px',
                            }}
                            onClick={(e) => handleSave(index, item.id)}>
                        メモを保存
                        </Button>
                    </td>
                    <td>
                        <Button 
                            variant="contained"
                            style={{
                                marginTop: '10px',
                                color: 'white',
                                background: '#f04b4be7',
                                borderRadius: '7px',
                            }}
                            onClick={(e) => handleDelete(e, item.item_id)}>
                        削除
                        </Button>
                    </td>
                    </tr>
                ))}
            </table>
            </>
        );
    };



    return (
        <>
        <div className='MainContainer'>
            <GoBackBtn />
            <img src={header_img} alt="header" style={{ width: '100%' }}/>

            <div>
                <p>ここでは、肌に合わなかったアイテムを確認することができます。</p>
                <p>共通成分が見つかると、その成分が含まれない化粧品を探すことができるようになります。</p>
                <p>過去に合わなかったアイテムを登録して、自分の肌に合わない成分を見つけましょう。</p>
            </div>

            

            <img src={green_leaf} alt="" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '0 auto 40px' }} />
            <h1 style={{ fontSize: '40px', display: 'inline-block' }}>登録中の肌に合わなかったアイテム</h1>
            <div style={{ margin: '50px 0 20px 0' }}>

            {attentionMessage(attention)}

            {itemInformation()}

            </div>

        </div>
        </>
    );
};