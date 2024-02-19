import React from 'react'
import { Container } from './statusStyle'
import DeliveryDetails from '../../Order/utils/DeliveryDetails'
import { Heading } from '../style'

const Status = ({status,deliveryDate}) => {
  console.log("deliveryDate",deliveryDate)
  return (
    <Container>
        <Heading>Status</Heading>
        <DeliveryDetails  deliveryDate={deliveryDate} status={status} />
    </Container>
  )
}

export default Status