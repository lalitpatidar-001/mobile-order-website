import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './style';
import PriceDetails from '../../components/PriceDetails.jsx/PriceDetails';
import CartItems from '../../components/CartItems/CartItems';
import Navbar from '../../components/Navbar/Navbar';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Cart() {
  const { id } = useParams();
  const [isItemRemoved , setIsItemRemved] =useState(false);
  console.log(id);

  const [cartItems , setCartItems]= useState([]);

    useEffect(() => {
      async function getAllCartItems(id) {
        try {
          const response = await axios.get(`http://localhost:5000/api/cart/getall/${id}`);
          console.log(response);
          console.log(response.data)
          setCartItems(response.data.cartMobiles);

        } catch (error) {
          console.log(error)
        }
      };
      getAllCartItems(id);
    }, [isItemRemoved]);

  return (
    <>
      <Navbar />
      <Container>
        <PriceDetails />
        <CartItems
        setIsItemRemved={setIsItemRemved} isItemRemoved={isItemRemoved}
         mobiles={cartItems} />
      </Container>
    </>
  )
}

export default Cart