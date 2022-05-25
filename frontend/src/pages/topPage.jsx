// MEMO: スタイル調整済
import React from 'react';
import { LoginBtn } from '../components/loginBtn';
import { Ewg } from "../components/aboutEwg";
import trouble_face_img from '../img/trouble_face.jpg';
import thinking_img from '../img/thinking.jpg';
import use_pc_img from '../img/use_pc.jpg';
import smile_img from '../img/smile.jpg';
import aboutEwg_img from '../img/Whiteday2020-09.JPG';
import topImage from '../img/cosmetic_background3.jpg';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    aboutEwg: {
        height: '400px',
        margin: '0 auto',
        position: 'relative',
        maxWidth: '1400px',      
    },
    aboutEwgTitle: {
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
    balloonLeft: {
        position: 'relative',
        margin: '10px auto 15px 250px',
        padding: '10px',
        background: '#dee4ace0',
        borderRadius: '30px',
        maxWidth: '450px',
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
        filter: 'blur(4px)',
        objectFit: 'cover',
    },
    topTitle: {
        margin: '0 auto',
        lineHeight: '100px',
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
    img: {
        height: '130px',
        width: 'auto',
        margin: '0 0 20px 0',
    },
    triangle: {
        width: '0',
        height: '0',
        margin: '0 auto',
        border: '20px solid transparent',
        borderTop: '20px solid #87e6d4c9',
    },
    marker: {
        position: 'relative',
        background: 'linear-gradient(transparent 40%, yellow 40%)',
    },
    aboutEwgImg: {
        width: '100%',
        height: '100%',
        margin: '30px auto',
        objectFit: 'cover',
        filter: 'blur(3px)',
        display: 'block',
        background: 'linear-gradient(120deg, #69c2c733, #8dcbc180)',
    },
});


export const TopPage = (props) => {
    const {webName} = props;
    const classes = useStyles();

    const headerEwg = () => {
        return (
            <div className={classes.aboutEwg}>
                <img src={aboutEwg_img} alt="aboutEwg_img" className={classes.aboutEwgImg} />
                <h1 className={classes.aboutEwgTitle}>EWGってなに？</h1>
            </div>
        );
    };

    return(
        <>
        <div className='MainContainer'>
            <div className={classes.top}>
            <img src={topImage} alt="topImage" className={classes.topImage} />
            <h1 className={classes.topTitle}>毎日手にする化粧品<br />
            あなたはどのように選んでいますか？</h1>
            </div>
            
            <div className={classes.topMain}>
                <div className="balloonLeft">
                    <div className={classes.topIconLeft}><img className={classes.img} src={trouble_face_img} alt="trouble_face_img" /></div>
                    <p>綺麗になるための化粧品なのに、肌が荒れちゃった..！</p>
                </div>
                <div className="balloonRight">
                    <div className={classes.topIconRight}><img className={classes.img} src={thinking_img} alt="thinking_img" /></div>
                    <p>肌に安全なものを使いたいけど..</p>
                    <p>無添加って書いてあるものなら大丈夫かな？</p>
                </div>
                <div className="balloonLeft">
                    <div className={classes.topIconLeft}><img className={classes.img} src={use_pc_img} alt="use_pc_img" /></div>
                    <p>成分名を見ても、何なのか分からない..</p>
                    <p>この成分っていったい何のために入っているの？</p>
                </div>
                    <h3>私の肌に合わない成分ってこれだったんだ！</h3>
                    <div className={classes.triangle}></div>
                    <img className={classes.img} src={smile_img} alt="smile_img" />
                <div>
                    <p>化粧品や日用品には、化学物質がたくさん使われています。</p>
                    <p>{webName}では、どの成分が安全でどれが危険なのか簡単に確認できるように、</p>
                    <p><span className={classes.marker}>化粧品原料の発がん性やアレルギー成分など項目ごとに危険度を表示</span>しています。</p>
                </div>
                <div className='LoginMessage'>
                    <p>スキンケアをもう一度見直してみませんか？</p>
                    <LoginBtn />
                </div>
                    <p>全ての人が化粧品を安心して購入できるように、<span className={classes.marker}>EWG</span>に基づいた信頼性の高い役立つ情報を提供します。</p>
            </div>
        </div>

        <Ewg HeaderEwg={headerEwg()} webName={webName} />

        <LoginBtn />

        </>
    );
};
