import React, {useState, useEffect} from 'react';
import axios from '../axios';
import { Btn } from '../components/btn';
import header_img from '../img/headerYourInformation.jpg';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';

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
  const [genders, setGenders] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(async () => {
    const responseGenders = await axios.get('/genders')
    const response = await axios.get('/me')
    const g = responseGenders.data
    const u = response.data
    setGenders(g)
    setUser(u)
    console.log(genders)
    console.log(user)
  }, [])

  // const userGender = () => {
  //   if(user === null){
  //       return <CircularProgress color="success" size="15px" />
  //   }
  //   return(
  //     <FormControl>
  //     {/* <InputLabel id="demo-simple-select-helper-label">性別</InputLabel> */}
  //     <p style={{textAlign: 'left', marginTop: '30px'}}>性別</p>
  //     <Select
  //       name="gender_id"
  //       labelId="demo-simple-select-helper-label"
  //       id="demo-simple-select-helper"
  //       value={user.gender_id}
  //       // label="gender_id"
  //       onChange={handleUserInformationChange}
  //       style={{
  //         margin: '0 auto',
  //         minWidth: '200px',
  //       }}
  //     >
  //     {genders.map((gender) => (
  //       <MenuItem value={gender.id}>{gender.name}</MenuItem>
  //     ))}      
  //     </Select>
  //     </FormControl>
  //   )
  // }

  const userName = () => {
    if(user === null){
        return <CircularProgress color="success" size="15px" />
    }
    return(
      <>
      <p style={{textAlign: 'left', marginTop: '30px'}}>ニックネーム</p>
      <TextField
      margin="normal"
      value={user.name}
      required
      fullWidth
      id="name"
      // label="ニックネーム"
      name="name"
      autoComplete="name"
      autoFocus
      onChange={handleUserChange}
      />
      </>
    )
  }
  const userBirthDay = () => {
    if(user === null){
        return <CircularProgress color="success" size="15px" />
    }
    return(
      <form className={classes.container} noValidate>
      <p style={{textAlign: 'left', marginTop: '30px'}}>生年月日</p>
      <TextField
        margin="normal"
        style={{margin: '16px 0 8px 0'}}
        required
        fullWidth
        id="date"
        // label="生年月日"
        name="birth_date"
        value={user.birth_date}
        type="date"
        className={classes.textField}
        autoComplete="date"
        autoFocus
        InputLabelProps={{
            shrink: true,
        }}
        onChange={handleUserChange}
      />
    </form>          
      )
  }
  const userEmail = () => {
    if(user === null){
        return <CircularProgress color="success" size="15px" />
    }
    return(
      <>
      <p style={{textAlign: 'left', marginTop: '30px'}}>メールアドレス</p>
      <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      // label="メールアドレス"
      name="email"
      value={user.email}
      autoComplete="email"
      autoFocus
      onChange={handleUserChange}
      />
      </>
    )
  }
  const userPassword = () => {
    if(user === null){
        return <CircularProgress color="success" size="15px" />
    }
    return(
      <>
      <p style={{textAlign: 'left', marginTop: '30px'}}>パスワード</p>
      <OutlinedInput
      margin="normal"
      style={{margin: '16px 0 20px 0s'}}
      required
      fullWidth
      name="password"
      value={user.password}
      // label="パスワード"
      type={values.showPassword ? 'text' : 'password'}
      onChange={handleUserChange}
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
      </>
    )
  }


  const handleUserChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  };

  const onClickUpdate = async () => {
    try {
      console.log(user);
      const response = await axios.post('/me', user);
      console.log(response);
      window.alert('登録変更しました');
    } catch (e) {
      window.alert('登録に失敗しました');
      console.error(e)
      return;
    }


  }

  // const onClickUpdate = async () => {
  //   try {
  //     const response = await axios.post('/register', user);
  //     console.log(response);
  //     window.alert('登録が完了しました');
  //   } catch (e) {
  //     window.alert('登録に失敗しました');
  //     console.error(e)
  //     return;
  //   }
  // }

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


  return (
    <>
    <div className='MainContainer'>
    <div className='Main'>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <img src={header_img} alt="header" style={{width: '100%'}}/>

          <p style={{paddingTop: '50px'}}>変更が完了いたしましたら、修正するボタンを押してください。</p>
            <Box component="form" noValidate sx={{ mt: 5 }}>
              
              {/* {userGender()} */}
              
              {userName()}

              {userBirthDay()}

              {userEmail()}

              {userPassword()}
              
            <Button 
              variant="contained"
              style={{
                color: 'gray',
                marginRight: '20px', 
                padding: '10px', 
                borderRadius: '5px',
                letterSpacing: '2px',
                background: '#f3f0f0d9',
              }}
              component={RouterLink}
              to="/myPage"
            >
                マイページへ戻る
            </Button>
            <Btn
              onClick={onClickUpdate}
              message='修正する'
            />

            </Box>
          </Box>
    </div>
    </div>
    </>
  );
}