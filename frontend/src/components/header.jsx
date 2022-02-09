import React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



export const Header = (props) => {
    const {onClickMenu,onClickSearch} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

  
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    return(
        <>
        <header>
            <div className="header_icon">
                <IconButton
                    // aria-label="account of current user"
                    // aria-controls="icon_bar"
                    // aria-haspopup="true"
                    onClick={handleMenu}
                    >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="icon_bar"
                    anchorEl={anchorEl}
                    // anchorOrigin={{
                        //   vertical: 'top',
                        //   horizontal: 'right',
                        // }}
                        // keepMounted
                        // transformOrigin={{
                            //   vertical: 'top',
                            //   horizontal: 'right',
                            // }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>My Page</MenuItem>
                    <MenuItem onClick={handleClose}>Log out</MenuItem>
                </Menu>
            </div>



            <div className="menu">
                <Button color="success" onClick={onClickMenu}>Menu</Button>

                {/* <span className="material-icons">close</span> */}
            </div>
            {/* <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                    Open Menu
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Cake</MenuItem>
                    <MenuItem onClick={popupState.close}>Death</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState> */}

            
            <div className="header_search">
                    <Button onClick={onClickSearch} variant="outlined" size='small'><SearchIcon />SEARCH...</Button>

                    {/* <span className="material-icons">close</span> */}
                    {/* <input id="searchText" type="text" placeholder="キーワードを入力"/> */}
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