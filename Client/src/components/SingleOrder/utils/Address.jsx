import React from 'react'
import { AddressInfo, Contact, Container, Name } from './addressStyle'
import { Heading } from '../style'

const Address = ({name,area,city,district,pincode,state,contact}) => {
  return (
    <Container>
    <Heading>Delivery Address</Heading>
      <Name>{name}</Name>
      <AddressInfo>{area},
      {city}, {district} - {pincode}, {state}</AddressInfo>
      <Contact>{contact}</Contact>
    </Container>
  )
}

export default Address