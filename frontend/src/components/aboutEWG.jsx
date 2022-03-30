import React from 'react';

import EwgLogo from "../img/Ewg-logo.jpeg"
import Level from "../img/level.PNG"
// import Hazard from "../img/img_Hazard.PNG"
import LowHazard from "../img/level_LowHazard.PNG"
import ModerateHazard from "../img/level_ModerateHazard.PNG"
import HighHazard from "../img/level_HighHazard.PNG"

import leaf_green from '../img/leaf_green.png';
import leaf_yellow from '../img/leaf_yellow.png';
import leaf_brown from '../img/leaf_brown.png';

import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";



export const Ewg = (props) => {
    const {webName, HeaderEwg} = props;

    return(
        <>
        <div className='MainContainer'>
              {HeaderEwg}
          <div className="explain">
              <img src={EwgLogo} id="Ewg-logo_img" alt="Ewg-logo_img" />

              <p>EWG (Environmental Working Group)とは、</p>
              <p><span>「人々の健康を守り、より健康的な環境で生活をおくるための後押しをする」</span>というミッションのもと</p>
              <p>食品やコスメなどの分野において活動を続けている、アメリカの非営利環境市民団体です。</p>
              <p>コスメに関してはEWGの中でSkin Deepと呼ばれる分野において、安全を確認することができます。</p>
              <img src={Level} id="EwgLevel_img"  alt="EwgLevel_img" />
              <p>化粧品原料の有害性の程度を<span>1~10のレベル</span>で示してくれているので、</p>
              <p>コスメの安全性を簡単に判断することができるのです。</p>

              <h2>どうやって見ればいいの？</h2>
              <img src={leaf_green} id="leaf_green_img"  alt="leaf_green_img" style={{maxWidth: '80px'}} />
              <img src={leaf_yellow} id="leaf_yellow_img"  alt="leaf_yellow_img" style={{maxWidth: '80px'}} />
              <img src={leaf_brown} id="leaf_brown_img"  alt="leaf_brown_img" style={{maxWidth: '80px'}} />
              <p>EWG等級は、数字が低ければ低いほど有害性の低い安全な成分となっています。</p>
              <p>つまり、<span>1が最も安全で、10が最も危険</span>ということをを示しています。</p>
                  <div className='level_LowHazard'>
                    <img src={LowHazard} id="LowHazard_img"  alt="LowHazard_img" />
                    <p>1~2等級 → 有害性が低い成分（緑色）</p>
                  </div>
                  <div className='level_ModerateHazard'>
                    <img src={ModerateHazard} id="ModerateHazard_img"  alt="ModerateHazard_img" />
                    <p>3~6等級 → 有害性が普通の成分（黄色）</p>
                  </div>
                  <div className='level_HighHazard'>
                    <img src={HighHazard} id="HighHazard_img"  alt="HighHazard_img" />
                    <p>7~10等級 → 有害性が高い成分（赤色）</p>
                  </div>
              <p>「EWG Green等級」は、1~2等級の安全性が高い等級のことです。</p>
              <p>{webName}では、EWG等級を表示し、消費者の皆様がより安心安全に製品を選ぶことができるようにサポート致します。</p>

              <h2>EWG等級が低いものを探すには？</h2>
              <p>右上にあるMENUボタン → <Link component={RouterLink} to="/itemSearch">アイテムを探す</Link>より検索することができます。</p>
              <p>①画面〇〇にある、EWGランクの低いアイテムという欄にチェックをします</p>
              {/* <img src="" alt="" /> */}
              <p>②ご希望に合わせて、カテゴリーや肌悩みを選択し、検索ボタンをクリックします。</p>
              {/* <img src="" alt="" /> */}
              <p>過去にお肌に合わなかった商品の共通成分がある時は、<br />
                肌に合わない成分という欄にもチェックを入れておくと、〇〇さんに合ったアイテムを見つけやすくなります。</p>
          </div>
        </div>
        </>
    )
}
