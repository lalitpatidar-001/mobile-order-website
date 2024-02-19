import React, { useContext, useEffect, useState } from 'react'
import { Address, ChooseAddress, Contact, Container, Div, EditButton, Name, Pincode, Wrapper,ChooseAddressButton } from './style'
import { userContext } from '../../context/userContext'
import axios from 'axios';
import { orderDetailsContext } from '../../context/orderDetailsContext';

function Addresses({address,selectedAddressIndex,setSelectedAddressIndex,deliveryAddress,setDeliveryAddress }) {
  const {orderDetails , setOrderDetails} = useContext(orderDetailsContext);
 
  const handleOnClick =(id)=>{
    setSelectedAddressIndex(id)
  }
  const handleAddressChooseButton=(id)=>{
    setOrderDetails(prev=>({...prev , deliveryAddress:id}))
    setDeliveryAddress(id)
    console.log("address chhosed")
  }
  const handleEditAddressClicked =()=>{
    console.log("edit address clicked")
  }
  return (
    <Container onClick={()=>handleOnClick(address?._id)} 
    style={{
      // backgroundColor: selectedAddressIndex === address._id ?"":"" ,
    // border: selectedAddressIndex === address._id ?"1.2px solid orange":""
     }}>
    <Div >
        <Wrapper>
            <Name>{address.name}</Name>
            <Contact>{address.contact}</Contact>
        </Wrapper>
        {selectedAddressIndex === address._id && <EditButton onClick={handleEditAddressClicked}>Edit</EditButton>}
    </Div>
        <Address>{address.area} {address.city}, {address.district}, {address.state}-</Address>
        <Pincode>{address.pincode}</Pincode>
        {selectedAddressIndex === address._id && 
        <ChooseAddressButton style={{ backgroundColor:deliveryAddress === address._id?"#FFB58E":""}}
        onClick={()=>handleAddressChooseButton(address?._id)}>Choose Address</ChooseAddressButton>}
    </Container>
  )
}

export default Addresses