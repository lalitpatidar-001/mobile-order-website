import styled from 'styled-components';
import tw from 'twin.macro';


export const Container = styled.div`${tw`
p-2
pl-8
lg:w-[200px]
flex
flex-col
gap-2
`}`;
export const Wrapper = styled.div`${tw`
flex  gap-2
`}`;
export const Form = styled.form`${tw`
flex gap-1 
items-center
`}`;
export const Select = styled.select`${tw`
outline-none
p-1
`}`;
export const Option = styled.option`${tw`
outline-none
cursor-pointer
p-1
`}`;
export const Label = styled.label`${tw`
text-[14px]
text-gray-500
`}`;
export const InputNumber = styled.input`${tw`
p-2
outline-none
`}`;
export const InputDate = styled.input`${tw`
`}`;
export const InputCvv = styled.input`${tw`
w-[50px]
outline-none
p-2
`}`;
export const PaymentButton = styled.button`${tw`
p-3
px-8
w-fit
bg-orange-500
outline-none
border-none
text-white
font-semibold
rounded-[2px]

`}`;