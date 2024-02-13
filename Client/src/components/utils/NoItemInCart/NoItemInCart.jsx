import React from 'react'
import { Container, GoToShopButton, Heading, Image, Wrapper } from './style'
import { Link } from 'react-router-dom';
import image from './empty-cart.png'

function NoItemInCart() {
    return (
        <Container>
            <Wrapper>
                <Image src={image} />
                <Heading>your cart is empty!</Heading>
                <Link to="/">
                    <GoToShopButton>SHOP NOW</GoToShopButton>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default NoItemInCart