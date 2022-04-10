import React, {useState, useEffect} from 'react';
import axios from '../axios';
import header_img from '../img/headerReview.jpg';
import { Btn } from '../components/btn';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@mui/material/TextField';
import green_leaf from '../img/green_leaf_img_clear.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles({
    styleParent: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0 0 0',
    },
    TitleImg: {
        maxWidth: '60px',
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 auto 40px',

    },
    Title: {
        fontSize: '27px',
        display: 'inline-block',
    },
    TitleForm: {
        margin: '40px auto',
        padding: '20px 0',
        background: '#cae1df63',
        borderRadius: '20px',
    },

})

export const ReviewPage = () => {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const [item, setItem] = useState(null);
    const [value, setValue] = React.useState(0); //☆
    const [skinType, setSkinType] = React.useState('');

    useEffect(async () => {
        const responseUser = await axios.get('/me')
        const responseItem = await axios.get('/item')
        const u = responseUser.data
        const i = responseItem.data
        setUser(u)
        setItem(i)
    }, [])

    const userName = () =>{
        if(user === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <>
            <p style={{ fontSize: '25px', textAlign: 'left' }}>{user.name}</p>
            <p style={{ fontSize: '15px', textAlign: 'left' }}>{user.skin_type_name}</p>
            </>
        )
    }


    const itemInformation = () => {
        if(item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return(
            <>
                <div className={classes.styleParent}>
                    <img src={item.img} alt="itemImg" style={{ maxWidth: '180px', height: '100%', margin: 'auto 30px' }} />
                    <div>
                        <p style={{ textAlign: 'left', fontSize: '25px' }}>{item.brand}</p>
                        <p style={{ textAlign: 'left', fontSize: '25px' }}>{item.name}</p>
                        <Box borderColor="transparent" style={{ marginTop: '20px', textAlign: 'right' }}>
                            <p style={{ fontSize: '20px' }}>レビュー評価（○○件）</p>
                            <Rating name="read-only" value={value} readOnly />
                        </Box>
                    </div>
                </div>
            </>
        )
    }

    const onClickSend = () => {
        console.log('onClickSend')
    }
    const onClickEdit = () => {
        console.log('onClickEdit')
    }
    const handleChange = (event) => {
        setSkinType(event.target.value);
    };
  

    return(
        <>
        <div className='MainContainer'>
            <img src={header_img} alt="header" style={{ width: '100%' }}/>

            {itemInformation()}

            <div style={{ marginTop: '30px' }}>
                <p>こちらのアイテムを使用したことはありますか？</p>
                <p>使ってみた感想をぜひ教えてください。</p>
                <p>まだ使ったことがない方は、同じ肌タイプの方だけのレビューを見ることもできますよ。</p>
            </div>

            <div className={classes.TitleForm}>
                {/* <img src={green_leaf} alt="" className={classes.TitleImg} />
                <p className={classes.Title}>マイレビュー</p> */}
                <div style={{ width: '500px', margin: '0 auto' }}>
                {userName()}
                <Box style={{ padding: '0', textAlign: 'right' }} component="fieldset" borderColor="transparent">
                {/* <Typography component="legend">Controlled</Typography> */}
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                </Box>
                </div>

                <div>
                <Box
                className={classes.Title}
                component="form"
                sx={{
                    borderColor: 'green',
                    margin: '20px auto',
                    '& .MuiTextField-root': { m: 1, width: '500px' },
                }}
                noValidate
                autoComplete="off"
                >        
                    <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                    />
                </Box>
            </div>

                <Btn message='投稿する' onClick={onClickSend} />
                {/* <Btn message='編集する' onClick={onClickEdit} /> */}
                <Tooltip title="Delete" style={{ marginLeft: '20px' }}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>

            </div>

            <div style={{ margin: '40px auto' }}>
                <img src={green_leaf} alt="" className={classes.TitleImg} />
                <p className={classes.Title}>レビュー一覧</p>
                <FormControl sx={{ minWidth: 120, marginLeft: '50px', verticalAlign: 'middle' }} size="small">
                    <InputLabel id="demo-simple-select-label">SkinType</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={skinType}
                    label="skinType"
                    onChange={handleChange}
                    >
                    {/* TODO: スキンタイプ */}
                    <MenuItem value={10}>DrySkin</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div style={{ width: '500px', margin: '0 auto' }}>
                <p style={{ fontSize: '25px', textAlign: 'left' }}>〇〇ユーザー名</p>
                <p style={{ fontSize: '15px', textAlign: 'left' }}>〇〇スキンタイプ</p>
                <Box style={{ padding: '0', textAlign: 'right' }} component="fieldset" borderColor="transparent">
                {/* <Typography component="legend">Controlled</Typography> */}
                    <Rating
                    name="read-only"
                    value={value}
                    readOnly
                    />
                </Box>
            </div>
                <Box
                component="form"
                sx={{
                    borderColor: 'green',
                    '& .MuiTextField-root': { m: 1, width: '500px' },
                }}
                noValidate
                autoComplete="off"
                >        
                    <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    value='test text'
                    sx={{mb: 5}}
                    // defaultValue="Default Value"
                    />
                </Box>



            <div style={{ width: '500px', margin: '0 auto' }}>
                <p style={{ fontSize: '25px', textAlign: 'left' }}>〇〇ユーザー名</p>
                <p style={{ fontSize: '15px', textAlign: 'left' }}>〇〇スキンタイプ</p>
                <Box style={{ padding: '0', textAlign: 'right' }} component="fieldset" borderColor="transparent">
                {/* <Typography component="legend">Controlled</Typography> */}
                    <Rating
                    name="read-only"
                    value={value}
                    readOnly
                    />
                </Box>
            </div>
                <Box
                component="form"
                sx={{
                    borderColor: 'green',
                    '& .MuiTextField-root': { m: 1, width: '500px' },
                }}
                noValidate
                autoComplete="off"
                >        
                    <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    value='test text'
                    sx={{mb: 5}}
                    // defaultValue="Default Value"
                    />
                </Box>

        </div>
        </>
    )
}