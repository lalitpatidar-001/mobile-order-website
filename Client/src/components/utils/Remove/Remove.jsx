import React, { useContext } from 'react'
import { RemoveButton } from './style'
import { removeItemFromCart } from '../../CartCard/service'
import { cartUpdateContext } from '../../../context/cartUpdateContext'

function Remove({cartId , setRemoveMessage,modelName,removeMessage,isItemRemoved , setIsItemRemved }) {
  const {setIsCartItemRemoved,isCartItemRemoved} = useContext(cartUpdateContext);

  const handleRemoveCartClick =()=>{
    setIsCartItemRemoved(!isCartItemRemoved);
    removeItemFromCart(cartId , setRemoveMessage,modelName,removeMessage,
      setIsCartItemRemoved,isCartItemRemoved
      );
    
}
  return (
    <RemoveButton onClick={handleRemoveCartClick}>Remove</RemoveButton>
  )
}

export default Remove