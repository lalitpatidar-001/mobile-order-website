import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import React, { useContext, useState } from 'react'
import { Container, Input } from './cancelDialogStyle';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {userContext} from "../../../context/userContext.js"

const CancelOrderDialog = ({ cancelOrderDialogOpen, setCancelOrderDialogOpen,_id }) => {
    const[reason ,setReason ] = useState("");
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(userContext)

    const hadleCancelOrder = async()=>{
        try{    
                const response = await axios.put(`http://localhost:5000/api/order/cancel-order/${_id}`);
                console.log(response);
                if(response.status===200){
                    navigate(`/order/${isLoggedIn}`)
                }
        }catch(error){
            console.log(error)
        }
    }

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClose = () => {
        setCancelOrderDialogOpen(false);
    };

    return (
        <Dialog
            open={cancelOrderDialogOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Cancel Order</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <Container>
                        <Input value={reason} onChange={(e)=>setReason(e.target.value)}  type='text' placeholder='write reason' />
                    </Container>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={hadleCancelOrder}>Cancel Order</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CancelOrderDialog