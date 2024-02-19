import React, { useContext, useEffect, useState } from 'react'
import { Container, Wrapper } from './style'
import OrderElement from './utils/OrderElement'
import { userContext } from '../../context/userContext'
import axios from 'axios'
import NoItemInCart from '../utils/NoItemInCart/NoItemInCart'
import { Link } from 'react-router-dom'


const Orders = () => {
  const { isLoggedIn } = useContext(userContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getAllOrders(userId) {
      const response = await axios.get(`http://localhost:5000/api/order/all-orders/${userId}`);
      console.log(response.data.data);
      setOrders(response.data.data)
    }
    if (isLoggedIn) getAllOrders(isLoggedIn?._id);
  }, [isLoggedIn])
  return (
    <Container>
      <Wrapper>
        {
          orders.length === 0 ?
            <>
              <NoItemInCart page="order" />
            </>
            :
            <>
              {orders?.map((order) => (
                <>
                  <Link to={`/single-order/${order?._id}`} style={{textDecoration:"none" ,color:"inherit"}}>
                    <OrderElement  {...order} />
                  </Link>
                </>
              ))}
            </>




        }
      </Wrapper>
    </Container>
  )
}

export default Orders