import React, { useState } from 'react'
import {cartUpdateContext} from '../context/cartUpdateContext';

function CartUpdateProvider({children}) {
    const [isCartItemRemoved ,setIsCartItemRemoved]=useState(false)
    const [isQuantityUpdated ,setIsQuantityUpdated]=useState(false)
    const [isItemAdded ,setIsItemAdded]=useState(false)
  return (
    <>
        <cartUpdateContext.Provider value={{isCartItemRemoved ,setIsCartItemRemoved,isQuantityUpdated ,setIsQuantityUpdated,isItemAdded ,setIsItemAdded}}>
            {children}
        </cartUpdateContext.Provider>
    </>
  )
}

export default CartUpdateProvider