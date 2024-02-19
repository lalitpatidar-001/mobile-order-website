import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
flex flex-col
`}`
export const ButtonContainer = styled.div`${tw`
flex 
px-2
items-center
`}
`
export const InputBox = styled.div`${tw`
flex items-center gap-1 w-[90%]
h-fit
ml-5
`}
border:1px solid gray
`
export const RepliesCount = styled.span`${tw`
text-sm
`}
`
export const ShowReplies = styled.button`${tw`
bg-transparent
text-blue-500
border-none
font-semibold
text-[12px]
`}
`
export const Reply = styled.button`${tw`
bg-transparent
text-blue-500
border-none
font-semibold
text-[12px]
`}
`

export const Input = styled.input`${tw`
outline-none
p-2
py-3
border-none
w-full
rounded
`}`