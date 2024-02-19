import React from 'react'
import { CancelButton, Container } from './actionStyle'
import { Heading } from '../style'

const Actions = ({setCancelOrderDialogOpen , status}) => {
  return (
    <Container>
      <Heading>Actions</Heading>
      {status === "Pending" && <CancelButton onClick={()=>setCancelOrderDialogOpen(true)}>Cancel Order</CancelButton>}
    </Container>
  )
}

export default Actions