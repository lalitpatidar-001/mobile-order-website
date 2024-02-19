import React, { useState } from 'react'
import {orderDetailsContext} from "../context/orderDetailsContext"

function OrderDetailsProvider({children}) {
    const [orderDetails , setOrderDetails] = useState({
        deliveryAddress:"",
        paymentMode:"cash_on_delivery",
    })
  return (
    <>
        <orderDetailsContext.Provider value={{orderDetails , setOrderDetails}}>
            {children}
        </orderDetailsContext.Provider>
    </>
  )
}

export default OrderDetailsProvider