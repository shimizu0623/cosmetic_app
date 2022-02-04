import React from 'react';
import Button from '@mui/material/Button';

export const Header = (props) => {
    const {onClickMenu,onClickSearch} = props;
    return(
        <>
        <header>
            <div className="menu">
                {/* <Button href="#text-buttons" size="large" color="#455a64">Menu</Button> */}

                <a onClick={onClickMenu} className="menuOpen" >Menu</a>
                 {/* <span className="material-icons">close</span> */}
            </div>
            <div className="search">
                <form action="">
                    {/* <Button variant="outlined" color="success">SEARCH</Button> */}
                    <button onClick={onClickSearch}>SEARCH</button>
                    {/* <span className="material-icons">close</span> */}
                    {/* <input id="searchText" type="text" placeholder="キーワードを入力"/> */}


                </form>

            </div>
            {/* <nav>
                <ul>
                    <li><a href="">ホームへ戻る</a></li>
                    <li><a href="">マイページ</a></li>
                    <li><a href="">お気に入り</a></li>
                    <li><a href="">マイフォルダ</a></li>
                    <li><a href="">コスメ比較</a></li>
                    <li><a href="">気になる</a></li>
                    <li><a href="">肌に合わなかった</a></li>
                    <li><a href="">EWGってなに？</a></li>
                    <li><a href="">使い方ヘルプ</a></li>
                    <li><a href="">個人情報修正</a></li>
                    <li><a href="">ログアウト</a></li>
                </ul>
            </nav> */}






        </header>
   
        </>
    )
}