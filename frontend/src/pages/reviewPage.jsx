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
import { useParams } from 'react-router-dom';

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

});

export const ReviewPage = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [item, setItem] = useState(null);
    const [skinTypes, setSkinTypes] = useState([]);
    const [reviews, setReviews] = useState(null);
    const [myReview, setMyReview] = useState(null);
    const [star, setStar] = useState(0); //自分の☆
    const [starAverage, setStarAverage] = useState(0);
    const [select, setSelect] = useState(0); //skinType選択
    const [form, setForm] = useState('');

    useEffect(async () => {
        const responseUser = await axios.get('/me');
        const responseItem = await axios.get(`/items/${id}`);
        const responseSkinTypes = await axios.get('/skin_types');
        const responseReviews = await axios.get('/reviews', {
            params: {
                item_id: id,
            }
        });
        const u = responseUser.data;
        const i = responseItem.data;
        const s = responseSkinTypes.data;
        const r = responseReviews.data;
        const m = responseReviews.data.find((data) => data.user_id === responseUser.data.id);
        setUser(u);
        setItem(i);
        setSkinTypes(s);
        setReviews(r);
        setMyReview(m);

        let starTotal = 0;
        // ↓TODO: for文だとレビュー増えた時に重くなる？
        for (let i = 0; i < responseReviews.data.length; i++){
            starTotal = starTotal + (responseReviews.data[i].star);
        }
        // console.log(starTotal);
        const calc = starTotal / responseReviews.data.length;
        // console.log(calc);
        const int = Math.round(calc)
        setStarAverage(int);
    }, [])

    const userName = () =>{
        if (user === null){
            return <CircularProgress color="success" size="15px" />
        }
        return (
            <>
            <p style={{ fontSize: '25px', textAlign: 'left' }}>{user.name}</p>
            <p style={{ fontSize: '15px', textAlign: 'left' }}>{user.skin_type_name}</p>
            </>
        );
    };
    


    const itemInformation = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        if (reviews !== null){
            return (
                <div className={classes.styleParent}>
                    <img src={item.img} alt="itemImg" style={{ maxWidth: '180px', height: '100%', margin: 'auto 30px' }} />
                    <div>
                        <p style={{ textAlign: 'left', fontSize: '25px' }}>{item.brand}</p>
                        <p style={{ textAlign: 'left', fontSize: '25px' }}>{item.name}</p>
                        <Box borderColor="transparent" style={{ marginTop: '20px', textAlign: 'right' }}>
                            <p style={{ fontSize: '20px' }}>レビュー評価（{reviews.length}件）</p>
                            <Rating name="read-only" value={starAverage} readOnly />
                        </Box>
                    </div>
                </div>
            );
        }
    };

    const handleAddForm = (event) => {
        setForm(() => event.target.value);
    };

    const handleSend = async () => {
        console.log('handleSend');
        try {
            if (form.replace(/\n|\s/g, '') === ''){
                window.alert('レビューを記入してください');
                return;
            }
            if (star === 0){
                window.alert('星の数を選択してください');
                return;
            }
            const response = await axios.post('/reviews', {
                review: form,
                star: star,
                item_id: id,
            });
            const responseReviews = await axios.get('/reviews', {
                params: {
                    item_id: id,
                }
            });
            const m = responseReviews.data.find((data) => data.user_id === user.id);
            setMyReview(m);
            window.alert('レビューを投稿しました');
        } catch (e) {
            window.alert('送信に失敗しました');
            console.error(e)
            return;
        }         

    };

    const handleEdit = async () => {
        console.log('handleEdit');
        try {
            const responseReviews = await axios.get('/reviews', {
                params: {
                    item_id: id,
                }
            });
            const m = responseReviews.data.find((data) => data.user_id === user.id);
            const mKeys =  JSON.stringify(m);
            const myReviewKeys =  JSON.stringify(myReview);

            if (mKeys !== myReviewKeys){
                const responseDelete = await axios.delete(`/reviews/${myReview.id}`);
                const responsePost = await axios.post('/reviews', {
                    review: myReview.review,
                    star: myReview.star,
                    item_id: id,
                });
                const responseReviews = await axios.get('/reviews', {
                    params: {
                        item_id: id,
                    }
                });
                const newDate = responseReviews.data.find((data) => data.user_id === user.id);
                setMyReview(newDate);
                window.alert('レビューを変更しました');
            }else{
                window.alert('レビューが変更されていません');
            }
        } catch (e) {
            window.alert('送信に失敗しました');
            return;
        }         
};

    const handleSkinTypeChange = (event) => {
        setSelect(event.target.value);
    };

    const handleDelete = async() => {
        const confirmMessage = '投稿中のレビューを削除してよろしいですか？'
        let result = window.confirm(confirmMessage);
        if (result){
            console.log(myReview);
            try {
                const response = await axios.delete(`/reviews/${myReview.id}`);
                const responseReviews = await axios.get('/reviews', {
                    params: {
                        item_id: id,
                    }
                });
                const m = responseReviews.data.find((data) => data.user_id === user.id);
                setMyReview(m);
                setStar(0);
                setForm('');
                // TODO: 星の数とレビュー評価の総数も書き換える？
                window.alert('削除しました');
            } catch (e) {
                window.alert('送信に失敗しました');
                console.error(e)
                return;
            }         
        } else {
            return;
        }
    };

    const reviewForm = () => {
        return (
            <>
            <div style={{ width: '500px', margin: '0 auto' }}>
                {userName()}
                <Box style={{ padding: '0', textAlign: 'right' }} component="fieldset" borderColor="transparent">
                    <Rating
                    name="simple-controlled"
                    value={star}
                    onChange={(event) => {
                        setStar(event.target.value);
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
                    value={form}
                    onChange={handleAddForm}
                    // defaultValue="Default Value"
                    />
                </Box>
            </div>

            <Btn message='投稿する' onClick={handleSend} />

        </>
        )
    }

    const review = () => {
        if (myReview === null){
            return <CircularProgress color="success" size="15px" />
        }
        if (myReview === undefined){
            return (reviewForm())
        }
        return (
            <>
                <div style={{ width: '500px', margin: '0 auto' }}>
                    {userName()}
                    <Box style={{ padding: '0', textAlign: 'right' }} component="fieldset" borderColor="transparent">
                    {/* <Typography component="legend">Controlled</Typography> */}
                        <Rating
                        name="simple-controlled"
                        // value={value}
                        value={myReview.star}
                        // readOnly
                        onChange={(event) => {
                            setMyReview({...myReview, star: event.target.value});
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
                        value={myReview.review}
                        // defaultValue="Default Value"
                        onChange={(event) => {
                            setMyReview({...myReview, review:event.target.value});
                        }}                    
                        />
                    </Box>
                </div>
                <Btn message='上記の内容で上書きする' onClick={handleEdit} />
                <Tooltip title="Delete" style={{ marginLeft: '20px' }}>
                    <IconButton>
                        <DeleteIcon onClick={handleDelete} />
                    </IconButton>
                </Tooltip>
            </>
        )
    }

    const allReviews = () => {
        if (reviews === null){
            return <CircularProgress color="success" size="15px" />
        }
        if (reviews.length === 0){
            return (
                <div style={{ fontSize: '20px', color: 'green', margin: '90px auto' }}>
                    <p>この商品のレビューはまだありません。</p>
                </div>
            )
        }
        if (select === 0){
            return (
                reviews.filter((data) => data.user_id !== user.id).map((review, index) => (
                <>
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <p style={{ fontSize: '25px', textAlign: 'left' }} key={index}>{review.name}</p>
                        <p style={{ fontSize: '15px', textAlign: 'left' }}>{review.skin_type}</p>
                        <p style={{ fontSize: '15px', textAlign: 'right' }}>{review.posted_date}</p>
                        <Box style={{ padding: '0', textAlign: 'right' }} component="fieldset" borderColor="transparent">
                        {/* <Typography component="legend">Controlled</Typography> */}
                            <Rating
                            name="read-only"
                            value={review.star}
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
                        value={review.review}
                        sx={{ mb: 5 }}
                        inputProps={{ readonly: true }}
                        // defaultValue="Default Value"
                        />
                    </Box>
                </>
                ))
            );
        }
        
        return (
            reviews.filter((data) => data.user_id !== user.id && data.skin_type_id === select).map((review, index) => (
            <>
                <div style={{ width: '500px', margin: '0 auto' }}>
                    <p style={{ fontSize: '25px', textAlign: 'left' }} key={index}>{review.name}</p>
                    <p style={{ fontSize: '15px', textAlign: 'left' }}>{review.skin_type}</p>
                    <p style={{ fontSize: '15px', textAlign: 'right' }}>{review.posted_date}</p>
                    <Box style={{ padding: '0', textAlign: 'right' }} component="fieldset" borderColor="transparent">
                    {/* <Typography component="legend">Controlled</Typography> */}
                        <Rating
                        name="read-only"
                        value={review.star}
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
                    value={review.review}
                    sx={{ mb: 5 }}
                    inputProps={{ readonly: true }}
                    // defaultValue="Default Value"
                    />
                </Box>
            </>
            ))
        );
    }

    // const button = () => {
    //     // if (){
    //     //     return (
    //     //         <Btn message='投稿する' onClick={handleSend} />
    //     //     )
    //     // }
    //     return (
    //         <>
    //             <Btn message='編集する' onClick={handleEdit} />
    //             <Tooltip title="Delete" style={{ marginLeft: '20px' }}>
    //                 <IconButton>
    //                     <DeleteIcon onClick={handleDelete} />
    //                 </IconButton>
    //             </Tooltip>
    //         </>
    //     )
    // }

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

                {review()}

                {/* {button()} */}

            </div>

            <div style={{ margin: '40px auto' }}>
                <img src={green_leaf} alt="green_leaf" className={classes.TitleImg} />
                <p className={classes.Title}>レビュー一覧</p>
                <FormControl sx={{ minWidth: 120, marginLeft: '50px', verticalAlign: 'middle' }} size="small">
                    <InputLabel id="demo-simple-select-label">SkinType</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={select}
                    label="Select"
                    onChange={handleSkinTypeChange}
                    >
                        {/* TODO: ↓idが0はOK？ */}
                        <MenuItem value={0}>All</MenuItem>
                        {skinTypes.map((skinType) => (
                            <MenuItem value={skinType.id}>{skinType.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            {allReviews()}

        </div>
        </>
    );
};