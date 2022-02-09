import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';


import EWGLogo from "../img/EWG-logo.jpeg"
import Level from "../img/level.PNG"
import Hazard from "../img/img_Hazard.PNG"
import LowHazard from "../img/level_LowHazard.PNG"
import ModerateHazard from "../img/level_ModerateHazard.PNG"
import HighHazard from "../img/level_HighHazard.PNG"


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


export const EWG = (props) => {
    const {webName} = props;
    const classes = useStyles();


    return(
        <>
        <div className="aboutEWG">
            <div className="aboutEWGImage"></div>
            <h1 className="aboutEWGTitle"> EWGってなに？</h1>
        </div>
        <div className="explain">
            <img src={EWGLogo} id="EWG-logo_img" alt="EWG-logo_img" />

            <p>EWG (Environmental Working Group)とは、</p>
            <p><span>「人々の健康を守り、より健康的な環境で生活をおくるための後押しをする」</span>というミッションのもと</p>
            <p>食品やコスメなどの分野において活動を続けている、アメリカの非営利環境市民団体です。</p>
            <p>コスメに関してはEWGの中でSkin Deepと呼ばれる分野において、安全を確認することができます。</p>
            <img src={Level} id="EWGlevel_img"  alt="EWGlevel_img" />
            <p>化粧品原料の有害性の程度を<span>1~10のレベル</span>で示してくれているので、</p>
            <p>コスメの安全性を簡単に判断することができるのです。</p>

            <h2>どうやって見ればいいの？</h2>
            <img src={Hazard} id="Hazard_img"  alt="Hazard_img" />
            <p>EWG等級は、数字が低ければ低いほど有害性の低い安全な成分となっています。</p>
            <p>つまり、<span>1が最も安全で、10が最も危険</span>ということをを示しています。</p>
              <div className='level_Hazard'>
                <img src={LowHazard} id="LowHazard_img"  alt="LowHazard_img" />
                <p>1~2等級 → 有害性が低い成分（緑色）</p>
                <img src={ModerateHazard} id="ModerateHazard_img"  alt="ModerateHazard_img" />
                <p>3~6等級 → 有害性が普通の成分（黄色）</p>
                <img src={HighHazard} id="HighHazard_img"  alt="HighHazard_img" />
                <p>7~10等級 → 有害性が高い成分（赤色）</p>
              </div>
            <p>「EWG Green等級」は、1~2等級の安全性が高い等級のことです。</p>
            <p>{webName}では、EWG等級を表示し、消費者の皆様がより安心安全に製品を選ぶことができるようにサポート致します。</p>

            <div className='loginBtn'>
              <Button className={classes.root}>無料ではじめる</Button>
            </div>


      </div>
        
        </>
    )
}
