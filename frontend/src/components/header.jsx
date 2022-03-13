import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link as RouterLink } from "react-router-dom";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ClearIcon from '@mui/icons-material/Clear';

import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import PortraitIcon from '@material-ui/icons/Portrait';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EqualizerIcon from '@material-ui/icons/Equalizer';



export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onClickMenu = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
        {/* <ListItem button>
          <ClearIcon />
        </ListItem> */}
        <ListItem button component={RouterLink} to="/homePage">
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='ホームへ戻る' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/itemList">
            <ListItemIcon>
                <SearchIcon />
            </ListItemIcon>
            <ListItemText primary='アイテムを探す' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/myPage">
            <ListItemIcon>
                <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary='マイページ' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/myFolder">
            <ListItemIcon>
                <FolderSpecialIcon />
            </ListItemIcon>
            <ListItemText primary='マイフォルダ' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/itemComparison">
            <ListItemIcon>
                <EqualizerIcon />
            </ListItemIcon>
            <ListItemText primary='コスメ比較' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/ewg">
            <ListItemIcon>
                <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary='EWGってなに？' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/ranking">
            <ListItemIcon>
                <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary='ランキング' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/rashItemList">
            <ListItemIcon>
                <NotInterestedIcon />
            </ListItemIcon>
            <ListItemText primary='肌に合わなかったアイテム' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/help">
            <ListItemIcon>
                <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary='使い方ヘルプ' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/requestPage">
            <ListItemIcon>
                <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary='リクエスト' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/fixAccount">
            <ListItemIcon>
                <PortraitIcon />
            </ListItemIcon>
            <ListItemText primary='個人情報修正' style={{textAlign: 'center'}}/>
        </ListItem>
        <ListItem button component={RouterLink} to="/">
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary='ログアウト' style={{textAlign: 'center'}}/>
        </ListItem>
    </List>
    </Box>
  );

return(
    <>
    <header>

      <div>
        {['menu'].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className="menu">
            <Button 
              color="success" 
              style={{
                fontSize: '30px', 
                fontFamily: 'bold', 
                padding: '0 50px',
                color: '#455a64', 
              }} 
              onClick={toggleDrawer(anchor, true)}
            >
              {anchor}
            </Button>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {onClickMenu(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>


    </header>
    </>
    )
}