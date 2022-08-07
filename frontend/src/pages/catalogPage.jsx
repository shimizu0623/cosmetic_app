import React, {useState, useEffect} from 'react';
import axios from '../axios';
import { GoBackBtn } from '../components/goBackBtn';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import green_leaf from '../img/green_leaf_img_clear.png';

const useStyles = makeStyles({
    img: {
        maxWidth: '300px',
        height: '100%',
        margin: '0 auto',
    },
    grid: {
        gridTemplateColumns: '1, 1fr',
        gap: '1',
    },
});

export const CatalogPage = () => {
    const classes = useStyles();
    const [item, setItem] = useState([]);
    const navigate = useNavigate();

    useEffect(async () => {
        const responseItem = await axios.get('/items', {
            params: {
                // category_id: 1,
                brand_id: 2,
            }
        });
        const i = responseItem.data;
        setItem(i);
    }, []);

    const itemList = () => {
        // TODO: item.lengthが本当に0だった時も↓になるので修正する
        if (item.length === 0){
            return <CircularProgress color="success" size="15px" />
        }
        if (item.length !== 0){
            return (
                <div className='search_results' style={{ margin: '50px' }}>
                    <ImageList style={{ width: '100%', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                        <Grid container spacing={1} direction="row" alignItems="center" className={classes.grid}>
                            {item.map((item, index) => (
                                <Grid item xs={2} key={index} onClick={() => { navigate(`/item/${item.id}`) }}>
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            loading="lazy"
                                            className={classes.img}
                                        />
                                        <ImageListItemBar
                                            title={item.brand}
                                            subtitle={item.name}
                                        />
                                    </ImageListItem>
                                </Grid>
                            ))}
                        </Grid>
                    </ImageList>
                </div>
            );
        }
    };

    return (
        <>
            <div className='MainContainer'>
                <GoBackBtn />

                <div style={{ fontSize: '40px', margin: '40px 0 20px 0' }}>
                    <img src={green_leaf} alt="green_leaf" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '0 auto 40px' }} />
                    〇〇の一覧ページ
                </div>

                {itemList()}

            </div>
        </>
    );
};