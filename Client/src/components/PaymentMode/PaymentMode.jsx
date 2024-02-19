import React, { useContext, useEffect, useState } from 'react'
import { Container, InnerLabel, Input, Label, Wrapper } from './style'
import CODConfirm from '../CODConfirm/CODConfirm';
import ATMCard from '../utils/ATMCard/ATMCard';
import { orderDetailsContext } from '../../context/orderDetailsContext';
import { userContext } from '../../context/userContext';
import axios from 'axios';
function PaymentMode() {
    const {orderDetails , setOrderDetails} = useContext(orderDetailsContext);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash_on_delivery");
    const {isLoggedIn} = useContext(userContext);
    const [priceDetails , setPriceDetails] = useState({});

    const handlePaymentMethodChange = (e) => {
        setOrderDetails(prev=>({...prev , paymentMode:selectedPaymentMethod}))
        setSelectedPaymentMethod(e.target.value)
    }

    useEffect(()=>{
        async function getPriceDetails(userId){
            try {
                const response = await axios.get(`http://localhost:5000/api/cart/details/${userId}`);
                console.log(response)
                console.log(response.data.details)
                const data = response.data;
                const status = response.status;
                if(data.msg==="price detail retrieved" && status === 200){
                    setPriceDetails(data.details)
                }
            } catch (error) {
                const data = error.response.data;
                const status = error.response.status;
                console.log(error)
                if(status===404 && data.msg==="cart is empty"){
                    console.log(data.msg)
                }
                else{
                    console.log(error)
                }
            }
        };
        getPriceDetails(isLoggedIn._id);
    },[isLoggedIn])

    return (
        <Container>

            <Label htmlFor='upi'> <Input disabled type='radio' name="payment" id="upi"
                value="upi"
                checked={selectedPaymentMethod === 'upi'}
                onChange={handlePaymentMethodChange}
            />UPI
                {selectedPaymentMethod==="upi" && <Wrapper>
                <InnerLabel htmlFor='upi_id'><Input disabled type='radio' name="upi" id="upi_id" />PhonePe</InnerLabel>
                <InnerLabel><Input disabled type='radio' name="upi" />Your Upi Id</InnerLabel>
                </Wrapper>}
            </Label>

            <Label htmlFor='net_banking'><Input disabled type='radio' name="payment" id="net_banking"
                value="net_banking"
                checked={selectedPaymentMethod === 'net_banking'}
                onChange={handlePaymentMethodChange}
            />Net Banking
            </Label>


            <Label htmlFor='card'><Input disabled type='radio' name="payment" id="card"
                value="card"
                checked={selectedPaymentMethod === 'card'}
                onChange={handlePaymentMethodChange}
            />Credit/Debit/ATM Card
            {selectedPaymentMethod === "card"&&
                <ATMCard/>
                }
            </Label>


            <Label htmlFor='cash_on_delivery'><Input type='radio' name="payment" id="cash_on_delivery"
                value="cash_on_delivery"
                checked={selectedPaymentMethod === 'cash_on_delivery'}
                onChange={handlePaymentMethodChange}
            />Cash On Delivery
                {
                    selectedPaymentMethod==="cash_on_delivery"&&
                    <CODConfirm priceDetails={priceDetails}/>
                }
            </Label>
        </Container>
    )
}

export default PaymentMode