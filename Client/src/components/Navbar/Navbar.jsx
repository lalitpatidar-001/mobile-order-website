import React, { useContext, useEffect, useState } from 'react'
import { Button, CartBox, CartIndicator, Container, InputBox, LeftContainer, Links, Logo, RightContainer, SearchInput, SpanA, SpanB, Wrapper } from './navStyles'
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { userContext } from '../../context/userContext';
import { cartItemCountContext } from '../../context/cartItemCountContext';
import axios from 'axios';
import { cartUpdateContext } from '../../context/cartUpdateContext';

function Navbar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(userContext);
    const {cartItemCount , setCartItemCount} = useContext(cartItemCountContext);
    const { isItemAdded  } = useContext(cartUpdateContext);
    console.log("isLoggedIn " , isLoggedIn)
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        localStorage.removeItem('local-user');
        setIsLoggedIn((prevLoggedIn) => {
            prevLoggedIn = false;
        });
        navigate("/")
    }

    
    useEffect(()=>{
        async function getCartCount(userId){
            try{

                const response = await axios.get(`http://localhost:5000/api/cart/count/${userId}`);
                console.log(response)
                console.log(response.data)
                setCartItemCount(response.data.cartCount);
            }catch(error){
                console.log(error);
                
            }
        };
        getCartCount(isLoggedIn._id);
    },[isItemAdded])


    return (
        <Container>
            <Wrapper>
                <LeftContainer>
                   <Link to="/">
                   <Logo><SpanA className='text-[#FF5757 text-bold '>Phone</SpanA><SpanB className='text-blue-500'>Tech</SpanB></Logo>
                   </Link> 


                </LeftContainer>
                <RightContainer>
                    <Link to={`/cart/${isLoggedIn && isLoggedIn['_id']}`}>
                        <CartBox ><ShoppingCartOutlinedIcon />
                        {cartItemCount>0 &&<CartIndicator >{cartItemCount}</CartIndicator>}
                        </CartBox>
                    </Link>
                    <Button onClick={handleLogoutClick}>Logout</Button>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default Navbar