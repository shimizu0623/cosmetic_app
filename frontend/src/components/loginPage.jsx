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
      ログイン
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

      const formStyle = {
          width:'250px',
          marginBottom:'15px',
      }

      const styleLoginForm = {
        margin: '70px auto',

      }


    return(
    <>

    <section className='PageTop'>
      <h1>Login</h1>
      <p>ログイン</p>
    </section>
    
    <Stack spacing={2} >
      <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      className='StyleLink'
      >
      {breadcrumbs}
      </Breadcrumbs>
    </Stack>

    <div className='LoginForm' style={styleLoginForm}>
        <Box>
        <TextField
            style={formStyle}
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
        />
        </Box>
        <FormControl  variant="outlined" style={formStyle}>
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
          style={formStyle}
          variant="outlined"
          to="/sign-in"
        >
          ログイン
        </Button>
        </Box>
        <Box>
        <Button
          style={formStyle}
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

    </div>
    </>
    )
}

