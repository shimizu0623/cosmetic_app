import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
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



const theme = createTheme();

export const LoginPage = () => {
  const [inputInformation, setInputInformation] = useState()

  const onChangeMailAddress = (event) => {
      setInputInformation({...inputInformation, email: event.target.value})
  }

  const onClickLogin = () =>{
    console.log(inputInformation)
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
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3}}
                component={RouterLink}
                to="/homePage"
                onClick={onClickLogin}
              >
                ログイン
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 2, mb: 2 }}
                component={RouterLink}
                to="/homePage"
              >
                ゲストログイン
              </Button>

              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/createAccount" 
                    variant="body2">
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

















// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Button } from "@material-ui/core";
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import Link from '@material-ui/core/Link';
// import { Link as RouterLink } from "react-router-dom";



// export const LoginPage = () => {

//     const breadcrumbs = [
//       <Link underline="hover" key="1" color="inherit" component={RouterLink} to='/'>
//         TOP
//       </Link>,
//       <Typography key="2" color="text.primary">
//         Login
//       </Typography>,
//     ];

//     const [values, setValues] = React.useState({
//         amount: '',
//         password: '',
//         weight: '',
//         weightRange: '',
//         showPassword: false,
//       });
    
//       const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//       };
    
//       const handleClickShowPassword = () => {
//         setValues({
//           ...values,
//           showPassword: !values.showPassword,
//         });
//       };
    
//       const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//       };

//       const styleForm = {
//           width:'250px',
//           margin:'10px 0',
//       }

//       const styleLoginForm = {
//         margin: 'auto',
//         flexGrow: '1',
//       }

//       const styleParent = {
//         display: 'flex',
//         justifyContent: 'center',
//       }

//       const styleChild = {
//         flexGrow: '1',
//         maxWidth: '600px',
//       }


//     return(
//     <>
//     <div className='MainContainer' style={styleParent}>
//       <section className='Sidebar' style={styleChild}>
//         <div className='PageTop'>
//           <h1>Login</h1>
//           <p>ログイン</p>
//         </div>
//       </section>
//       <section className='LoginForm' style={styleLoginForm}>
//           <Stack spacing={2} >
//             <Breadcrumbs
//             separator={<NavigateNextIcon fontSize="small" />}
//             aria-label="breadcrumb"
//             className='StyleLink'
//             >
//             {breadcrumbs}
//             </Breadcrumbs>
//           </Stack>
//           <Box>
//           <TextField
//               style={styleForm}
//               helperText="Please enter your email"
//               id="demo-helper-text-aligned"
//               label="Email"
//               />
//           </Box>
//           <FormControl  variant="outlined" style={styleForm}>
//             <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//             <OutlinedInput
//               id="outlined-adornment-password"
//               type={values.showPassword ? 'text' : 'password'}
//               value={values.password}
//               onChange={handleChange('password')}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                     >
//                     {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//               />
//           </FormControl>
//           <Box>
//           <Button
//             style={styleForm}
//             variant="outlined"
//             to="/sign-in"
//             >
//             ログイン
//           </Button>
//           </Box>
//           <Box>
//           <Button
//             style={styleForm}
//             variant="outlined"
//             to="/sign-in"
//             >
//             ゲストログイン
//           </Button>
//           </Box>
//           <Link
//           component="button"
//           variant="body2"
//           component={RouterLink}
//           to="/createAccount">
//           アカウントをお持ちでない方はこちら
//           </Link>
//       </section>
//     </div>
//     </>
//     )
// }

