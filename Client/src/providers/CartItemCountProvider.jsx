import React, { useContext, useEffect, useState } from 'react'
import {cartItemCountContext} from '../context/cartItemCountContext'
import { userContext } from '../context/userContext';
import axios from "axios";
function CartItemCountProvider({children}) {
    const [cartItemCount , setCartItemCount]=useState(0);

  return (
    <cartItemCountContext.Provider value={{cartItemCount , setCartItemCount}}>
        {children}
    </cartItemCountContext.Provider>
  )
}

export default CartItemCountProvider;