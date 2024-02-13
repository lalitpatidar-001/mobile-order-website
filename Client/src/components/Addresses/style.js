import styled from 'styled-components';
import tw from 'twin.macro';


export const Container = styled.div`${tw`
bg-white
flex  flex-col
shadow-sm
cursor-pointer
`}`;


export const Div = styled.div`${tw`
flex justify-between
`}`;
export const Wrapper = styled.div`${tw`
flex 
gap-4 
pt-2
px-2
`}`;

export const Name = styled.span`${tw`
text-[16px]

`}`;
export const Contact = styled.span`${tw`
text-sm
`}`;
export const Pincode = styled.span`${tw`
text-sm
pb-2
px-2
`}`;
export const Address = styled.span`${tw`
px-2

`}`;
export const EditButton = styled.span`${tw`
justify-self-end
px-2
pt-2
text-blue-600
`}`;
export const ChooseAddressButton = styled.span`${tw`
bg-orange-500
p-2
ml-2
mb-1
w-fit
rounded-[2px]
border-none
font-[500]
text-white


`}`;

