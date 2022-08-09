import React, {useState, useEffect} from 'react';
import axios from '../axios';
import header_img from '../img/headerRanking.jpg';
import { useNavigate } from "react-router-dom";
import { GoBackBtn } from '../components/goBackBtn';
import { makeStyles } from "@material-ui/core/styles";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CircularProgress from '@mui/material/CircularProgress';
import green_leaf from '../img/green_leaf_img_clear.png';
import rank_1 from '../img/rank_1.jpg';
import rank_2 from '../img/rank_2.jpg';
import rank_3 from '../img/rank_3.jpg';

const useStyles = makeStyles({
    rankingImg: {
        maxWidth: '120px',
    },
    itemImg : {
        maxWidth: '350px',
        cursor: 'pointer',
        // position: 'relative',
        // zIndex: '-2147483647',
    },
    rank : {
        margin: '0 auto',
        display: 'inline-block',
        listStyle: 'none',
    },
});

export const Ranking = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [rankings, setRankings] = useState([]);
    
    useEffect( async() => {
        const responseRanking = await axios.get('/rankings');
        const responseSkinTypes = await axios.get('/skin_types');
        const r = responseRanking.data;
        const t = responseSkinTypes.data;
        const promiseRankingOfSkinType = t.map(async (skinType) => {
            const responseRanking = await axios.get('/rankings', {
                params: {
                    skin_type_id: skinType.id
                }
            });
            return {
                title: skinType.name,
                data: responseRanking.data,
            }
        });
        const rankingOfSkinType = await Promise.all(promiseRankingOfSkinType);
        setRankings([{
            title: '総合',
            data: r,
        }].concat(rankingOfSkinType));
    }, []);

    const rankingTitleForm = (category) => {
        return (
            <div>
                <img src={green_leaf} alt="green_leaf" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '10px auto 40px' }} />
                <h1 style={{ fontSize: '35px', display: 'inline-block' }}>{category}</h1>
            </div>
        );
    };

    const rankingForm = (itemData) => {
        return (
            <>
                <ImageListItem>
                    <li><img src={itemData.img} alt="item_img" className={classes.itemImg} onClick={() => navigate(`/item/${itemData.id}`)}/></li>
                    <ImageListItemBar
                    title={itemData.name}
                    subtitle={`￥${itemData.price.toLocaleString()}`}
                    // style={{
                    //     zIndex: '-2147483647',
                    // }}
                    />
                </ImageListItem>
            </>
        );
    };

    const rankingTotal = (ranking) => {
        const images = [rank_1, rank_2, rank_3];
        if (ranking.data.length === 0){
            return (
                <>
                {rankingTitleForm(ranking.title)}
                <p style={{ margin: '50px 0' }}>ランキングがありません。</p>
                </>
            )
        }
        return (
            <>
                <div>
                    {rankingTitleForm(ranking.title)}
                    {ranking.data.map((d, index) => {
                        return (
                            <ul className={classes.rank}>
                                <li><img src={images[index]} alt={"rank_" + (index + 1)} className={classes.rankingImg}/></li>
                                {rankingForm(d)}
                            </ul>
                        )
                    })}
                </div>
            </>
        );
    };

    return(
        <>
            <div className='MainContainer'>
                <GoBackBtn />
                <img src={header_img} alt="header" style={{ width: '100%' }}/>
                { rankings.length === 0 && <CircularProgress color="success" size="15px" /> }
                { rankings.map(ranking => rankingTotal(ranking)) }
            </div>
        </>
    );
};