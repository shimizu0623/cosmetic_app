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
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


export const HeaderTest = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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

//         <ListItem button component={RouterLink} to="/homePage">
//             <ListItemIcon>
//                 <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary='ホームへ戻る' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/itemList">
//             <ListItemIcon>
//                 <SearchIcon />
//             </ListItemIcon>
//             <ListItemText primary='アイテムを探す' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/myPage">
//             <ListItemIcon>
//                 <FavoriteBorderIcon />
//             </ListItemIcon>
//             <ListItemText primary='マイページ' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/myFolder">
//             <ListItemIcon>
//                 <FolderSpecialIcon />
//             </ListItemIcon>
//             <ListItemText primary='マイフォルダ' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/itemComparison">
//             <ListItemIcon>
//                 <EqualizerIcon />
//             </ListItemIcon>
//             <ListItemText primary='コスメ比較' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/ewg">
//             <ListItemIcon>
//                 <ContactSupportIcon />
//             </ListItemIcon>
//             <ListItemText primary='EWGってなに？' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/ranking">
//             <ListItemIcon>
//                 <EmojiEventsIcon />
//             </ListItemIcon>
//             <ListItemText primary='ランキング' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/rashItemList">
//             <ListItemIcon>
//                 <NotInterestedIcon />
//             </ListItemIcon>
//             <ListItemText primary='肌に合わなかったアイテム' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/help">
//             <ListItemIcon>
//                 <HelpOutlineIcon />
//             </ListItemIcon>
//             <ListItemText primary='使い方ヘルプ' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/requestPage">
//             <ListItemIcon>
//                 <MailOutlineIcon />
//             </ListItemIcon>
//             <ListItemText primary='リクエスト' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/fixAccount">
//             <ListItemIcon>
//                 <PortraitIcon />
//             </ListItemIcon>
//             <ListItemText primary='個人情報修正' style={{textAlign: 'center'}}/>
//         </ListItem>
//         <ListItem button component={RouterLink} to="/">
//             <ListItemIcon>
//                 <ExitToAppIcon />
//             </ListItemIcon>
//             <ListItemText primary='ログアウト' style={{textAlign: 'center'}}/>
//         </ListItem>
//     </List>
//     </Box>
//   );

return(
    <>
    <header>
      {/* <img src="" alt="logo" style={{}}/> */}
      <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
            fontSize: '25px', 
            fontFamily: 'bold', 
            padding: '0 40px',
            color: '#455a64', 
          }} 
      >
        <SearchIcon />
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
            // color: '#455a64', 
          }} 
      >
        {/* <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}

      </Menu>


      
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
            fontSize: '25px', 
            fontFamily: 'bold', 
            padding: '0 40px',
            color: '#455a64', 
          }} 
  >
        <HelpOutlineIcon />
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
            // color: '#455a64', 
          }} 
      >
        {/* <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}

      </Menu>



      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
            fontSize: '25px', 
            fontFamily: 'bold', 
            padding: '0 40px',
            color: '#455a64', 
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
        <MenuItem>
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