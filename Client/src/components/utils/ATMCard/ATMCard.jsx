import React from 'react'
import { Container, Form, InputCvv, InputDate, InputNumber, Label, Option, PaymentButton, Select, Wrapper } from './style'
import { months, years } from '.'

function ATMCard() {
    return (
        <Container>
            <InputNumber type='number' max={16} placeholder='card number' />
            <Wrapper>
                <Form>
                    <Label for="month">Expiry:</Label>
                    <Select id="month" name="month">
                        {months.map((month)=>{
                            return <Option value={month}>{month}</Option>
                        })}
                        
                    </Select>
                    <Select id="year" name="year">
                        {years.map((year)=>{
                            return<Option value={year}>{year}</Option>})
                        }
                    </Select>
                </Form>
                <InputCvv type='number' max={3} placeholder='cvv'/>
            </Wrapper>
            <PaymentButton>Pay</PaymentButton>
        </Container>
    )
}

export default ATMCard