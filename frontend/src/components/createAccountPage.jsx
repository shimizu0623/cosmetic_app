import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { RegisterBtn } from './registerBtn';
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
        width: 200,
    },
}));

export const CreateAccount = () => {
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
    const handleChangeEmail = (event) => {
      setUserInformation({...userInformation, email: event.target.value})
    };
    const handleChangeDate = (event) => {
      setUserInformation({...userInformation, date: event.target.value})
    };

    const onClickRegister = () => {
        console.log(userInformation)
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

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setUserInformation({...userInformation, password: event.target.value})
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
          margin:'5px auto',
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
            <h1>Sign up</h1>
            <p>アカウント作成</p>
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

            <FormControl style={styleForm}>
                <InputLabel id="demo-simple-select-helper-label">性別</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={gender}
                label="gender"
                onChange={handleChangeGender}
                >
                <MenuItem value={1}>女性</MenuItem>
                <MenuItem value={2}>男性</MenuItem>
                </Select>
            </FormControl>

            <Box>
            <TextField
                style={styleForm}
                // helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="ニックネーム"
                onClick={handleChangeName}
                />
            </Box>
            <form className={classes.container} noValidate>
            <TextField
                style={styleForm}
                id="date"
                label="生年月日"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                onChange={handleChangeDate}
            />
            </form>          
            <Box>
            <TextField
                style={styleForm}
                // helperText="Please enter your email"
                id="demo-helper-text-aligned"
                label="メールアドレス"
                onChange={handleChangeEmail}
                />
            </Box>
            <FormControl  variant="outlined" style={styleForm}>
                <InputLabel htmlFor="outlined-adornment-password">パスワード</InputLabel>
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
                label="パスワード"
                />
            </FormControl>
        <RegisterBtn
          onClick={onClickRegister}
        />
        </section>
        </div>
        </>
        );
};
