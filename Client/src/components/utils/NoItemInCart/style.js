import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
${tw`
 flex
 w-full
 h-[100vh]
 items-center
 justify-center
 bg-[#F1F3F6]
`}
`
export const Wrapper = styled.div`
${tw`
flex
w-[40vw]
h-[50vh]
shadow-lg
rounded
bg-white
items-center
flex-col
justify-center
gap-2
p-5
`}`

export const Image = styled.img`
${tw`
w-[200px]
h-[200px]
`}
`

export const Heading = styled.div`
${tw`
text-xl
font-semibold
capitalize
`}
`
export const GoToShopButton = styled.div`${tw`
p-2
px-8
w-fit
h-fit
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