import React from 'react'
import { RemoveButton } from './style'
import { removeItemFromCart } from '../../CartCard/service'

function Remove({cartId , setRemoveMessage,modelName,removeMessage,isItemRemoved , setIsItemRemved }) {

  const handleRemoveCartClick =()=>{
    removeItemFromCart(cartId , setRemoveMessage,modelName,removeMessage,isItemRemoved , setIsItemRemved );
    // setIsItemRemved((prevIsItemRemoved) => !prevIsItemRemoved, () => {
    //   console.log(removeMessage);
    // });
    
}
  return (
    <RemoveButton onClick={handleRemoveCartClick}>Remove</RemoveButton>
  )
}

export default Remove