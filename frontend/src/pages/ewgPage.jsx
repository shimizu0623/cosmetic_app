// MEMO: スタイル調整済
import React, {useState, useEffect} from 'react';
import axios from '../axios';
import { Ewg } from "../components/aboutEwg";
import { GoBackBtn } from '../components/goBackBtn';
import headerAboutEwg from "../img/headerAboutEWG.jpg";
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export const EwgPage = () => {
    const [user, setUser] = useState(null);

    useEffect(async () => {
        const responseUser = await axios.get('/me');
        const u = responseUser.data;
        setUser(u);
    }, []);    

    const headerEwg = () => {
        return (
            <>
                <img 
                src={headerAboutEwg} 
                alt="header_img" 
                />
            </>
        );
    };

    const message = () => {
        if (user === null){
            return <CircularProgress color="success" size="15px" />
        }
        return (
            <p>過去にお肌に合わなかった商品の共通成分がある時は、<br />
            肌に合わない成分という欄にもチェックを入れておくと、{user.name}さんに合ったアイテムを見つけやすくなります。</p>
        );
    };

    return(
        <>
            <div className='MainContainer'>
                <GoBackBtn />
                <Ewg HeaderEwg={headerEwg()} />

                <h2>EWG等級が低いものを探すには？</h2>
                <p>右上にあるMENUボタン → <Link component={RouterLink} to="/itemSearch">アイテムを探す</Link>より検索することができます。</p>
                <p>①画面〇〇にある、EWGランクの低いアイテムという欄にチェックをします</p>
                {/* TODO: 検索画面ページのimgをいれる */}
                {/* <img src="" alt="" /> */}
                <p>②ご希望に合わせて、カテゴリーや肌悩みを選択し、検索ボタンをクリックします。</p>
                {/* <img src="" alt="" /> */}

                {message()}
                
            </div>
        </>
    );
};