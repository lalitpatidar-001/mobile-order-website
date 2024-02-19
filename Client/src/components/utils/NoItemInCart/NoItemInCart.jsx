import React from 'react'
import { Container, GoToShopButton, Heading, Image, Wrapper } from './style'
import { Link } from 'react-router-dom';
import image from './empty-cart.png'

function NoItemInCart({page}) {
    return (
        <Container>
            <Wrapper>
                <Image src={image} />
                <Heading>{!page==="order" ? "Your cart is empty!":"No Orders Yet!"}</Heading>
                <Link to="/">
                    <GoToShopButton>SHOP NOW</GoToShopButton>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default NoItemInCart