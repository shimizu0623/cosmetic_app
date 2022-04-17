import React from 'react';
import EwgLogo from "../img/Ewg-logo.jpeg"
import Level_1 from "../img/level_1.png"
import Level_2 from "../img/level_2.png"
import Level_3 from "../img/level_3.png"
import Level_4 from "../img/level_4.png"
import Level_5 from "../img/level_5.png"
import Level_6 from "../img/level_6.png"
import Level_7 from "../img/level_7.png"
import Level_8 from "../img/level_8.png"
import Level_9 from "../img/level_9.png"
import Level_10 from "../img/level_10.png"
import leaf_green from '../img/leaf_green.png';
import leaf_yellow from '../img/leaf_yellow.png';
import leaf_brown from '../img/leaf_brown.png';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hazard: {
    margin: '20px 10px 0',
  },
  hazardP: {
    display: 'inline-block',
    lineHeight: '70px',
    paddingLeft: '20px',
  },
  img: {
    height: '50px',
    width: 'auto',
    margin: '0',
  },
  ewgLogo: {
    height: '160px',
    width: 'auto',
    margin: '0',
  },
  ewgLevelEmg: {
    height: '90px',
    width: 'auto',
    margin: '10px 0',
  },
  explain: {
    margin: '30px 60px',
    fontSize: '20px',
  },
  marker: {
    position: 'relative',
    background: 'linear-gradient(transparent 40%, yellow 40%)',
  },
});


export const Ewg = (props) => {
    const {webName, HeaderEwg} = props;
    const classes = useStyles();

    return(
        <>
          {HeaderEwg}
          <div className={classes.explain}>
              <img src={EwgLogo} className={classes.ewgLogo} alt="Ewg-logo_img" />

              <p>EWG (Environmental Working Group)とは、</p>
              <p><span className={classes.marker}>「人々の健康を守り、より健康的な環境で生活をおくるための後押しをする」</span>というミッションのもと</p>
              <p>食品やコスメなどの分野において活動を続けている、アメリカの非営利環境市民団体です。</p>
              <p>コスメに関してはEWGの中でSkin Deepと呼ばれる分野において、安全を確認することができます。</p>

              <img src={Level_1} alt="Level_1_img" className={classes.ewgLevelEmg} />
              <img src={Level_2} alt="Level_2_img" className={classes.ewgLevelEmg} />
              <img src={Level_3} alt="Level_3_img" className={classes.ewgLevelEmg} />
              <img src={Level_4} alt="Level_4_img" className={classes.ewgLevelEmg} />
              <img src={Level_5} alt="Level_5_img" className={classes.ewgLevelEmg} />
              <img src={Level_6} alt="Level_6_img" className={classes.ewgLevelEmg} />
              <img src={Level_7} alt="Level_7_img" className={classes.ewgLevelEmg} />
              <img src={Level_8} alt="Level_8_img" className={classes.ewgLevelEmg} />
              <img src={Level_9} alt="Level_9_img" className={classes.ewgLevelEmg} />
              <img src={Level_10} alt="Level_10_img" className={classes.ewgLevelEmg} />


              <p>化粧品原料の有害性の程度を<span className={classes.marker}>1~10のレベル</span>で示してくれているので、</p>
              <p>コスメの安全性を簡単に判断することができるのです。</p>

              <h2>どうやって見ればいいの？</h2>
              <img src={leaf_green} id="leaf_green_img"  alt="leaf_green_img" style={{maxWidth: '80px'}} />
              <img src={leaf_yellow} id="leaf_yellow_img"  alt="leaf_yellow_img" style={{maxWidth: '80px'}} />
              <img src={leaf_brown} id="leaf_brown_img"  alt="leaf_brown_img" style={{maxWidth: '80px'}} />
              <p>EWG等級は、数字が低ければ低いほど有害性の低い安全な成分となっています。</p>
              <p>つまり、<span className={classes.marker}>1が最も安全で、10が最も危険</span>ということをを示しています。</p>
                  <div className={classes.hazard}>
                    <img src={Level_1} alt="Level_1_img" className={classes.img} />
                    <img src={Level_2} alt="Level_2_img" className={classes.img} />
                    <p className={classes.hazardP}>1~2等級 → 有害性が低い成分（緑色）</p>
                  </div>
                  <div className={classes.hazard}>
                    <img src={Level_3} alt="Level_3_img" className={classes.img} />
                    <img src={Level_4} alt="Level_4_img" className={classes.img} />
                    <img src={Level_5} alt="Level_5_img" className={classes.img} />
                    <img src={Level_6} alt="Level_6_img" className={classes.img} />
                    <p className={classes.hazardP}>3~6等級 → 有害性が普通の成分（黄色）</p>
                  </div>
                  <div className={classes.hazard}>
                    <img src={Level_7} alt="Level_7_img" className={classes.img} />
                    <img src={Level_8} alt="Level_8_img" className={classes.img} />
                    <img src={Level_9} alt="Level_9_img" className={classes.img} />
                    <img src={Level_10} alt="Level_10_img" className={classes.img} />
                    <p className={classes.hazardP}>7~10等級 → 有害性が高い成分（赤色）</p>
                  </div>
              <p>「EWG Green等級」は、1~2等級の安全性が高い等級のことです。</p>
              <p>{webName}では、EWG等級を表示し、消費者の皆様がより安心安全に製品を選ぶことができるようにサポート致します。</p>

              <h2>EWG等級が低いものを探すには？</h2>
              <p>右上にあるMENUボタン → <Link component={RouterLink} to="/itemSearch">アイテムを探す</Link>より検索することができます。</p>
              <p>①画面〇〇にある、EWGランクの低いアイテムという欄にチェックをします</p>
              {/* TODO: 検索画面ページのimgをいれる */}
              {/* <img src="" alt="" /> */}
              <p>②ご希望に合わせて、カテゴリーや肌悩みを選択し、検索ボタンをクリックします。</p>
              {/* <img src="" alt="" /> */}
              {/* TODO: ↓名前のところAPIから持ってくる */}
              <p>過去にお肌に合わなかった商品の共通成分がある時は、<br />
                肌に合わない成分という欄にもチェックを入れておくと、〇〇さんに合ったアイテムを見つけやすくなります。</p>
          </div>
        </>
    )
}
