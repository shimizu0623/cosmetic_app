import React from 'react';
import { LoginBtn } from '../components/loginBtn';
import { Ewg } from "../components/aboutEWG";

import trouble_face_img from '../img/trouble_face.jpg';
import thinking_img from '../img/thinking.jpg';
import use_pc_img from '../img/use_pc.jpg';
import smile_img from '../img/smile.jpg';
import aboutEWG_img from '../img/Whiteday2020-09.JPG';
import topImage from '../img/cosmetic_background3.jpg';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    aboutEWG: {
        height: '400px',
        margin: '0 auto',
        position: 'relative',
        maxWidth: '1400px',      
    },
    aboutEWGImage: {
        width: '100%',
        height: '100%',
        margin: '30px auto 0',
        objectFit: 'cover',
        filter: 'blur(3px)',
        // background: linear-gradient(
        //     120deg,
        //     rgba(105, 194, 199, 0.2),
        //     rgba(141, 203, 193, 0.5)
        //   ),
    },
    aboutEWGTitle: {
        fontSize: '50px',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '2px 0 5px rgb(74, 86, 58)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',      
    },
    topMain: {
        maxWidth: '1400px',
        margin: '50px auto 0',
    },
    topMainP: {
        margin: '0',
        padding: '0',
    },
    balloonLeft: {
        position: 'relative',
        margin: '10px auto 15px 250px',
        padding: '10px',
        background: '#dee4ace0',
        borderRadius: '30px',
        maxWidth: '450px',
    },
      
    balloonLeft: {
        '&::before': {
        content: '""',
        position: 'absolute',
        left: '-38px',
        width: '13px',
        height: '12px',
        bottom: '0',
        background: '#dee4aca5',
        borderRadius: '50%',
        },
    },
      
    balloonLeft: {
        '&::after': {
        content: '""',
        position: 'absolute',
        left: '-24px',
        width: '20px',
        height: '18px',
        bottom: '3px',
        background: '#dee4aca5',
        borderRadius: '50%',
        },
    },
      
    balloonRight: {
        position: 'relative',
        margin: '10px 250px 15px auto',
        padding: '10px',
        background: '#bee7bcef',
        borderRadius: '30px',
        maxWidth: '450px',
    },
      
    balloonRight: {
        '&::before': {
        content: '""',
        position: 'absolute',
        right: '-38px',
        width: '13px',
        height: '12px',
        bottom: '0',
        background: '#bee7bca5',
        borderRadius: '50%',
        },
    },
      
    balloonRight: {
        '&::after': {
        content: '""',
        position: 'absolute',
        right: '-24px',
        width: '20px',
        height: '18px',
        bottom: '3px',
        background: '#bee7bca5',
        borderRadius: '50%',
        },
    },
    top: {
        height: '400px',
        margin: '0 auto',
        position: 'relative',
        maxWidth: '1400px',      
    },
    topIconRight: {
        position: 'absolute',
        right: '-200px',
        top: '20px',
    },
    topIconLeft: {
        position: 'absolute',
        left: '-200px',
        top: '20px',
    },
    topImage: {
        width: '100%',
        height: '420px',
        margin: 'auto 0',
        // background: 'url("./img/cosmetic_background3.jpg")',
        filter: 'blur(4px)',
        objectFit: 'cover',
    },
    topTitle: {
        margin: '0 auto',
        lineHeight: '100px',
        // maxWidth: '1000px',
        width: '800px', 
        fontSize: '50px',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '2px 0 5px rgb(74, 86, 58)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',      
    },
    trouble_face_img: {
        height: '130px',
        width: 'auto',
        margin: '0 0 20px 0',
    },
    thinking_img: {
        height: '130px',
        width: 'auto',
        margin: '0 0 20px 0',
    },
    use_pc_img: {
        height: '130px',
        width: 'auto',
        margin: '0 0 20px 0',
    },
    smile_img: {
        height: '130px',
        width: 'auto',
        margin: '0 0 20px 0',
    },
})


export const TopPage = (props) => {
    const {webName} = props;
    const classes = useStyles();

    const headerEwg = () => {
        return (
            <>
                <div className={classes.aboutEWG}>
                <img src={aboutEWG_img} alt="aboutEWG_img" className={classes.aboutEWGImage} />
                <h1 className={classes.aboutEWGTitle}>EWGってなに？</h1>
                </div>
            </>
        )
    }

    return(
        <>
        <div className='MainContainer'>
            <div className={classes.top}>
            <img src={topImage} alt="topImage" className={classes.topImage} />
            {/* <div className={classes.topImage}></div> */}
            <h1 className={classes.topTitle}>毎日手にする化粧品<br />
            あなたはどのように選んでいますか？</h1>
            </div>
            
            <div className={classes.topMain}>
                    <div className={classes.balloonLeft}>
                        <div className={classes.topIconLeft}><img className={classes.trouble_face_img} src={trouble_face_img} alt="trouble_face_img" /></div>
                        <p className={classes.topMainP}>綺麗になるための化粧品なのに、肌が荒れちゃった..！</p>
                    </div>
                    <div className={classes.balloonRight}>
                        <div className={classes.topIconRight}><img className={classes.thinking_img} src={thinking_img} alt="thinking_img" /></div>
                        <p className={classes.topMainP}>肌に安全なものを使いたいけど..</p>
                        <p className={classes.topMainP}>無添加って書いてあるものなら大丈夫かな？</p>
                    </div>
                    <div className={classes.balloonLeft}>
                        <div className={classes.topIconLeft}><img className={classes.use_pc_img} src={use_pc_img} alt="use_pc_img" /></div>
                        <p className={classes.topMainP}>成分名を見ても、何なのか分からない..</p>
                        <p className={classes.topMainP}>この成分っていったい何のために入っているの？</p>
                    </div>
                        <h3>私の肌に合わない成分ってこれだったんだ！</h3>
                        <div className={classes.Triangle}></div>
                        <img className={classes.smile_img} src={smile_img} alt="smile_img" />
                <div>
                    <p className={classes.topMainP}>化粧品や日用品には、化学物質がたくさん使われています。</p>
                    <p className={classes.topMainP}>{webName}では、どの成分が安全でどれが危険なのか簡単に確認できるように、</p>
                    <p className={classes.topMainP}><span>化粧品原料の発がん性やアレルギー成分など項目ごとに危険度を表示</span>しています。</p>
                </div>
                <div className='LoginMessage'>
                    <p className={classes.topMainP}>スキンケアをもう一度見直してみませんか？</p>
                    <LoginBtn />
                </div>
                    <p className={classes.topMainP}>全ての人が化粧品を安心して購入できるように、<span>EWG</span>に基づいた信頼性の高い役立つ情報を提供します。</p>
            </div>
        </div>


        <Ewg HeaderEwg={headerEwg()} />

        <LoginBtn />

        </>
    );
};
