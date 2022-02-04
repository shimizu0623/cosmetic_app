import React from 'react';
import '../img/EWGlevel.PNG';

export const EWG = (props) => {
    const {webName} = props;

    return(
        <>
        <div className="aboutEWG">
            <div className="image"></div>
            <h1 className="title"> EWGってなに？</h1>
        </div>
        <div className="explain">
            <p>EWG (Environmental Working Group)とは、</p>
            <p>「人々の健康を守り、より健康的な環境で生活をおくるための後押しをする」というミッションのもと</p>
            <p>食品やコスメなどの分野において活動を続けている、アメリカの非営利環境市民団体です。</p>
              <br />
            <p>コスメに関してはEWGの中でSkin Deepと呼ばれる分野において、安全を確認することができます。</p>
            <img src="../img/EWGlevel.PNG" alt="" />
            <p>化粧品原料の有害性の程度を1~10のレベルで示してくれているので、</p>
            <p>コスメの安全性を簡単に判断することができるのです。</p>
            <p>{webName}では、EWG等級を表示し、消費者の皆様がより安心安全に製品を選ぶことができるようにサポート致します。</p>

            <h2>どうやって見ればいいの？</h2>
            <p>EWG等級は、数字が低ければ低いほど有害性の低い安全な成分となっています。</p>
            <p>つまり、1が最も安全で、10が最も危険ということをを示しています。</p>
              <br />
              <p>1~2等級 → 有害性が低い成分（緑色）</p>
              <p>3~6等級 → 有害性が普通の成分（黄色）</p>
              <p>7~10等級 → 有害性が高い成分（赤色）</p>
              <br />
            <p>「EWG Green等級」は、1~2等級の安全性が高い等級のことです。</p>

            <h2></h2>

      </div>
        
        </>
    )
}
