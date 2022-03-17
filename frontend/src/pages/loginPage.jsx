import React, { useState } from 'react';
import axios from '../axios';
import { Btn } from '../components/btn';
import header_img from '../img/headerLogin.jpg';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Button } from "@material-ui/core";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const theme = createTheme();

export const LoginPage = () => {
  const [inputInformation, setInputInformation] = useState()
  const [userInformation, setUserInformation] = useState({})
  const navigate = useNavigate();

  const onChangeMailAddress = (event) => {
      setInputInformation({...inputInformation, email: event.target.value})
  }


  const onClickLogin = async () =>{
    try {
      console.log(userInformation);
      const loginResponse = await axios.get('/login', {
        email: userInformation.email,
        password: userInformation.password,
      });
      localStorage.setItem('access-token', loginResponse.data.token);
      navigate("/homePage");
    } catch (e) {
      window.alert('ログインに失敗しました');
      console.error(e)
      return;
    }
  }

  const onClickGuestLogin = () => {
    console.log('guest')
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
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setInputInformation({...inputInformation, password:event.target.value})
      };
    
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

      const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" component={RouterLink} to='/'>
          TOP
        </Link>,
        <Typography key="2" color="text.primary">
          Login
        </Typography>,
      ];

  return (
    <div className='Main' style={styleMain}>
    <ThemeProvider theme={theme}>
    <Stack spacing={2} >
            <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className='StyleLink'
            >
            {breadcrumbs}
            </Breadcrumbs>
          </Stack>
      <Grid container component="main" style={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={header_img} alt="header" style={{width: '100%'}}/>

            <Box component="form" noValidate onSubmit={handleSubmit} style={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="メールアドレス"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={onChangeMailAddress}
              />
              <OutlinedInput
                margin="normal"
                required
                fullWidth
                name="password"
                // label="パスワード"
                type={values.showPassword ? 'text' : 'password'}
                onChange={handleChange('password')}
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
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{marginTop: '10px',color: 'white',fontWeight: 'bold',background: 'rgba(141, 203, 193)'}}
                // component={RouterLink}
                // to="/homePage"
                onClick={onClickLogin}
              >
                ログイン
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{marginTop: '10px',color: 'rgba(141, 203, 193)',fontWeight: 'bold',background: 'white'}}
                // component={RouterLink}
                // to="/homePage"
                onClick={onClickGuestLogin}
              >
                ゲストログイン
              </Button>
              {/* <Btn message='ログイン'/>
              <Btn message='ゲストログイン'/> */}
              
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/signUpPage" 
                    variant="body2"
                    style={{color: 'green'}}>
                    {"アカウントをお持ちでない方はこちら"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}


