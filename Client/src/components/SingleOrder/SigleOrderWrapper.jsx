import React, { useEffect, useState } from 'react'
import { Container } from './style'
import Address from './utils/Address'
import Status from './utils/Status'
import Actions from './utils/Actions'
import CancelOrderDialog from './utils/CancelOrderDialog'
import axios from 'axios'

const SigleOrderWrapper = ({orderId}) => {
    const [cancelOrderDialogOpen , setCancelOrderDialogOpen]= useState(false);
    const [order , setOrder] = useState({});

    useEffect(()=>{
        console.log("useEfffect")
        async function getOrder(orderId){
            try{
                const response = await axios.get(`http://localhost:5000/api/order/get-order/${orderId}`)
                console.log("order",response.data.data);
                setOrder(response?.data?.data)
            }catch(error){
                console.log(error)
            }
        };
        getOrder(orderId)
    },[orderId]);
    console.log("orderrrr",order)

    
  return (
    <>

    <Container>
        <Address {...order?.deliveryAddress}/>
        <Status {...order}/>
        <Actions  {...order}  setCancelOrderDialogOpen={setCancelOrderDialogOpen}/>
    </Container>
    {cancelOrderDialogOpen && <CancelOrderDialog 
    {...order}
    cancelOrderDialogOpen={cancelOrderDialogOpen} setCancelOrderDialogOpen={setCancelOrderDialogOpen} />}
    </>
  )
}

export default SigleOrderWrapper