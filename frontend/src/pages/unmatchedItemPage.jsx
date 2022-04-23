import React, {useState, useEffect} from 'react';
import axios from '../axios';
import { GoBackBtn } from '../components/goBackBtn';
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
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
        margin: '0 auto',
    },

});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const condition = [
    { title: 'かゆみがでた' },
    { title: '肌が赤くなった' },
    { title: '肌が熱くなった' },
    { title: 'ひりひりした' },
    { title: '発疹が出た' },
    { title: '皮がむけた' },
    { title: '腫れた' },
    { title: 'かぶれた' },
    { title: '肌がかさついた' },
    { title: '肌がごわついた' },
    { title: '肌が固くなった' },
    { title: '吹き出物ができた' },
    { title: '毛穴が開いた' },
];

export const UnmatchedItem = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [item, setItem] = useState([]);
    
    useEffect(async () => {
        const responseItem = await axios.get('/user_unmatchedItems');
        const i = responseItem.data;
        setItem(i);
    }, []);

    const itemInformation = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <>
                {item.map((item, index) => (
                    <tr key={index}>
                    <td scope="row"><img src={item.img} alt="itemImg" style={{ maxWidth: '90px', height: '100%', margin: 'auto 30px' }} /></td>
                    <td>{item.brand}</td>
                    <td>{item.name}</td>
                    <td>
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
                                checked={selected}
                            />
                            {option.title}
                            </li>
                        )}
                        style={{ minWidth: 300 }}
                        // TODO: ↓state?
                        renderInput={(params) => (
                            <TextField {...params} label="使用後の肌状態" />
                        )}
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
                            onClick={(e) => handleDelete(e, item.item_id)}>
                        削除
                        </Button>
                    </td>
                    </tr>
                ))}
            </>
        );
    };

    const handleDelete = async (e, id) => {
        const confirmMessage = '削除してよろしいですか？'
        let result = window.confirm(confirmMessage);
        if (result){
            console.log('handleDelete');
            try {
                console.log('try');
                const response = await axios.delete(`/user_unmatchedItems/${id}`);
                console.log('ok')
                const responseItem = await axios.get('/user_unmatchedItems');
                const i = responseItem.data;
                setItem(i);
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
    );
};