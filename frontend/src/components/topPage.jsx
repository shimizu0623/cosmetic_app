import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import trouble_face_img from '../img/trouble_face.jpg';
import thinking_img from '../img/thinking.jpg';
import use_pc_img from '../img/use_pc.jpg';
import smile_img from '../img/smile.jpg';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #00bcd4 30%, #1de9b6 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      height: 60,
      padding: '0 30px',
    },
  });


export const TopPage = (props) => {
    const {webName} = props;
    const classes = useStyles();


    return(
        <>
        <div className="top">
        <div className="topImage"></div>
        <h1 className="topTitle">毎日手にする化粧品<br />
        あなたはどのように選んでいますか？</h1>
        </div>

        <div className="topMain">
                <div className="balloonLeft">
                    <div className='topIconLeft'><img src={trouble_face_img} id='trouble_face_img' alt="trouble_face_img" /></div>
                    <p>綺麗になるための化粧品なのに、肌が荒れちゃった..！</p>
                </div>
                <div className="balloonRight">
                    <div className='topIconRight'><img src={thinking_img} id='thinking_img' alt="thinking_img" /></div>
                    <p>肌に安全なものを使いたいけど..</p>
                    <p>無添加って書いてあるものなら大丈夫かな？</p>
                </div>
                <div className="balloonLeft">
                    <div className='topIconLeft'><img src={use_pc_img} id='use_pc_img' alt="use_pc_img" /></div>
                    <p>成分名を見ても、何なのか分からない..</p>
                    <p>この成分っていったい何のために入っているの？</p>
                </div>
                    <h3>私の肌に合わない成分ってこれだったんだ！</h3>
                    <div className='triangle'></div>
                    <img src={smile_img} id='smile_img' alt="smile_img" />
            <div className=''>
                <p>化粧品や日用品には、化学物質がたくさん使われています。</p>
                <p>{webName}では、どの成分が安全でどれが危険なのか簡単に確認できるように、</p>
                <p><span>化粧品原料の発がん性やアレルギー成分など項目ごとに危険度を表示</span>しています。</p>
            </div>
            <div className='loginBtn' >
                <p>スキンケアをもう一度見直してみませんか？</p>
                <Button className={classes.root}>無料ではじめる</Button>
            </div>
                <p>全ての人が化粧品を安心して購入できるように、<span>EWG</span>に基づいた信頼性の高い役立つ情報を提供します。</p>
        </div>

        {/* 成分ページ完成したら、ここにイメージ写真をいれる */}



        </>
    );
};
