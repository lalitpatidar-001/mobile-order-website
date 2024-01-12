import React, { useState } from 'react'
import { Button, Container, Number } from './style'

import './style.css'
import { decreaseQuantity, increaseQuantity } from './service';

function Quantity({cartId , quantity , setQuantity,message,setMessage}) {
    const [isLoading , setIsLoading] = useState(false);



   

    const handleIncrement = (num)=>{
            // setQuantity(prevQuantity=> prevQuantity<5? prevQuantity+1 :prevQuantity);
            increaseQuantity(cartId ,quantity , setIsLoading,setQuantity,setMessage,message);
    }
    const handleDecrement =(num)=>{
        decreaseQuantity(cartId ,quantity , setIsLoading,setQuantity,setMessage,message);
    }
  

  return (
    
    <>
        <Container>
            <button  disabled={(quantity<=1 || isLoading) && true} onClick={handleDecrement}>-</button>
                <Number>{quantity}</Number>
            <button disabled={(isLoading)  && true} onClick={handleIncrement}>+</button>
        </Container>
    </>
  )
}

export default Quantity