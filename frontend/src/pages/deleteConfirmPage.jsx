import React, {useState} from 'react';
import axios from '../axios';
import { useNavigate } from "react-router-dom";
import { GoBackBtn } from '../components/goBackBtn';
import { Btn } from '../components/btn';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import green_leaf from '../img/green_leaf_img_clear.png';

export const DeleteConfirm = () => {
    const [reason,setReason] = useState(null);
    const navigate = useNavigate();

    const handleAddReason = (event) => {
        setReason({...reason, reason:event.target.value});
        console.log(reason);
    };

    // TODO: 入力日を指定する
    const handleSend = async () => {
        // if (reason === null){
        //     try {
        //         console.log('handleSend');
        //         const response = await axios.post('/leave_reasons', {
        //             reason: '未記入',
        //             leave_date: '2022-01-01',
        //         });
        //         navigate("/delete");
        //     } catch (e) {
        //         window.alert('送信に失敗しました');
        //         console.error(e)
        //         return;
        //     }
        // } else {
            try {
                console.log('handleSend');
                const response = await axios.post('/delete_me', {
                    reason: reason,
                });
                localStorage.removeItem('access-token');
                navigate("/");
            } catch (e) {
                window.alert('送信に失敗しました');
                console.error(e)
                return;
            }
    };

    return(
        <>
        <div className='MainContainer'>

            <GoBackBtn />

            <img src={green_leaf} alt="" style={{ maxWidth: '90px', display: 'inline-block', verticalAlign: 'middle', margin: '0 auto 40px' }} />
            <h1 style={{ fontSize: '40px', display: 'inline-block' }}>退会フォーム</h1>
            <div>
                <p>いつもご利用いただき、ありがとうございます。</p>
                <p>よろしければ、退会の理由をお聞かせください。</p>
                <TextareaAutosize
                aria-label="minimum height"
                minRows={20}
                style={{ width: 400 }}
                onChange={handleAddReason}
                />
            </div>
            <div style={{margin: '30px auto'}}>
                <p>下のボタンより退会手続きを行ってください。</p>
                <p>退会すると、登録データは<span style={{ color: 'red' }}>全て削除</span>されます。</p>
            </div>

            <Btn message='退会する' onClick={handleSend}/>
            
        </div>
        </>
    );
};

