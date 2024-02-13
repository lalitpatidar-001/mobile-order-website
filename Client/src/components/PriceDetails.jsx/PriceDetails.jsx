import React, { useContext, useEffect, useState } from 'react'
import { Charges, Container, Details, Discount, Heading, Item, ItemName, PlaceOrder, SaveSpan, TotalDiv, TotalPrice, TotalSpan } from './style'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import axios from "axios";
import { userContext } from '../../context/userContext';
import { cartUpdateContext } from '../../context/cartUpdateContext';
import { Link } from 'react-router-dom';


function PriceDetails({page}) {
const {isLoggedIn} = useContext(userContext);
const {isCartItemRemoved,isQuantityUpdated} = useContext(cartUpdateContext);

const [details , setDetails]= useState({});
    useEffect(()=>{
        console.log("callledddd")
           async function getPriceDetails(userId){
                try {
                    const response = await axios.get(`http://localhost:5000/api/cart/details/${userId}`);
                    console.log(response)
                    console.log(response.data.details)
                    const data = response.data;
                    const status = response.status;
                    if(data.msg==="price detail retrieved" && status === 200){
                        setDetails(data.details)
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
    },[isCartItemRemoved,isQuantityUpdated]);

  return (
    <Container>
        <Heading>PRICE DETAILS</Heading>
        <Details>
            <Item >
                <ItemName>Price({details.items})</ItemName>
                <Charges>
                    <CurrencyRupeeOutlinedIcon style={{fontSize:13}}/>
                    {details.price?.toLocaleString('en-IN')}
                </Charges>
            </Item>
            <Item >
                <ItemName >Discount</ItemName>
                <Discount>- 
                    <CurrencyRupeeOutlinedIcon  style={{fontSize:13, marginRight:-2 ,marginLeft:2}}/>
                    {details.discount?.toLocaleString('en-IN')}
                </Discount>
            </Item>
            <Item >
                <ItemName>Delivery Charges</ItemName>
                <Charges>
                    <CurrencyRupeeOutlinedIcon  style={{fontSize:13}}/>
                    49
                </Charges>
            </Item>
        </Details>
        <TotalDiv>
            <TotalSpan>Total Amount</TotalSpan>
            <TotalPrice><CurrencyRupeeOutlinedIcon  style={{fontSize:13}}/>{details.totalAmount?.toLocaleString('en-IN')}</TotalPrice>
        </TotalDiv>
        <SaveSpan>You will save <CurrencyRupeeOutlinedIcon  style={{fontSize:15, marginRight:-3}}/>{(details.price-details.totalAmount).toLocaleString('es-IN')} on this order </SaveSpan>
        <Link to="/checkout/2">
        {page !== "checkout" &&
            <PlaceOrder>PLACE ORDER</PlaceOrder>}
        </Link>
    </Container>
  )
}

export default PriceDetails