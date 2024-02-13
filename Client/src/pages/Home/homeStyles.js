import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
 flex
 m-0
 p-2
 mt-[50px]
 bg-[#F0F2F5]
 w-[100wh]
 relative
 gap-2
 

`}

`;
export const Wrapper = styled.div`${tw`
flex
w-[100%]
p-2
gap-1
relative
overflow-hidden

`}`;
export const Left = styled.div`${tw`
  flex
  flex-col
//   hidden

  md:block
  md:h-[fit-content]
  p-4
  md:bg-[#ffffff]
  shadow-lg
  md:flex-[2]
  lg:flex-[2]

  absolute
  top-[30px]
  right-[-100%]
  w-[50%]
  md:static
  bg-[lightgray]
  shadow-md
  transition-all
  ease-in-out
  duration-500
`}
`;

export const FilterToggle = styled.div`
${tw`
flex
items-center
absolute
top-[0px]
md:hidden
right-[10px]
h-[30px]
w-[fit-content]
p-[2px]
text-blue-900
bg-[lightgray]
`}`
export const Right = styled.div`${tw`
 flex-[6]
 bg-[#F0F2F5]
`}`;
export const LeftWrapper = styled.div`${tw`
 p-2
`}`;
export const FilterDiv = styled.div`${tw`
 flex
 items-center
 justify-between
`}`;

export const Heading = styled.div`${tw`
font-[500]
text-2xl

p-2
 
`}`;
export const ClearAll = styled.span`${tw`
font-[500]
text-xl
text-blue-800
cursor-pointer
border-[2px]
border-blue-500


 
`}`;

export const SearchInput = styled.input`
${tw`
w-[90%]
outline-none
border-none
p-1 
rounded
shadow-sm
`}
border: 1.3px solid lightgray;
background:transparent

`
export const Input = styled.input`
${tw`
w-[95%]
`}

`

export const PriceRange = styled.div`
${tw`
flex
justify-around
`}`

export const Max = styled.span`
${tw`
    p-[2px]
`}
border: 1px solid lightgray`

export const Min = styled.span`
${tw`
    p-[2px]
    px-1
   
`}
border: 1px solid lightgray;
`

export const SelectDiv = styled.div`
${tw`
flex
flex-col
gap-[5px]
`}`


export const SelectTag = styled.select`
${tw
`
  p-1
  outline-none
  shadow-sm
  rounded
  w-[95%]
`}

border: 1.3px solid lightgray
`
