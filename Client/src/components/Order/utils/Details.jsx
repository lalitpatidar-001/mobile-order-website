import React from 'react'
import { DetailBox, ModelName, Price, Quantity } from './style';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const Details = ({modelName,rom , ram ,price,quantity}) => {

  const convertInNumber = (numberString)=>{
    return parseInt(numberString, 10).toLocaleString('en-IN');
  }
  return (
    <DetailBox>
        <ModelName>{modelName} ({rom}Gb Rom)</ModelName>
        <Price><CurrencyRupeeOutlinedIcon style={{fontSize:14}}/>{convertInNumber(price)}</Price>
        <Quantity>Quantity : {quantity}</Quantity>
    </DetailBox>
  )
}

export default Details