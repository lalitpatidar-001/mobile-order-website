import React, { useContext, useState } from 'react'
import { Button, CartBox, CartIndicator, Container, InputBox, LeftContainer, Links, Logo, RightContainer, SearchInput, SpanA, SpanB, Wrapper } from './navStyles'
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { userContext } from '../../context/userContext';

function Navbar() {

    const { isLoggedIn, setIsLoggedIn } = useContext(userContext);
    console.log("isLoggedIn " , isLoggedIn)
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        localStorage.removeItem('local-user');
        setIsLoggedIn((prevLoggedIn) => {
            prevLoggedIn = false;
        });
        navigate("/")
    }


    return (
        <Container>
            <Wrapper>
                <LeftContainer>
                    <Logo><SpanA className='text-[#FF5757 text-bold '>Phone</SpanA><SpanB className='text-blue-500'>Tech</SpanB></Logo>


                </LeftContainer>
                <RightContainer>
                    <Link to={`/cart/${isLoggedIn && isLoggedIn['_id']}`}>
                        <CartBox ><ShoppingCartOutlinedIcon /><CartIndicator >1</CartIndicator></CartBox>
                    </Link>
                    <Button onClick={handleLogoutClick}>Logout</Button>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default Navbar