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
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { margin } from '@mui/system';

const useStyles = makeStyles({
    StyleCreate: {
        margin: '30px auto',
        padding: '3%',
        background: '-webkit-gradient(linear,left top,left bottom,from(#cce9cc),to(#e1e9b8))',
        borderRadius: '10px',
        position: 'relative',
        maxWidth: '70%',
    },
    CreateMessage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        margin: 'auto',
    },
    TitleImg: {
        maxWidth: '70px',
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 auto 40px',

    },
    Title: {
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

})

const data = [
    {
      index: 0,
      name: 'Low Hazard',
      value: 70,
    },
    {
      index: 1,
      name: 'Moderate Hazard',
      value: 20,
    },
    {
      index: 2,
      name: 'High Hazard',
      value: 10,
    },
    //データないor不明時↓
    {
      index: 3,
      name: 'High Hazard',
      value: 0,
    },
  ];
const ChartColors = [
    '#5ac9b4',
    '#f5c56b',
    '#f04b4be7',
    '#cae1df7d',
  ];


export const MyFolder = () => {
    const classes = useStyles();
    const [folderName, setFolderName] = useState('');
    const [folders, setFolders] = useState(null);

    useEffect(async () => {
        const responseFolders = await axios.get('/folders');
        const f = responseFolders.data;
        setFolders(f);
        console.log(folders)
    }, []);

    const handleFolderCreate = async() => {
        console.log('handleFolderCreate');

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
            window.alert('作成に失敗しました');
            // console.error(e);
            return;
        }

    }


    const folderForm = () => {
        if (folders === null){
            return <CircularProgress color="success" size="15px" />
        }
        console.log(folders)

        if (folders.length === 0){
            return (
                <>
                    <p>フォルダが作成されていません。</p>
                </>
            )
        }
        return (
            <>
            {folders.map((folder, index) => (
                <div style={{ background: '#cae1df63', padding: '20px', borderRadius: '20px', marginBottom: '20px' }} key={index}>
                    <div className='FolderName'>
                        <img src={green_leaf} alt="" className={classes.TitleImg} />
                        <p className={classes.Title}>{folder}</p>
                    </div>
                    <div>
                        <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block'}}>
                            <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                        </Box>
                        <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block'}}>
                            <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                        </Box>
                        <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block'}}>
                            <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                        </Box>
                        <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block'}}>
                            <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                        </Box>
                        <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block'}}>
                            <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                        </Box>
                        <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block'}}>
                            <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                        </Box>
                        <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block'}}>
                            <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                        </Box>
                        <Box sx={{ margin: '5px', width: '110px', height: '110px', border: '1px dashed grey', display: 'inline-block'}}>
                            <Button style={{ width: '110px', height: '110px' }} component={RouterLink} to="/itemSearch" ><AddCircleOutlineIcon style={{ color: 'grey' }}/></Button>
                        </Box>
                    </div>
                    <div className={classes.ewgForm}>
                            <p style={{ fontSize: '30px', color: 'green', textShadow: '2px 2px 1px white', margin: '20px auto' }}>EWG安全性</p>
                            <Grid container spacing={1}>
                            <Grid item xs={6}>
                            <div>
                                <p style={{ color: 'green', textShadow: '2px 2px 1px white' }}>配合成分合計： 28種類</p>
                                <div className={classes.styleParent}>
                                    <img src={leaf_green} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                    <div style={{ fontSize: '15px', marginTop: '20px' }}><span style={{ fontSize: '25px', fontWeight: 'bold', color: '#5ac9b4' }}>20</span> / 28</div>
                                </div>
                                <div className={classes.styleParent}>
                                    <img src={leaf_yellow} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                    <div style={{ fontSize: '15px', marginTop: '20px' }}><span style={{ fontSize: '25px', fontWeight: 'bold', color: '#f5c56b' }}>7</span> / 28</div>
                                </div>
                                <div className={classes.styleParent}>
                                    <img src={leaf_brown} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                    <div style={{ fontSize: '15px', marginTop: '20px' }}><span style={{ fontSize: '25px', fontWeight: 'bold', color: '#f04b4be7' }}>1</span> / 28</div>
                                </div>
                            </div>
                            </Grid>
                            <Grid item xs={6}>
                            <div style={{ display: 'inline-block' }}>
                                <p style={{ color: 'green', textShadow: '2px 2px 1px white' }}>EWG等級別成分割合(％)</p>
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
                </div>
            ))}
            </>
        )
    }


    return(
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

            <div className={classes.StyleCreate}>
                <div className={classes.CreateMessage}>
                    <Box
                    component="form"
                        // sx={{
                        //     '& > :not(style)': { m: 5, width: '25ch' },
                        // }}
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
    )
}