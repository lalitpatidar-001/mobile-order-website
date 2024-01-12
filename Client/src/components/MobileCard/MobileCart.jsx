import React, { useContext, useEffect, useState } from 'react'
import { AddToCartButton, Container, Discount, DiscountDiv, DiscountOff, Feature, Features, GoToCartButton, Heading, Image, Left, Middle, ModelandRating, OriginalPrice, Price, PriceDiv, Rating, Right, Wrapper } from './MobileCartstyles'
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { Link } from 'react-router-dom';
import photo from './phone.png'
import { userContext } from '../../context/userContext';
import axios from 'axios'

function MobileCart({mobile}) {
    console.log("mobile in mobilecart ",mobile);

    const { isLoggedIn } = useContext(userContext);
    const [isInCart, setIsInCart] = useState(false);
    const [added , setAdded] = useState(false);
// console.log(isLoggedIn ," in mobile")


const discount = Math.round((1 - (mobile.price / mobile.actualPrice)) * 100);
const displayInch = (mobile.display*0.393701).toFixed(2);

const handleAddToCartClick = (event, mobileId) => {
    event.preventDefault();
    event.stopPropagation();
  addToCart(mobileId); // Call the addToCart function
};
    const addToCart = async (specId) => {
       try {
        const response = await axios.post(`http://localhost:5000/api/cart/add/${isLoggedIn._id}`,{specId});
        console.log(response.data)
        if(response.status ==201){
            setAdded(!added);
        }
       } catch (error) {
        console.log(error);
        
       }
      };


      useEffect(() => {
        async function getCartItem(specId) {
          try {
            const response = await axios.post(`http://localhost:5000/api/cart/get/${isLoggedIn._id}`, { specId });
            setIsInCart(response.data.isInCart)
          } catch (error) {
            if (error.response.status === 404 && error.response.data.msg === "not added to cart") {
              setIsInCart(false);
            }
            else {
              console.log(error)
            }
          }
    
        };
        getCartItem(mobile.specId);
      }, [added])

    return (
      <Link to={`/mobile/${mobile._id}?ram=${encodeURIComponent(mobile.ram)}&rom=${encodeURIComponent(mobile.rom)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Container>

        
            <Wrapper>
                <Left>
                    <Image src={photo} />
                </Left>
                <Middle>
                    <ModelandRating>
                    <Heading>{mobile.modelName}</Heading>
                    <Rating>4.3 <GradeOutlinedIcon /></Rating>
                    </ModelandRating>
                    <Features>
                        <Feature>{mobile.ram} RAM | {mobile.rom} ROM</Feature>
                        <Feature>{mobile.display}cm ({displayInch}inch) Full HD+ Display</Feature>
                        <Feature>{mobile.backCamera}MP back camera | {mobile.frontCamera}MP Front Camera</Feature>
                        <Feature>{mobile.battery} mAH Battery</Feature>
                        <Feature>{mobile.processor} Processor</Feature>
                        <Feature>{mobile.os} Operating System</Feature>
                    </Features>
                </Middle>
                <Right>
                    <PriceDiv>
                        <Price><CurrencyRupeeOutlinedIcon style={{ fontSize: 22 }}/>{mobile.price}</Price>
                        <DiscountDiv>
                            <OriginalPrice>
                            <CurrencyRupeeOutlinedIcon style={{ fontSize: 14 }}/>
                            {mobile.actualPrice}</OriginalPrice>
                            <DiscountOff> {discount}% off</DiscountOff>
                        </DiscountDiv>
                    </PriceDiv>
                    {!isInCart?<AddToCartButton onClick={(event) => handleAddToCartClick(event, mobile.specId)}>ADD TO CART</AddToCartButton>
                    :
                    <Link to={`/cart/${isLoggedIn._id}`}>
                    <GoToCartButton>GO TO CART</GoToCartButton>
                    </Link>
                    }
                </Right>
            </Wrapper>
        </Container>
            </Link>
    )
}

export default MobileCart