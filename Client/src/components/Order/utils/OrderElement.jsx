import React from 'react'
import { Container, Image, Wrapper } from './style'
import photo from "./phone.png"
import Details from './Details'
import DeliveryDetails from './DeliveryDetails'

const OrderElement = ({mobile,specsId, _id ,quantity, deliveryDate,deliveryAddress,status}) => {

    
    return (
        <Container>
            <Wrapper>
                <Image src={photo} />
                <Details {...mobile} {...specsId} quantity={quantity}/>
            </Wrapper>
            <DeliveryDetails status={status} deliveryDate={deliveryDate} />
        </Container>
    )
}

export default OrderElement