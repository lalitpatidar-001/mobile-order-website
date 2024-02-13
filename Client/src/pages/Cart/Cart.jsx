import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './style';
import PriceDetails from '../../components/PriceDetails.jsx/PriceDetails';
import CartItems from '../../components/CartItems/CartItems';
import Navbar from '../../components/Navbar/Navbar';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { cartUpdateContext } from '../../context/cartUpdateContext';
import NoItemInCart from '../../components/utils/NoItemInCart/NoItemInCart';
import { cartItemCountContext } from '../../context/cartItemCountContext';

function Cart() {
  const { id } = useParams();
  const [isItemRemoved , setIsItemRemved] =useState(false);
  console.log(id);
  const {setIsCartItemRemoved,isCartItemRemoved} = useContext(cartUpdateContext);
  const {cartItemCount , setCartItemCount} = useContext(cartItemCountContext);

  const [cartItems , setCartItems]= useState([]);

    useEffect(() => {
      async function getAllCartItems(id) {
        try {
          const response = await axios.get(`http://localhost:5000/api/cart/getall/${id}`);
          // console.log(response);
          // console.log(response.data)
          setCartItems(response.data?.cartMobiles);
          setCartItemCount(response.data?.cartMobiles?.length)

        } catch (error) {
          console.log(error)
        }
      };
      getAllCartItems(id);
    }, [isCartItemRemoved]);

  return (
    <>
      <Navbar />
      {
        cartItems.length<=0?
        <NoItemInCart/>
        :
      <Container>
        <PriceDetails />
        <CartItems
         mobiles={cartItems} />
      </Container>
      }
    </>
  )
}

export default Cart