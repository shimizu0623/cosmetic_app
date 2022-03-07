import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const DeleteConfirm = () => {
    return(
        <>
        <div className='MainContainer'>
            <h1>退会フォーム</h1>
            <div>
                <p>いつもご利用いただき、ありがとうございます。</p>
                <p>よろしければ、退会の理由をお聞かせください。</p>
                <TextareaAutosize
                aria-label="minimum height"
                minRows={20}
                // placeholder=""
                style={{ width: 400 }}
                />
            </div>
            <div style={{marginTop: '50px'}}>
                <p>退会すると、登録データが全て削除されます。</p>
                <p>よろしければ、下のボタンより退会手続きを行ってください。</p>
                <Button 
                    variant="contained"
                    sx={{
                        marginTop: "20px",
                    }}
                    component={RouterLink}
                    to="/delete">
                退会する
                </Button>
            </div>
        </div>
        </>
    )
}