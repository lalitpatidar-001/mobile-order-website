import React, { useEffect, useState } from 'react'
import { AddToCartButton, Discount, DiscountDiv, DiscountOff, Feature, Features, Heading, Image, Left, Middle, ModelandRating, Options, OriginalPrice, Price, PriceDiv, RamSpan, Rating, Right, Wrapper } from './style.js';
import photo from './phone.png'
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { Link } from 'react-router-dom';
import Quantity from '../utils/Quantity/Quantity.jsx';
import Remove from '../utils/Remove/Remove.jsx';
import { removeItemFromCart } from './service.js';

function CartCard({mobile,isItemRemoved , setIsItemRemved}) {
  const [quantity , setQuantity]=useState(mobile.quantity);
  const [message ,setMessage] = useState("");
  const [removeMessage ,setRemoveMessage] = useState("");

const discount = Math.round((1 - (mobile.price / mobile.actualPrice)) * 100);



  return (
    
      <Wrapper>

        <Left>
          <Image src={photo} />
        </Left>
        <Middle>
          <ModelandRating>
            <Link to={`/mobile/${mobile.mobileId}?ram=${encodeURIComponent(mobile.ram)}&rom=${encodeURIComponent(mobile.rom)}`} style={{color:"inherit", textDecoration:"none"}}>
              <Heading>{mobile.modelName}(black color, {mobile.rom})</Heading>
            </Link>
            <RamSpan>{mobile.ram} Gb Ram</RamSpan>
            
          </ModelandRating>
          <PriceDiv>
            <Price><CurrencyRupeeOutlinedIcon style={{ fontSize: 22 }} />{mobile.price}</Price>
            <DiscountDiv>
              <OriginalPrice>
                <CurrencyRupeeOutlinedIcon style={{ fontSize: 14 }} />
                {mobile.actualPrice}</OriginalPrice>
              <DiscountOff> {discount}% off</DiscountOff>
            </DiscountDiv>
          </PriceDiv>
          <Options>
            <Quantity cartId={mobile.cartId} quantity={quantity} setQuantity={setQuantity} setMessage={setMessage}/>
            <Remove 
            setIsItemRemved={setIsItemRemved} isItemRemoved={isItemRemoved}
            cartId={mobile.cartId}  setRemoveMessage={setRemoveMessage} modelName={mobile.modelName} removeMessage={removeMessage} />
          </Options>
        </Middle>
      </Wrapper>
  )
}

export default CartCard