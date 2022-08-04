import React, {useState} from 'react';
import axios from '../axios';
import header_img from '../img/headerRequest.jpg';
import { GoBackBtn } from '../components/goBackBtn';
import { Btn } from '../components/btn';
import { useNavigate } from "react-router-dom";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  marker: {
    position: 'relative',
    background: 'linear-gradient(transparent 40%, yellow 40%)',
  },
});

export const RequestPage = () => {
  const [requestForm, setRequestForm] = useState({detail: ''});
  const classes = useStyles();
  const navigate = useNavigate();

  const handleRequestFormChange = (event) => {
    setRequestForm({...requestForm, detail: event.target.value});
  };

  const onClickSend = async () => {
    if(requestForm.detail.replace(/\n|\s/g, '') === ''){
      window.alert('枠内にメッセージのご入力をお願いします。');
      return;
    }
    try {
      const response = await axios.post('/requests', requestForm);
      navigate("/thanks");
    } catch (e) {
      window.alert('送信に失敗しました');
      return;
    }
  }
  
  return (
    <>
      <div className='MainContainer'>
        <GoBackBtn />
        <img src={header_img} alt="header" style={{ width: '100%' }}/>
        <div>
          <div style={{ margin: '40px auto' }}>
            <p>いつもご利用いただき、誠にありがとうございます。</p>
            <p>こちらのページでは、リクエストをお伺いしております。</p>
            <p><span className={classes.marker}>この商品の情報が知りたい！こういう機能が欲しい！</span>等々</p>
            <p>たくさんのご意見、ご要望を心よりお待ちしております。</p>
          </div>
          <div style={{ margin: '40px auto' }}>
            <TextareaAutosize
            value={requestForm.detail}
            aria-label="minimum height"
            minRows={20}
            style={{ width: 400 }}
            onChange={handleRequestFormChange}
            />
          </div>
        </div>
        <Btn 
          onClick={onClickSend} 
          message='リクエストを送信する' 
        />
      </div>
    </>
  );
};