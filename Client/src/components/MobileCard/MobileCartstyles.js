import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
 flex
 w-full
 
`}`;
export const Wrapper = styled.div`${tw`
 md:flex
 w-full
 mt-[1px]
 bg-[#ffffff]
 shadow-lg
 cursor-pointer
 

`}`;
export const Left = styled.div`${tw`
 md:flex-[2]
 flex
 justify-center
 items-center
 


`}`;
export const Image = styled.img`
${tw`
max-w-full
overflow-hidden
h-[85%]

`}
`

export const ModelandRating = styled.div`
${tw`
    flex 
    items-center
    justify-between
    w-[100%]
    md:items-start
    md:flex-col
`}`
export const Heading = styled.h1`${tw`
 text-xl
 capitalize
`}`;
export const Rating = styled.span`${tw`
flex
items-center
bg-green-500
px-[2px]
rounded
font-semibold
shadow-md
 
`}`;

export const Features = styled.ul`${tw`
m-0
p-4
flex
flex-col
gap-2

`}`;
export const Feature = styled.li`${tw`
text-gray-700
text-[1rem]
capitalize
`}`
export const Middle = styled.div`${tw`
 flex-[3]
 w-[100%]
 flex
 flex-col
 items-start
 justify-center
`}`;
export const Right = styled.div`${tw`
 flex-[1]
 flex
 h-full
 md:flex-col
 md:items-start
 lg:gap-14
 lg:justify-around

`}`;
export const PriceDiv = styled.div`${tw`
flex
md:flex-col
gap-2
md:gap-0
justify-start

`}`;
export const DiscountDiv = styled.div`${tw`
flex
items-center
gap-2

`}`;
export const Price = styled.h2`${tw`
flex
items-center
ml-[-3px]


`}`;
export const OriginalPrice = styled.span`${tw`
    line-through
    text-gray-500
    font-[600]
    flex 
    items-center
`}`;
export const DiscountOff = styled.span`${tw`
    text-green-600
    font-[600]
`}`;
export const AddToCartButton = styled.div`${tw`
md:mb-[15px]
p-2
bg-blue-500
rounded
text-white
border-none
font-semibold
cursor-pointer
shadow-lg

`}`;
export const GoToCartButton = styled.div`${tw`
md:mb-[15px]
p-2
bg-orange-500
rounded
border-none
text-white
font-semibold
cursor-pointer
shadow-lg

`}`;


