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
import green_leaf from '../img/green_leaf_img_clear.png';
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
        minWidth: '110px',
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
    const [folders, setFolders] = useState(null);
    // const [folderItems, setFolderItems] = useState([]);
    // const [favorite, setFavorite] = useState(false);
    const [count, setCount] = useState(0);
    const [starAverage, setStarAverage] = useState(null);
    const [isAnimation, setIsAnimation] = useState(false);
    const navigate = useNavigate();

    useEffect(async () => {
        const responseItem = await axios.get(`/items/${id}`);
        const responseFolders = await axios.get('/folders');
        // const responseFolderItems = await axios.get('/folderItems');
        const i = responseItem.data;
        const c = responseItem.data.ingredients.length;
        const f = responseFolders.data;
        setItem(i);
        setCount(c);
        setFolders(f);
        
        // console.log(responseFolderItems.data)
        // responseFolderItems.data.map((items) => {
        //     // console.log(items);
        //     console.log('A')
        //     // console.log(items.item_id);
        //     // console.log(id);
        //     let array = []
        //     if (3 === items.item_id){
        //         console.log('B')
        //         console.log(items)
        //         const add = array.push(items)
        //         // setFolderItems(...folderItems, items)
        //     }
        //     console.log(array)
        //     // setFolderItems(array)
        //     // console.log(folderItems)
        // })

        // ↓履歴
        try {
            const response = await axios.post('/user_histories', {
                item_id: id,
            });
        } catch (e) {
            window.alert('登録に失敗しました');
            // console.error(e);
            return;
        }

        // ↓☆の平均
        const responseReviews = await axios.get('/reviews', {
            params: {
                item_id: id,
            }
        });
        let starTotal = 0;
        // ↓TODO: for文だと口コミ増えた時に重くなる？
        for (let i = 0; i < responseReviews.data.length; i++){
            starTotal = starTotal + (responseReviews.data[i].star);
        }
        const calc = starTotal / responseReviews.data.length;
        const int = Math.round(calc)
        setStarAverage(int);
    }, []);

    const FavoriteLink = (isFavorite) => {
        if (isFavorite) {
            return (
            <>
                <div className={classes.btnForm}>
                    <button className={classes.btn} onClick={handleDeleteFavorite}>お気に入りから削除</button>
                </div>
            </>
            )}
            return (
            <>
                <div className={classes.btnForm}>
                    <button className={classes.btn} onClick={handleAddFavorite}>お気に入りへ追加</button>
                </div>
            </>
    )};

    const MyFolderLink = (folders) => {
        if (folders.length === 0){
            return <p>→<Link component={RouterLink} to="/myFolder">オリジナルのフォルダを作成する</Link></p>
        }
        return (
            <>
            {folders.map((folder, index) => {
                if (folder.has_item) {
                    return (
                        <div className={classes.btnForm} key={index}>
                            <button className={classes.btn} onClick={(e) => handleDeleteFolder(e, folder.id)}>{folder.name}フォルダから削除</button>
                        </div>
                    )
                }
                return (
                <div className={classes.btnForm} key={index}>
                    <button className={classes.btn} onClick={(e) => handleAddFolder(e, folder.id)}>{folder.name}フォルダへ追加</button>
                </div>
            )
            })}
            </>
        )
    }

    //     if (myFolder) {
    //         return (
    //         <>
    //             <div className={classes.btnForm}>
    //                 <button className={classes.btn} onClick={handleDeleteFolder}>{folder.name}フォルダへ追加</button>
    //             </div>
    //         </>
    //         )}
    //         return (
    //         <>
    //             <div className={classes.btnForm}>
    //                 <button className={classes.btn} onClick={handleAddFolder}>{folder.name}フォルダへ追加</button>
    //             </div>
    //         </>
    // )};

    const UnmatchedLink = (unmatched) => {
        if (unmatched) {
            return (
            <>
                <div className={classes.btnForm}>
                    <button className={classes.btn} onClick={handleDeleteUnmatchedItems}>肌に合わなかったアイテムから削除</button>
                </div>
            </>
            )}
            return (
            <>
                <div className={classes.btnForm}>
                    <button className={classes.btn} onClick={handleAddUnmatchedItems}>肌に合わなかったアイテムへ追加</button>
                </div>
            </>
    )};

    const ComparisonLink = (comparison) => {
        if (comparison) {
            return (
            <>
                <div className={classes.btnForm}>
                    <button className={classes.btn} onClick={handleDeleteComparison}>コスメ比較から削除</button>
                </div>
            </>
            )}
            return (
            <>
                <div className={classes.btnForm}>
                    <button className={classes.btn} onClick={handleAddComparison}>コスメ比較へ追加</button>
                </div>
            </>
    )};

    const AttentionLink = (item) => {
        if (item.unmatched_ingredients.length > 0){
            return (
            <>
                
                <div className={classes.alertForm}>
                    <h4 style={{ color: 'red', paddingTop: '10px', fontSize: '20px' }}>注意！</h4>
                    <p>肌に合わなかった共通成分があります</p>
                    <div style={{ paddingBottom: '10px' }}>
                        <ul style={{ listStyle: 'none', padding: 0, fontWeight: 'bold', fontSize: '20px' }}>
                            {item.unmatched_ingredients.map(ingredient => (<li>{ingredient.name}</li>))}
                        </ul>
                    </div>
                </div>
            </>
            )}
        return;
    };

    const handleAddFavorite = async () => {
        try {
            const response = await axios.post('/user_favorites', {
                item_id: id,
            });    
            window.alert('お気に入りへ追加しました');
            setItem({
                ...item,
                isFavorite: true,
            })
        } catch (e) {
            window.alert('登録に失敗しました');
            // console.error(e);
            return;
        }    
    };    

    const handleAddFolder = async (e, folderId) => {
        // console.log(folderId)
        // console.log('id=' + id)
        try {
            const response = await axios.post('/folderItems', {
                folder_id: folderId,
                item_id: id,
            });
            window.alert('フォルダへ追加しました');
            // setItem(item);
        } catch (e) {
            window.alert(e.response.data.message);
            return;
        }
    };

    const handleAddUnmatchedItems = async () => {
        try {
            const response = await axios.post('/user_unmatchedItems', {
                item_id: id,
            });
            window.alert('肌に合わなかったアイテムへ追加しました');
            setItem({
                ...item,
                isUnmatched: true,
            })
        } catch (e) {
            window.alert('登録に失敗しました');
            return;
        }
    };
    
    const handleAddComparison = async () => {
        try {
            const response = await axios.post('/user_comparisonItems', {
                item_id: id,
            });
            window.alert('コスメ比較へ追加しました');
            setItem({
                ...item,
                isComparison: true,
            })
        } catch (e) {
            window.alert('登録に失敗しました');
            return;
        }
    };

    const handleDeleteFavorite =  async () => {
        try {
            const response = await axios.delete(`/user_favorites/${id}`);
            window.alert('お気に入りから削除しました');
            setItem({
                ...item,
                isFavorite: false,
            })
        } catch (e) {
            window.alert('削除に失敗しました');
            return;
        }
    };

    // TODO: ↓handleDeleteFolder
    const handleDeleteFolder = async (e, folderId) => {
        console.log('handleDeleteFolder');
    //     console.log(folderId);
    //     console.log(folders);
    //     // try {
    //     //     const response = await axios.delete(`/folderItems/${id}`);
    //     //     window.alert('フォルダから削除しました');
    //     //      setItem(item);
    //     // } catch (e) {
    //     //     window.alert('削除に失敗しました');
    //     //     return;
    //     // }
    };

    const handleDeleteUnmatchedItems = async () => {
        try {
            const response = await axios.delete(`/user_unmatchedItems/${id}`);
            window.alert('肌に合わなかったアイテムから削除しました');
            setItem({
                ...item,
                isUnmatched: false,
            })
        } catch (e) {
            window.alert('削除に失敗しました');
            return;
        }
    };

    const handleDeleteComparison = async () => {
        try {
            const response = await axios.delete(`/user_comparisonItems/${id}`);
            window.alert('コスメ比較から削除しました');
            setItem({
                ...item,
                isComparison: false,
            })
        } catch (e) {
            window.alert('削除に失敗しました');
            return;
        }
    };

    const star = () => {
        if (starAverage === null){
            return <CircularProgress color="success" size="15px" />
        }
        return (
            <Box borderColor="transparent">
                <Rating name="read-only" value={starAverage} readOnly />
            </Box>
        );
    };

    const itemInformation = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return (
            <>
            <div className={classes.styleParent}>
                <img src={item.img} alt="itemImg" style={{ maxWidth: '370px', height: '100%', margin: 'auto 30px' }} />
                <div>
                    <p style={{ textAlign: 'left', fontSize: '25px' }}>{item.brand}</p>
                    <p style={{ textAlign: 'left', fontSize: '40px' }}>{item.name}</p>
                    <div className={classes.styleP}>
                        {/* <p className={classes.itemDetail}>評価レビュー</p> */}
                        {star()}
                        <button
                            onClick={() => { navigate(`/reviewPage/${item.id}`) }}
                            className={classes.reviewBtn}
                        >
                            この商品のレビューを見る</button>
                    </div>
                    <div className={classes.styleP}>
                        {/* TODO: ↓rink先Linkじゃなくてもaタグで問題ないか確認する（Linkだと上手く飛ばない） */}
                        <a href={item.link}>公式サイトで購入する</a>
                        {/* <Link component={RouterLink} to={item.link}>公式サイトで購入する</Link> */}
                    </div>
                    <div className={classes.styleP}>
                        <p className={classes.itemDetail}>カテゴリー：</p>
                        <p>{item.category}</p>
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
                        <p style={{ color: 'gray', fontSize: '13px' }}>※実際の価格と異なる場合がございますので、ご購入時は公式サイトをご確認ください。</p>
                    </div>
                    {FavoriteLink(item.isFavorite)}

                    {UnmatchedLink(item.isUnmatched)}

                    {ComparisonLink(item.isComparison)}
                        
                    {MyFolderLink(item.folders)}
                </div>
            </div>
            
            {AttentionLink(item)}

            </>
        );
    };

    const ingredientsInformation = () => {
        if (item === null){
            return <CircularProgress color="success" size="15px" />
        }
        return (
            <>
                {item.ingredients.map((ingredient, index) => (
                    <tbody key={index}>
                        <tr style={{ backgroundColor: '#F5FFFA', fontWeight: 'bold', fontSize: '15px' }} >
                            <td scope="row">{ingredient.name}</td>
                            <td>
                                {(()=>{
                                    if (ingredient.score === 1){return (<img src={Level_1} alt="Level_1_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 2){return (<img src={Level_2} alt="Level_2_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 3){return (<img src={Level_3} alt="Level_3_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 4){return (<img src={Level_4} alt="Level_4_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 5){return (<img src={Level_5} alt="Level_5_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 6){return (<img src={Level_6} alt="Level_6_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 7){return (<img src={Level_7} alt="Level_7_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 8){return (<img src={Level_8} alt="Level_8_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 9){return (<img src={Level_9} alt="Level_9_img" style={{ width: '30px' }} />)}
                                    else if (ingredient.score === 10){return (<img src={Level_10} alt="Level_10_img" style={{ width: '30px' }} />)}
                                    else {return (<p style={{ color: 'gray' }}>不明</p>)}
                                })()}
                            </td>             
                            {(()=>{
                                if (ingredient.safety === '不明'){return (<td style={{ color: 'gray' }}>{ingredient.safety}</td>)}
                                else if (ingredient.safety === '注意' || ingredient.safety === '低'){return (<td style={{ color: 'red' }}>{ingredient.safety}</td>)}
                                else if (ingredient.safety === '中'){return (<td style={{ color: 'orange' }}>{ingredient.safety}</td>)}
                                else {return (<td style={{ color: 'green' }}>{ingredient.safety}</td>)}
                            })()}   
                            <td>{ingredient.purpose}</td>
                            {(()=>{
                                if (ingredient.cancer === -1){return (<td style={{ color: 'gray' }}><p>不明</p></td>)}
                                else {return (<td>{ingredient.cancer}</td>)}
                            })()}
                            {(()=>{
                                if (ingredient.developmental === -1){return (<td style={{ color: 'gray' }}><p>不明</p></td>)}
                                else {return (<td>{ingredient.developmental}</td>)}
                            })()}
                            {(()=>{
                                if (ingredient.allergies === -1){return (<td style={{ color: 'gray' }}><p>不明</p></td>)}
                                else {return (<td>{ingredient.allergies}</td>)}
                            })()}
                            <td>{ingredient.explain}</td>
                        </tr>
                    </tbody>
                ))}
            </>
        );
    };

    let data = [];

    const ChartColors = [
        '#5ac9b4', //green
        '#f5c56b', //yellow
        '#f04b4be7', //red
        '#ababab', //gray
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
        return (
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#5ac9b4' }}>{green}</span>
        );
    };


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
        return (
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#f5c56b' }}>{yellow}</span>
        );
    };

    
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
        return (
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#f04b4be7' }}>{red}</span>
        );
    };

    let gray = 0;
    const scoreGray = () => {
        if (item !== null){
            const count = item.ingredients.map((ingredient) => {
                (()=>{
                    if (ingredient.score === -1){gray++}
                })()
            });
        }
    };


    const rateGreen = () => {
        const calc = Math.round(green / count * 100);
        const add = { index: 0, name: 'Low Hazard', value: calc };
        data.push(add);
    };

    const rateYellow = () => {
        const calc = Math.round(yellow / count * 100);
        const add = { index: 1, name: 'Moderate Hazard', value: calc };
        data.push(add);
    };

    const rateRed = () => {
        const calc = Math.round(red / count * 100);
        const add = { index: 2, name: 'High Hazard', value: calc };
        data.push(add);
    };

    //データないor不明時↓
    const rateGray = () => {
        const calc = Math.round(gray / count * 100);
        const add = { index: 3, name: 'Not Information', value: calc };
        data.push(add);
    };

        
    const explain_green = 'EWG 1~2等級（有害性が低い成分）';
    const explain_yellow = 'EWG 3~6等級（有害性が普通の成分）';
    const explain_red = 'EWG 7~10等級（有害性が高い成分）';
    const explain_score = 'EWG等級（1に近いほど有害性が低い）';
    const explain_safety = '総合的な成分の安全度（ \' 高 \' が最も安全）';
    const explain_risk = '3段階での評価（ \' 1 \' が最も安全）';
    
    return (
        <div className='MainContainer'>
            
            <GoBackBtn />

            {itemInformation()}

            <div className={classes.ewgForm}>
                <p style={{ fontSize: '30px', color: 'green', textShadow: '2px 2px 1px white', margin: '20px auto' }}>EWG安全性</p>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <div>
                            <p style={{ color: 'green', textShadow: '2px 2px 1px white' }}>配合成分合計： {count}種類</p>
                            <Tooltip title={explain_green} followCursor>
                                <div className={classes.styleParent}>
                                    <img src={leaf_green} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                    <div style={{ fontSize: '18px', marginTop: '20px' }}>{scoreGreen()} / {count}</div>
                                </div>
                            </Tooltip>
                            <Tooltip title={explain_yellow} followCursor>
                                <div className={classes.styleParent}>
                                    <img src={leaf_yellow} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                    <div style={{ fontSize: '18px', marginTop: '20px' }}>{scoreYellow()} / {count}</div>
                                </div>
                            </Tooltip>
                            <Tooltip title={explain_red} followCursor>
                                <div className={classes.styleParent}>
                                    <img src={leaf_brown} alt="sampleImg" style={{ width: '80px', marginRight: '30px' }} />
                                    <div style={{ fontSize: '18px', marginTop: '20px' }}>{scoreRed()} / {count}</div>
                                </div>
                            </Tooltip>
                            {scoreGray()}
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
                <table style={{ margin: '0 auto',borderSpacing: '0 5px' }}>
                    <caption style={{ fontSize: '40px', marginBottom: '10px' }}>
                        <img src={green_leaf} alt="" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '0 auto 40px' }} />
                        配合成分詳細
                    </caption>
                    <thead>
                        <tr style={{fontSize: '17px'}}>
                            <th className={classes.tableHeader}>成分名</th>
                            <Tooltip title={explain_score} followCursor><th className={classes.tableHeader}>EWG SCORE</th></Tooltip>
                            <Tooltip title={explain_safety} followCursor><th className={classes.tableHeader}>安全度</th></Tooltip>
                            <th className={classes.tableHeader}>配合目的</th>
                            <Tooltip title={explain_risk} followCursor><th className={classes.tableHeader}>発がん性リスク</th></Tooltip>
                            <Tooltip title={explain_risk} followCursor><th className={classes.tableHeader}>発達/生殖毒性リスク</th></Tooltip>
                            <Tooltip title={explain_risk} followCursor><th className={classes.tableHeader}>免疫毒性リスク</th></Tooltip>
                            <th className={classes.tableHeader}>成分説明</th>
                        </tr>
                    </thead>

                    {ingredientsInformation()}
                </table>
            </div>
        </div>
    );
};

