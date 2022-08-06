import React, {useState, useEffect} from 'react';
import axios from '../axios';
import header_img from '../img/headerMyFolder.jpg';
import green_leaf from '../img/green_leaf_img_clear.png';
import leaf_green from '../img/leaf_green.png';
import leaf_yellow from '../img/leaf_yellow.png';
import leaf_brown from '../img/leaf_brown.png';
import { PieChart, Pie, Cell } from 'recharts'
import { Btn } from '../components/btn';
import { GoBackBtn } from '../components/goBackBtn';
import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
    styleCreate: {
        margin: '30px auto',
        padding: '3%',
        background: '-webkit-gradient(linear,left top,left bottom,from(#cce9cc),to(#e1e9b8))',
        borderRadius: '10px',
        position: 'relative',
        maxWidth: '70%',
    },
    createMessage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        margin: 'auto',
    },
    titleImg: {
        maxWidth: '70px',
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 auto 40px',
    },
    title: {
        fontSize: '40px',
        display: 'inline-block',
    },
    styleParent: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0 0 0',
    },
    ewgForm: {
        margin: '40px auto 0',
        background: '#cae1df',
        borderRadius: '20px',
        border: 'dashed 2px #019401b8',
        boxShadow: '0px 0px 0px 5px #cae1df',
        width: '70%',
    },
});

const chartColors = [
    '#5ac9b4', //green
    '#f5c56b', //yellow
    '#f04b4be7', //red
    '#ababab', //gray
];

export const MyFolder = () => {
    const classes = useStyles();
    const [folderName, setFolderName] = useState('');
    const [folders, setFolders] = useState(null);

    useEffect(async () => {
        const responseGet = await axios.get('/folders');
        const g = responseGet.data;
        setFolders(g);
    }, []);

    const handleFolderCreate = async() => {
        try {
            if (folderName === ''){
                window.alert('フォルダ名を入力してください');
                return;
            }
            const response = await axios.post('/folders', {
                name: folderName
            });
            const responseFolders = await axios.get('/folders');
            const f = responseFolders.data;
            setFolders(f);
            setFolderName('');
            window.alert('フォルダを作成しました');
        } catch (e) {
            window.alert('フォルダの作成は３つまでです');
            return;
        }
    }

    const handleFolderDelete = async (e, id) => {
        let result = window.confirm('ファイルを削除してよろしいですか？');
        if (result){
            try {
                const responseDelete = await axios.delete(`/folders/${id}`);
                const responseFolders = await axios.get('/folders');
                const f = responseFolders.data;
                setFolders(f);
                window.alert('削除しました');
            } catch (e) {
                window.alert('削除できませんでした');
                return;
            }                
        } else {
            return;
        }    
    }

    const folderForm = () => {
        if (folders === null){
            return <CircularProgress color="success" size="15px" />
        }
        if (folders.length === 0){
            return (
                <>
                    <p>フォルダが作成されていません。</p>
                </>
            )
        }
    
        const renderBox = (itemOrNull) => {
            if (itemOrNull === null){
                return (
                    <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block' }}>
                        <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                    </Box>
                )
            } else {
                return (
                    <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block' }}>
                        <Button style={{ width: '110px', height: '110px' }}>
                            <img
                                src={itemOrNull.img}
                                loading="lazy"
                                style={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block' }}
                            />
                        </Button>
                    </Box>
                )
            }
        }

        return (
        <>
            {folders.map((folder, index) => {
                const paddings = [];
                for (let i = 0; i < 8; i++) {
                    paddings.push(null);
                }
                const boxes = folder.items.concat(paddings).slice(0, 8);
                const totalIngredient = folder.green + folder.yellow + folder.red + folder.gray;
                const data = [];

                const rateGreen = () => {
                    const calc = Math.round(folder.green / totalIngredient * 100);
                    const add = { index: 0, name: 'Low Hazard', value: calc };
                    data.push(add);
                };
                
                const rateYellow = () => {
                    const calc = Math.round(folder.yellow / totalIngredient * 100);
                    const add = { index: 1, name: 'Moderate Hazard', value: calc };
                    data.push(add);
                };
                
                const rateRed = () => {
                    const calc = Math.round(folder.red / totalIngredient * 100);
                    const add = { index: 2, name: 'High Hazard', value: calc };
                    data.push(add);
                };
                
                //データないor不明時↓
                const rateGray = () => {
                    const calc = Math.round(folder.gray / totalIngredient * 100);
                    const add = { index: 3, name: 'Not Information', value: calc };
                    data.push(add);
                };

                return (
                    <div style={{ background: '#cae1df63', padding: '20px', borderRadius: '20px', marginBottom: '20px' }} key={index}>
                        <div className='FolderName'>
                            <img src={green_leaf} alt="" className={classes.titleImg} />
                            <p className={classes.title}>{folder.name}</p>
                        </div>
                        <div>
                            {boxes.map((itemOrNull) => {
                                return (
                                    <>
                                        {renderBox(itemOrNull)}
                                    </>
                                )
                            })}
                        </div>
                        <div className={classes.ewgForm}>
                            <p style={{ fontSize: '30px', color: 'green', textShadow: '2px 2px 1px white', margin: '20px auto' }}>EWG安全性</p>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <div>
                                        <p style={{ color: 'green', textShadow: '2px 2px 1px white' }}>配合成分合計： {totalIngredient}種類</p>
                                        <div className={classes.styleParent}>
                                            <img src={leaf_green} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                            <div style={{ fontSize: '15px', marginTop: '20px' }}><span style={{ fontSize: '25px', fontWeight: 'bold', color: '#5ac9b4' }}>{folder.green}</span> / {totalIngredient}</div>
                                        </div>
                                        <div className={classes.styleParent}>
                                            <img src={leaf_yellow} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                            <div style={{ fontSize: '15px', marginTop: '20px' }}><span style={{ fontSize: '25px', fontWeight: 'bold', color: '#f5c56b' }}>{folder.yellow}</span> / {totalIngredient}</div>
                                        </div>
                                        <div className={classes.styleParent}>
                                            <img src={leaf_brown} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                            <div style={{ fontSize: '15px', marginTop: '20px' }}><span style={{ fontSize: '25px', fontWeight: 'bold', color: '#f04b4be7' }}>{folder.red}</span> / {totalIngredient}</div>
                                        </div>
                                    </div>
                                </Grid>

                                {rateGreen()}
                                {rateYellow()}
                                {rateRed()}
                                {rateGray()}

                                <Grid item xs={6}>
                                    <div style={{ display: 'inline-block' }}>
                                        <p style={{ color: 'green', textShadow: '2px 2px 1px white' }}>EWG等級別成分割合(％)</p>
                                        <PieChart width={300} height={300}>
                                            <Pie data={data} dataKey="value" outerRadius={100} label>
                                                {data.map((entry, index) => (
                                                    <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Button 
                                variant="contained"
                                style={{
                                    marginTop: '30px',
                                    color: 'white',
                                    background: '#f04b4be7',
                                    borderRadius: '7px',
                                }}
                                onClick={(e) => handleFolderDelete(e, folder.id)}
                            >
                            ファイルを削除する
                            </Button>
                        </div>
                    </div>
                )
            })}
        </>
        );
    }

    return (
        <>
        <div className='MainContainer'>
            <GoBackBtn />
            <img src={header_img} alt="header" style={{ width: '100%' }}/>
            <div style={{ margin: '30px auto' }}>
                <p>こちらのページでは、あなただけのオリジナル化粧品フォルダが作成することができます。</p>
                <p>季節や肌状態に合わせてお肌がその時必要とするお手入れを保存してみませんか？</p>
                <p>総合的なEWG等級別成分割合を確認することもできますよ。</p>
                <p>どんな時でも健やかな肌で過ごせますように。</p>
            </div>
            <div className={classes.styleCreate}>
            {/* <div className={classes.styleCreate} style={{ zIndex: '-2147483647' }}> */}
                <div className={classes.createMessage}>
                    <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    >
                        <TextField 
                            id="standard-basic" 
                            label="フォルダ名を入力する" 
                            variant="standard"
                            value={folderName}
                            onChange={(event) => {
                                setFolderName(event.target.value);
                            }}
                        />
                        <Btn message='作成する' onClick={handleFolderCreate} />
                    </Box>
                </div>
            </div>

            {folderForm()}

        </div>
        </>
    );
};