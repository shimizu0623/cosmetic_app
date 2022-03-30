import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link as RouterLink } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';

import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import PortraitIcon from '@material-ui/icons/Portrait';
import SearchIcon from '@material-ui/icons/Search';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';



export const Header = () => {
    const [anchorElSearch, setAnchorElSearch] = React.useState(null);
    const [anchorElHelp, setAnchorElHelp] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
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


return(
    <>
    <header>
      {/* <img src="" alt="logo" style={{}}/> */}
      <div>
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

        <MenuItem component={RouterLink} to="/itemSearch">
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
        <Avatar />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style={{
            marginTop: '45px',      
          }} 
      >
        <MenuItem component={RouterLink} to="/homePage">
          <ListItemIcon>
          <HomeIcon />
          </ListItemIcon>
          ホームへ戻る
        </MenuItem>
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
        <MenuItem component={RouterLink} to="/rashItemList">
          <ListItemIcon>
            <NotInterestedIcon />
          </ListItemIcon>
          肌に合わなかったアイテム
        </MenuItem>
        <MenuItem component={RouterLink} to="/requestPage">
          <ListItemIcon>
            <MailOutlineIcon />
          </ListItemIcon>
          リクエスト
        </MenuItem>
        {/* <MenuItem component={RouterLink} to="/fixAccount">
          <ListItemIcon>
            <PortraitIcon />
          </ListItemIcon>
          個人情報修正
        </MenuItem> */}
        <MenuItem component={RouterLink} to="/">
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </div>

    </header>
    </>
    )
}