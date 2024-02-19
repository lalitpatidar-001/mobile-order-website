import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Wrapper } from './style'
import SigleOrderWrapper from '../../components/SingleOrder/SigleOrderWrapper'
import { useParams } from 'react-router-dom'

const SingleOrder = () => {
    const {orderId} = useParams();
    console.log("orederid ",orderId)
  return (
   
    <>
        <Navbar/>
        <Container>
            <Wrapper>
              <SigleOrderWrapper orderId={orderId}/>
            </Wrapper>
        </Container>
    </>
  )
}

export default SingleOrder