import React, { useContext, useEffect, useState } from 'react'
import { ButtonAmount, ButtonText, Captcha, CaptchaDiv, CaptchaError, ConfirmButton, Container, Input } from './style';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import { orderDetailsContext } from '../../context/orderDetailsContext';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import axios from 'axios';
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
const CODConfirm = ({ priceDetails }) => {
  const navigate = useNavigate();
  console.log("priceDetails", priceDetails)
  const { orderDetails, setOrderDetails } = useContext(orderDetailsContext);
  const {isLoggedIn} = useContext(userContext)
  console.log("orderDetails",orderDetails)
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("")
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

  useEffect(() => {
    const captcha = generateCaptcha();
    setCaptcha(captcha)
  }, [captchaRefresh]);

  const hadleCaptchaRefersh = () => {
    setCaptchaRefresh(!captchaRefresh)
  };

  const handleConfirmOrder = async() => {
    console.log("userCaptcha", userCaptcha, "captcha", captcha)
    console.log("result", userCaptcha===captcha)
    if (userCaptcha === captcha) {
      try{
          const response = await axios.post(`http://localhost:5000/api/order/place-order`,
          {
            userId:isLoggedIn?._id,
            paymentMode:"COD",
            paymentStatus:false,
            deliveryAddress:orderDetails?.deliveryAddress
          });
          if(response.status === 201){
            console.log("order success" ,response.data.data);
            navigate(`/order/${isLoggedIn?._id}`)
          }
          // setCaptcha("")
      }catch(error){
        setCaptchaRefresh(!captchaRefresh)
        console.log(error);
        // setCaptcha("")
      }

    } else {
      setCaptchaError("captcha not matched");
      setCaptcha("")
      setCaptchaRefresh(!captchaRefresh)
    }
  };



  return (
    <Container>
      <CaptchaError>{captchaError}</CaptchaError>
      <CaptchaDiv>
        <Captcha>{captcha}</Captcha>
        <div style={{ display: "flex", justifyContent: "center", justifyContent: "center" }} onClick={hadleCaptchaRefersh}><LoopOutlinedIcon /></div>
      </CaptchaDiv>

      <Input type='text' placeholder='enter captcha' required onChange={(e) => setUserCaptcha(e.target.value)} />
      <ConfirmButton onClick={handleConfirmOrder}>
        <ButtonText> Confirm Order</ButtonText>
        <ButtonAmount>
          <CurrencyRupeeOutlinedIcon style={{ fontSize: 14 }} />{priceDetails?.totalAmount}
        </ButtonAmount>
      </ConfirmButton>
    </Container>
  )
}

export default CODConfirm