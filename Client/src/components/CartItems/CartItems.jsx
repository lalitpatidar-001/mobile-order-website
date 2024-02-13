import React from 'react'
import { Container } from './style'
import CartCard from '../CartCard/CartCard'


function CartItems({mobiles,}) {
console.log("mobiles ",mobiles)

  // if(mobiles.length <= 0 ){
  //   return (
  //     <h1>no items yet in cart</h1>
  //   )
  // }
  return (
    <Container>
    {mobiles.map((mobile)=>{
      return <CartCard 
      mobile={mobile}/>
    })}
    </Container>
  )
}

export default CartItems