import React, { useContext, useEffect, useState } from 'react'
import { AddressWrapper, Container, Head, Left, Right, DeliveryAddressWrapper, PaymentModeWrapper } from './style'
import PriceDetails from '../../components/PriceDetails.jsx/PriceDetails'
import Navbar from '../../components/Navbar/Navbar'
import AddAddress from '../../components/AddAddress/AddAddress'
import Addresses from '../../components/Addresses/Addresses'
import AddressToggle from '../../components/AddressToggle/AddressToggle'
import axios from 'axios'
import { userContext } from '../../context/userContext'
import PaymentMode from '../../components/PaymentMode/PaymentMode'

function CheckOut() {
  const { isLoggedIn } = useContext(userContext);

  const [isNewAddressToggled, setIsNewAddressToggled] = useState(false);
  const [isAddressAdded, setIsAddressAdded] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0)
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    console.log(selectedAddressIndex)
  }, [selectedAddressIndex])


  const handleNewAddressToggleClick = () => {
    setIsNewAddressToggled(true)
  }
  const handleSelectedAddressIndex = (id) => {
    console.log("clicked")
    setSelectedAddressIndex(id)
  }


  useEffect(() => {
    async function getAllAddress(id) {
      console.log("get addresses called")
      try {
        const response = await axios.get(`http://localhost:5000/api/address/get/${id}`);
        console.log("address ", response)
        if (response.status === 200) {
          setAddresses(response.data.address)
          if (response.data.address.length > 0) {
            setSelectedAddressIndex(response.data.address[0]._id)
          }
        }

      } catch (error) {
        console.log(error)
      }

    }
    getAllAddress(isLoggedIn._id);
  }, [isAddressAdded])


  return (
    <>
      <Navbar />
      <Container>
        <Left>
        {/* delivery address */}
          <DeliveryAddressWrapper>
            <Head>Choose Delivery Address</Head>
            <AddressWrapper>
              {addresses.map((address) => {
                return <Addresses key={address._id} address={address}
                  setSelectedAddressIndex={setSelectedAddressIndex} selectedAddressIndex={selectedAddressIndex} />
              })}
            </AddressWrapper>
            {!isNewAddressToggled &&
              <div onClick={handleNewAddressToggleClick}><AddressToggle
              /></div>
            }
            {isNewAddressToggled && 
            <AddAddress
              isAddressAdded={isAddressAdded} setIsAddressAdded={setIsAddressAdded}
              setSelectedAddressIndex={setSelectedAddressIndex}
              isNewAddressToggled={isNewAddressToggled} setIsNewAddressToggled={setIsNewAddressToggled}
            />}
          </DeliveryAddressWrapper>

        {/* payment mode */}
        <PaymentModeWrapper>
              <Head>Payment Mode</Head>
              <PaymentMode/>
        </PaymentModeWrapper>


        </Left>

        <Right>
          <PriceDetails page="checkout" />
        </Right>
      </Container>
    </>
  )
}

export default CheckOut