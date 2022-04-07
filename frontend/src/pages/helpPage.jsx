import React from 'react';
import header_img from '../img/headerHelp.jpg';
import green_leaf from '../img/green_leaf_img.jpg';
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
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
            <Typography>Q.{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>A.{answer}</Typography>
            </AccordionDetails>
            </Accordion>
        )
    }


    return(
        <>
        <div className='MainContainer'>
        <GoBackBtn />
        <img src={header_img} alt="header" style={{width: '100%'}}/>

        <div style={{ margin: '30px auto' }}>
            <p>こちらのページでは、よくあるご質問を確認することができます。</p>
            <p>このページで解決方法が見つからない場合は、<Link component={RouterLink} to="/requestPage">リクエストページ</Link>よりご連絡ください。</p>  
        </div>


        <div className='aboutService'>
            <img src={green_leaf} alt="" style={{ maxWidth: '60px', display: 'inline-block', verticalAlign: 'middle', margin: '10px auto 40px' }} />
            <h1 style={{ fontSize: '30px', display: 'inline-block' }}>サービス内容</h1>

            {helpForm('どのようなサービスですか？', 'あああ')}
            {helpForm('解約の仕方を教えてください', 'あああ')}

        </div>

        <div className='howToUse'>
            <img src={green_leaf} alt="" style={{ maxWidth: '60px', display: 'inline-block', verticalAlign: 'middle', margin: '10px auto 40px' }} />
            <h1 style={{ fontSize: '30px', display: 'inline-block' }}>使い方</h1>

            {helpForm('どのページから商品を探すことができますか？', 'あああ')}
            {helpForm('探している商品が見つかりません', 'あああ')}

        </div>


        </div>
        </>
    )
}
