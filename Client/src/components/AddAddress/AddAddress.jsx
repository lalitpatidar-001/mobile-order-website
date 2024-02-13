import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonWrapper, CancelButton, Form, Input, InputGroup } from './style'
import { userContext } from '../../context/userContext';
import axios from 'axios'


function AddAddress({ isNewAddressToggled , setIsNewAddressToggled ,isAddressAdded , setIsAddressAdded }) {
    const { isLoggedIn } = useContext(userContext);
    const initialValue = {
        name: "",
        contact: "",
        city: "",
        district: "",
        state: "",
        area: "",
        pincode: "",
    }



    const [address, setAddress] = useState(initialValue);
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAddress(prevAdd => ({ ...prevAdd, [name]: value }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(address)
        try {
            const response = await axios.post(`http://localhost:5000/api/address/add/${isLoggedIn._id}`,address);
            console.log(response)
            if(response.status === 201 ){
                console.log("address added");
                setIsNewAddressToggled(false)
                setIsAddressAdded(!isAddressAdded);
                setAddress(initialValue);
            }
        } catch (error) {
            console.log(error)
        }
}


    
    

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Input name='name' onChange={handleOnChange} type='text' placeholder='name' value={address.name} />
                <Input name='contact' onChange={handleOnChange} type='number' placeholder='contact' value={address.contact} />
            </InputGroup>
            <InputGroup>
                <Input name='city' onChange={handleOnChange} type='text' placeholder='city' value={address.city} />
                <Input name='district' onChange={handleOnChange} type='text' placeholder='district' value={address.district} />
            </InputGroup>
            <InputGroup>
                <Input name='area' onChange={handleOnChange} type='text' placeholder='area' value={address.area} />
                <Input name='state' onChange={handleOnChange} type='text' placeholder='state' value={address.state} />
            </InputGroup>
            <InputGroup>
            <Input name='pincode' onChange={handleOnChange} type='text' placeholder='pincode' value={address.pincode} />
            </InputGroup>
            <ButtonWrapper>
                <Button type='submit'>Add Address</Button>
                <CancelButton onClick={() => setIsNewAddressToggled(false)} >Cancel</CancelButton>
            </ButtonWrapper>
        </Form>
    )
}

export default AddAddress