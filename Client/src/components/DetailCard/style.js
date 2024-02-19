import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
${tw`
  flex 
  flex-col
  w-full

`
    }`

export const Container = styled.div`${tw`
 w-full
 flex
  bg-[#dddddd]
  mt-1
`}`;

export const Left = styled.div`${tw`
 w-full
 flex-[5]
 p-4
 bg-white
 flex 
 flex-col
 gap-4
`}`;
export const ModelName = styled.div`${tw`
    text-xl
    capitalize
    font-[500]

`}`;
export const Rating = styled.div`${tw`
items-center
bg-green-500
w-fit
flex
px-[2px]
rounded
font-[600]
`}`;
export const PriceDiv = styled.div`${tw`
flex
gap-2
items-center
`}`;
export const Price = styled.div`${tw`
flex
items-center
text-2xl
font-[600]
`}`;
export const OriginalPrice = styled.div`${tw`
 line-through
    text-gray-500
    font-[600]
`}

`;
export const Discount = styled.div`${tw`
text-green-600
font-[600]
`}`;

export const Features = styled.ul`${tw`
m-0
p-4
flex
flex-col
gap-3

`}`;
export const Feature = styled.li`${tw`
text-gray-700
text-[1rem]
capitalize
`}`

export const AddToCartButton = styled.div`${tw`

p-2
bg-blue-500
rounded
border-none
font-semibold
cursor-pointer
shadow-lg

`}`;


export const Right = styled.div`${tw`
 w-full
 flex-1
 h-[calc(100vh-55px)]
 flex
 flex-col
 p-4
 pt-5
 bg-white
`}`;

export const Heading = styled.span`
${tw`
    text-gray-500
    font-[500]
    mb-[2px]
`}`

export const Rams = styled.div`
${tw`
flex
flex-col
items-center
gap-4
mb-4
`}`
export const Hr = styled.hr`
${tw`

`}`
export const Storages = styled.div`
${tw`
flex
flex-col
items-center
gap-4
`}`

export const OptionBox = styled.div`
${tw`
flex 
items-center 
justify-center
border-[2px]
border-gray-400
w-[70px]
h-[40px]
cursor-pointer
rounded
text-[18px]
font-[500]
capitalize
`}

`


export const Error = styled.span`
${tw`
text-2xl
text-red-500
font-[500]

absolute
top-[100px]
right-[110px]
`}`