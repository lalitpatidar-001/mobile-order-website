import React, { useContext, useState } from 'react'
import { Button, Container, Number } from './style'

import './style.css'
import { decreaseQuantity, increaseQuantity } from './service';
import { cartUpdateContext } from '../../../context/cartUpdateContext';

function Quantity({cartId , quantity , setQuantity,message,setMessage}) {
    const [isLoading , setIsLoading] = useState(false);
    const {isQuantityUpdated ,setIsQuantityUpdated} = useContext(cartUpdateContext);



   

    const handleIncrement = (num)=>{
            // setQuantity(prevQuantity=> prevQuantity<5? prevQuantity+1 :prevQuantity);
            increaseQuantity(cartId ,quantity , setIsLoading,setQuantity,setMessage,message,isQuantityUpdated ,setIsQuantityUpdated);
    }
    const handleDecrement =(num)=>{
        decreaseQuantity(cartId ,quantity , setIsLoading,setQuantity,setMessage,message,isQuantityUpdated ,setIsQuantityUpdated);
    }
  

  return (
    
    <>
        <Container>
            <button className='btn' disabled={(quantity<=1 || isLoading) && true} onClick={handleDecrement}>-</button>
                <Number>{quantity}</Number>
            <button className='btn' disabled={(isLoading)  && true} onClick={handleIncrement}>+</button>
        </Container>
    </>
  )
}

export default Quantity