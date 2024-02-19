import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
flex
justify-between
w-full
bg-white
`}`;
export const Wrapper = styled.div`${tw`
flex
`}`;


export const Image = styled.img`${tw`
h-40
w-40
`}`;

export const DetailBox = styled.div`${tw`
flex
flex-col
pt-4
gap-2
`}`;

export const ModelName = styled.span`${tw`
text-[18px]
font-semibold
capitalize

`}`;
export const Price = styled.span`${tw`
text-[18px]
font-semibold
`}`;
export const Quantity = styled.span`${tw`
text-[14px]
font-semibold
text-gray-500
`}`;


export const DeliveryDetailBox = styled.div`${tw`
flex
pt-4
pr-4
gap-1
justify-self-end
`}`;
export const DeliveryStatus = styled.span`${tw`
text-[14px]
font-semibold
flex gap-1
`}`;
export const DeliveryDate = styled.span`${tw`
text-[14px]
font-semibold
`}`;
export const Dot = styled.div`${tw`
h-2
w-2
rounded-full
bg-yellow-500
mt-1
`}`;

