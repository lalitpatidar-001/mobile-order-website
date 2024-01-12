import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
flex 
w-full
gap-10
`}`;
export const AddToCartButton = styled.div`${tw`
p-2
px-8
bg-blue-500
border-none
text-white
rounded
text-xl
font-semibold
cursor-pointer
shadow-md
flex
items-center
gap-1
`}`;
export const GoToCartButton = styled.div`${tw`
p-2
px-8
bg-[#F97316]
border-none
text-white
rounded
text-xl
font-semibold
cursor-pointer
shadow-md
flex
items-center
gap-1
`}`;
export const BuyNow = styled.div`${tw`
p-2
px-8
bg-orange-500
border-none
text-white
font-semibold
rounded
text-xl
cursor-pointer
shadow-md
flex
items-center
gap-1
`}`;
