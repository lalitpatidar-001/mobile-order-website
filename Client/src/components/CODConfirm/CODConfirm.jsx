import React, { useEffect, useState } from 'react'
import { Captcha, CaptchaDiv, CaptchaError, ConfirmButton, Container, Input } from './style';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';

const CODConfirm = () => {
const [captcha , setCaptcha]=useState("");
const [userCaptcha , setUserCaptcha]= useState("");
const [captchaError , setCaptchaError]=useState("")
const [captchaRefresh, setCaptchaRefresh] = useState(false);
    function generateCaptcha() {
        // Generate a random string for the CAPTCHA
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
          captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
      }
    
      useEffect(()=>{
        const captcha = generateCaptcha();
        setCaptcha(captcha)
      },[captchaRefresh]);

      const hadleCaptchaRefersh =()=>{
        setCaptchaRefresh(!captchaRefresh)
      };

      const handleConfirmOrder = ()=>{
        console.log("userCaptcha",userCaptcha ,"captcha",captcha )
        if(userCaptcha === captcha){
            window.alert("captcha matched")
        }else{
                setCaptchaError("captcha not matched");
                setCaptchaRefresh(!captchaRefresh)
        }
      }

  return (
   <Container>
        <CaptchaError>{captchaError}</CaptchaError>
   <CaptchaDiv>
        <Captcha>{captcha}</Captcha>
        <div style={{display:"flex" , justifyContent:"center",justifyContent:"center"}} onClick={hadleCaptchaRefersh}><LoopOutlinedIcon /></div>
   </CaptchaDiv>

    <Input type='text' placeholder='enter captcha' required onChange={(e)=>setUserCaptcha(e.target.value)}/>
    <ConfirmButton onClick={handleConfirmOrder}>Confirm Order</ConfirmButton>
   </Container>
  )
}

export default CODConfirm