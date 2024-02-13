import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
 flex
 bg-[#F1F3F6]
 min-h-screen
 p-5
`}`;
export const Left = styled.div`${tw`
 flex-[3]
 mt-[46px]
 flex flex-col gap-2
`}`;

// delivery address

export const DeliveryAddressWrapper = styled.div`
${tw`
flex flex-col gap-[4px]
px-4
`}`
export const Head = styled.div`
${tw`
flex 
bg-[#2874F0]
text-white
text-[16px]
font-[600]
p-3
-mb-[2px]
`}`


export const AddressWrapper = styled.div`
${tw`
flex flex-col gap-[4px]
overflow-y-scroll
max-h-[275px]
`}`

// payment mode

export const PaymentModeWrapper = styled.div`
${tw`
flex flex-col 
px-4
`}`

export const Right = styled.div`${tw`
 flex-[1]
 
`}`;

