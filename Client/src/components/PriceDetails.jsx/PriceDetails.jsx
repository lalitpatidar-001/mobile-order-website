import React from 'react'
import { Charges, Container, Details, Heading, Item, ItemName, PlaceOrder, SaveSpan, TotalDiv, TotalPrice, TotalSpan } from './style'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined'
function PriceDetails() {
  return (
    <Container>
        <Heading>PRICE DETAILS</Heading>
        <Details>
            <Item >
                <ItemName>Price(2)</ItemName>
                <Charges>
                    <CurrencyRupeeOutlinedIcon style={{fontSize:13}}/>
                    14000
                </Charges>
            </Item>
            <Item >
                <ItemName>Discount</ItemName>
                <Charges>-
                    <CurrencyRupeeOutlinedIcon  style={{fontSize:13}}/>
                    2000
                </Charges>
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
            <TotalPrice><CurrencyRupeeOutlinedIcon  style={{fontSize:13}}/>12048</TotalPrice>
        </TotalDiv>
        <SaveSpan>You will save <CurrencyRupeeOutlinedIcon  style={{fontSize:15, marginRight:-3}}/>2,019 on this order </SaveSpan>
        <PlaceOrder>PLACE ORDER</PlaceOrder>
    </Container>
  )
}

export default PriceDetails