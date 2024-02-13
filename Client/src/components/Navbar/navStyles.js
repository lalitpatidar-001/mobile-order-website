import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
 flex
 w-full
 shadow-lg
 h-[50px]
 fixed
 top-[0px]
 bg-white
 z-50

`}`;
export const Wrapper = styled.div`${tw`
 flex
 justify-between
 w-[100%]
 items-center

`}`;

export const LeftContainer = styled.div`
${tw`
flex
flex-[2]
items-center
gap-[10px]

`}`

export const Logo = styled.div`${tw`
    text-2xl
    ml-2
    font-bold
  
`}`
export const SpanA = styled.span`${tw`
  text-blue-900
`}`
export const SpanB = styled.span`${tw`
text-[#FF5757]
`}`
export const Links = styled.div`
${tw`

`}`
export const InputBox = styled.span`
${tw`
flex
items-center

`}`
export const SearchInput = styled.input`${tw`
p-2
w-[100%]
max-w-[300px]
outline-0
border-none
rounded-[4px]
 
`}`;
export const RightContainer = styled.div`
${tw`
flex
flex-1
justify-end
items-center
gap-2
mr-[10px]

`}`

export const CartBox = styled.div`${tw`
text-blue-800
cursor-pointer

`}`

export const CartIndicator = styled.span`
position: relative;
top:-18px;
font-weight: 600;
right: 5px;
color: white;
background-color: #F97316;
border-radius: 50%;
font-size: 12px;
padding: 1px;
padding-left :4px;
padding-right :4px;

`

export const Button = styled.button`
${tw`
bg-transparent
border-blue-800
text-blue-800
font-bold
cursor-pointer
`}
`

