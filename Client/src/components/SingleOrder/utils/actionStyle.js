import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
flex-1
bg-white
py-4 p-2
flex flex-col gap-3

`}`
export const CancelButton = styled.button`${tw`
text-white
font-semibold
p-1
w-fit
shadow-lg
rounded-[2px]
bg-red-600
border-none
cursor-pointer
`}`
export const Help = styled.button`${tw`
text-white
font-semibold
p-1
w-fit
shadow-lg
rounded-[2px]
bg-red-600
border-none
cursor-pointer
`}`