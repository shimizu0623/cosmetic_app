import React, {useState} from 'react';
import userAtom from '../recoil/user';
import { useRecoilState } from 'recoil';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link as RouterLink } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import logo_img from "../img/CS_logo.png";
import menuIcon from '../img/menuIcon.png';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import SearchIcon from '@material-ui/icons/Search';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Logout from '@mui/icons-material/Logout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerRight: {
    position: 'fixed',
    textAlign: 'right',
    top: '0',
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    background: 'rgba(243, 240, 240, 0.734)',
  },
  headerLeft: {
    position: 'fixed',
    textAlign: 'left',
    top: '0',
    zIndex: '2147483647'
  },
});

export const Header = () => {
  const classes = useStyles();
  const [user, setUser] = useRecoilState(userAtom);
  const [anchorElSearch, setAnchorElSearch] = useState(null);
  const [anchorElHelp, setAnchorElHelp] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const openSearch = Boolean(anchorElSearch);
  const openHelp = Boolean(anchorElHelp);
  const open = Boolean(anchorEl);

  const handleSearchClick = (event) => {
    setAnchorElSearch(event.currentTarget);
  };
  const handleHelpClick = (event) => {
    setAnchorElHelp(event.currentTarget);
  };
  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElSearch(null);
    setAnchorElHelp(null);
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const confirmMessage = 'ログアウトしますか？'
    let result = window.confirm(confirmMessage);
    if (result){
      try {
        localStorage.removeItem('access-token');
        setUser(false);
        navigate("/");
      } catch (e) {
        window.alert('送信に失敗しました');
        return;
      }         
    } else {
      return;
    }    
  };

  return (
    <>
      <header>
        <div className={classes.headerLeft}>
          <Button
            component={RouterLink}
            to="/homePage"
            style={{ 
              padding: '0'
            }}
          >
            <img src={logo_img} alt="logo" style={{ margin: '0 30px', height: '60px' }} />  
          </Button>
        </div>
        <div className={classes.headerRight}>
          <Button
            id="basic-button"
            aria-controls={openSearch ? 'search-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openSearch ? 'true' : undefined}
            onClick={handleSearchClick}
            style={{
              fontSize: '20px', 
              fontFamily: 'bold', 
              padding: '0 15px',
              color: '#455a64',
              letterSpacing: '2px',
              lineHeight: '60px',
            }} 
          >
            <SearchIcon />
            SEARCH
          </Button>
          <Menu
            id="search-menu"
            anchorEl={anchorElSearch}
            open={openSearch}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            style={{
              marginTop: '45px',
            }} 
          >
            <MenuItem component={RouterLink} to="/itemSearch?manual=1">
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              アイテムを探す
            </MenuItem>
            <MenuItem component={RouterLink} to="/ranking">
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              ランキング
            </MenuItem>
          </Menu>
          <Button
            id="basic-button"
            aria-controls={openHelp ? 'help-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openHelp ? 'true' : undefined}
            onClick={handleHelpClick}
            style={{
              fontSize: '20px', 
              fontFamily: 'bold', 
              padding: '0 15px',
              color: '#455a64',
              letterSpacing: '2px',
              lineHeight: '60px',
            }} 
          >
            <HelpOutlineIcon />
            HELP
          </Button>
          <Menu
            id="help-menu"
            anchorEl={anchorElHelp}
            open={openHelp}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            style={{
              marginTop: '45px',      
            }} 
          >
            <MenuItem component={RouterLink} to="/ewgPage">
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              EWGってなに？
            </MenuItem>
            <MenuItem component={RouterLink} to="/helpPage">
              <ListItemIcon>
                <HelpOutlineIcon />
              </ListItemIcon>
              使い方ヘルプ
            </MenuItem>
          </Menu>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleAccountClick}
            style={{
              fontSize: '25px', 
              fontFamily: 'bold', 
              padding: '0 30px 0 15px',
              margin: '0 auto',
              height: '60px',
            }} 
          >
            <img src={menuIcon} alt="logo" style={{ width: '70px' }}/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            style={{ marginTop: '45px' }} 
          >
            <MenuItem component={RouterLink} to="/myPage">
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              マイページ
            </MenuItem>
            <MenuItem component={RouterLink} to="/myFolder">
              <ListItemIcon>
                <FolderSpecialIcon />
              </ListItemIcon>
              マイフォルダ
            </MenuItem>
            <MenuItem component={RouterLink} to="/itemComparison">
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              コスメ比較
            </MenuItem>
            <MenuItem component={RouterLink} to="/unmatchedItem">
              <ListItemIcon>
                <NotInterestedIcon />
              </ListItemIcon>
              肌に合わない
            </MenuItem>
            <MenuItem component={RouterLink} to="/requestPage">
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              リクエスト
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </header>
    </>
  );
};