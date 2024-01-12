import styled from 'styled-components';
import tw from 'twin.macro';


export const Wrapper = styled.div`${tw`
 md:flex
 w-full
 mt-[1px]
 bg-[#ffffff]
 shadow-lg
 h-[35vh]
`}`;
export const Left = styled.div`${tw`
 md:flex-[1]
 flex
 justify-center
 items-center

`}`;
export const Image = styled.img`
${tw`
max-w-full
overflow-hidden
h-[95%]
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
 text-[18px]
 capitalize 
 transition
 duration-150
`}

&:hover {
    color:blue;
}`;
export const Rating = styled.span`${tw`
flex
items-center
text-sm
bg-green-500
px-[2px]
rounded
font-semibold
shadow-md
 
`}`;


export const Middle = styled.div`${tw`
 flex-[3]
 w-[100%]
 flex
 flex-col
 items-start

`}`;
export const Right = styled.div`${tw`
 

`}`;
export const PriceDiv = styled.div`${tw`
flex
gap-2
md:gap-2
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



export const Options = styled.div`
${`
flex 
flex-col
gap-3
`}`

export const RamSpan = styled.span`
${tw`
-mt-[8px]
text-gray-400
`}` 