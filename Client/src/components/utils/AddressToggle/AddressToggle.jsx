import React from 'react'
import { Container, Text } from './style.js'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function AddressToggle() {
  return (
    <Container> 
        <AddOutlinedIcon style={{color:"blue" , fontSize:18}}/>
        <Text>Add New Address</Text>
    </Container>
  )
}

export default AddressToggle