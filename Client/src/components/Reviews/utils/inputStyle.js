import styled from 'styled-components';
import tw from 'twin.macro';


export const Container = styled.div`${tw`
flex 
items-center
w-[90%]
px-1
rounded
`}
border:1.2px solid gray;
`

export const Input = styled.input`${tw`
outline-none
p-2
py-3
border-none
w-full
rounded
`}`