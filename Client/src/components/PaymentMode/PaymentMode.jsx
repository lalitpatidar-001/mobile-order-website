import React, { useState } from 'react'
import { Container, InnerLabel, Input, Label, Wrapper } from './style'
import ATMCard from '../ATMCard/ATMCard';
import CODConfirm from '../CODConfirm/CODConfirm';

function PaymentMode() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");

    const handlePaymentMethodChange = (e) => {
        setSelectedPaymentMethod(e.target.value)
    }
    return (
        <Container>

            <Label htmlFor='upi'> <Input type='radio' name="payment" id="upi"
                value="upi"
                checked={selectedPaymentMethod === 'upi'}
                onChange={handlePaymentMethodChange}
            />UPI
                {selectedPaymentMethod==="upi" && <Wrapper>
                <InnerLabel htmlFor='upi_id'><Input  type='radio' name="upi" id="upi_id" />PhonePe</InnerLabel>
                <InnerLabel><Input  type='radio' name="upi" />Your Upi Id</InnerLabel>
                </Wrapper>}
            </Label>

            <Label htmlFor='net_banking'><Input type='radio' name="payment" id="net_banking"
                value="net_banking"
                checked={selectedPaymentMethod === 'net_banking'}
                onChange={handlePaymentMethodChange}
            />Net Banking
            </Label>


            <Label htmlFor='card'><Input type='radio' name="payment" id="card"
                value="card"
                checked={selectedPaymentMethod === 'card'}
                onChange={handlePaymentMethodChange}
            />Credit/Debit/ATM Card
            {selectedPaymentMethod === "card"&&
                <ATMCard/>
                }
            </Label>

            <Label htmlFor='cash_on_delivery'><Input type='radio' name="payment" id="cash_on_delivery"
                value="cash_on_delivery"
                checked={selectedPaymentMethod === 'cash_on_delivery'}
                onChange={handlePaymentMethodChange}
            />Cash On Delivery
                {
                    selectedPaymentMethod==="cash_on_delivery"&&
                    <CODConfirm/>
                }
            </Label>
        </Container>
    )
}

export default PaymentMode