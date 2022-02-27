import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from "@material-ui/core";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";



export const LoginPage = () => {

    const breadcrumbs = [
      <Link underline="hover" key="1" color="inherit" component={RouterLink} to='/'>
        TOP
      </Link>,
      <Typography key="2" color="text.primary">
        Login
      </Typography>,
    ];

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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

      const styleForm = {
          width:'250px',
          margin:'10px 0',
      }

      const styleLoginForm = {
        margin: 'auto',
        flexGrow: '1',
      }

      const styleParent = {
        display: 'flex',
        justifyContent: 'center',
      }

      const styleChild = {
        flexGrow: '1',
        maxWidth: '600px',
      }


    return(
    <>
    <div className='MainContainer' style={styleParent}>
      <section className='Sidebar' style={styleChild}>
        <div className='PageTop'>
          <h1>Login</h1>
          <p>ログイン</p>
        </div>
      </section>
      <section className='LoginForm' style={styleLoginForm}>
          <Stack spacing={2} >
            <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className='StyleLink'
            >
            {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Box>
          <TextField
              style={styleForm}
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              />
          </Box>
          <FormControl  variant="outlined" style={styleForm}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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
              label="Password"
              />
          </FormControl>
          <Box>
          <Button
            style={styleForm}
            variant="outlined"
            to="/sign-in"
            >
            ログイン
          </Button>
          </Box>
          <Box>
          <Button
            style={styleForm}
            variant="outlined"
            to="/sign-in"
            >
            ゲストログイン
          </Button>
          </Box>
          <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
          >
          アカウントをお持ちでない方はこちら
          </Link>
      </section>
    </div>
    </>
    )
}

