
// export const FixAccount = () => {
//     return(
//         <>
//         <div className='MainContainer'>
//         <img src={header_img} alt="header" style={{width: '100%'}}/>

import React, { useState } from 'react';
import axios from 'axios';
import header_img from '../img/headerYourInformation.jpg';

import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import { RegisterBtn } from './registerBtn';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));


const theme = createTheme();

export const FixAccount = () => {
  const classes = useStyles();
  const [userInformation, setUserInformation] = useState({})
  const navigate = useNavigate();

  const handleUserInformationChange = (event) => {
    setUserInformation({...userInformation, [event.target.name]: event.target.value})
  };

  const onClickRegister = async () => {
    try {
      console.log(userInformation);
      const response = await axios.post('http://localhost/api/register', userInformation);
      console.log(response);
      // TODO: トークンを取得する処理を書く
      navigate("/");
    } catch (e) {
      window.alert('登録に失敗しました');
      console.error(e)
      return;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
  });
        
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
    
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const styleMain = {
    margin: '60px auto 0',
  }


  return (
    <>
    <div className='MainContainer'>
    <div className='Main' style={styleMain}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            
            <Typography component="h1" variant="h5">
              Sign up
            </Typography> */}
            <img src={header_img} alt="header" style={{width: '100%'}}/>


            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">性別</InputLabel>
                  <Select
                  name="gender_id"
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={userInformation.gender_id}
                  label="gender_id"
                  onChange={handleUserInformationChange}
                  sx={{
                    margin: '0 auto',
                    minWidth: '200px',
                  }}
                  >
                  <MenuItem value={1}>女性</MenuItem>
                  <MenuItem value={2}>男性</MenuItem>
                  </Select>
              </FormControl>
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="ニックネーム"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={handleUserInformationChange}
              />

            <form className={classes.container} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="date"
                label="生年月日"
                name="birth_date"
                type="date"
                className={classes.textField}
                autoComplete="date"
                autoFocus
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleUserInformationChange}
              />
            </form>          
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="メールアドレス"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleUserInformationChange}
              />
              <OutlinedInput
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
                type={values.showPassword ? 'text' : 'password'}
                onChange={handleUserInformationChange}
                id="password"
                autoComplete="current-password"
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
    
              />

            <RegisterBtn
              onClick={onClickRegister}
              message='修正する'
            />
            </Box>
          </Box>
    </div>
    </div>
    </>
  );
}