import React from 'react'
import { DeliveryDate, DeliveryDetailBox, DeliveryStatus, Dot } from './style';
import { format } from "date-fns"

const DeliveryDetails = ({  status,deliveryDate }) => {
  let styleObject = {};

  if (status === "Cancelled") {
    styleObject.color = "red";
  }else if(status === "Delivered"){
    styleObject.color = "green";
  }
  let styleObjectDot = {};

  if (status === "Cancelled") {
    styleObjectDot.backgroundColor = "red";
  }else if(status === "Delivered"){
    styleObjectDot.backgroundColor = "green";
  }
  return (
    <>
      <DeliveryDetailBox>
        <DeliveryStatus
          style={styleObject}
        >
        <Dot style={styleObjectDot}/>
          {
            (() => {
              switch (status) {
                case "Pending":
                  return "Will be Deliver on"
                case "Delivered":
                  return "Delivered on"
                case "Cancelled":
                  return "You Cancelled this order"
              }
            })()
          }</DeliveryStatus>
        {status !== "Cancelled" && deliveryDate && <DeliveryDate>{format(deliveryDate, 'MMM dd, yyyy')}</DeliveryDate>}
      </DeliveryDetailBox>
    </>
  )
}

export default DeliveryDetails