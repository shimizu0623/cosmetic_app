// import React from 'react';

// export const Test = () => {
//     return(
//         <>
//         <div className='MainContainer'>

//          <p>test</p>

//         </div>
//         </>
//     )
// }

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Button } from "@material-ui/core";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
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

export const Test = () => {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');
  const [userInformation, setUserInformation] = useState()


  const handleChangeGender = (event) => {
    setGender(event.target.value);
    setUserInformation({...userInformation, gender: event.target.value})
  };

  const handleChangeName = (event) => {
    setUserInformation({...userInformation, name: event.target.value})
  };

  const onChangeMailAddress = (event) => {
    setUserInformation({...userInformation, email: event.target.value})
  }

  const handleChangeDate = (event) => {
    setUserInformation({...userInformation, date: event.target.value})
  };

  const onClickRegister = () => {
    console.log(userInformation)
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
        setUserInformation({...userInformation, password:event.target.value})
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
        <Link underline="hover" key="2" color="inherit" component={RouterLink} to='/login'>
          Login
        </Link>,
        <Typography key="3" color="text.primary">
          Sign up
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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
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
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">性別</InputLabel>
                  <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={gender}
                  label="gender"
                  onChange={handleChangeGender}
                //   margin="normal"
                //   required
                //   fullWidth
                //   name="gender"
                //   autoComplete="gender"
                //   autoFocus
  
  
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
                onChange={handleChangeName}
              />

            <form className={classes.container} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="date"
                label="生年月日"
                name="date"
                type="date"
                className={classes.textField}
                autoComplete="date"
                autoFocus
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChangeDate}
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
                onChange={onChangeMailAddress}
              />
              <OutlinedInput
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
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

            <RegisterBtn
              onClick={onClickRegister}
            />
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}