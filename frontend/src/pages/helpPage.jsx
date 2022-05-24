// MEMO: スタイル調整済
import React from 'react';
import header_img from '../img/headerHelp.jpg';
import green_leaf from '../img/green_leaf_img_clear.png';
import { GoBackBtn } from '../components/goBackBtn';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const HelpPage = () => {

    const helpForm = (question, answer) => {
        return(
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Q.{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'left' }}>A.{answer}</Typography>
                </AccordionDetails>
            </Accordion>
        );
    };


    return(
        <>
            <div className='MainContainer'>
                <GoBackBtn />
                <img src={header_img} alt="header" style={{ width: '100%' }}/>

                <div style={{ margin: '30px auto' }}>
                    <p>こちらのページでは、よくあるご質問を確認することができます。</p>
                    <p>このページで解決方法が見つからない場合は、<Link component={RouterLink} to="/requestPage">リクエストページ</Link>よりご連絡ください。</p>  
                </div>


                <div className='aboutService'>
                    <img src={green_leaf} alt="green_leaf" style={{ maxWidth: '60px', display: 'inline-block', verticalAlign: 'middle', margin: '10px auto 40px' }} />
                    <h1 style={{ fontSize: '30px', display: 'inline-block' }}>サービス内容</h1>

                    {helpForm('どのようなサービスですか？', 
                    '当サイトはEWG等級を元に、消費者の方が安心して化粧品を選べるサポートができるように作られたサービスです。商品の詳細として全成分を細かく確認できるだけではなく、今まで肌に合わなかった化粧品を登録しておくことで、あなたの肌に合わない可能性のある成分を探すこともできます。美しさと健康を両方叶えるお手伝いができますように。')}
                    
                    {helpForm('EWG等級とは何ですか？', 
                    'EWG等級とは、化粧品成分の有害性の程度を数字で表している等級のことです。数字が低いほど安全な成分となっております。画面右上にある"HELP"→"EWGってなに？"をクリックしていただくと、より詳しくご覧いただけます。')}
                    
                    {helpForm('解約の仕方を教えてください', 
                    'マイページのMENUにある退会ボタンから退会することができます。退会後はデータを戻すことができませんので、ご注意ください。一度サイトを離れる際は退会ではなく画面右上にある"MENU"→"Logout"をご利用ください。')}

                </div>

                <div className='howToUse'>
                    <img src={green_leaf} alt="" style={{ maxWidth: '60px', display: 'inline-block', verticalAlign: 'middle', margin: '10px auto 40px' }} />
                    <h1 style={{ fontSize: '30px', display: 'inline-block' }}>使い方</h1>

                    {helpForm('どのページから商品を探すことができますか？', 
                    '画面右上にある"SEARCH"→"アイテムを探す"をクリックすると検索ページへ移動することができます。')}

                    {helpForm('探している商品が見つかりません', 
                    '検索条件を絞り込まずに検索しても見つからない商品は、現時点ではまだ商品のデータがない場合がございます。画面右上にある"MENU"→"リクエスト"をクリックしていただき、お探しの化粧品をリクエストしていただきますと優先的に更新させていただきますので、よろしければリクエストページをご利用ください。')}

                    {helpForm('商品を購入したいです', 
                    '当サイトでは商品販売を行っていない為、各商品の詳細ページにある"公式サイトで購入する"より、公式サイトにて購入手続きを行ってください')}

                </div>
            </div>
        </>
    );
};
